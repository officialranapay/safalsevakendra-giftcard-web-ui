"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowLeft,
  Check,
  ChevronRight,
  LockKeyhole,
  Tag,
  UserRound,
} from "lucide-react"

import { useApp } from "@/lib/store"
import { totals } from "@/components/CartDrawer"
import {
  inr,
  lineOf,
  applyCoupon,
  genVoucherCode,
  genVoucherPin,
  genOrderId,
  genPaymentId,
} from "@/lib/data"
import Logo from "@/components/Logo"

const steps = [
  "Creating secure payment",
  "Verifying payment",
  "Processing transaction",
  "Generating voucher",
  "Payment successful",
]

function CheckoutSkeleton() {
  return (
    <main className="min-h-screen bg-white">
      <div className="wrap grid gap-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-5">
          <div className="h-8 w-44 animate-pulse rounded bg-slate-100" />
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="animate-pulse rounded-2xl border border-slate-200 p-5"
            >
              <div className="h-5 w-36 rounded bg-slate-100" />
              <div className="mt-5 h-11 rounded-lg bg-slate-100" />
              <div className="mt-3 h-4 w-3/4 rounded bg-slate-100" />
            </div>
          ))}
        </div>

        <div className="h-72 animate-pulse rounded-2xl border border-slate-200 p-5" />
      </div>
    </main>
  )
}

