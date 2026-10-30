
"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Minus,
  Plus,
  ShoppingBag,
  ArrowRight,
  Gift,
} from "lucide-react";

import { useApp } from "@/lib/store";
import { inr, lineOf } from "@/lib/data";
import Logo from "@/components/Logo";

/* =====================================================
   THEME — SAFALSEVAKENDRA
===================================================== */

const BLUE = "#0757C8";
const BLUE_DARK = "#06449D";
const ORANGE = "#FF8A00";

/* =====================================================
   CART TOTALS
===================================================== */

export const totals = (cart: any[]) =>
  cart.reduce(
    (acc, item) => {
      const line = lineOf(item);

      return {
        sub: acc.sub + line.s,
        disc: acc.disc + line.d,
      };
    },
    {
      sub: 0,
      disc: 0,
    }
  );

/* =====================================================
   CART DRAWER
===================================================== */

export default function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    setQty,
    startCartCheckout,
  } = useApp();

  const router = useRouter();

  const t = totals(cart);
  const total = Math.max(0, t.sub - t.disc);

  const itemCount = cart.reduce(
    (sum: number, item: any) => sum + item.qty,
    0
  );

  const closeCart = () => setCartOpen(false);

  const handleCheckout = () => {
    if (!cart.length) return;

    const started = startCartCheckout();

    if (!started) return;

    setCartOpen(false);
    router.push("/checkout?source=cart");
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* BACKDROP */}
          <motion.button
            type="button"
            aria-label="Close cart"
            className="fixed inset-0 z-50 cursor-default bg-slate-950/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* DRAWER */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 260,
            }}
            className="fixed inset-y-0 right-0 z-[51] flex w-full max-w-[420px] flex-col overflow-hidden bg-white text-slate-900 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* HEADER */}
            <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#0757C8]">
                  <ShoppingBag size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="text-lg font-bold tracking-tight text-slate-900">
                    Your Cart
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {itemCount} {itemCount === 1 ? "item" : "items"} in
                    your bag
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeCart}
                className="grid h-10 w-10 place-items-center border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0757C8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0757C8]"
                aria-label="Close cart"
              >
                <X size={19} />
              </button>
            </header>

            {/* CART CONTENT */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cart.length === 0 ? (
                /* EMPTY CART */
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0757C8]">
                    <ShoppingBag size={25} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-slate-900">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 max-w-[260px] text-sm leading-6 text-slate-500">
                    Explore our gift cards and add your favourites to
                    your cart.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setCartOpen(false);
                      router.push("/gift-cards");
                    }}
                    className="group mt-5 inline-flex min-h-11 items-center justify-center gap-2 bg-[#0757C8] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#06449D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0757C8] focus-visible:ring-offset-2"
                  >
                    Explore Gift Cards
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              ) : (
                /* CART ITEMS */
                <div className="divide-y divide-slate-200">
                  {cart.map((item: any) => {
                    const line = lineOf(item);

                    return (
                      <article
                        key={item.key}
                        className="flex gap-3 py-5 first:pt-1"
                      >
                        {/* PRODUCT LOGO */}
                        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden border border-slate-200 bg-white p-2">
                          <Logo p={item} />
                        </div>

                        {/* PRODUCT DETAILS */}
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-semibold text-slate-900">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-xs text-slate-500">
                            {inr(item.amount)} per card
                          </p>

                          {line.d > 0 && (
                            <p className="mt-1 text-xs font-medium text-emerald-700">
                              You save {inr(line.d)}
                            </p>
                          )}

                          <div className="mt-3 flex items-center justify-between gap-3">
                            {/* QUANTITY CONTROLS */}
                            <div className="flex h-9 items-center border border-slate-200">
                              <button
                                type="button"
                                className="grid h-9 w-8 place-items-center text-slate-600 transition-colors hover:bg-[#EFF6FF] hover:text-[#0757C8] disabled:cursor-not-allowed disabled:opacity-40"
                                onClick={() =>
                                  setQty(item.key, item.qty - 1)
                                }
                                disabled={item.qty <= 1}
                                aria-label={`Decrease quantity of ${item.title}`}
                              >
                                <Minus size={14} />
                              </button>

                              <span className="min-w-8 text-center text-sm font-semibold text-slate-900">
                                {item.qty}
                              </span>

                              <button
                                type="button"
                                className="grid h-9 w-8 place-items-center text-slate-600 transition-colors hover:bg-[#EFF6FF] hover:text-[#0757C8]"
                                onClick={() =>
                                  setQty(item.key, item.qty + 1)
                                }
                                aria-label={`Increase quantity of ${item.title}`}
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <p className="shrink-0 text-sm font-bold text-slate-900">
                              {inr(line.s - line.d)}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

            {/* PRICE SUMMARY */}
            {cart.length > 0 && (
              <footer className="border-t border-slate-200 bg-white px-5 pb-5 pt-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-medium text-slate-900">
                      {inr(t.sub)}
                    </span>
                  </div>

                  {t.disc > 0 && (
                    <div className="flex justify-between gap-3">
                      <span className="text-emerald-700">
                        Total discount
                      </span>

                      <span className="font-medium text-emerald-700">
                        −{inr(t.disc)}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
                    <div>
                      <p className="font-semibold text-slate-900">
                        Total
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        After applicable discounts
                      </p>
                    </div>

                    <p className="text-xl font-bold tracking-tight text-slate-900">
                      {inr(total)}
                    </p>
                  </div>
                </div>

                {/* CHECKOUT */}
                <button
                  type="button"
                  className="group mt-5 flex min-h-12 w-full items-center justify-center gap-2 bg-[#0757C8] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#06449D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0757C8] focus-visible:ring-offset-2"
                  onClick={handleCheckout}
                >
                  <Gift size={17} strokeWidth={1.8} />

                  Checkout Securely

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                  Review your order before proceeding to checkout.
                </p>

                <div className="mt-3 h-0.5 w-full bg-gradient-to-r from-[#0757C8] via-[#0757C8] to-[#FF8A00]" />
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
