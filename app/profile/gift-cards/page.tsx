
"use client";

import Link from "next/link";
import {
  Gift,
  ArrowRight,
  PackageOpen,
  Mail,
  RefreshCw,
} from "lucide-react";

import { inr } from "@/lib/data";

import { useGiftCardOrders } from "@/services/gift-card-orders/gift-card-orders.hooks";

import type { GiftCardOrder } from "@/services/gift-card-orders/gift-card-orders.types";

/* =========================================
   THEME
========================================= */

const THEME = {
  blue: "#0757C8",
  blueDark: "#06449D",
  orange: "#FF8A00",
  ink: "#10264A",
  muted: "#64748B",
  lightBlue: "#EFF6FF",
  border: "#DFE9F8",
};

/* =========================================
   DATE FORMAT
========================================= */

function formatDate(value?: string) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "—";

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* =========================================
   SKELETON
========================================= */

function SkeletonBlock({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-[#EAF1FB] ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[giftCardSkeleton_1.7s_infinite] bg-gradient-to-r from-transparent via-white/90 to-transparent" />
    </div>
  );
}

function MyCardsSkeleton() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EFF6FF] via-white to-white">
      <div className="mx-auto max-w-3xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
        <SkeletonBlock className="h-5 w-36 rounded-full" />
        <SkeletonBlock className="mt-4 h-10 w-56 sm:h-12" />
        <SkeletonBlock className="mt-3 h-4 w-72 max-w-full rounded-full" />

        <div className="mt-8 space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#DFE9F8] bg-white p-4 shadow-sm sm:p-5"
            >
              <div className="flex items-center gap-4">
                <SkeletonBlock className="h-14 w-14 shrink-0 rounded-xl" />

                <div className="min-w-0 flex-1 space-y-3">
                  <SkeletonBlock className="h-5 w-40" />
                  <SkeletonBlock className="h-4 w-28 rounded-full" />
                  <SkeletonBlock className="h-3 w-52 max-w-full rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes giftCardSkeleton {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================
   GIFT CARD ITEM
========================================= */

