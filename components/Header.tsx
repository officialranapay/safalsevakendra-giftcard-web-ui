"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  motion,
  AnimatePresence,
} from "framer-motion"

import { products } from "@/lib/data"
import { useApp } from "@/lib/store"
import CartDrawer from "./CartDrawer"
import LoginDrawer from "./LoginDrawer"

const nav = [
  ["Gift Cards", "/gift-cards"],
  ["Offers", "/#offers"],
  ["How It Works", "/#how"],
  ["Orders", "/profile/orders"],
]

export default function Header() {
  const {
    cart,
    user,
    setCartOpen,
    setLoginOpen,
  } = useApp()

  const router = useRouter()

  const [q, setQ] = useState("")
  const [menu, setMenu] = useState(false)
  const [sc, setSc] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSc(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )
  }, [])

  const sug =
    q.length > 1
      ? products
          .filter(
            (p) =>
              p.brand
                .toLowerCase()
                .includes(q.toLowerCase()) ||
              p.category
                .toLowerCase()
                .includes(q.toLowerCase())
          )
          .slice(0, 5)
      : []

  const count = cart.reduce(
    (s: number, i: any) => s + i.qty,
    0
  )

  return (
    <>
      {/* =====================================================
          PREMIUM HEADER
      ===================================================== */}
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          border-b
          transition-all
          duration-300
          ${
            sc
              ? `
                border-slate-200/70
                bg-white/90
                shadow-[0_8px_35px_rgba(15,23,42,0.08)]
                backdrop-blur-2xl
              `
              : `
                border-slate-100/80
                bg-white/95
                backdrop-blur-xl
              `
          }
        `}
      >
        <div
          className={`
            wrap
            flex
            items-center
            gap-2
            transition-all
            duration-300
            ${
              sc
                ? "h-[64px] sm:h-[66px]"
                : "h-[68px] sm:h-[72px]"
            }
          `}
        >
          {/* =================================================
              LOGO
          ================================================= */}
          <Link
            href="/"
            className="
              group
              relative
              flex
              shrink-0
              items-center
              rounded-2xl
            "
          >
            {/* Soft premium glow */}
            <span
              className="
                pointer-events-none
                absolute
                -inset-3
                rounded-2xl
                bg-[#0866D5]/10
                opacity-0
                blur-xl
                transition-all
                duration-500
                group-hover:opacity-100
              "
            />

            {/* MOBILE LOGO */}
            <img
              src="/Safalsevakendra1.png"
              alt="SafalSevaKendra"
              className="
                relative
                block
                h-9
                w-auto
                max-w-[145px]
                object-contain
                transition-all
                duration-300
                group-hover:scale-[1.035]
                sm:h-10
                sm:max-w-[155px]
                lg:hidden
              "
            />

            {/* DESKTOP LOGO */}
            <img
              src="/Safalsevakendra.png"
              alt="SafalSevaKendra"
              className="
                relative
                hidden
                h-15
                w-auto
                max-w-[175px]
                object-contain
                transition-all
                duration-300
                group-hover:scale-[1.035]
                lg:block
                xl:h-13
                xl:max-w-[215px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <nav
            className="
              ml-6
              hidden
              items-center
              gap-7
              lg:absolute
              lg:left-1/2
              lg:flex
              lg:-translate-x-1/2
              xl:gap-8
            "
          >
            {nav.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="
                  group
                  relative
                  whitespace-nowrap
                  py-2
                  text-[13px]
                  font-semibold
                  tracking-[-0.01em]
                  text-slate-700
                  transition-colors
                  duration-200
                  hover:text-[#0866D5]
                "
              >
                {label}

                <span
                  className="
                    absolute
                    -bottom-0.5
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#0866D5]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}
          <div
            className="
              ml-auto
              flex
              items-center
              gap-1.5
              sm:gap-2
            "
          >
            {/* =================================================
                SEARCH
            ================================================= */}
            <div className="relative">
              <div className="relative">
                {/* Search Icon */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    z-10
                    -translate-y-1/2
                    text-slate-400
                  "
                >
                  <svg
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
                </span>

                <input
                  className="
                    h-9
                    w-[130px]
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50/80
                    pl-9
                    pr-3
                    text-[12px]
                    text-slate-700
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    hover:border-slate-300
                    focus:border-[#0866D5]/40
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#0866D5]/5
                    sm:h-10
                    sm:w-56
                    sm:text-[13px]
                    lg:w-60
                    xl:w-64
                  "
                  placeholder="Search gift cards..."
                  value={q}
                  onChange={(e) =>
                    setQ(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && q.trim()) {
                      router.push(
                        `/gift-cards?q=${encodeURIComponent(
                          q.trim()
                        )}`
                      )
                      setQ("")
                    }
                  }}
                />
              </div>

              {/* =================================================
                  SEARCH SUGGESTIONS
              ================================================= */}
              {sug.length > 0 && (
                <div
                  className="
                    absolute
                    right-0
                    top-11
                    z-50
                    w-[235px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-1.5
                    shadow-[0_20px_55px_rgba(15,23,42,0.14)]
                    sm:left-0
                    sm:right-auto
                    sm:w-64
                  "
                >
                  {sug.map((p) => (
                    <Link
                      key={p.id}
                      href={`/gift-cards/${p.slug}`}
                      onClick={() => setQ("")}
                      className="
                        block
                        rounded-xl
                        px-3
                        py-2.5
                        text-sm
                        transition-all
                        duration-200
                        hover:bg-[#EAF2FF]
                      "
                    >
                      <span className="font-semibold text-ink">
                        {p.title}
                      </span>

                      <span className="text-mute">
                        {" "}
                        · {p.category}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* =================================================
                CART
            ================================================= */}
            <motion.button
              key={count}
              animate={{
                scale: [1.12, 1],
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={() =>
                setCartOpen(true)
              }
              className="
                relative
                grid
                h-9
                w-9
                shrink-0
                place-items-center
                rounded-full
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-200
                hover:border-[#0866D5]/30
                hover:bg-[#EAF2FF]
                hover:shadow-md
                sm:h-10
                sm:w-10
              "
              aria-label="Cart"
            >
              <img
                src="/icon/cart.jpg"
                alt="Cart"
                className="
                  h-6
                  w-6
                  rounded-md
                  object-contain
                  sm:h-7
                  sm:w-7
                "
              />

              {count > 0 && (
                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    grid
                    h-5
                    min-w-5
                    place-items-center
                    rounded-full
                    bg-[#FF9418]
                    px-1
                    text-[10px]
                    font-bold
                    text-white
                    shadow-sm
                  "
                >
                  {count}
                </span>
              )}
            </motion.button>

            {/* =================================================
                LOGIN / PROFILE
            ================================================= */}
            {user ? (
              <Link
                href="/profile"
                className="
                  hidden
                  h-9
                  items-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-4
                  text-sm
                  font-semibold
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-200
                  hover:border-[#0866D5]/30
                  hover:bg-[#EAF2FF]
                  hover:text-[#0866D5]
                  sm:inline-flex
                  sm:h-10
                "
              >
                {user.name.split(" ")[0]}
              </Link>
            ) : (
              <button
                className="
                  hidden
                  h-9
                  rounded-full
                  bg-[#0866D5]
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_7px_22px_rgba(8,102,213,0.22)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_28px_rgba(8,102,213,0.28)]
                  sm:inline-flex
                  sm:h-10
                  sm:items-center
                "
                onClick={() =>
                  setLoginOpen(true)
                }
              >
                Login
              </button>
            )}

            {/* =================================================
                MOBILE MENU
            ================================================= */}
            <button
              className="
                grid
                h-9
                w-9
                shrink-0
                place-items-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-lg
                font-medium
                text-slate-700
                shadow-sm
                transition-all
                duration-200
                hover:border-[#0866D5]/30
                hover:bg-[#EAF2FF]
                hover:text-[#0866D5]
                lg:hidden
                sm:h-10
                sm:w-10
              "
              onClick={() =>
                setMenu(!menu)
              }
              aria-label="Menu"
              aria-expanded={menu}
            >
              {menu ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                overflow-hidden
                border-t
                border-slate-100
                bg-white/95
                backdrop-blur-xl
                lg:hidden
              "
            >
              <div className="wrap flex flex-col py-3">
                {[...nav, ["Profile", "/profile"]].map(
                  ([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() =>
                        setMenu(false)
                      }
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-3
                        font-medium
                        text-slate-700
                        transition-all
                        duration-200
                        hover:bg-[#EAF2FF]
                        hover:text-[#0866D5]
                      "
                    >
                      <span>{label}</span>

                      <span
                        className="
                          text-slate-300
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                          group-hover:text-[#0866D5]
                        "
                      >
                        →
                      </span>
                    </Link>
                  )
                )}

                {!user && (
                  <button
                    className="
                      mb-2
                      mt-2
                      w-full
                      rounded-xl
                      bg-[#0866D5]
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_8px_22px_rgba(8,102,213,0.20)]
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:shadow-lg
                    "
                    onClick={() => {
                      setMenu(false)
                      setLoginOpen(true)
                    }}
                  >
                    Login to SafalSevaKendra
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =====================================================
          HEADER SPACE
      ===================================================== */}
      <div className="h-[68px] sm:h-[72px]" />

      {/* =====================================================
          DRAWERS
      ===================================================== */}
      <CartDrawer />
      <LoginDrawer />
    </>
  )
}