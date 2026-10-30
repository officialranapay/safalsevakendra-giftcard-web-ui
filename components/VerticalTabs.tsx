"use client"

import { useCallback, useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

// @ts-ignore (Lanyard .jsx file hai)
import Lanyard from "./Lanyard"

type Service = {
  id: string
  title: string
  description: string
  image: string
  backImage?: string
}

// ✏️ Yahan apna content badlo
const DEFAULT_SERVICES: Service[] = [
  {
    id: "01",
    title: "Shopping",
    description: "Amazon, Flipkart, Meesho and more. Gift anything they want.",
    image: "/section/amazon1.png",
  },
  {
    id: "02",
    title: "Food",
    description: "Swiggy, Zomato, Dominos. Meals delivered to their door.",
    image: "/section/swiggy1.png",
  },
  {
    id: "03",
    title: "Fashion",
    description: "Myntra, Ajio, Westside. Style for every wardrobe.",
    image: "/section/myntra1.png",
  },
  {
    id: "04",
    title: "Travel",
    description: "MakeMyTrip, Uber, OYO. Trips, rides and stays.",
    image: "/section/makemytrip1.png",
  },
]

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ")

const Arrow = ({ dir }: { dir: "l" | "r" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d={dir === "l" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
  </svg>
)

type Props = {
  services?: Service[]
  heading?: string
  label?: string
  autoPlayMs?: number
}

export default function VerticalTabs({
  services = DEFAULT_SERVICES,
  heading = "Thoughtful Gifts, Beautifully Chosen",
  label = "THE ART OF THOUGHTFUL GIVING",
  autoPlayMs = 5000,
}: Props) {
  const reduce = useReducedMotion()

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const n = services.length

  const go = useCallback(
    (i: number) => {
      setActive(((i % n) + n) % n)
    },
    [n]
  )

  const next = useCallback(() => go(active + 1), [go, active])
  const prev = useCallback(() => go(active - 1), [go, active])

  useEffect(() => {
    if (paused || reduce || n < 2) return
    const t = setTimeout(next, autoPlayMs)
    return () => clearTimeout(t)
  }, [active, paused, reduce, n, autoPlayMs, next])

  const cur = services[active]

  return (
    <section
      className="wrap py-8 sm:py-10 lg:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-6
          lg:grid-cols-12
          lg:gap-16
        "
      >
        {/* =====================================================
            LEFT: TABS
        ====================================================== */}

        <div className="order-1 min-w-0 lg:order-1 lg:col-span-5">
          {/* HEADING */}
          <div className="mb-5 sm:mb-6 lg:mb-8 lg:space-y-2">
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-brand
                sm:text-xs
              "
            >
              {label}
            </p>

            <h2
              className="
                mt-1
                text-[26px]
                font-extrabold
                leading-[1.15]
                tracking-tight
                text-slate-900
                sm:text-3xl
                lg:mt-0
                lg:text-4xl
              "
            >
              {heading}
            </h2>
          </div>

          {/* MOBILE HORIZONTAL TABS */}
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="
              -mx-4
              w-[calc(100%+2rem)]
              overflow-x-auto
              scrollbar-none
              lg:hidden
            "
          >
            <div className="flex min-w-full border-b border-slate-200">
              {services.map((s, i) => {
                const on = active === i

                return (
                  <button
                    key={s.id}
                    role="tab"
                    id={`vt-tab-mobile-${s.id}`}
                    aria-selected={on}
                    aria-controls="vt-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => i !== active && go(i)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowRight") {
                        e.preventDefault()
                        go(i + 1)
                      }
                      if (e.key === "ArrowLeft") {
                        e.preventDefault()
                        go(i - 1)
                      }
                    }}
                    className={cx(
                      `
                        relative
                        flex
                        min-h-[46px]
                        min-w-[25%]
                        flex-1
                        shrink-0
                        items-center
                        justify-center
                        px-3
                        py-2.5
                        text-[12px]
                        font-semibold
                        whitespace-nowrap
                        outline-none
                        transition-colors
                        duration-300
                        focus-visible:ring-2
                        focus-visible:ring-brand/50
                      `,
                      on ? "text-brand" : "text-slate-400 hover:text-slate-900"
                    )}
                  >
                    {s.title}

                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-slate-200"
                    />

                    {on && (
                      <motion.span
                        key={`mobile-progress-${i}-${active}-${paused}`}
                        aria-hidden
                        className="absolute left-0 bottom-[-1px] h-[2px] bg-brand"
                        initial={{ width: "0%" }}
                        animate={{ width: paused || reduce ? "0%" : "100%" }}
                        transition={{
                          duration: paused || reduce ? 0 : autoPlayMs / 1000,
                          ease: "linear",
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* DESKTOP VERTICAL TABS */}
          <div
            role="tablist"
            aria-orientation="vertical"
            className="hidden flex-col lg:flex"
          >
            {services.map((s, i) => {
              const on = active === i

              return (
                <button
                  key={s.id}
                  role="tab"
                  id={`vt-tab-${s.id}`}
                  aria-selected={on}
                  aria-controls="vt-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => i !== active && go(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault()
                      go(i + 1)
                    }
                    if (e.key === "ArrowUp") {
                      e.preventDefault()
                      go(i - 1)
                    }
                  }}
                  className={cx(
                    `
                      relative
                      flex
                      items-start
                      gap-4
                      border-t
                      border-slate-200
                      py-5
                      pl-5
                      text-left
                      outline-none
                      transition-colors
                      duration-500
                      first:border-t-0
                      focus-visible:ring-2
                      focus-visible:ring-brand/50
                      md:py-6
                    `,
                    on ? "text-slate-900" : "text-slate-400 hover:text-slate-900"
                  )}
                >
                  {/* ACTIVE LINE */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[2px] bg-slate-200"
                  >
                    {on && (
                      <motion.span
                        key={`p-${i}-${paused}`}
                        className="absolute left-0 top-0 w-full bg-brand"
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        transition={{
                          duration: paused || reduce ? 0 : autoPlayMs / 1000,
                          ease: "linear",
                        }}
                      />
                    )}
                  </span>

                  {/* NUMBER */}
                  <span className="mt-2 text-[11px] font-medium tabular-nums opacity-60">
                    /{s.id}
                  </span>

                  {/* TITLE + DESCRIPTION */}
                  <span className="flex flex-1 flex-col gap-1.5">
                    <span className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {s.title}
                    </span>

                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="block overflow-hidden"
                        >
                          <span className="block max-w-sm pb-1 text-sm leading-relaxed text-slate-500 md:text-base">
                            {s.description}
                          </span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>
              )
            })}
          </div>
        </div>



        <div className="order-2 min-w-0 lg:order-2 lg:col-span-7">
          <div
            id="vt-panel"
            role="tabpanel"
            aria-labelledby={`vt-tab-${cur.id}`}
            className="
              relative
              h-[440px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-gradient-to-b
              from-slate-50
              to-slate-100
              shadow-lg
              sm:h-[520px]
              sm:rounded-3xl
              lg:h-[600px]
              lg:shadow-xl
            "
          >
           <AnimatePresence initial={false}>
  <motion.div
    key={active}
    className="absolute inset-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, y: 0, rotate: 0, zIndex: 2 }}
    exit={{
      opacity: 0,
      y: reduce ? 0 : 280,
      rotate: reduce ? 0 : active % 2 === 0 ? -8 : 8,
      zIndex: 1,
      transition: { duration: 0.7, ease: [0.55, 0, 0.9, 0.4] },
    }}
    transition={{ duration: 0.25 }}
  >
   <Lanyard
  frontImage={cur.image}
  backImage={cur.backImage ?? cur.image}
  orientation="landscape"
  imageFit="cover"
  finish="glossy"
  cornerRadius={12}
  size={1}
  anchor="top"
  strapLength={1}
  strapColor="#222"
  metal="silver"
  breeze={0.5}
  strapImage=""
  style={{}}
  intro
  interactive
/>
  </motion.div>
</AnimatePresence>

            {/* LABEL */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-3
                left-3
                z-20
                text-slate-900
                sm:bottom-5
                sm:left-5
                md:bottom-7
                md:left-7
              "
            >
              <p className="text-[10px] tabular-nums text-slate-500 sm:text-xs">
                {cur.id} / {String(n).padStart(2, "0")}
              </p>
              <p className="text-sm font-semibold sm:text-lg md:text-xl">
                {cur.title}
              </p>
            </div>

            {/* ARROWS */}
            <div
              className="
                absolute
                bottom-3
                right-3
                z-20
                flex
                gap-1.5
                sm:bottom-5
                sm:right-5
                sm:gap-2
                md:bottom-7
                md:right-7
              "
            >
              <button
                onClick={prev}
                aria-label="Previous category"
                className="
                  grid
                  h-8
                  w-8
                  place-items-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white/90
                  text-slate-900
                  shadow-sm
                  backdrop-blur-md
                  transition
                  hover:bg-white
                  active:scale-90
                  sm:h-10
                  sm:w-10
                  md:h-12
                  md:w-12
                "
              >
                <Arrow dir="l" />
              </button>

              <button
                onClick={next}
                aria-label="Next category"
                className="
                  grid
                  h-8
                  w-8
                  place-items-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white/90
                  text-slate-900
                  shadow-sm
                  backdrop-blur-md
                  transition
                  hover:bg-white
                  active:scale-90
                  sm:h-10
                  sm:w-10
                  md:h-12
                  md:w-12
                "
              >
                <Arrow dir="r" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}