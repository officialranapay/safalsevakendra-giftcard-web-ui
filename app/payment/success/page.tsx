"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

import { useApp } from "@/lib/store"
import { inr } from "@/lib/data"
import Voucher from "@/components/Voucher"
import Logo from "@/components/Logo"

/* =====================================================
   SKELETON
   ===================================================== */

function SkeletonBlock({
  className = "",
}: {
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-100 ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[successSkeleton_1.7s_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
    </div>
  )
}

function SuccessSkeleton() {
  return (
    <main className="min-h-screen bg-white">
      <div className="wrap max-w-2xl pb-10 pt-20 sm:pt-24">
        <div className="text-center">
          <SkeletonBlock className="mx-auto h-10 w-10 rounded-full" />
          <SkeletonBlock className="mx-auto mt-6 h-9 w-64 rounded-lg" />
          <SkeletonBlock className="mx-auto mt-3 h-4 w-80 max-w-full rounded-full" />
        </div>

        <div className="mt-10 space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex justify-between">
              <SkeletonBlock className="h-4 w-24 rounded-full" />
              <SkeletonBlock className="h-4 w-40 rounded-full" />
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 p-5"
            >
              <div className="flex items-center gap-4">
                <SkeletonBlock className="h-12 w-12 shrink-0 rounded-xl" />
                <div className="flex-1 space-y-2">
                  <SkeletonBlock className="h-5 w-36 rounded-md" />
                  <SkeletonBlock className="h-4 w-48 max-w-full rounded-full" />
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <SkeletonBlock className="h-10 rounded-lg" />
                <SkeletonBlock className="h-10 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes successSkeleton {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  )
}

/* =====================================================
   SUCCESS PAGE
   ===================================================== */

export default function Success() {
  const { orders, ready } = useApp()

  const [id, setId] = useState("")
  const [pageReady, setPageReady] = useState(false)

  useEffect(() => {
    const orderId = new URLSearchParams(window.location.search).get("id") || ""
    setId(orderId)
  }, [])

  useEffect(() => {
    if (!ready || !id) return

    const finishLoading = async () => {
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve()
          })
        })
      })

      await new Promise((resolve) => setTimeout(resolve, 300))
      setPageReady(true)
    }

    finishLoading()
  }, [ready, id])

  if (!ready || !id || !pageReady) {
    return <SuccessSkeleton />
  }

  const o = orders.find((x: any) => x.id === id)

  if (!o) {
    return (
      <main className="min-h-screen bg-white">
        <div className="wrap py-24 text-center sm:py-28">
          <p className="text-mute">
            Order not found.{" "}
            <Link
              className="font-semibold text-[#1B5FD1] underline underline-offset-4"
              href="/profile/orders"
            >
              View orders
            </Link>
          </p>
        </div>
      </main>
    )
  }

  const firstItem = o.items?.[0]
  const vouchers = o.vouchers || []

  const rows = [
    { label: "Order ID", value: o.id, mono: true },
    { label: "Payment ID", value: o.paymentId, mono: true },
    { label: "Payment method", value: o.paymentMethod },
    { label: "Date", value: new Date(o.date).toLocaleString() },
  ]

  return (
    <main className="min-h-screen bg-white text-[#071923]">
      <div className="wrap max-w-2xl pb-16 pt-12 sm:pt-20">
        {/* PAYMENT CONFIRMATION */}
        <section className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#1B5FD1] text-white"
          >
            <Check size={24} strokeWidth={2.5} />
          </motion.div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Payment successful
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
            Your payment is complete. Your gift card voucher details are below.
          </p>
        </section>

        {/* ORDER DETAILS */}
        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Order details
          </h2>

          <div className="mt-4 flex items-baseline justify-between border-b border-slate-200 pb-5">
            <span className="text-sm text-slate-500">Amount paid</span>
            <span className="text-3xl font-bold tracking-tight text-[#1B5FD1]">
              {inr(o.total)}
            </span>
          </div>

          <dl className="divide-y divide-slate-100">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-start justify-between gap-6 py-4 text-sm"
              >
                <dt className="shrink-0 text-slate-500">{r.label}</dt>
                <dd
                  className={`break-all text-right font-medium ${
                    r.mono ? "font-mono text-[13px]" : ""
                  }`}
                >
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
            Keep your voucher details safe and use them according to the brand’s
            terms.
          </p>
        </section>

        {/* PURCHASED GIFT CARDS */}
        {firstItem && (
          <div className="mb-5 mt-14 flex items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Your gift card vouchers
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {vouchers.length} {vouchers.length === 1 ? "voucher" : "vouchers"} issued
              </p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {vouchers.map((v: any, index: number) => {
            const matchingItem =
              o.items?.find(
                (item: any) =>
                  item.brand === v.brand ||
                  item.title === v.brand ||
                  item.key === v.key
              ) || {
                brand: v.brand,
                title: v.brand,
              }

            return (
              <div
                key={`${v.code}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
              >
                <div className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white p-1.5">
                    <Logo p={matchingItem} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {v.brand || matchingItem.title || "Gift card"}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Gift card voucher
                    </p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F4A81D]" />
                    Active
                  </span>
                </div>

                <Voucher v={v} />
              </div>
            )
          })}
        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <Link
            href="/profile/orders"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#1B5FD1] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#154CB0] sm:w-auto"
          >
            View my orders
          </Link>

          <Link
            href="/gift-cards"
            className="text-sm font-semibold text-slate-600 underline-offset-4 transition-colors hover:text-[#1B5FD1] hover:underline"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </main>
  )
}