"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import {
  products,
  categories,
  cardImg,
} from "@/lib/data"

import Logo from "@/components/Logo"

/* =====================================================
   SECTION IMAGES
===================================================== */

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
   SKELETON
===================================================== */

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
        rounded-2xl
        bg-slate-100
        ${className}
      `}
    >
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          animate-[listSkeletonShimmer_1.6s_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/80
          to-transparent
        "
      />
    </div>
  )
}

/* =====================================================
   LIST SKELETON
===================================================== */

function ListSkeleton() {
  return (
    <main className="min-h-screen bg-white">
      <div className="wrap py-8 sm:py-9 lg:py-10">

        <div className="mb-6 space-y-3">
          <SkeletonBlock className="h-10 w-64 rounded-xl sm:h-11 sm:w-72" />

          <SkeletonBlock className="h-4 w-full max-w-md rounded-full" />
        </div>

        <div className="my-5 grid gap-3 sm:grid-cols-3">
          <SkeletonBlock className="h-12 w-full rounded-xl" />
          <SkeletonBlock className="h-12 w-full rounded-xl" />
          <SkeletonBlock className="h-12 w-full rounded-xl" />
        </div>

        <div className="mb-8 flex gap-2 overflow-hidden">
          {Array.from({ length: 7 }).map((_, i) => (
            <SkeletonBlock
              key={i}
              className={`
                h-11
                shrink-0
                rounded-full
                ${
                  i % 3 === 0
                    ? "w-20"
                    : i % 3 === 1
                      ? "w-28"
                      : "w-24"
                }
              `}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-100
                bg-white
                shadow-sm
              "
            >
              <div className="relative h-48 w-full overflow-hidden sm:h-52">
                <SkeletonBlock className="h-full w-full rounded-none" />

                <SkeletonBlock className="absolute right-3 top-3 h-7 w-20 rounded-full" />
              </div>

              <div className="flex items-center gap-3 px-4 py-4">
                <SkeletonBlock className="h-11 w-11 shrink-0 rounded-xl" />

                <div className="min-w-0 flex-1 space-y-2">
                  <SkeletonBlock className="h-4 w-32 rounded-full" />
                  <SkeletonBlock className="h-3 w-24 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes listSkeletonShimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  )
}

/* =====================================================
   MAIN LIST
===================================================== */

export default function List() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("All")
  const [sort, setSort] = useState("popular")
  const [minD, setMinD] = useState(0)

  const [loading, setLoading] = useState(true)

  /* =====================================================
     INITIAL LOAD
  ===================================================== */

  useEffect(() => {
    const s = new URLSearchParams(
      window.location.search
    )

    setQ(s.get("q") || "")
    setCat(s.get("category") || "All")

    const loadPage = async () => {
      if (document.readyState !== "complete") {
        await new Promise<void>((resolve) => {
          window.addEventListener(
            "load",
            () => resolve(),
            { once: true }
          )
        })
      }

      const images = Array.from(
        document.images
      )

      await Promise.all(
        images.map((img) => {
          if (img.complete) {
            return Promise.resolve()
          }

          return new Promise<void>((resolve) => {
            img.addEventListener(
              "load",
              () => resolve(),
              { once: true }
            )

            img.addEventListener(
              "error",
              () => resolve(),
              { once: true }
            )
          })
        })
      )

      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve()
          })
        })
      })

      await new Promise((resolve) =>
        setTimeout(resolve, 250)
      )

      setLoading(false)
    }

    loadPage()
  }, [])

  /* =====================================================
     SKELETON
  ===================================================== */

  if (loading) {
    return <ListSkeleton />
  }

  /* =====================================================
     FILTER PRODUCTS
  ===================================================== */

  let l = products.filter(
    (p) =>
      (cat === "All" ||
        p.category === cat) &&
      p.discount >= minD &&
      (p.brand + p.category)
        .toLowerCase()
        .includes(q.toLowerCase())
  )

  /* =====================================================
     SORT
  ===================================================== */

  l = [...l].sort((a, b) =>
    sort === "discount"
      ? b.discount - a.discount
      : sort === "new"
        ? b.id.localeCompare(a.id)
        : sort === "rating"
          ? b.rating - a.rating
          : Number(b.popular) -
            Number(a.popular)
  )

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-b
        from-[#EEF4FD]/60
        via-white
        to-white
      "
    >
      <div className="wrap py-8 sm:py-9 lg:py-10">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-7">
          <h1
            className="
              text-3xl
              font-bold
              tracking-tight
              text-ink
              sm:text-4xl
            "
          >
            All Gift Cards
          </h1>

          <p
            className="
              mt-1.5
              text-sm
              leading-6
              text-mute
            "
          >
            Explore premium gift cards from
            your favourite brands.
          </p>
        </div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <div
          className="
            my-5
            rounded-2xl
            border
            border-slate-100
            bg-white
            p-2
            shadow-[0_5px_22px_rgba(15,23,42,0.04)]
            sm:p-3
          "
        >
          <div className="grid gap-3 sm:grid-cols-3">

            {/* SEARCH */}
            <div className="relative">
              <svg
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />
                <path d="m20 20-3.5-3.5" />
              </svg>

              <input
                className="
                  inp
                  pl-10
                  transition-all
                  duration-200
                  focus:border-[#1B5FD1]/40
                  focus:ring-4
                  focus:ring-[#1B5FD1]/10
                "
                placeholder="Search"
                value={q}
                onChange={(e) =>
                  setQ(e.target.value)
                }
              />
            </div>

            {/* SORT */}
            <select
              className="
                inp
                cursor-pointer
                transition-all
                duration-200
                focus:border-[#1B5FD1]/40
                focus:ring-4
                focus:ring-[#1B5FD1]/10
              "
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="popular">
                Popular
              </option>

              <option value="new">
                Newest
              </option>

              <option value="discount">
                Highest Discount
              </option>

              <option value="rating">
                Top Rated
              </option>
            </select>

            {/* DISCOUNT */}
            <select
              className="
                inp
                cursor-pointer
                transition-all
                duration-200
                focus:border-[#1B5FD1]/40
                focus:ring-4
                focus:ring-[#1B5FD1]/10
              "
              value={minD}
              onChange={(e) =>
                setMinD(+e.target.value)
              }
            >
              <option value={0}>
                Any discount
              </option>

              <option value={5}>
                5%+ off
              </option>

              <option value={8}>
                8%+ off
              </option>
            </select>
          </div>
        </div>

        {/* =================================================
            CATEGORIES
        ================================================= */}

        <div className="mb-8">
          <div className="mb-3">
            <h2 className="text-sm font-bold text-ink">
              Categories
            </h2>
          </div>

          <div className="snap gap-2 pb-1">
            {[
              "All",
              ...categories.map(
                (c) => c.name
              ),
            ].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`
                  min-h-11
                  shrink-0
                  rounded-full
                  px-5
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    cat === c
                      ? `
                        bg-[#1B5FD1]
                        text-white
                        shadow-[0_5px_16px_rgba(27,95,209,0.25)]
                      `
                      : `
                        border
                        border-slate-200
                        bg-white
                        text-slate-600
                        hover:border-[#1B5FD1]/30
                        hover:bg-[#EEF4FD]
                        hover:text-[#1B5FD1]
                      `
                  }
                `}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* =================================================
            RESULT COUNT
        ================================================= */}

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
            {cat === "All"
              ? "Gift Cards"
              : cat}
          </h2>

          <span className="text-xs text-mute">
            {l.length}{" "}
            {l.length === 1
              ? "card"
              : "cards"}
          </span>
        </div>

        {/* =================================================
            PRODUCTS
        ================================================= */}

        {l.length === 0 ? (
          <div
            className="
              py-16
              text-center
            "
          >
            <p className="text-sm text-mute">
              No gift cards found for “{q}”.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {l.map((p) => (
              <Link
                key={p.id}
                href={`/gift-cards/${p.slug}`}
                className="
                  group
                  block
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-100
                  bg-white
                  shadow-[0_4px_20px_rgba(15,23,42,0.045)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#1B5FD1]/20
                  hover:shadow-[0_14px_34px_rgba(27,95,209,0.12)]
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    relative
                    h-48
                    w-full
                    overflow-hidden
                    bg-slate-50
                    sm:h-52
                  "
                >
                  <img
                    src={
                      sectionImages[p.brand] ||
                      cardImg(p)
                    }
                    alt={`${p.brand} Gift Card`}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />

                  {/* DISCOUNT */}
                  <span
                    className="
                      absolute
                      right-3
                      top-3
                      rounded-full
                      bg-[#F4A81D]
                      px-3
                      py-1
                      text-xs
                      font-bold
                      text-white
                      shadow-md
                    "
                  >
                    {p.discount}% OFF
                  </span>
                </div>

                {/* DETAILS */}
                <div className="flex items-center gap-3 px-4 py-4">

                  {/* LOGO */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-xl
                      border
                      border-slate-100
                      bg-white
                      transition-all
                      duration-300
                      group-hover:border-[#1B5FD1]/20
                      group-hover:shadow-sm
                    "
                  >
                    <Logo
                      p={p}
                      size={34}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        text-sm
                        font-bold
                        text-ink
                        transition-colors
                        duration-200
                        group-hover:text-[#1B5FD1]
                        sm:text-base
                      "
                    >
                      {p.title}
                    </p>

                    <p className="mt-1 text-xs text-mute">
                      ★{" "}
                      {p.rating.toFixed(1)}
                      {" · "}
                      {p.category}
                    </p>
                  </div>

                  {/* ARROW */}
                  <span
                    className="
                      ml-auto
                      shrink-0
                      text-sm
                      text-slate-300
                      transition-all
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:text-[#1B5FD1]
                    "
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}