
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Gift } from "lucide-react";
import { inr } from "@/lib/data";

interface PaymentItem {
  giftCardId?: string;
  giftCardName: string;
  giftCardBrand?: string;
  brand?: string;
  denomination: number;
  quantity: number;
  purchaseAmount?: number;
  discountAmount?: number;
  discountPercent?: number;
  payableAmount?: number;
}

interface PaymentDetails {
  orderId?: string;
  items?: PaymentItem[];
  giftCardName?: string;
  giftCardId?: string;
  denomination?: number;
  quantity?: number;
  purchaseAmount?: number;
  discountAmount?: number;
  payableAmount?: number;
}

const BRAND_IMAGES: Record<string, string> = {
  ajio: "/brands/ajio.png",
  amazon: "/brands/amazon.png",
  apple: "/brands/apple.png",
  bookmyshow: "/brands/bookmyshow.png",
  cleartrip: "/brands/cleartrip.png",
  croma: "/brands/croma.png",
  decathlon: "/brands/decathlon.png",
  dominos: "/brands/dominos.png",
  firstcry: "/brands/firstcry.png",
  flipkart: "/brands/flipkart.png",
  googleplay: "/brands/google-play.png",
  ikea: "/brands/ikea.png",
  ixigo: "/brands/ixigo.png",
  lenskart: "/brands/lenskart.png",
  lifestyle: "/brands/lifestyle.png",
  makemytrip: "/brands/makemytrip.png",
  mcdonalds: "/brands/mcdonalds.png",
  meesho: "/brands/meesho.png",
  myntra: "/brands/myntra.png",
  netflix: "/brands/netflix.png",
  nykaafashion: "/brands/nykaa-fashion.png",
  oyo: "/brands/oyo.png",
  pepperfry: "/brands/pepperfry.png",
  pvr: "/brands/pvr.png",
  reliancedigital: "/brands/reliance-digital.png",
  rupay: "/brands/rupay.png",
  samsung: "/brands/samsung.png",
  shoppersstop: "/brands/shoppers-stop.png",
  sonyliv: "/brands/sonyliv.png",
  spotify: "/brands/spotify.png",
  starbucks: "/brands/starbucks.png",
  swiggy: "/brands/swiggy.png",
  tatacliq: "/brands/tata-cliq.png",
  uber: "/brands/uber.png",
  westside: "/brands/westside.png",
  zomato: "/brands/zomato.png",
};

function getBrandImage(item: PaymentItem) {
  const candidates = [
    item.giftCardBrand,
    item.brand,
    item.giftCardName,
    item.giftCardId,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;

    const normalized = candidate
      .toLowerCase()
      .replace(/gift\s*card/gi, "")
      .replace(/[^a-z0-9]/g, "");

    if (BRAND_IMAGES[normalized]) {
      return BRAND_IMAGES[normalized];
    }
  }

  return null;
}

function BrandLogo({ item }: { item: PaymentItem }) {
  const [imageError, setImageError] = useState(false);
  const image = getBrandImage(item);

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2">
      {image && !imageError ? (
        <img
          src={image}
          alt={item.giftCardName || "Gift Card"}
          className="h-full w-full object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <Gift size={25} className="text-[#1B5FD1]" />
      )}
    </div>
  );
}

