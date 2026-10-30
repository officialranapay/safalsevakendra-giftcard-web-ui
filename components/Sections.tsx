"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import {
  products,
  categories,
  cardImg,
  Product,
} from "@/lib/data"
import { MoveRight } from "lucide-react";
import Logo from "./Logo"
import DriftWall from "./DriftWall";
import InfiniteSpiral from "./InfiniteSpiral"
import SpotlightFrames from "./SpotlightFrames"
const up = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
  },
  transition: {
    duration: 0.5,
  },
}
const galleryItems = [
  {
    image: "/hero/amazon1.png",
    label: "Amazon",
    link: "/gift-cards/amazon-gift-card",
  },
  {
    image: "/hero/Flipkart1.png",
    label: "Flipkart",
    link: "/gift-cards/flipkart-gift-card",
  },
  {
    image: "/hero/meesho1.png",
    label: "Meesho",
    link: "/gift-cards/meesho-gift-card",
  },
  {
    image: "/hero/myntra1.png",
    label: "Myntra",
    link: "/gift-cards/myntra-gift-card",
  },
  {
    image: "/hero/swiggy1.png",
    label: "Swiggy",
    link: "/gift-cards/swiggy-gift-card",
  },
]
const icons: Record<string, string> = {
  Shopping: "/icon/Shopping.png",
  Food: "/icon/food.png",
  Fashion: "/icon/Fahion.png",
  Travel: "/icon/Travel.png",
  Entertainment: "/icon/Clapperboard.png",
  Electronics: "/icon/Electronics.png",
}

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

const premiumImages: Record<string, string> = {
  Ajio: "/primium/ajio.jpg",
  Amazon: "/primium/amazon.jpg",
  Apple: "/primium/apple.jpg",
  BookMyShow: "/primium/BookMyShow.jpg",
  Cleartrip: "/primium/Cleartrip.jpg",
  Croma: "/primium/croma.jpg",
  Decathlon: "/primium/Decathlon.jpg",
  Dominos: "/primium/domino.jpg",
  FirstCry: "/primium/firstcry.jpg",
  Flipkart: "/primium/flipkart.jpg",
  "Google Play": "/primium/googleplay.jpg",
  IKEA: "/primium/ikea.jpg",
  Ixigo: "/primium/ixigo.jpg",
  Lenskart: "/primium/lenskart.jpg",
  Lifestyle: "/primium/lifestyle.jpg",
  MakeMyTrip: "/primium/makemytrip.jpg",
  McDonalds: "/primium/mcdonald.jpg",
  Meesho: "/primium/meesho.jpg",
  Myntra: "/primium/myntra.jpg",
  Netflix: "/primium/netflix.jpg",
  "Nykaa Fashion": "/primium/naykaa.jpg",
  OYO: "/primium/oyo.jpg",
  Pepperfry: "/primium/peperrfry.jpg",
  PVR: "/primium/pvr.jpg",
  "Reliance Digital": "/primium/relianace-digital.jpg",
  RuPay: "/primium/rupay.jpg",
  "Shoppers Stop": "/primium/shopperstop.jpg",
  SonyLIV: "/primium/solyliv.jpg",
  Spotify: "/primium/spotify.jpg",
  Starbucks: "/primium/starbucks.jpg",
  Samsung: "/primium/sumsung.jpg",
  Swiggy: "/primium/swiggy.jpg",
  "Tata Cliq": "/primium/tatacliq.jpg",
  Uber: "/primium/uber.jpg",
  Westside: "/primium/westside.jpg",
  Zomato: "/primium/zomato.jpg",
}






