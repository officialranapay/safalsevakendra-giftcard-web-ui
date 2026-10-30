
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

import { useApp } from "@/lib/store"
import { inr } from "@/lib/data"
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

        <div className="mt-10">
          <SkeletonBlock className="h-36 rounded-2xl" />
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
    const orderId =
      new URLSearchParams(window.location.search).get("id") || ""

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
            Thank you for your purchase! Your payment has been
            successfully received.
          </p>
        </section>

        {/* ORDER DETAILS */}

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Order details
          </h2>

          <div className="mt-4 flex items-baseline justify-between border-b border-slate-200 pb-5">
            <span className="text-sm text-slate-500">
              Amount paid
            </span>

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
                <dt className="shrink-0 text-slate-500">
                  {r.label}
                </dt>

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
        </section>

        {/* VOUCHER DELIVERY INFORMATION */}

        <section className="mt-10 overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1B5FD1] text-white">
              <Check size={22} strokeWidth={2.5} />
            </div>

            <div>
              <h2 className="text-base font-bold text-[#071923]">
                Your gift card is being processed!
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Your payment is successful. We are processing
                your gift card voucher.
              </p>
            </div>
          </div>

          {firstItem && (
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white p-1.5">
                <Logo p={firstItem} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#071923]">
                  {firstItem.brand || firstItem.title || "Gift Card"}
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Gift card order confirmed
                </p>
              </div>
            </div>
          )}

          <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
            <p className="text-sm font-semibold text-[#1B5FD1]">
              Voucher delivery within 24 hours
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your gift card voucher code and PIN will be sent
              to your registered email address within 24 hours
              of successful payment.
            </p>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              Please check your inbox and spam folder. You can
              also contact our support team if you do not
              receive your voucher within the specified time.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Voucher delivery pending
          </div>

        </section>

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
