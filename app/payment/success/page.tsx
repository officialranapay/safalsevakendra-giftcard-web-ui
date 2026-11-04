
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { inr } from "@/lib/data";

export default function PaymentSuccess() {
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("safalseva_payment_details");

      if (saved) {
        setDetails(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Unable to load order details:", error);
    }
  }, []);

  if (!details) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <p className="text-sm text-slate-500">Loading order details...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        <div className="mb-7 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
            <span className="text-3xl font-semibold text-green-600">✓</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Order Created Successfully!
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Your order has been created successfully. Thank you for choosing
            SafalSeva Kendra.
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Order ID</p>
          <p className="mt-1 break-all text-sm font-semibold text-slate-900">
            {details.orderId || "—"}
          </p>
        </div>

        <div className="my-6 space-y-4">
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-slate-500">Gift Card</span>
            <span className="text-right font-medium text-slate-900">
              {details.giftCardName || "—"}
            </span>
          </div>

          <div className="flex justify-between gap-4 text-sm">
            <span className="text-slate-500">Denomination</span>
            <span className="font-medium text-slate-900">
              {inr(details.denomination || 0)}
            </span>
          </div>

          <div className="flex justify-between gap-4 text-sm">
            <span className="text-slate-500">Quantity</span>
            <span className="font-medium text-slate-900">
              {details.quantity || 0}
            </span>
          </div>

          <div className="flex justify-between gap-4 text-sm">
            <span className="text-slate-500">Discount</span>
            <span className="font-medium text-green-600">
              -{inr(details.discountAmount || 0)}
            </span>
          </div>

          <div className="flex justify-between border-t border-slate-200 pt-4">
            <span className="font-semibold text-slate-900">Total Amount</span>
            <span className="text-lg font-bold text-[#1B5FD1]">
              {inr(details.payableAmount || 0)}
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm leading-6 text-blue-900">
            Our team will contact you within 24 hours regarding your order.
          </p>
        </div>

        <Link
          href="/gift-cards"
          className="mt-6 flex h-12 w-full items-center justify-center rounded-lg bg-[#1B5FD1] text-sm font-semibold text-white transition hover:bg-[#154CB0]"
        >
          Continue Shopping
        </Link>

      </div>
    </main>
  );
}