export default function PaymentSuccess() {
  const [details, setDetails] = useState<PaymentDetails | null>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(
        "safalseva_payment_details"
      );

      if (saved) {
        setDetails(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Unable to load order details:", error);
    }
  }, []);

  if (!details) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
        <p className="text-sm text-slate-500">
          Loading order details...
        </p>
      </main>
    );
  }

  // SUPPORT MULTIPLE AND OLD SINGLE GIFT CARD ORDERS
  const giftCards: PaymentItem[] = Array.isArray(details.items)
    ? details.items
    : details.giftCardName
      ? [
          {
            giftCardId: details.giftCardId,
            giftCardName: details.giftCardName,
            denomination: Number(details.denomination || 0),
            quantity: Number(details.quantity || 0),
            purchaseAmount: details.purchaseAmount,
            discountAmount: details.discountAmount,
            payableAmount: details.payableAmount,
          },
        ]
      : [];

  const totalQuantity = giftCards.reduce(
    (sum, item) => sum + Number(item.quantity || 0),
    0
  );

  const totalPurchaseAmount = giftCards.reduce(
    (sum, item) =>
      sum +
      Number(
        item.purchaseAmount ??
          Number(item.denomination || 0) *
            Number(item.quantity || 0)
      ),
    0
  );

  const totalDiscount = Number(
    details.discountAmount ??
      giftCards.reduce(
        (sum, item) => sum + Number(item.discountAmount || 0),
        0
      )
  );

  const totalPayable = Number(
    details.payableAmount ??
      totalPurchaseAmount - totalDiscount
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

        {/* SUCCESS HEADER */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
            <span className="text-3xl font-semibold text-green-600">
              ✓
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Order Created Successfully!
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Your order has been created successfully. Thank you for
            choosing SafalSeva Kendra.
          </p>
        </div>

        {/* ORDER ID */}
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Order ID</p>

          <p className="mt-1 break-all text-sm font-semibold text-slate-900">
            {details.orderId || "—"}
          </p>
        </div>

        {/* GIFT CARD DETAILS */}
        <div className="my-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900">
              Gift Card Details
            </h2>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1B5FD1]">
              {giftCards.length}{" "}
              {giftCards.length === 1 ? "Card" : "Cards"}
            </span>
          </div>

          <div className="space-y-3">
            {giftCards.map((item, index) => {
              const denomination = Number(item.denomination || 0);
              const quantity = Number(item.quantity || 0);

              const itemTotal = Number(
                item.purchaseAmount ?? denomination * quantity
              );

              const itemDiscount = Number(
                item.discountAmount || 0
              );

              const itemPayable = Number(
                item.payableAmount ?? itemTotal - itemDiscount
              );

              return (
                <div
                  key={`${item.giftCardId || item.giftCardName}-${index}`}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  {/* BRAND AND NAME */}
                  <div className="mb-4 flex items-center gap-3">
                    <BrandLogo item={item} />

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-400">
                        Gift Card {index + 1}
                      </p>

                      <h3 className="mt-1 break-words text-sm font-bold text-slate-900">
                        {item.giftCardName}
                      </h3>

                      {item.giftCardId && (
                        <p className="mt-1 text-xs text-slate-500">
                          ID: {item.giftCardId}
                        </p>
                      )}
                    </div>

                    <span className="shrink-0 rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#1B5FD1]">
                      × {quantity}
                    </span>
                  </div>

                  {/* ITEM DETAILS */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">
                        Denomination
                      </span>

                      <span className="font-semibold text-slate-900">
                        {inr(denomination)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">
                        Quantity
                      </span>

                      <span className="font-semibold text-slate-900">
                        {quantity}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">
                        Item Total
                      </span>

                      <span className="font-semibold text-slate-900">
                        {inr(itemTotal)}
                      </span>
                    </div>

                    {itemDiscount > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">
                          Discount
                        </span>

                        <span className="font-semibold text-green-600">
                          -{inr(itemDiscount)}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-sm">
                      <span className="font-semibold text-slate-900">
                        Payable Amount
                      </span>

                      <span className="font-bold text-[#1B5FD1]">
                        {inr(itemPayable)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PAYMENT SUMMARY */}
        <div className="space-y-4 border-t border-slate-200 pt-5">
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-slate-500">
              Total Gift Cards
            </span>

            <span className="font-semibold text-slate-900">
              {totalQuantity}
            </span>
          </div>

          <div className="flex justify-between gap-4 text-sm">
            <span className="text-slate-500">
              Purchase Amount
            </span>

            <span className="font-semibold text-slate-900">
              {inr(totalPurchaseAmount)}
            </span>
          </div>

          <div className="flex justify-between gap-4 text-sm">
            <span className="text-slate-500">
              Discount
            </span>

            <span className="font-semibold text-green-600">
              -{inr(totalDiscount)}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <span className="font-semibold text-slate-900">
              Total Amount
            </span>

            <span className="text-xl font-bold text-[#1B5FD1]">
              {inr(totalPayable)}
            </span>
          </div>
        </div>

        {/* CUSTOMER MESSAGE */}
        <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm leading-6 text-blue-900">
            Our team will contact you within 24 hours regarding your order.
          </p>
        </div>

        {/* CONTINUE SHOPPING */}
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