export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#EEF4FD] via-white to-[#FEF6E2]">
      <div className="wrap w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 xl:py-16">
        {/* Hero heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto w-full max-w-4xl text-center"
        >
          

          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-[1.12] tracking-tight text-[#10213A] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            The Perfect Gift,
            <span className="mt-1 block bg-gradient-to-r from-[#1B5FD1] via-[#3B7BE0] to-[#F4A81D] bg-clip-text text-transparent">
              Delivered Instantly.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[92%] text-sm leading-6 text-[#64748B] sm:max-w-xl sm:text-base sm:leading-7 md:text-lg">
            Discover premium gift cards from the brands you love.
            Choose, pay, and send a thoughtful gift in just a few clicks.
          </p>

          <div className="mx-auto mt-6 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <Link
              href="/gift-cards"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#1B5FD1] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(27,95,209,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#154CB0] hover:shadow-[0_10px_24px_rgba(27,95,209,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5FD1] focus-visible:ring-offset-2 sm:w-auto"
            >
              Explore Gift Cards
              <span className="ml-1 inline-flex items-center" aria-hidden="true">
  <MoveRight
  size={15}
  strokeWidth={3}
  aria-hidden="true"
  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
/>
</span>
            </Link>

            <Link
              href="/#offers"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-[#F4A81D]/35 bg-white px-6 py-3 text-sm font-semibold text-[#B8760A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4A81D]/60 hover:bg-[#FEF6E2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4A81D] focus-visible:ring-offset-2 sm:w-auto"
            >
              View Offers
            </Link>
          </div>
        </motion.div>

        {/* Original SpotlightFrames hover-expand gallery */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="mt-8 h-[300px] w-full sm:mt-10 sm:h-[380px] md:mt-12 md:h-[430px] lg:mt-14"
        >
          <SpotlightFrames
            background="transparent"
            startIndex={2}
            images={galleryItems.map((item) => ({
              image: item.image,
              alt: `${item.label} gift card`,
              href: item.link,
            }))}
            track={{
              collapsedWidth: 96,
              expandedWidth: 360,
              gap: 8,
            }}
            panel={{
              height: 300,
              radius: 18,
              dim: 4,
            }}
            selector={{
              box: true,
              lines: true,
              lineLength: 60,
              thickness: 3,
              color: "#F4A81D",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}




export function Categories() {
  return (
    <section className="wrap py-10 sm:py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Shop by Category
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Explore gift cards from your favourite categories
          </p>
        </div>

        <Link
          href="/gift-cards"
          className="text-sm font-semibold text-[#1B5FD1] hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
        {categories.map((c) => (
          <Link
            key={c.name}
            href={`/gift-cards?category=${encodeURIComponent(c.name)}`}
            className="group relative flex min-h-[145px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-5 transition-colors duration-200 hover:border-[#1B5FD1] sm:min-h-[160px]"
          >
            <span className="absolute left-0 top-4 h-8 w-[3px] rounded-r-full bg-[#F4A81D] opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FD] p-3 transition-colors group-hover:bg-[#E3ECFB]">
              <img
                src={icons[c.name]}
                alt={`${c.name} category`}
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="mt-3 text-center text-sm font-semibold text-slate-800 group-hover:text-[#1B5FD1]">
              {c.name}
            </h3>

            <span className="mt-1 text-xs text-slate-500">
              {c.count} cards
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}



export function Popular() {
  return (
    <section className="wrap py-10 sm:py-12 lg:py-14">
      {/* Section heading */}
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Popular Brands
          </h2>
          <p className="mt-1.5 text-sm text-mute">
            Explore gift cards from top brands.
          </p>
        </div>

        <Link
          href="/gift-cards"
          className="hidden shrink-0 text-sm font-semibold text-[#1B5FD1] hover:underline sm:inline-flex sm:items-center sm:gap-1"
        >
          View all <span>→</span>
        </Link>
      </div>

      {/* Brand cards */}
      <div className="snap flex gap-3 overflow-x-auto pb-2 sm:gap-4 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
        {products
          .filter((p) => p.popular)
          .map((p) => (
            <Link
              key={p.id}
              href={`/gift-cards/${p.slug}`}
              className="group flex w-[145px] shrink-0 snap-start flex-col rounded-xl border border-slate-200 bg-white p-3 transition-colors duration-200 hover:border-[#1B5FD1]/50 sm:w-[160px] sm:p-4 lg:w-auto"
            >
              {/* Brand logo */}
              <div className="flex h-[90px] items-center justify-center rounded-lg bg-slate-50 p-3 transition-colors group-hover:bg-[#EEF4FD]">
                <Logo p={p} size={68} />
              </div>

              {/* Brand name */}
              <div className="mt-3">
                <h3 className="truncate text-sm font-semibold text-ink transition-colors group-hover:text-[#1B5FD1]">
                  {p.brand}
                </h3>

                <div className="mt-1 flex items-center justify-between gap-2">
                  <span className="text-xs text-mute">
                    Gift Card
                  </span>
                  <span className="text-sm text-[#F4A81D]">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {/* Mobile View All */}
      <div className="mt-5 sm:hidden">
        <Link
          href="/gift-cards"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-[#1B5FD1] hover:text-[#1B5FD1]"
        >
          View All Brands
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}


const sub: Record<string, string> = {
  Shopping: "Everyday essentials, fashion and more.",
  Food: "Meals, coffee and treats.",
  Fashion: "Style for every wardrobe.",
  Travel: "Trips, rides and stays.",
  Entertainment: "Movies, music and streaming.",
  Electronics: "Gadgets, devices and apps.",
}

/* =========================================================
   CATEGORY-SPECIFIC IMAGES
   Har category ke liye alag visual sequence
========================================================= */

const categoryImages: Record<string, string[]> = {
  Shopping: [
    "/section/amazon1.png",
    "/section/Flipkart1.png",
    "/section/meesho1.png",
  ],

  Food: [
    "/section/swiggy1.png",
    "/section/zomato1.png",
    "/section/dominos1.png",
  ],

  Fashion: [
    "/section/myntra1.png",
    "/section/ajio1.png",
    "/section/westside1.png",
  ],

  Travel: [
    "/section/makemytrip1.png",
    "/section/cleartrip1.png",
    "/section/ixigo1.png",
  ],

  Entertainment: [
    "/section/bookmyshow1.png",
    "/section/netflix1.png",
    "/section/sonyliv1.png",
  ],

  Electronics: [
    "/section/apple1.png",
    "/section/croma1.png",
    "/section/reliance-digital1.png",
  ],
}

export function CategoryRow({
  category,
}: {
  category: string
}) {
  const l = products
    .filter((p) => p.category === category)
    .slice(0, 5)

  const images = categoryImages[category] || []

  return (
    <section className="wrap py-8">
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-5 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            {/* CATEGORY ICON */}
            <span
              className="
                grid
                h-10
                w-10
                shrink-0
                place-items-center
                rounded-full
                bg-[#EEF4FD]
                p-2
              "
            >
              <img
                src={icons[category]}
                alt={`${category} category`}
                className="h-full w-full object-contain"
              />
            </span>

            <h2
              className="
                text-2xl
                font-bold
                tracking-tight
                text-ink
                sm:text-3xl
              "
            >
              {category} Gift Cards
            </h2>
          </div>

          <p className="mt-1 text-sm text-mute">
            {sub[category]}
          </p>
        </div>

        <Link
          href={`/gift-cards?category=${category}`}
          className="btn2 shrink-0"
        >
          View All
        </Link>
      </div>

      {/* =================================================
          PRODUCTS
      ================================================= */}

      <motion.div
        {...up}
        className="
          snap
          gap-5
          sm:grid
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {l.slice(0, 3).map((p, i) => {
          /*
           * Category-specific image first.
           * Product image only works as fallback.
           */
          const image =
            images[i] ||
            sectionImages[p.brand] ||
            cardImg(p)

          return (
            <div
              key={p.id}
              className="
                w-[88%]
                shrink-0
                snap-start
                sm:w-auto
              "
            >
              <Link
                href={`/gift-cards/${p.slug}`}
                className="
                  group
                  block
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-100
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-[#1B5FD1]/20
                  hover:shadow-2xl
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    h-44
                    w-full
                    overflow-hidden
                    bg-slate-50
                    sm:h-52
                  "
                >
                  <img
                    src={image}
                    alt={`${p.brand} Gift Card`}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
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

                {/* =================================================
                    CARD INFO
                ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-4
                  "
                >
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
                    "
                  >
                    <Logo
                      p={p}
                      size={34}
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        text-sm
                        font-bold
                        text-ink
                        sm:text-base
                      "
                    >
                      {p.title}
                    </p>

                    <p className="mt-1 text-xs text-mute">
                      ★ {p.rating.toFixed(1)} · {p.category}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}

export function Countdown() {
  const [t, setT] = useState<number | null>(null)

  useEffect(() => {
    const end =
      Date.now() +
      ((2 * 24 + 14) * 3600 + 35 * 60) * 1000

    const f = () =>
      setT(Math.max(0, end - Date.now()))

    f()

    const i = setInterval(f, 1000)

    return () => clearInterval(i)
  }, [])

  if (t === null) return null

  if (t === 0) return <b>Offer Expired</b>

  const s = Math.floor(t / 1000)

  const p = (x: number) =>
    String(x).padStart(2, "0")

  return (
    <span className="font-mono text-lg font-bold">
      {[
        Math.floor(s / 86400),
        Math.floor(s / 3600) % 24,
        Math.floor(s / 60) % 60,
        s % 60,
      ]
        .map(p)
        .join(" : ")}
    </span>
  )
}

export function Offers() {
  return (
    <section
      id="offers"
      className="
        wrap
        scroll-mt-28
        py-12
        lg:scroll-mt-20
        lg:py-16
      "
    >
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1B5FD1] sm:text-xs">
            Limited Time Savings
          </p>

          <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl lg:text-[34px]">
            Top <span className="text-[#F4A81D]">Offers</span>
          </h2>

          <p className="mt-1.5 text-sm text-mute">
            Grab the best deals before they disappear.
          </p>
        </div>

        {/* Countdown */}
        <div
          className="
            flex
            items-center
            gap-2.5
            rounded-full
            border
            border-[#F4A81D]/30
            bg-[#FEF6E2]
            px-4
            py-2
            text-xs
            font-medium
            shadow-sm
            sm:text-sm
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F4A81D] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F4A81D]" />
          </span>

          <span className="text-mute">Ends in</span>

          <span className="font-semibold tabular-nums text-ink">
            <Countdown />
          </span>
        </div>
      </div>

      {/* Offers */}
      <div className="snap gap-4 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
        {["Amazon", "Flipkart", "Myntra", "Swiggy", "Zomato"].map((b, i) => {
          const p = products.find((x) => x.brand === b) as Product

          if (!p) return null

          return (
            <motion.div
              key={b}
              {...up}
              transition={{ delay: i * 0.08 }}
              className="
                w-[78%]
                shrink-0
                snap-start
                sm:w-auto
              "
            >
              <Link
                href={`/gift-cards/${p.slug}`}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200/80
                  bg-white
                  p-4
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#1B5FD1]/40
                  hover:shadow-[0_20px_40px_-12px_rgba(27,95,209,0.22)]
                "
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-100
                      bg-[#EEF4FD]
                    "
                  >
                    <Logo p={p} size={42} />
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-[#FEF1D2]
                      px-2.5
                      py-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#B8760A]
                    "
                  >
                    This week
                  </span>
                </div>

                {/* Discount */}
                <div className="mt-4">
                  <p className="flex items-baseline gap-1.5">
                    <span className="text-5xl font-extrabold leading-none tracking-tight text-[#1B5FD1]">
                      {p.discount}
                      <span className="text-3xl">%</span>
                    </span>
                    <span className="text-sm font-bold text-[#F4A81D]">
                      OFF
                    </span>
                  </p>

                  <p className="mt-2 truncate text-sm font-semibold text-ink">
                    {p.brand} Gift Card
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-xs font-medium text-mute transition-colors duration-300 group-hover:text-[#1B5FD1]">
                    Grab offer
                  </span>

                  <span
                    className="
                      grid
                      h-8
                      w-8
                      place-items-center
                      rounded-full
                      border
                      border-slate-200
                      text-sm
                      text-ink
                      transition-all
                      duration-300
                      group-hover:border-[#1B5FD1]
                      group-hover:bg-[#1B5FD1]
                      group-hover:text-white
                    "
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export function Gallery() {
  const galleryItems = Object.entries(premiumImages).map(
    ([brand, image]) => {
      const product = products.find((p) => p.brand === brand);

      return {
        brand,
        image,
        href: product ? `/gift-cards/${product.slug}` : undefined,
        title: `${brand} Gift Card`,
      };
    }
  );

  return (
    <section
      className="
        scroll-mt-28
        overflow-hidden
        bg-white
        py-12
        sm:py-14
        lg:scroll-mt-20
        lg:py-20
      "
    >
      <div className="wrap">
        {/* HEADING */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0757C8]">
            Premium Gift Collection
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#10264A] sm:text-3xl lg:text-4xl">
            Explore Every Way to Gift
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Drag around to explore our most-loved gift card experiences.
          </p>
        </div>

        {/* GALLERY */}

        <div
          className="
            relative
            mx-auto
            mt-8
            h-[520px]
            w-full
            sm:mt-10
            sm:h-[650px]
            lg:mt-12
            lg:h-[760px]
          "
        >
          <DriftWall
            items={galleryItems}
            columns={5}
            tileWidth={210}
            tileHeight={262}
            gap={18}
            radius={16}
          />
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Choose a Gift Card",
      description:
        "Explore hundreds of popular brands and find the perfect gift.",
      color: "#24B5C0",
    },
    {
      n: "02",
      title: "Select Your Value",
      description:
        "Pick the amount that suits your occasion and budget.",
      color: "#F5A623",
    },
    {
      n: "03",
      title: "Pay Securely",
      description:
        "Complete your purchase with a simple and secure checkout.",
      color: "#E5656A",
    },
    {
      n: "04",
      title: "Receive Instantly",
      description:
        "Get your digital voucher instantly after a successful purchase.",
      color: "#9364D8",
    },
  ];

  return (
    <section
      id="how"
      className="wrap scroll-mt-28 py-14 lg:scroll-mt-20 lg:py-20"
    >
      {/* Heading */}
      <div className="mb-8 text-center sm:mb-10">
        <span className="inline-flex items-center rounded-full border border-[#1B5FD1]/10 bg-[#1B5FD1]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1B5FD1]">
          Simple & Secure
        </span>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          How It Works
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Get your favourite gift cards in four simple steps.
        </p>
      </div>

      {/* Step Cards */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#F1F5F9] px-4 py-6 sm:px-8 sm:py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:gap-5">
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex min-h-[112px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md sm:min-h-[120px]"
            >
              {/* Number Block */}
              <div
                className="flex w-[76px] shrink-0 items-center justify-center sm:w-[110px]"
                style={{ backgroundColor: step.color }}
              >
                <span className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {step.n}
                </span>
              </div>

              {/* Text */}
              <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-5 sm:px-7 sm:py-6">
                <h3
                  className="text-xs font-extrabold uppercase tracking-wide sm:text-sm"
                  style={{ color: step.color }}
                >
                  {step.title}
                </h3>

                <p className="mt-2 max-w-xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                  {step.description}
                </p>
              </div>

              {/* Right Accent */}
              <div
                className="w-1 shrink-0"
                style={{ backgroundColor: step.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TopBrands() {
  const brands = [
    "Swiggy",
    "MakeMyTrip",
    "Netflix",
    "Amazon",
    "Flipkart",
    "Dominos",
    "BookMyShow",
    "Myntra",
  ];

  const [mob, setMob] = useState(false);

  useEffect(() => {
    const f = () => setMob(window.innerWidth < 640);
    f();

    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);

  return (
    <section
      id="top-brands"
      className="scroll-mt-28 bg-white py-14 lg:scroll-mt-20 lg:py-20"
    >
      <div className="wrap mb-8 text-center">
        <span className="inline-flex items-center rounded-full border border-[#0757C8]/15 bg-[#0757C8]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0757C8]">
          Most Loved
        </span>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#10264A] sm:text-4xl lg:text-5xl">
          Top Brands
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Gift cards from the brands India loves the most.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="relative h-[480px] w-full overflow-hidden bg-white sm:h-[620px] lg:h-[720px]"
      >
        <InfiniteSpiral
          items={brands
            .filter((b) => sectionImages[b])
            .map((b) => ({
              src: sectionImages[b],
              alt: `${b} Gift Card`,
            }))}
          animationMode="auto"
          speed={0.5}
         radius={mob ? 145 : 340}
cardWidth={mob ? 190 : 285}
cardHeight={mob ? 120 : 177}
verticalSpacing={mob ? 78 : 115}
          perspective={1200}
          cardRadius={14}
          centerScale={1.1}
          edgeBlur={0}
          cardsPerTurn={7}
          pauseOnHover
          direction="up"
          rotation={0}
          cardTilt={0}
          edgeFade={0.3}
          imageFit="cover"
          grayscale={0}
        />
      </motion.div>
    </section>
  );
}


export function FAQ() {
  const [o, setO] = useState(0)

  const q = [
    [
      "How quickly will I receive my gift card?",
      "Instantly after payment, on screen and in My Gift Cards.",
    ],
    [
      "Where can I find my voucher?",
      "Under Profile → My Gift Cards, or in the order details.",
    ],
    [
      "What happens if payment fails?",
      "No voucher is generated and you can retry right away.",
    ],
    [
      "Can I get a refund?",
      "Unused vouchers can be refunded within 7 days.",
    ],
    [
      "How long is the voucher valid?",
      "12 months from the date of purchase.",
    ],
  ]

  return (
    <section className="wrap py-14 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* LEFT: HEADING + HELP CARD */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1B5FD1] sm:text-xs">
              Got Questions?
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Frequently Asked{" "}
              <span className="text-[#F4A81D]">Questions</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              Find answers to common questions about Safalsevakendra Gift Cards.
            </p>

            <div className="mt-8 hidden rounded-3xl border border-slate-200 bg-[#EEF4FD] p-6 lg:block">
              <p className="text-base font-bold text-slate-900">
                Still need help?
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Our team is happy to assist you.
              </p>

              <a
                href="mailto:anup.rai@safalsevakendra.in"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#1B5FD1] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#154CB0]"
              >
                Contact Support
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: ACCORDION */}
        <div className="lg:col-span-7">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {q.map(([a, b], i) => {
              const open = o === i

              return (
                <div key={a}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setO(open ? -1 : i)}
                    className="group flex w-full items-center gap-4 py-5 text-left sm:gap-5 sm:py-6"
                  >
                    {/* NUMBER */}
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold tabular-nums transition-colors duration-300 ${
                        open
                          ? "bg-[#1B5FD1] text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-[#EEF4FD] group-hover:text-[#1B5FD1]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* QUESTION */}
                    <span
                      className={`flex-1 text-[15px] font-semibold leading-snug transition-colors duration-300 sm:text-lg ${
                        open
                          ? "text-slate-950"
                          : "text-slate-700 group-hover:text-slate-950"
                      }`}
                    >
                      {a}
                    </span>

                    {/* PLUS / CROSS */}
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                        open
                          ? "border-[#F4A81D] bg-[#F4A81D] text-white"
                          : "border-slate-200 text-slate-500 group-hover:border-[#F4A81D] group-hover:text-[#F4A81D]"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </motion.span>
                  </button>

                  {/* ANSWER */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: open ? "auto" : 0,
                      opacity: open ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pl-[52px] pr-4 text-sm leading-6 text-slate-500 sm:pl-[56px] sm:text-[15px]">
                      {b}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* MOBILE HELP LINK */}
          <p className="mt-6 text-center text-sm text-slate-500 lg:hidden">
            Still need help?{" "}
            <a
              href="mailto:anup.rai@safalsevakendra.in"
              className="font-semibold text-[#1B5FD1] hover:underline"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const resources = [
    {
      label: "Home",
      href: "/",
      external: false,
    },
    {
      label: "About Us",
      href: "/about/",
      external: true,
    },
    {
      label: "Contact Us",
      href: "/contact/",
      external: true,
    },
  ]

const policies = [
  {
    label: "Privacy Policy",
    href: "/policies/privacy-policy",
    external: false,
  },
  {
    label: "Terms & Conditions",
    href: "/policies/terms-and-conditions",
    external: false,
  },
  {
    label: "Refund & Cancellation Policy",
    href: "/policies/refund-cancellation-failed-transaction",
    external: false,
  },
  
  {
    label: "Information Security Policy",
    href: "/policies/fraud-prevention-transaction-security",
    external: false,
  },
  {
    label: "Other Policies",
    href: "/policies",
    external: false,
  },
]
  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/Safalsevakendra.in",
      icon: (
        <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8z" />
      ),
    },
    {
      name: "X",
      href: "https://x.com/Safalsevakendra",
      icon: (
        <path d="M4 4l16 16M20 4L4 20" />
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/Safalsevakendra/",
      icon: (
        <>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="5"
          />
          <circle
            cx="12"
            cy="12"
            r="3.5"
          />
          <circle
            cx="17"
            cy="7"
            r="0.6"
            fill="currentColor"
          />
        </>
      ),
    },
  ]

  const Heading = ({
    children,
  }: {
    children: string
  }) => (
    <div className="mb-5">
      <h3 className="text-base font-bold text-white">
        {children}
      </h3>

      <span className="mt-1.5 block h-[3px] w-8 rounded-full bg-[#F4A81D]" />
    </div>
  )

  const linkCls =
    "inline-block text-[15px] text-slate-400 transition-colors duration-200 hover:text-white"

  const Icon = ({
    children,
  }: {
    children: React.ReactNode
  }) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-[#F4A81D]"
    >
      {children}
    </svg>
  )

  return (
    <footer className="mt-10 bg-[#0E1120] text-white">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
        {/* Brand */}
        <div>
          <div className="inline-flex rounded-xl bg-white px-3 py-2">
            <img
              src="/Safalsevakendra.png"
              alt="Safalsevakendra"
              className="h-10 w-auto object-contain"
            />
          </div>

          <p className="mt-4 max-w-[260px] text-[15px] leading-6 text-slate-400">
            Your Trusted Partner in Every Transaction.
          </p>

          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B5FD1] hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <Heading>
            Resources
          </Heading>

          <ul className="space-y-3">
            {resources.map((l) => (
              <li key={l.label}>
                {l.external === false ? (
                  <Link
                    href={l.href}
                    className={linkCls}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkCls}
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <Heading>
            Policies
          </Heading>

          <ul className="space-y-3">
            {policies.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <Heading>
            Get In Touch
          </Heading>

          <ul className="space-y-4 text-[15px] text-slate-300">
            <li className="flex gap-3">
              <Icon>
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />
                <path d="M3 7l9 6 9-6" />
              </Icon>

              <a
                href="mailto:anup.rai@safalsevakendra.in"
                className="break-all transition-colors hover:text-white"
              >
                anup.rai@safalsevakendra.in
              </a>
            </li>

            <li className="flex gap-3">
              <Icon>
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </Icon>

              <a
                href="tel:+917318581589"
                className="transition-colors hover:text-white"
              >
                +91 63890 02737
              </a>
            </li>

            <li className="flex gap-3">
              <Icon>
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                <circle
                  cx="12"
                  cy="10"
                  r="2.5"
                />
              </Icon>

              <span className="leading-6">
                Safalsevakendra India Pvt. Ltd.
                <br />
                D30, Vibhuti Khand,
                <br />
                Gomti Nagar, Lucknow,
                <br />
                Uttar Pradesh – 226010
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="wrap py-5 text-center text-[13px] text-slate-400">
          Safalsevakendra India Pvt. Ltd. © Copyright 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}