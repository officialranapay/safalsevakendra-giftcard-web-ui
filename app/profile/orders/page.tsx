
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardList,
  Gift,
  Package,
} from "lucide-react";

import { useApp } from "@/lib/store";
import { inr } from "@/lib/data";
import Voucher from "@/components/Voucher";
import Logo from "@/components/Logo";

/* =====================================================
   THEME
===================================================== */

const BLUE = "#0757C8";
const BLUE_DARK = "#06449D";
const ORANGE = "#FF8A00";

const tl = [
  "Order Placed",
  "Payment Processing",
  "Payment Successful",
  "Voucher Generated",
  "Completed",
];

/* =====================================================
   SKELETON
===================================================== */

function SkeletonBlock({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-100 ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[orderSkeletonShimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
    </div>
  );
}

function OrdersSkeleton() {
  return (
    <main className="min-h-screen bg-white">
      <div className="wrap mx-auto max-w-3xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
        <div className="mb-8 border-b border-slate-200 pb-5">
          <SkeletonBlock className="h-4 w-28 rounded" />
          <SkeletonBlock className="mt-3 h-9 w-48 rounded sm:h-10" />
          <SkeletonBlock className="mt-3 h-4 w-64 max-w-full rounded" />
        </div>

        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="border border-slate-200 bg-white p-4 sm:p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1 space-y-3">
                  <SkeletonBlock className="h-5 w-36 rounded" />
                  <SkeletonBlock className="h-3 w-52 max-w-full rounded" />
                  <SkeletonBlock className="h-4 w-24 rounded" />
                </div>

                <div className="shrink-0 space-y-3">
                  <SkeletonBlock className="ml-auto h-5 w-20 rounded" />
                  <SkeletonBlock className="ml-auto h-3 w-24 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes orderSkeletonShimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}

/* =====================================================
   STATUS HELPERS
===================================================== */

function getStatusClass(value: unknown) {
  const status = String(value ?? "").toLowerCase();

  if (
    status.includes("success") ||
    status.includes("paid") ||
    status.includes("complete")
  ) {
    return "bg-emerald-50 text-emerald-700";
  }

  if (
    status.includes("fail") ||
    status.includes("cancel") ||
    status.includes("reject")
  ) {
    return "bg-red-50 text-red-700";
  }

  return "bg-amber-50 text-amber-700";
}

/* =====================================================
   ORDERS
===================================================== */

export default function Orders() {
  const { orders } = useApp();

  const [open, setOpen] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadOrders = async () => {
      if (document.readyState !== "complete") {
        await new Promise<void>((resolve) => {
          window.addEventListener("load", () => resolve(), {
            once: true,
          });
        });
      }

      await new Promise<void>((resolve) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      resolve();
    });
  });
});

      await new Promise((resolve) => setTimeout(resolve, 250));

      if (!cancelled) {
        setLoading(false);
      }
    };

    void loadOrders();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <OrdersSkeleton />;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="wrap mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        {/* HEADER */}
        <header className="mb-8 border-b border-slate-200 pb-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0757C8]">
            Your Account
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            My Orders
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            View your purchases, payment status and gift card vouchers.
          </p>
        </header>

        {/* EMPTY STATE */}
        {orders.length === 0 && (
          <div className="border border-slate-200 bg-white px-5 py-12 text-center sm:py-14">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0757C8]">
              <ClipboardList size={23} strokeWidth={1.7} />
            </div>

            <h2 className="mt-4 text-base font-semibold text-slate-900">
              No orders yet
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Your gift card purchases will appear here once you place
              an order.
            </p>

            <Link
              href="/gift-cards"
              className="group mt-5 inline-flex min-h-10 items-center justify-center gap-2 bg-[#0757C8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#06449D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0757C8] focus-visible:ring-offset-2"
            >
              Shop Gift Cards
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}

        {/* ORDER LIST */}
        <div className="space-y-4">
          {orders.map((o: any) => {
            const isOpen = open === o.id;
            const orderItems = o.items || [];
            const vouchers = o.vouchers || [];

            return (
              <article
                key={o.id}
                className="overflow-hidden border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300"
              >
                {/* ORDER HEADER */}
                <div className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    {/* BRAND AND ORDER INFO */}
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      {orderItems[0] && (
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5">
                          <Logo p={orderItems[0]} />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <h2 className="break-words text-sm font-semibold leading-5 text-slate-900 sm:text-base">
                          {orderItems
                            .map((item: any) => item.brand || item.title)
                            .filter(Boolean)
                            .join(", ") || "Gift Card Order"}
                        </h2>

                        <p className="mt-1 break-all text-xs text-slate-500">
                          Order ID: {o.id}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {o.date
                            ? new Date(o.date).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                            : "Date unavailable"}
                        </p>
                      </div>
                    </div>

                    {/* TOTAL AND STATUS */}
                    <div className="shrink-0 text-right">
                      <p className="text-base font-bold text-slate-900 sm:text-lg">
                        {inr(o.total)}
                      </p>

                      <div className="mt-2 flex flex-wrap justify-end gap-1.5">
                        {o.paymentStatus && (
                          <span
                            className={`inline-flex rounded-sm px-2 py-1 text-[10px] font-semibold capitalize ${getStatusClass(
                              o.paymentStatus
                            )}`}
                          >
                            {o.paymentStatus}
                          </span>
                        )}

                        {o.orderStatus && (
                          <span
                            className={`inline-flex rounded-sm px-2 py-1 text-[10px] font-semibold capitalize ${getStatusClass(
                              o.orderStatus
                            )}`}
                          >
                            {o.orderStatus}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* DETAILS BUTTON */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpen(isOpen ? "" : o.id)
                    }
                    className="group mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#0757C8] transition-colors hover:text-[#06449D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0757C8] focus-visible:ring-offset-2"
                  >
                    {isOpen ? "Hide Details" : "View Details"}

                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* ORDER DETAILS */}
                {isOpen && (
                  <div className="border-t border-slate-200 bg-slate-50/50 px-4 pb-5 pt-4 sm:px-5">
                    {/* ORDER SUMMARY */}
                    <section className="border border-slate-200 bg-white p-4">
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Payment Summary
                      </h3>

                      <div className="space-y-2.5 text-sm">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-slate-600">Subtotal</span>
                          <span className="font-medium text-slate-900">
                            {inr(o.subtotal)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <span className="text-slate-600">
                            Discount
                            {o.coupon ? ` (${o.coupon})` : ""}
                          </span>
                          <span className="font-medium text-emerald-700">
                            −{inr(o.discount)}
                          </span>
                        </div>

                        <div className="border-t border-slate-100 pt-2.5">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-semibold text-slate-900">
                              Total
                            </span>
                            <span className="font-bold text-[#0757C8]">
                              {inr(o.total)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {(o.paymentMethod || o.paymentId) && (
                        <div className="mt-4 border-t border-slate-100 pt-3 text-xs leading-6 text-slate-500">
                          {o.paymentMethod && (
                            <p>
                              Payment method: {o.paymentMethod}
                            </p>
                          )}

                          {o.paymentId && (
                            <p className="break-all">
                              Payment ID: {o.paymentId}
                            </p>
                          )}
                        </div>
                      )}
                    </section>

                    {/* ORDER TIMELINE */}
                    <section className="mt-5">
                      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Order Timeline
                      </h3>

                      <ol className="space-y-4">
                        {tl.map((step, index) => (
                          <motion.li
                            key={step}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.07 }}
                            className="flex items-start gap-3"
                          >
                            <span
                              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0757C8]"
                              aria-hidden="true"
                            >
                              <Check size={12} strokeWidth={2.5} />
                            </span>

                            <span className="text-sm font-medium text-slate-700">
                              {step}
                            </span>
                          </motion.li>
                        ))}
                      </ol>
                    </section>

                    {/* VOUCHERS */}
                    {vouchers.length > 0 && (
                      <section className="mt-6">
                        <div className="mb-3 flex items-center gap-2">
                          <Gift
                            size={17}
                            className="text-[#0757C8]"
                            aria-hidden="true"
                          />

                          <h3 className="text-sm font-semibold text-slate-900">
                            Gift Card Vouchers
                          </h3>
                        </div>

                        <div className="space-y-3">
                          {vouchers.map((voucher: any, index: number) => {
                            const matchingItem =
                              orderItems.find(
                                (item: any) =>
                                  item.brand === voucher.brand ||
                                  item.title === voucher.brand
                              ) || orderItems[0];

                            return (
                              <div
                                key={`${voucher.code || "voucher"}-${index}`}
                                className="border border-slate-200 bg-white p-3.5 sm:p-4"
                              >
                                {matchingItem && (
                                  <div className="mb-3 flex min-w-0 items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5">
                                      <Logo p={matchingItem} />
                                    </div>

                                    <p className="min-w-0 truncate text-sm font-semibold text-slate-900">
                                      {voucher.brand ||
                                        matchingItem.brand ||
                                        matchingItem.title ||
                                        "Gift Card"}
                                    </p>
                                  </div>
                                )}

                                <Voucher v={voucher} />
                              </div>
                            );
                          })}
                        </div>
                      </section>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* FOOTER */}
        {orders.length > 0 && (
          <footer className="mt-8 border-t border-slate-200 pt-4">
            <p className="text-center text-xs text-slate-500">
              SafalSevaKendra
              <span className="mx-2 text-[#FF8A00]">•</span>
              Your orders and vouchers in one place.
            </p>
          </footer>
        )}
      </div>
    </main>
  );
}
