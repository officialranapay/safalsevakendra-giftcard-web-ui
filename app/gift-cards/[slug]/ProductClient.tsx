"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

import {
  bySlug,
  inr,
  cardImg,
} from "@/lib/data"

import { useApp } from "@/lib/store"
import Logo from "@/components/Logo"


const sectionImages: Record<string, string> = {
  Ajio: "/section/ajio1.png",
  Amazon: "/section/amazon1.png",
  Apple: "/section/apple1.png",
  BookMyShow: "/section/bookmyshow1.png",
  Cleartrip: "/section/cleartrip1.png",
  Croma: "/section/croma1.png",
  Decathlon: "/section/decathlon1.png",
  Dominos: "/section/dominos1.png",
  FirstCry: "/section/firstcry1.png",
  Flipkart: "/section/Flipkart1.png",
  "Google Play": "/section/google-play1.png",
  IKEA: "/section/ikea1.png",
  Ixigo: "/section/ixigo1.png",
  Lenskart: "/section/lenskart1.png",
  Lifestyle: "/section/lifestyle1.png",
  MakeMyTrip: "/section/makemytrip1.png",
  McDonalds: "/section/mcdonalds1.png",
  Meesho: "/section/meesho1.png",
  Myntra: "/section/myntra1.png",
  Netflix: "/section/netflix1.png",
  "Nykaa Fashion": "/section/nykaa-fashion1.png",
  OYO: "/section/oyo1.png",
  Pepperfry: "/section/pepperfry1.png",
  PVR: "/section/pvr1.png",
  "Reliance Digital": "/section/reliance-digital1.png",
  "Shoppers Stop": "/section/shoppers-stop1.png",
  SonyLIV: "/section/sonyliv1.png",
  Spotify: "/section/spotify1.png",
  Starbucks: "/section/starbucks1.png",
  Samsung: "/section/sumsung1.png",
  Swiggy: "/section/swiggy1.png",
  "Tata Cliq": "/section/tata-cliq1.png",
  Uber: "/section/uber1.png",
  Westside: "/section/westside1.png",
  Zomato: "/section/zomato1.png",
  RuPay: "/section/rupay.png",
}


/* =====================================================
   PRODUCT PAGE SKELETON
   ===================================================== */