function GiftCardItem({
  order,
}: {
  order: GiftCardOrder;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#DFE9F8] bg-white p-3.5 shadow-[0_4px_20px_rgba(7,87,200,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#B9D5FF] hover:shadow-[0_12px_32px_rgba(7,87,200,0.09)] sm:p-5">

      {/* GIFT CARD INFORMATION */}

      <div className="mb-4 flex min-w-0 items-center gap-3 pt-1">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#DFE9F8] bg-[#F7FAFF] text-[#0757C8]">
          <Gift size={23} strokeWidth={1.8} />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-bold text-[#10264A] sm:text-base">
            {order.giftCardName || "Gift Card"}
          </h2>

          <p className="mt-1 break-all text-xs text-[#64748B]">
            Order ID: {order.orderId}
          </p>

          <p className="mt-1 text-xs text-[#64748B]">
            Ordered on: {formatDate(order.createdAt)}
          </p>
        </div>

        <div className="hidden shrink-0 items-center rounded-full border border-[#DCE9FC] bg-[#EFF6FF] px-3 py-1.5 sm:inline-flex">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0757C8]">
            Gift Card
          </span>
        </div>
      </div>

      {/* GIFT CARD DETAILS */}

      <div className="mb-4 grid grid-cols-2 gap-3 rounded-xl border border-[#DFE9F8] bg-[#F7FAFF] p-4">

        <div>
          <p className="text-xs text-[#64748B]">
            Denomination
          </p>

          <p className="mt-1 text-sm font-bold text-[#10264A]">
            {inr(order.denomination)}
          </p>
        </div>

        <div>
          <p className="text-xs text-[#64748B]">
            Quantity
          </p>

          <p className="mt-1 text-sm font-bold text-[#10264A]">
            {order.quantity}
          </p>
        </div>

        <div>
          <p className="text-xs text-[#64748B]">
            Discount
          </p>

          <p className="mt-1 text-sm font-semibold text-green-600">
            -{inr(order.discountAmount)}
          </p>
        </div>

        <div>
          <p className="text-xs text-[#64748B]">
            Total Amount
          </p>

          <p className="mt-1 text-sm font-bold text-[#0757C8]">
            {inr(order.payableAmount)}
          </p>
        </div>

      </div>

      {/* CONTACT MESSAGE */}

      <div className="rounded-xl border border-[#DFE9F8] bg-[#F7FAFF] p-4 sm:p-5">

        <div className="flex items-start gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0757C8]">
            <Mail size={20} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold text-[#10264A]">
              Your gift card order has been received
            </h3>

            <p className="mt-1 text-xs leading-5 text-[#64748B]">
              Our team will contact you within 24 hours regarding your order and further processing.
            </p>
          </div>

        </div>

      </div>

    </article>
  );
}

/* =========================================
   MY GIFT CARDS PAGE
========================================= */

export default function MyCards() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useGiftCardOrders();

  const orders: GiftCardOrder[] =
    data?.data?.orders || [];

  /* LOADING */

  if (isLoading) {
    return <MyCardsSkeleton />;
  }

  /* ERROR */

  if (isError) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#EFF6FF] via-white to-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

          <h1 className="text-3xl font-extrabold text-[#10264A]">
            My Gift Cards
          </h1>

          <div className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-5">

            <p className="text-sm leading-6 text-red-700">
              {error instanceof Error
                ? error.message
                : "Unable to load your gift cards. Please try again."}
            </p>

            <button
              type="button"
              onClick={() => refetch()}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0757C8] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#06449D]"
            >
              <RefreshCw size={15} />
              Try Again
            </button>

          </div>
        </div>
      </main>
    );
  }

  /* MAIN PAGE */

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EFF6FF] via-white to-white">

      <div className="mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16">

        {/* HEADER */}

        <header className="mb-8">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D7E7FF] bg-white px-3.5 py-2 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0757C8] sm:text-xs">
              Your Collection
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#10264A] sm:text-4xl">
            My Gift Cards
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-6 text-[#64748B] sm:text-base">
            View your purchased gift cards and order information.
          </p>

        </header>

        {/* COLLECTION SUMMARY */}

        {orders.length > 0 && (
          <div className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-[#DCE9FC] bg-white px-4 py-3.5 shadow-sm sm:px-5">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0757C8]">
                <Gift size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#10264A]">
                  Your collection
                </p>

                <p className="mt-0.5 text-xs text-[#64748B]">
                  Your purchased gift card orders
                </p>
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center rounded-full bg-[#FFF3E3] px-3 py-1.5 text-xs font-bold text-[#C66B00]">
              {orders.length} {orders.length === 1 ? "Order" : "Orders"}
            </span>

          </div>
        )}

        {/* EMPTY STATE */}

        {orders.length === 0 && (
          <div className="overflow-hidden rounded-2xl border border-[#DFE9F8] bg-white shadow-sm">

            <div className="h-1.5 bg-gradient-to-r from-[#0757C8] via-[#2685F5] to-[#FF8A00]" />

            <div className="px-5 py-14 text-center sm:px-10 sm:py-16">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D8E8FF] bg-[#EFF6FF] text-[#0757C8]">
                <PackageOpen size={30} strokeWidth={1.7} />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#10264A] sm:text-xl">
                Your collection starts here
              </h2>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#64748B]">
                You have no gift card orders yet. Your purchased gift cards will appear here.
              </p>

              <Link
                href="/gift-cards"
                className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0757C8] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0757C8]/20 transition duration-200 hover:bg-[#06449D]"
              >
                Explore Gift Cards

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        )}

        {/* GIFT CARD LIST */}

        {orders.length > 0 && (
          <div className="space-y-4">
            {orders.map((order) => (
              <GiftCardItem
                key={order._id}
                order={order}
              />
            ))}
          </div>
        )}

        {/* FOOTER */}

        <footer className="mt-8 border-t border-[#DFE9F8] pt-5 text-center">
          <p className="text-xs leading-5 text-[#64748B]">
            SafalSeva Kendra
            <span className="mx-1 text-[#FF8A00]">•</span>
            Your gifts, all in one place.
          </p>
        </footer>

      </div>
    </main>
  );
}
