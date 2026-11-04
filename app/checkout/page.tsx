
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  ArrowLeft,
  LockKeyhole,
  Tag,
  UserRound,
  Mail,
  Phone,
  CheckCircle2,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { useApp } from "@/lib/store";
import { totals } from "@/components/CartDrawer";

import {
  inr,
  lineOf,
  applyCoupon,
} from "@/lib/data";

import Logo from "@/components/Logo";

import { useCreatePayment } from "@/services/payment/payment.hooks";

import type {
  CreatePaymentPayload,
} from "@/services/payment/payment.api";

export default function Checkout() {
  const router = useRouter();

  const {
    cart,
    user,
    ready,
    checkoutItems,
    checkoutSource,
    setLoginOpen,
  } = useApp();

  const createPayment = useCreatePayment();

  const [routeSource, setRouteSource] = useState<
    "cart" | "buyNow" | null
  >(null);

  const [couponCode, setCouponCode] = useState("");
  const [coupon, setCoupon] = useState<any>(null);

  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  /* ==========================================
     CUSTOMER DETAILS
  ========================================== */

  const customerName =
    user?.name ||
    user?.fullName ||
    [
      user?.firstName,
      user?.lastName,
    ].filter(Boolean).join(" ") ||
    "Customer";

  const customerEmail =
    user?.email ||
    user?.emailAddress ||
    user?.profile?.email ||
    "";

  const customerPhone =
    user?.phone ||
    user?.mobile ||
    user?.phoneNumber ||
    user?.mobileNumber ||
    user?.customerPhone ||
    user?.contactNumber ||
    user?.profile?.phone ||
    user?.profile?.mobile ||
    user?.data?.phone ||
    "";

  /* ==========================================
     RESTORE CHECKOUT
  ========================================== */

  useEffect(() => {
    if (!ready) return;

    const params = new URLSearchParams(
      window.location.search
    );

    const source = params.get("source");

    if (source === "buyNow" || source === "cart") {
      setRouteSource(source);
    } else {
      setRouteSource(checkoutSource || "cart");
    }
  }, [ready, checkoutSource]);

  /* ==========================================
     LOGIN CHECK
  ========================================== */

  useEffect(() => {
    if (ready && !user) {
      setLoginOpen(true);
    }
  }, [ready, user, setLoginOpen]);

  /* ==========================================
     CHECKOUT LOADING
  ========================================== */

  if (!ready || routeSource === null) {
    return (
      <main className="min-h-screen bg-[#F7F9FC]">
        <div className="mx-auto max-w-6xl space-y-6 px-5 py-10">
          <div className="h-10 w-52 animate-pulse rounded-xl bg-slate-200" />
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="h-64 animate-pulse rounded-2xl bg-slate-200" />
            <div className="h-80 animate-pulse rounded-2xl bg-slate-200" />
          </div>
        </div>
      </main>
    );
  }

  /* ==========================================
     CART DATA
  ========================================== */

  const items =
    routeSource === "buyNow"
      ? checkoutItems
      : cart;

  const summary = totals(items);

  const subtotal = summary.sub;
  const discount = summary.disc;

  const couponDiscount = coupon?.ok
    ? coupon.amount
    : 0;

  const total = Math.max(
    0,
    subtotal - discount - couponDiscount
  );

  /* ==========================================
     APPLY COUPON
  ========================================== */

  const handleApplyCoupon = () => {
    const result = applyCoupon(
      couponCode,
      subtotal - discount
    );

    setCoupon(result);
  };

  /* ==========================================
     CREATE PAYMENT ORDER
  ========================================== */

  const handlePayment = async () => {
    if (!user) {
      setLoginOpen(true);
      return;
    }

    if (processing || createPayment.isPending) {
      return;
    }

    setError("");

    if (!items.length) {
      setError("Your checkout is empty.");
      return;
    }

    if (items.length !== 1) {
      setError(
        "Please checkout with one gift card at a time."
      );
      return;
    }

    const item = items[0];

    const giftCardId =
      item.giftCardId || item.id;

    if (
      !giftCardId ||
      !item.title ||
      !item.amount ||
      !item.qty
    ) {
      setError(
        "Gift card details are incomplete. Please add the product again."
      );
      return;
    }

    if (total <= 0) {
      setError("Invalid payment amount.");
      return;
    }

    setProcessing(true);

    try {
      /* DEVICE DETAILS */

      let deviceId = localStorage.getItem(
        "safalseva_device_id"
      );

      if (!deviceId) {
        deviceId =
          window.crypto?.randomUUID?.() ||
          `safalseva-${Date.now()}`;

        localStorage.setItem(
          "safalseva_device_id",
          deviceId
        );
      }

      const deviceType:
        | "mobile"
        | "desktop" =
        window.innerWidth <= 768
          ? "mobile"
          : "desktop";

      /* PRICE CALCULATION */

      const purchaseAmount = subtotal;

      const discountAmount =
        discount + couponDiscount;

      const discountPercent =
        purchaseAmount > 0
          ? Number(
              (
                (discountAmount / purchaseAmount) *
                100
              ).toFixed(2)
            )
          : 0;

      /* PAYMENT PAYLOAD */

      const payload: CreatePaymentPayload = {
        giftCardId: String(giftCardId),
        giftCardName: item.title,
        denomination: Number(item.amount),
        quantity: Number(item.qty),

        discountPercent,
        discountAmount,
        purchaseAmount,
        payableAmount: total,

        deviceId,
        deviceType,
      };

      console.log(
        "SAFALSEVA PAYMENT REQUEST:",
        payload
      );

      /* API REQUEST */

      const response =
        await createPayment.mutateAsync(payload);

      console.log(
        "SAFALSEVA PAYMENT RESPONSE:",
        response
      );

      if (!response?.success || !response?.data) {
        throw new Error(
          response?.message ||
            "Unable to create payment order."
        );
      }

      /* SAVE RESPONSE */

      const paymentDetails = {
        ...response.data,

        message: response.message,

        giftCardName: item.title,
        denomination: item.amount,
        quantity: item.qty,

        customerName,
        customerEmail,
        customerPhone,

        coupon: coupon?.ok
          ? couponCode.toUpperCase()
          : null,
      };

      sessionStorage.setItem(
        "safalseva_payment_details",
        JSON.stringify(paymentDetails)
      );

      /* SUCCESS PAGE */

      router.push(
        `/payment/success?id=${encodeURIComponent(
          response.data.orderId
        )}`
      );

    } catch (err: any) {
      console.error(
        "SAFALSEVA PAYMENT ERROR:",
        err?.response?.data || err?.message
      );

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to create payment order. Please try again."
      );

      setProcessing(false);
    }
  };

  /* ==========================================
     EMPTY CHECKOUT
  ========================================== */

  if (!items.length) {
    return (
      <main className="grid min-h-[70vh] place-items-center bg-[#F7F9FC] px-5">
        <div className="max-w-sm rounded-3xl border border-slate-200 bg-white p-9 text-center shadow-sm">
          <ShoppingBag
            size={38}
            className="mx-auto text-[#1B5FD1]"
          />

          <h1 className="mt-5 text-2xl font-bold">
            Your checkout is empty
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Explore our gift cards and find something special.
          </p>

          <Link
            href="/gift-cards"
            className="mt-6 inline-flex rounded-xl bg-[#1B5FD1] px-6 py-3 text-sm font-semibold text-white"
          >
            Explore Gift Cards
          </Link>
        </div>
      </main>
    );
  }

  /* ==========================================
     PREMIUM CHECKOUT UI
  ========================================== */

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#101828]">

      {/* TOP HEADER */}

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-7">

          <Link
            href="/gift-cards"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#1B5FD1]"
          >
            <ArrowLeft size={17} />
            Continue shopping
          </Link>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#1B5FD1]">
            <ShieldCheck size={19} />
            Secure Checkout
          </div>

        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-7 sm:py-11">

        {/* PAGE HEADING */}

        <div className="mb-9">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#1B5FD1]">
            <Sparkles size={13} />
            SAFALSEVA KENDRA GIFT CARDS
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Review your details and confirm your gift card order.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_365px]">

          {/* LEFT COLUMN */}

          <div className="space-y-6">

            {/* CUSTOMER DETAILS */}

            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-5 sm:px-6">

                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#1B5FD1]">
                  <UserRound size={21} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Customer details
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Your registered contact information
                  </p>
                </div>

              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">

                {/* NAME */}

                <div className="rounded-xl border border-slate-100 bg-[#FAFBFD] p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <UserRound size={14} />
                    Full name
                  </div>

                  <p className="mt-2 break-words text-sm font-semibold text-[#101828]">
                    {customerName}
                  </p>
                </div>

                {/* EMAIL */}

                <div className="rounded-xl border border-slate-100 bg-[#FAFBFD] p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Mail size={14} />
                    Email address
                  </div>

                  <p className="mt-2 break-all text-sm font-semibold text-[#101828]">
                    {customerEmail || "Not available"}
                  </p>
                </div>

                {/* PHONE */}

                <div className="rounded-xl border border-slate-100 bg-[#FAFBFD] p-4 sm:col-span-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Phone size={14} />
                    Mobile number
                  </div>

                  <p className="mt-2 text-sm font-semibold text-[#101828]">
                    {customerPhone
                      ? String(customerPhone)
                      : "Not available in your registered profile"}
                  </p>
                </div>

              </div>

            </section>

            {/* GIFT CARD DETAILS */}

            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">

                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#1B5FD1]">
                    <ShoppingBag size={21} />
                  </div>

                  <div>
                    <h2 className="font-bold">
                      Your gift cards
                    </h2>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {items.length} selected item
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#1B5FD1]">
                  {routeSource === "buyNow"
                    ? "Buy Now"
                    : "Cart"}
                </span>

              </div>

              <div className="divide-y divide-slate-100 px-5 sm:px-6">

                {items.map((item: any) => {
                  const line = lineOf(item);

                  return (
                    <div
                      key={item.key || item.id}
                      className="flex items-center gap-4 py-5"
                    >

                      <div
                        className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white p-2"
                        style={{
                          backgroundColor:
                            `${item.color || "#1B5FD1"}08`,
                        }}
                      >
                        <Logo p={item} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-[#101828] sm:text-base">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {inr(item.amount)} × {item.qty}
                        </p>

                        <span className="mt-2 inline-flex rounded-md bg-green-50 px-2 py-1 text-[11px] font-semibold text-green-700">
                          Selected gift card
                        </span>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-sm font-bold text-[#101828]">
                          {inr(line.s - line.d)}
                        </p>

                        {line.d > 0 && (
                          <p className="mt-1 text-xs font-medium text-green-600">
                            Saved {inr(line.d)}
                          </p>
                        )}
                      </div>

                    </div>
                  );
                })}

              </div>

            </section>

            {/* COUPON SECTION */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600">
                  <Tag size={21} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Offers & Coupons
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Apply an available promotional code
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <input
                  className="min-h-12 flex-1 rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1B5FD1] focus:bg-white focus:ring-4 focus:ring-blue-50"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  disabled={processing}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                    setCoupon(null);
                  }}
                />

                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  disabled={processing || !couponCode.trim()}
                  className="min-h-12 rounded-xl border border-[#1B5FD1]/30 px-6 text-sm font-bold text-[#1B5FD1] transition hover:bg-blue-50 disabled:opacity-50"
                >
                  Apply Coupon
                </button>
              </div>

              {coupon && (
                <p
                  className={`mt-3 text-sm font-medium ${
                    coupon.ok
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {coupon.msg}
                </p>
              )}

            </section>

          </div>

          {/* RIGHT COLUMN */}

          <aside className="lg:sticky lg:top-6">

            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
                <h2 className="text-lg font-bold">
                  Order summary
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Review your payment details
                </p>
              </div>

              <div className="space-y-5 p-5 sm:p-6">

                {/* PRICE DETAILS */}

                <div className="space-y-4 text-sm">

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">
                      Subtotal
                    </span>

                    <span className="font-semibold">
                      {inr(subtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">
                      Product discount
                    </span>

                    <span className="font-semibold text-green-600">
                      −{inr(discount)}
                    </span>
                  </div>

                  {couponDiscount > 0 && (
                    <div className="flex justify-between gap-3">
                      <span className="text-slate-500">
                        Coupon discount
                      </span>

                      <span className="font-semibold text-green-600">
                        −{inr(couponDiscount)}
                      </span>
                    </div>
                  )}

                </div>

                {/* TOTAL */}

                <div className="border-t border-dashed border-slate-200 pt-5">

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold">
                      Total payable
                    </span>

                    <span className="text-2xl font-extrabold tracking-tight text-[#1B5FD1]">
                      {inr(total)}
                    </span>
                  </div>

                  <p className="mt-2 text-right text-xs text-slate-400">
                    Inclusive of applicable discounts
                  </p>

                </div>

                {/* ERROR */}

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm leading-5 text-red-600">
                    {error}
                  </div>
                )}

                {/* PAY BUTTON */}

                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={
                    processing ||
                    createPayment.isPending ||
                    items.length !== 1
                  }
                  className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#1B5FD1] px-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#154CB0] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <LockKeyhole size={17} />

                  Pay Securely · {inr(total)}
                </button>

                {/* SECURITY */}

                <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                  <ShieldCheck
                    size={16}
                    className="text-green-600"
                  />

                  Secure payment processing
                </div>

              </div>

              {/* FOOTER */}

              <div className="border-t border-slate-100 bg-[#FAFBFD] px-5 py-4 sm:px-6">
                <p className="text-xs leading-5 text-slate-500">
                  Please review your gift card selection
                  and payment amount before continuing.
                </p>
              </div>

            </section>

            {/* TRUST NOTE */}

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-green-600"
              />

              <div>
                <p className="text-xs font-semibold text-[#101828]">
                  Your order details are protected
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Your order is created through the
                  SafalSeva Kendra payment service.
                </p>
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* ==========================================
          CENTER PROCESSING OVERLAY
      ========================================== */}

      {processing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm">

          <div className="w-full max-w-xs rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-2xl">

            <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center">

              <div className="absolute inset-0 animate-spin rounded-full border-[5px] border-blue-50 border-t-[#1B5FD1]" />

              <LockKeyhole
                size={25}
                className="text-[#1B5FD1]"
              />

            </div>

            <h3 className="mt-6 text-lg font-bold text-[#101828]">
              Processing your order
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Please wait while your payment order
              is being securely created.
            </p>

            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-[#1B5FD1]" />
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Please keep this page open.
            </p>

          </div>

        </div>
      )}

    </main>
  );
}