function ProductSkeleton() {
  return (
    <main className="min-h-screen bg-white">
      <div className="wrap grid gap-8 py-8 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="card overflow-hidden bg-[#EEF4FD] p-3 sm:p-5">
          <div className="overflow-hidden rounded-2xl bg-slate-200">
            <div className="relative aspect-[8/5] w-full overflow-hidden">

              <SkeletonBlock className="absolute inset-0 rounded-none" />

              <SkeletonBlock
                className="
                  absolute
                  right-4
                  top-4
                  h-7
                  w-20
                  rounded-full
                "
              />

            </div>
          </div>

          <div className="px-5 pb-8 pt-5 sm:px-8 sm:pb-9">

            <SkeletonBlock className="h-3 w-36 rounded-full" />

            <SkeletonBlock className="mt-3 h-8 w-64 rounded-lg" />

            <div className="mt-4 space-y-2">
              <SkeletonBlock className="h-4 w-full rounded-full" />
              <SkeletonBlock className="h-4 w-[92%] rounded-full" />
              <SkeletonBlock className="h-4 w-[68%] rounded-full" />
            </div>

          </div>
        </div>


        {/* RIGHT DETAILS */}
        <div className="py-1">

          {/* BRAND + TITLE */}
          <div className="flex items-center gap-3">

            <SkeletonBlock className="h-12 w-12 shrink-0 rounded-xl" />

            <div className="min-w-0 flex-1 space-y-2">
              <SkeletonBlock className="h-8 w-56 max-w-full rounded-lg" />
              <SkeletonBlock className="h-4 w-36 rounded-full" />
            </div>

          </div>


          {/* DESCRIPTION */}
          <div className="mt-5 space-y-2">
            <SkeletonBlock className="h-4 w-full rounded-full" />
            <SkeletonBlock className="h-4 w-[94%] rounded-full" />
            <SkeletonBlock className="h-4 w-[72%] rounded-full" />
          </div>


          {/* VALIDITY */}
          <div className="mt-4">
            <SkeletonBlock className="h-4 w-[85%] rounded-full" />
          </div>


          {/* CHOOSE AMOUNT */}
          <SkeletonBlock className="mt-6 h-5 w-32 rounded-full" />

          <div className="mt-3 flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonBlock
                key={i}
                className="h-11 w-24 rounded-xl"
              />
            ))}
          </div>


          {/* QUANTITY */}
          <div className="mt-5 flex items-center gap-3">
            <SkeletonBlock className="h-4 w-16 rounded-full" />
            <SkeletonBlock className="h-10 w-12 rounded-xl" />
            <SkeletonBlock className="h-5 w-5 rounded-md" />
            <SkeletonBlock className="h-10 w-12 rounded-xl" />
          </div>


          {/* PRICE CARD */}
          <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

            <div className="space-y-3">

              <div className="flex justify-between">
                <SkeletonBlock className="h-4 w-20 rounded-full" />
                <SkeletonBlock className="h-4 w-20 rounded-full" />
              </div>

              <div className="flex justify-between">
                <SkeletonBlock className="h-4 w-20 rounded-full" />
                <SkeletonBlock className="h-4 w-20 rounded-full" />
              </div>

              <div className="flex justify-between pt-1">
                <SkeletonBlock className="h-6 w-20 rounded-lg" />
                <SkeletonBlock className="h-6 w-24 rounded-lg" />
              </div>

            </div>
          </div>


          {/* BUTTONS */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <SkeletonBlock className="h-12 w-full rounded-xl" />
            <SkeletonBlock className="h-12 w-full rounded-xl" />
          </div>


          {/* TERMS */}
          <div className="mt-6">

            <SkeletonBlock className="h-5 w-48 rounded-full" />

            <div className="mt-3 space-y-2">
              <SkeletonBlock className="h-4 w-full rounded-full" />
              <SkeletonBlock className="h-4 w-[82%] rounded-full" />
            </div>

          </div>

        </div>
      </div>


      <style jsx global>{`
        @keyframes productSkeletonShimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

    </main>
  )
}


function SkeletonBlock({
  className = "",
}: {
  className?: string
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        bg-slate-200
        ${className}
      `}
    >
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          animate-[productSkeletonShimmer_1.6s_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/70
          to-transparent
        "
      />
    </div>
  )
}


/* =====================================================
   PRODUCT PAGE
   ===================================================== */