export default function Checkout() {
  const {
    cart,
    user,
    ready,
    checkoutItems,
    checkoutSource,
    setLoginOpen,
    addOrder,
    clearCart,
    clearCheckout,
    toast,
  } = useApp()

  const router = useRouter()

  const [routeSource, setRouteSource] = useState<"cart" | "buyNow" | null>(null)
  const [couponCode, setCouponCode] = useState("")
  const [coupon, setCoupon] = useState<any>(null)
  const [method, setMethod] = useState("UPI")
  const [cardNumber, setCardNumber] = useState("4111 1111 1111 1111")
  const [paymentStep, setPaymentStep] = useState(-1)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!ready) return

    const params = new URLSearchParams(window.location.search)
    const source = params.get("source")

    if (source === "buyNow" || source === "cart") {
      setRouteSource(source)
    } else {
      setRouteSource(checkoutSource || "cart")
    }
  }, [ready, checkoutSource])

  useEffect(() => {
    if (ready && !user) {
      setLoginOpen(true)
    }
  }, [ready, user, setLoginOpen])

  if (!ready || routeSource === null) {
    return <CheckoutSkeleton />
  }

  // Buy Now only uses the selected product. Cart checkout uses cart items.
  const items = routeSource === "buyNow" ? checkoutItems : cart
  const summary = totals(items)
  const subtotal = summary.sub
  const discount = summary.disc
  const couponDiscount = coupon?.ok ? coupon.amount : 0
  const total = Math.max(0, subtotal - discount - couponDiscount)

  const inputClass =
    "min-h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-[#071923] outline-none placeholder:text-slate-400 transition-all duration-200 focus:border-[#1B5FD1]/50 focus:ring-4 focus:ring-[#1B5FD1]/10"

  const sectionClass =
    "rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"

  if (items.length === 0 && paymentStep < 0) {
    return (
      <main className="min-h-[65vh] bg-white">
        <div className="wrap py-24 text-center">
          <h1 className="text-2xl font-semibold text-[#071923]">
            Your checkout is empty
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Choose a gift card to continue.
          </p>
          <Link
            href="/gift-cards"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#1B5FD1] px-5 text-sm font-semibold text-white transition hover:bg-[#154CB0]"
          >
            Browse gift cards
            <ChevronRight size={16} />
          </Link>
        </div>
      </main>
    )
  }

  const pay = async () => {
    if (!user) {
      setLoginOpen(true)
      return
    }

    if (!items.length || paymentStep >= 0) return

    setError("")

    // Demo-only card decline.
    if (method === "Card" && cardNumber.replace(/\s/g, "").endsWith("0000")) {
      setPaymentStep(1)
      await new Promise((resolve) => setTimeout(resolve, 900))
      setPaymentStep(-1)
      setError("Card declined. Please try another demo card.")
      return
    }

    for (let index = 0; index < steps.length; index++) {
      setPaymentStep(index)
      await new Promise((resolve) => setTimeout(resolve, 650))
    }

    const orderId = genOrderId()
    const expiry = new Date(Date.now() + 365 * 864e5)
      .toISOString()
      .slice(0, 10)

    const vouchers = items.flatMap((item: any) =>
      Array.from({ length: item.qty }, () => ({
        brand: item.brand,
        value: item.amount,
        code: genVoucherCode(),
        pin: genVoucherPin(),
        expiry,
        status: "active",
      }))
    )

    addOrder({
      id: orderId,
      userId: user.id,
      date: new Date().toISOString(),
      items: items.map((item: any) => ({ ...item })),
      subtotal,
      discount: discount + couponDiscount,
      coupon: coupon?.ok ? couponCode.toUpperCase() : null,
      total,
      paymentMethod: method,
      paymentId: genPaymentId(),
      paymentStatus: "paid",
      orderStatus: "completed",
      vouchers,
    })

    // Do not clear the cart after Buy Now.
    if (routeSource === "cart") {
      clearCart()
    }

    clearCheckout()
    toast("Payment successful")
    router.push(`/payment/success?id=${orderId}`)
  }

  const handleApplyCoupon = () => {
    const result = applyCoupon(couponCode, subtotal - discount)
    setCoupon(result)
    toast(result.msg)
  }

  return (
    <main className="min-h-screen bg-white text-[#071923]">
      <div className="wrap py-6 sm:py-9">
        <Link
          href="/gift-cards"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#1B5FD1]"
        >
          <ArrowLeft size={16} />
          Continue shopping
        </Link>

        <div className="mb-7 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1B5FD1]">
            Safalsevakendra Gift Cards
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Checkout
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Review your order and complete your purchase.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-5">

            {/* CUSTOMER DETAILS */}
            <section className={sectionClass}>
              <div className="flex items-center gap-3">
                <UserRound size={19} className="text-[#1B5FD1]" />
                <div>
                  <h2 className="font-semibold">Customer details</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Order confirmation information
                  </p>
                </div>
              </div>

              {user ? (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-1.5 text-xs text-slate-500">Name</p>
                    <div className="flex min-h-11 items-center rounded-lg border border-slate-200 px-3.5 text-sm">
                      <span className="truncate">
                        {user.name || user.fullName || "Customer"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="mb-1.5 text-xs text-slate-500">Email</p>
                    <div className="flex min-h-11 items-center rounded-lg border border-slate-200 px-3.5 text-sm">
                      <span className="truncate">
                        {user.email || "Not provided"}
                      </span>
                    </div>
                  </div>

                  {/* <div>
                    <p className="mb-1.5 text-xs text-slate-500">Phone</p>
                    <div className="flex min-h-11 items-center rounded-lg border border-slate-200 px-3.5 text-sm">
                      {user.phone || user.mobile || "Not provided"}
                    </div>
                  </div> */}
                </div>
              ) : (
                <div className="mt-4 rounded-lg border border-slate-200 p-4">
                  <p className="text-sm text-slate-600">
                    Login to view your customer details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setLoginOpen(true)}
                    className="mt-3 text-sm font-semibold text-[#1B5FD1] underline underline-offset-4"
                  >
                    Login to continue
                  </button>
                </div>
              )}
            </section>

            {/* GIFT CARDS */}
            <section className={sectionClass}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-semibold">Your gift cards</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </p>
                </div>
                <span className="rounded-full border border-[#F4A81D]/30 bg-[#FEF6E2] px-3 py-1 text-xs font-medium text-[#B8760A]">
                  {routeSource === "buyNow" ? "Buy Now" : "Cart"}
                </span>
              </div>

              <div className="mt-5 divide-y divide-slate-100">
                {items.map((item: any) => {
                  const line = lineOf(item)

                  return (
                    <div
                      key={item.key}
                      className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white p-1">
                        <Logo p={item} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {inr(item.amount)} × {item.qty}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-sm font-semibold">
                          {inr(line.s - line.d)}
                        </p>
                        {line.d > 0 && (
                          <p className="mt-1 text-xs font-medium text-[#B8760A]">
                            Saved {inr(line.d)}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* COUPON */}
            <section className={sectionClass}>
              <div className="flex items-center gap-3">
                <Tag size={19} className="text-[#1B5FD1]" />
                <div>
                  <h2 className="font-semibold">Apply coupon</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Enter your promotional code
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <input
                  className={inputClass}
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(event) => {
                    setCouponCode(event.target.value)
                    setCoupon(null)
                  }}
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="min-h-11 rounded-lg border border-[#1B5FD1]/40 px-5 text-sm font-semibold text-[#1B5FD1] transition-colors hover:bg-[#EEF4FD]"
                >
                  Apply
                </button>
              </div>

              {coupon && (
                <p
                  className={`mt-3 text-sm ${
                    coupon.ok ? "text-slate-700" : "text-red-600"
                  }`}
                >
                  {coupon.ok ? "✓ " : ""}
                  {coupon.msg}
                </p>
              )}
            </section>

            {/* PAYMENT METHOD */}
            <section className={sectionClass}>
              <div className="flex items-center gap-3">
                <LockKeyhole size={19} className="text-[#1B5FD1]" />
                <div>
                  <h2 className="font-semibold">Payment method</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Choose a  payment option
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["UPI", "Card", "Net Banking", "Wallet"].map((label) => (
                  <button
                    type="button"
                    key={label}
                    onClick={() => setMethod(label)}
                    className={`min-h-11 rounded-lg border px-3 text-sm font-medium transition ${
                      method === label
                        ? "border-[#1B5FD1] bg-[#1B5FD1] text-white"
                        : "border-slate-200 bg-white text-[#071923] hover:border-[#1B5FD1]/30 hover:bg-[#EEF4FD]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                {method === "UPI" && (
                  <div>
                    <label className="mb-1.5 block text-xs text-slate-500">
                      UPI ID
                    </label>
                    <input className={inputClass} defaultValue="vishal70@upi" />
                  </div>
                )}

                {method === "Card" && (
                  <>
                    <div>
                      <label className="mb-1.5 block text-xs text-slate-500">
                        Demo card number
                      </label>
                      <input
                        className={inputClass}
                        value={cardNumber}
                        onChange={(event) => setCardNumber(event.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1.5 block text-xs text-slate-500">
                          Expiry date
                        </label>
                        <input className={inputClass} defaultValue="12/30" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs text-slate-500">
                          CVV (demo)
                        </label>
                        <input className={inputClass} defaultValue="123" />
                      </div>
                    </div>

                    <p className="text-xs text-slate-500">
                      A card number ending in 0000 simulates a declined payment.
                    </p>
                  </>
                )}

                {method === "Net Banking" && (
                  <div>
                    <label className="mb-1.5 block text-xs text-slate-500">
                      Select bank
                    </label>
                    <select className={inputClass} defaultValue="HDFC Bank">
                      <option>HDFC Bank</option>
                      <option>SBI</option>
                      <option>ICICI Bank</option>
                    </select>
                  </div>
                )}

                {method === "Wallet" && (
                  <div>
                    <label className="mb-1.5 block text-xs text-slate-500">
                      Select wallet
                    </label>
                    <select className={inputClass} defaultValue="Paytm Wallet">
                      <option>Paytm Wallet</option>
                      <option>PhonePe Wallet</option>
                    </select>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold">Order summary</h2>
              <p className="mt-1 text-xs text-slate-500">
                Price details
              </p>

              <div className="mt-5 space-y-4 border-b border-slate-100 pb-5 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-slate-500">Subtotal</span>
                  <span>{inr(subtotal)}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-slate-500">Discount</span>
                  <span className="font-medium text-[#B8760A]">
                    −{inr(discount)}
                  </span>
                </div>

                {couponDiscount > 0 && (
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Coupon discount</span>
                    <span className="font-medium text-[#B8760A]">
                      −{inr(couponDiscount)}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 py-5">
                <span className="font-semibold">Total payable</span>
                <span className="text-xl font-bold text-[#1B5FD1]">
                  {inr(total)}
                </span>
              </div>

              {error && (
                <p className="mb-4 rounded-lg border border-red-200 p-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={pay}
                disabled={paymentStep >= 0 || items.length === 0}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#1B5FD1] px-4 text-sm font-semibold text-white shadow-md shadow-[#1B5FD1]/25 transition hover:bg-[#154CB0] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <LockKeyhole size={16} />
                {error ? "Retry payment" : "Pay now"} · {inr(total)}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Demo checkout only. Do not enter real card details.
              </p>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-xs leading-5 text-slate-500">
                  Your selected gift cards and final amount are shown above before payment.
                </p>
              </div>
            </section>
          </aside>
        </div>
      </div>

      {/* PAYMENT PROCESSING */}
      <AnimatePresence>
        {paymentStep >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/40 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
            >
              <h2 className="text-center text-lg font-semibold">
                Processing payment
              </h2>
              <p className="mt-1 text-center text-sm text-slate-500">
                Please keep this page open.
              </p>

              <div className="mt-6 space-y-4">
                {steps.map((label, index) => (
                  <div
                    key={label}
                    className={`flex items-center gap-3 text-sm ${
                      index <= paymentStep ? "text-[#071923]" : "text-slate-400"
                    }`}
                  >
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border ${
                        index < paymentStep || paymentStep === 4
                          ? "border-[#1B5FD1] bg-[#1B5FD1] text-white"
                          : index === paymentStep
                            ? "border-[#F4A81D] text-[#B8760A]"
                            : "border-slate-200"
                      }`}
                    >
                      {index < paymentStep || paymentStep === 4 ? (
                        <Check size={13} />
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}