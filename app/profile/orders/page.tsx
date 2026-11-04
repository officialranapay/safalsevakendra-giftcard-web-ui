
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

import { inr } from "@/lib/data";

import {
  useGiftCardOrders,
  useGiftCardOrderById,
} from "@/services/gift-card-orders/gift-card-orders.hooks";

import type {
  GiftCardOrder,
} from "@/services/gift-card-orders/gift-card-orders.types";

/* =========================================
   DATE FORMAT
========================================= */

function formatDate(value?: string) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "—";

  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* =========================================
   ORDER STATUS
========================================= */

function getStatusClass(value?: string) {
  const status = String(value || "").toLowerCase();

  if (
    status.includes("success") ||
    status.includes("complete") ||
    status.includes("delivered")
  ) {
    return "bg-green-50 text-green-700";
  }

  if (
    status.includes("failed") ||
    status.includes("cancel") ||
    status.includes("reject")
  ) {
    return "bg-red-50 text-red-700";
  }

  return "bg-amber-50 text-amber-700";
}

/* =========================================
   DETAIL ITEM
========================================= */

function Detail({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) {
  return (
    <div className="min-w-0">
      <p className="text-xs text-slate-500">
        {label}
      </p>

      <p className="mt-1 break-words text-sm font-medium text-slate-900">
        {value === null || value === undefined || value === ""
          ? "—"
          : value}
      </p>
    </div>
  );
}

/* =========================================
   SINGLE ORDER DETAILS API
========================================= */

function OrderDetails({
  orderId,
}: {
  orderId: string;
}) {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useGiftCardOrderById(orderId);

  if (isLoading) {
    return (
      <div className="border-t border-slate-200 px-5 py-8 text-center">
        <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-blue-100 border-t-[#0757C8]" />

        <p className="mt-3 text-sm text-slate-500">
          Loading order details...
        </p>
      </div>
    );
  }

  if (isError || !data?.data?.order) {
    return (
      <div className="border-t border-slate-200 px-5 py-6">
        <p className="text-sm text-red-600">
          {error instanceof Error
            ? error.message
            : "Unable to load order details."}
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0757C8] hover:text-[#06449D]"
        >
          <RefreshCw size={14} />
          Try Again
        </button>
      </div>
    );
  }

  const order = data.data.order;

  return (
    <div className="border-t border-slate-200 bg-slate-50/60 px-5 py-5 sm:px-6">

      <h3 className="mb-5 text-sm font-semibold text-slate-900">
        Order Details
      </h3>

      {/* CUSTOMER DETAILS */}

      <div className="mb-6">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Customer Information
        </h4>

        <div className="grid gap-4 sm:grid-cols-2">
          <Detail
            label="Customer Name"
            value={order.customerName}
          />

          <Detail
            label="Email Address"
            value={order.customerEmail}
          />

          <Detail
            label="Phone Number"
            value={order.customerPhone}
          />

          <Detail
            label="Customer ID"
            value={order.customerId}
          />
        </div>
      </div>

      {/* GIFT CARD DETAILS */}

      <div className="border-t border-slate-200 pt-5">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Gift Card Information
        </h4>

        <div className="grid gap-4 sm:grid-cols-2">
          <Detail
            label="Gift Card Name"
            value={order.giftCardName}
          />

          <Detail
            label="Gift Card ID"
            value={order.giftCardId}
          />

          <Detail
            label="Denomination"
            value={inr(order.denomination)}
          />

          <Detail
            label="Quantity"
            value={order.quantity}
          />
        </div>
      </div>

      {/* ORDER AMOUNT DETAILS */}

      <div className="mt-6 border-t border-slate-200 pt-5">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Order Summary
        </h4>

        <div className="space-y-3">
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-slate-500">
              Purchase Amount
            </span>

            <span className="font-medium text-slate-900">
              {inr(order.purchaseAmount)}
            </span>
          </div>

          <div className="flex justify-between gap-4 text-sm">
            <span className="text-slate-500">
              Discount
            </span>

            <span className="font-medium text-green-600">
              -{inr(order.discountAmount)}
            </span>
          </div>

          <div className="flex justify-between gap-4 border-t border-slate-200 pt-4">
            <span className="font-semibold text-slate-900">
              Total Amount
            </span>

            <span className="text-lg font-bold text-[#0757C8]">
              {inr(order.payableAmount)}
            </span>
          </div>
        </div>
      </div>

      {/* ORDER STATUS */}

      {/* <div className="mt-6 border-t border-slate-200 pt-5">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Order Information
        </h4>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs text-slate-500">
              Order Status
            </p>

            <span
              className={`mt-2 inline-flex rounded-md px-3 py-1.5 text-xs font-semibold capitalize ${getStatusClass(
                order.orderStatus
              )}`}
            >
              {order.orderStatus || "Pending"}
            </span>
          </div>

          <Detail
            label="Order Date"
            value={formatDate(order.createdAt)}
          />

          <Detail
            label="Last Updated"
            value={formatDate(order.updatedAt)}
          />
        </div>
      </div> */}

      {/* CONTACT MESSAGE */}

      <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
        <h4 className="text-sm font-semibold text-[#16499C]">
          What happens next?
        </h4>

        <p className="mt-2 text-sm leading-6 text-blue-800">
          Our team will contact you within 24 hours regarding your order
          and further processing.
        </p>
      </div>

    </div>
  );
}

/* =========================================
   ORDER CARD
========================================= */

function OrderCard({
  order,
  isOpen,
  onToggle,
}: {
  order: GiftCardOrder;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300">

      {/* ORDER HEADER */}

      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">

          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold text-slate-900">
              {order.giftCardName || "Gift Card Order"}
            </h2>

            <p className="mt-1 break-all text-xs text-slate-500">
              Order ID: {order.orderId}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {formatDate(order.createdAt)}
            </p>
          </div>

          <div className="shrink-0 text-right">
  <p className="text-lg font-bold text-slate-900">
    {inr(order.payableAmount)}
  </p>
</div>

        </div>

        {/* ORDER FOOTER */}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">

          <div className="text-xs text-slate-500">
            Quantity:{" "}
            <span className="font-semibold text-slate-800">
              {order.quantity}
            </span>
          </div>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0757C8] transition hover:text-[#06449D]"
          >
            {isOpen ? "Hide Details" : "View Details"}

            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

        </div>
      </div>

      {/* EXPANDED DETAILS */}

      {isOpen && (
        <OrderDetails orderId={order.orderId} />
      )}

    </article>
  );
}

/* =========================================
   MY ORDERS PAGE
========================================= */

export default function Orders() {
  const [openOrderId, setOpenOrderId] = useState("");

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
    return (
      <main className="min-h-screen bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">

          <div className="h-8 w-40 animate-pulse rounded bg-slate-100" />

          <div className="mt-3 h-4 w-64 animate-pulse rounded bg-slate-100" />

          <div className="mt-8 space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-32 animate-pulse rounded-xl border border-slate-100 bg-slate-50"
              />
            ))}
          </div>

        </div>
      </main>
    );
  }

  /* ERROR */

  if (isError) {
    return (
      <main className="min-h-screen bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">

          <h1 className="text-2xl font-bold text-slate-900">
            My Orders
          </h1>

          <div className="mt-8 rounded-xl border border-red-100 bg-red-50 p-5">

            <p className="text-sm text-red-700">
              {error instanceof Error
                ? error.message
                : "Unable to load your orders."}
            </p>

            <button
              type="button"
              onClick={() => refetch()}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0757C8]"
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
    <main className="min-h-screen bg-white">

      <div className="mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14">

        {/* HEADER */}

        <header className="mb-8 border-b border-slate-200 pb-5">

          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0757C8]">
            Your Account
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            View your gift card orders and their latest updates.
          </p>

        </header>

        {/* EMPTY ORDERS */}

        {orders.length === 0 ? (
          <div className="rounded-xl border border-slate-200 px-5 py-12 text-center">

            <h2 className="text-base font-semibold text-slate-900">
              No orders yet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Your gift card orders will appear here.
            </p>

            <Link
              href="/gift-cards"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0757C8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#06449D]"
            >
              Shop Gift Cards
              <ArrowRight size={16} />
            </Link>

          </div>
        ) : (

          /* ORDER LIST */

          <div className="space-y-4">

            {orders.map((order) => (
              <OrderCard
                key={order._id}
                order={order}
                isOpen={openOrderId === order.orderId}
                onToggle={() =>
                  setOpenOrderId(
                    openOrderId === order.orderId
                      ? ""
                      : order.orderId
                  )
                }
              />
            ))}

          </div>
        )}

      </div>

    </main>
  );
}
