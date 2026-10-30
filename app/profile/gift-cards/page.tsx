
"use client";

import { useEffect, useState } from "react";
import { Gift, ArrowRight, PackageOpen } from "lucide-react";

import { useApp } from "@/lib/store";
import Voucher from "@/components/Voucher";
import Logo from "@/components/Logo";

/* =====================================================
   SAFALSEVAKENDRA THEME
===================================================== */

const THEME = {
  blue: "#0757C8",
  blueDark: "#06449D",
  orange: "#FF8A00",
  ink: "#10264A",
  muted: "#64748B",
  lightBlue: "#EFF6FF",
  border: "#DFE9F8",
};

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
      className={`relative overflow-hidden rounded-lg bg-[#EAF1FB] ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[giftCardSkeleton_1.7s_infinite] bg-gradient-to-r from-transparent via-white/90 to-transparent" />
    </div>
  );
}

function MyCardsSkeleton() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EFF6FF] via-white to-white">
      <div className="wrap mx-auto max-w-3xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
        <div className="mb-8">
          <SkeletonBlock className="h-5 w-36 rounded-full" />
          <SkeletonBlock className="mt-4 h-10 w-56 sm:h-12" />
          <SkeletonBlock className="mt-3 h-4 w-72 max-w-full rounded-full" />
        </div>

        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#DFE9F8] bg-white p-4 shadow-[0_4px_20px_rgba(7,87,200,0.04)] sm:p-5"
            >
              <div className="flex items-center gap-4">
                <SkeletonBlock className="h-14 w-14 shrink-0 rounded-xl" />

                <div className="min-w-0 flex-1 space-y-3">
                  <SkeletonBlock className="h-5 w-40" />
                  <SkeletonBlock className="h-4 w-28 rounded-full" />
                  <SkeletonBlock className="h-3 w-52 max-w-full rounded-full" />
                </div>

                <SkeletonBlock className="hidden h-10 w-20 rounded-xl sm:block" />
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

/* =====================================================
   MY GIFT CARDS
===================================================== */

export default function MyCards() {
  const { orders, ready } = useApp();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ready) return;

    let cancelled = false;

    const finishLoading = async () => {
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

    void finishLoading();

    return () => {
      cancelled = true;
    };
  }, [ready]);

  if (!ready || loading) {
    return <MyCardsSkeleton />;
  }

  const vouchers = orders.flatMap((order: any) =>
    (order.vouchers || []).map((voucher: any) => ({
      ...voucher,
      orderId: order.id,
      orderItems: order.items || [],
    }))
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EFF6FF] via-white to-white">
      <div className="wrap mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16">
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
            All your purchased gift cards and vouchers, together in one place.
          </p>


        </header>

        {/* COLLECTION SUMMARY */}
        {vouchers.length > 0 && (
          <div className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-[#DCE9FC] bg-white px-4 py-3.5 shadow-[0_4px_18px_rgba(7,87,200,0.05)] sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0757C8]">
                <Gift size={20} aria-hidden="true" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#10264A]">
                  Your collection
                </p>
                <p className="mt-0.5 text-xs text-[#64748B]">
                  Your purchased vouchers
                </p>
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center rounded-full bg-[#FFF3E3] px-3 py-1.5 text-xs font-bold text-[#C66B00]">
              {vouchers.length}{" "}
              {vouchers.length === 1 ? "Card" : "Cards"}
            </span>
          </div>
        )}

        {/* EMPTY STATE */}
        {vouchers.length === 0 && (
          <div className="overflow-hidden rounded-2xl border border-[#DFE9F8] bg-white shadow-[0_8px_32px_rgba(7,87,200,0.06)]">
            <div className="h-1.5 bg-gradient-to-r from-[#0757C8] via-[#2685F5] to-[#FF8A00]" />

            <div className="px-5 py-14 text-center sm:px-10 sm:py-16">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D8E8FF] bg-[#EFF6FF] text-[#0757C8]">
                <PackageOpen size={30} strokeWidth={1.7} />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#10264A] sm:text-xl">
                Your collection starts here
              </h2>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#64748B]">
                You have no gift cards yet. Your purchased gift cards and
                vouchers will appear here.
              </p>

              <a
                href="/gift-cards"
                className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0757C8] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0757C8]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#06449D] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0757C8]/20"
              >
                Explore Gift Cards

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        )}

        {/* GIFT CARDS */}
        {vouchers.length > 0 && (
          <div className="space-y-4">
            {vouchers.map((voucher: any) => {
              const matchingItem =
                voucher.orderItems.find(
                  (item: any) =>
                    item.brand === voucher.brand ||
                    item.title === voucher.brand
                ) || {
                  brand: voucher.brand,
                  title: voucher.brand,
                };

              return (
                <article
                  key={voucher.code}
                  className="group relative overflow-hidden rounded-2xl border border-[#DFE9F8] bg-white p-3.5 shadow-[0_4px_20px_rgba(7,87,200,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#B9D5FF] hover:shadow-[0_12px_32px_rgba(7,87,200,0.09)] sm:p-5"
                >
                  
               

                  {/* BRAND LOGO AND NAME */}
                  <div className="mb-4 flex min-w-0 items-center gap-3 pt-1">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#DFE9F8] bg-[#F7FAFF] p-1.5 transition duration-300 group-hover:border-[#B9D5FF]">
                      <Logo p={matchingItem} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-sm font-bold text-[#10264A] sm:text-base">
                        {voucher.brand ||
                          matchingItem.title ||
                          "Gift card"}
                      </h2>

                      <p className="mt-1 break-all text-xs text-[#64748B]">
                        Order ID: {voucher.orderId}
                      </p>
                    </div>

                    <div className="hidden shrink-0 items-center gap-1.5 rounded-full border border-[#DCE9FC] bg-[#EFF6FF] px-3 py-1.5 sm:inline-flex">
                      

                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0757C8]">
                        Voucher
                      </span>
                    </div>
                  </div>

                  {/* VOUCHER */}
                  <div className="min-w-0 overflow-hidden rounded-xl">
                    <Voucher v={voucher} />
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* FOOTER */}
        <footer className="mt-8 border-t border-[#DFE9F8] pt-5 text-center">
          <p className="text-xs leading-5 text-[#64748B]">
            SafalSevaKendra{" "}
            <span className="mx-1 text-[#FF8A00]">•</span>
            Your gifts, all in one place.
          </p>
        </footer>
      </div>
    </main>
  );
}