export default function ProductClient() {

  const { slug } = useParams() as {
    slug: string
  }

  const p = bySlug(slug)

  const {
    addToCart,
    buyNow,
    setCartOpen,
  } = useApp()

  const router = useRouter()

  const [a, setA] = useState(1000)
  const [q, setQ] = useState(1)

  const [loading, setLoading] = useState(true)

  const image = p
    ? sectionImages[p.brand] || cardImg(p)
    : ""


  /* ================================================
     WAIT FOR PRODUCT IMAGE
     ================================================ */

  useEffect(() => {

    if (!p || !image) {
      setLoading(false)
      return
    }

    setLoading(true)

    const img = new Image()

    img.src = image

    const finishLoading = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLoading(false)
        })
      })
    }

    if (img.complete) {
      finishLoading()
    } else {
      img.onload = finishLoading
      img.onerror = finishLoading
    }

    return () => {
      img.onload = null
      img.onerror = null
    }

  }, [p, image])


  if (!p) {
    return (
      <div className="wrap py-20 text-center">
        Product unavailable.
      </div>
    )
  }


  if (loading) {
    return <ProductSkeleton />
  }


  const s = a * q

  const d = Math.round(
    (s * p.discount) / 100
  )


  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EEF4FD]/60 via-white to-white">

      <div
        className="
          wrap
          grid
          gap-7
          py-6
          sm:py-8
          lg:grid-cols-2
          lg:gap-10
        "
      >

        {/* =====================================================
            GIFT CARD IMAGE
            ===================================================== */}

        <div
          className="
            card
            overflow-hidden
            border
            border-slate-100
            bg-white
            p-2.5
            shadow-sm
            sm:p-4
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-[#EEF4FD]/70
            "
          >

            <img
              src={image}
              alt={p.title}
              className="
                block
                aspect-[8/5]
                w-full
                object-cover
                transition-transform
                duration-500
                hover:scale-[1.035]
              "
            />

            <span
              className="
                absolute
                right-4
                top-4
                rounded-full
                bg-[#F4A81D]
                px-3.5
                py-1.5
                text-xs
                font-bold
                text-white
                shadow-md
              "
            >
              {p.discount}% OFF
            </span>

          </div>


          <div className="px-3 pb-5 pt-5 sm:px-5 sm:pb-6">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#1B5FD1]
              "
            >
              Safalsevakendra Gift Card
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-bold
                tracking-[-0.025em]
                text-[#071923]
                sm:text-[28px]
              "
            >
              {p.title}
            </h2>

            <p
              className="
                mt-3
                max-w-[780px]
                text-sm
                font-medium
                leading-6
                text-[#315f91]
                sm:text-[15px]
                sm:leading-7
              "
            >
              Some gifts are remembered for what they are.
              The best ones are remembered for how they made
              someone feel. Give them the freedom to choose.
            </p>

          </div>

        </div>


        {/* =====================================================
            PRODUCT DETAILS
            ===================================================== */}

        <div className="min-w-0">

          {/* BRAND + TITLE */}
          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-slate-100
                bg-white
                shadow-sm
              "
            >
              <Logo p={p} />
            </div>


            <div className="min-w-0">

              <h1
                className="
                  truncate
                  text-2xl
                  font-bold
                  tracking-[-0.02em]
                  text-[#071923]
                  sm:text-3xl
                "
              >
                {p.title}
              </h1>


              <div
                className="
                  mt-1
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  text-sm
                  text-mute
                "
              >
{/* 
                <span
                  className="
                    rounded-full
                    bg-amber-50
                    px-2.5
                    py-1
                    font-semibold
                    text-amber-600
                  "
                >
                  ★ {p.rating.toFixed(1)}
                </span>

                <span>
                  {p.reviews} reviews
                </span> */}

              </div>

            </div>

          </div>


          {/* DESCRIPTION */}
          <p
            className="
              mt-5
              text-[15px]
              leading-7
              text-mute
            "
          >
            {p.desc}
          </p>


          {/* VALIDITY / DELIVERY */}
          <div
            className="
              mt-4
              rounded-xl
              border
              border-[#1B5FD1]/15
              bg-[#EEF4FD]/70
              px-4
              py-3
              text-sm
              font-medium
              text-[#315f91]
            "
          >
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              <span>
                Valid {p.validity}
              </span>

              <span>·</span>

              <span>
                {p.cashback}% cashback
              </span>

              <span>·</span>

              <span>
                Instant email/SMS delivery
              </span>
            </div>
          </div>


          {/* =====================================================
              CHOOSE AMOUNT
              ===================================================== */}

          <div className="mt-6">

            <div className="flex items-center justify-between">

              <h3
                className="
                  text-sm
                  font-bold
                  text-[#071923]
                "
              >
                Choose Amount
              </h3>

              <span
                className="
                  text-xs
                  font-medium
                  text-mute
                "
              >
                Select your value
              </span>

            </div>


            <div className="mt-3 flex flex-wrap gap-2.5">

              {p.denoms.map((x) => (

                <button
                  key={x}
                  onClick={() => setA(x)}
                  className={`
                    min-h-11
                    rounded-xl
                    border
                    px-4
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      a === x
                        ? `
                          border-[#1B5FD1]
                          bg-[#1B5FD1]
                          text-white
                          shadow-md
                          shadow-[#1B5FD1]/25
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-[#071923]
                          hover:border-[#1B5FD1]/30
                          hover:bg-[#EEF4FD]
                          hover:shadow-sm
                        `
                    }
                  `}
                >
                  {inr(x)}
                </button>

              ))}

            </div>

          </div>


          {/* =====================================================
              QUANTITY
              ===================================================== */}

          <div className="mt-5 flex items-center gap-3">

            <span
              className="
                text-sm
                font-semibold
                text-[#071923]
              "
            >
              Quantity
            </span>


            <div
              className="
                flex
                items-center
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-sm
              "
            >

              <button
                className="
                  flex
                  h-10
                  w-11
                  items-center
                  justify-center
                  text-lg
                  font-semibold
                  text-[#071923]
                  transition
                  hover:bg-[#EEF4FD]
                "
                onClick={() =>
                  setQ(Math.max(1, q - 1))
                }
              >
                −
              </button>


              <div
                className="
                  flex
                  h-10
                  min-w-11
                  items-center
                  justify-center
                  border-x
                  border-slate-200
                  px-3
                  text-sm
                  font-bold
                "
              >
                {q}
              </div>


              <button
                className="
                  flex
                  h-10
                  w-11
                  items-center
                  justify-center
                  text-lg
                  font-semibold
                  text-[#071923]
                  transition
                  hover:bg-[#EEF4FD]
                "
                onClick={() => setQ(q + 1)}
              >
                +
              </button>

            </div>

          </div>


          {/* =====================================================
              PRICE SUMMARY
              ===================================================== */}

          <div
            className="
              mt-5
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-4
              shadow-[0_8px_28px_rgba(15,23,42,0.05)]
              sm:p-5
            "
          >

            <div className="space-y-3 text-sm">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  text-mute
                "
              >
                <span>
                  Original
                </span>

                <span className="font-medium text-ink">
                  {inr(s)}
                </span>
              </div>


              <div
                className="
                  flex
                  items-center
                  justify-between
                  text-green-600
                "
              >
                <span>
                  Discount
                </span>

                <span className="font-semibold">
                  −{inr(d)}
                </span>
              </div>


              <div
                className="
                  my-1
                  border-t
                  border-dashed
                  border-slate-200
                "
              />


              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-base
                    font-bold
                    text-[#071923]
                  "
                >
                  You Pay
                </span>

                <span
                  className="
                    text-xl
                    font-bold
                    text-[#1B5FD1]
                  "
                >
                  {inr(s - d)}
                </span>

              </div>

            </div>

          </div>


          {/* =====================================================
              ACTION BUTTONS
              ===================================================== */}

          <div
            className="
              mt-4
              grid
              gap-3
              sm:grid-cols-2
            "
          >

            <button
              className="
                min-h-12
                rounded-xl
                border
                border-slate-200
                bg-white
                px-5
                text-sm
                font-bold
                text-[#071923]
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[#1B5FD1]/30
                hover:bg-[#EEF4FD]/70
                hover:shadow-md
              "
              onClick={() => {
                addToCart(p, a, q)
                setCartOpen(true)
              }}
            >
              Add to Cart
            </button>


            <button
              className="
                min-h-12
                rounded-xl
                bg-[#1B5FD1]
                px-5
                text-sm
                font-bold
                text-white
                shadow-md
                shadow-[#1B5FD1]/25
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#154CB0]
                hover:shadow-lg
                hover:shadow-[#1B5FD1]/30
              "
             onClick={() => {
  buyNow(p, a, q)
  router.push("/checkout?source=buyNow")
}}
            >
              Buy Now
            </button>

          </div>


          {/* =====================================================
              TERMS
              ===================================================== */}

          <details
            className="
              mt-5
              overflow-hidden
              rounded-xl
              border
              border-slate-100
              bg-white
            "
          >

            <summary
              className="
                cursor-pointer
                px-4
                py-3.5
                text-sm
                font-semibold
                text-[#071923]
                transition
                hover:bg-[#EEF4FD]/70
              "
            >
              Terms & how to redeem
            </summary>


            <div
              className="
                border-t
                border-slate-100
                px-4
                py-4
              "
            >

              <p
                className="
                  text-sm
                  leading-6
                  text-mute
                "
              >
                Enter voucher code and PIN at checkout
                on the brand’s site or app.
                Non-refundable once redeemed.
              </p>

            </div>

          </details>

        </div>

      </div>

    </main>
  )
}