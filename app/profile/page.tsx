"use client"

import { useState } from "react"
import Link from "next/link"
import { useApp } from "@/lib/store"
import { inr } from "@/lib/data"


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
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          animate-[profileSkeletonShimmer_1.6s_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/80
          to-transparent
        "
      />
    </div>
  )
}


function ProfileSkeleton() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EEF4FD]/60 via-white to-white">

      <div className="wrap max-w-3xl pt-16 pb-10 sm:pt-20">

        {/* PROFILE CARD */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-100
            bg-white
            p-5
            shadow-[0_6px_24px_rgba(15,23,42,0.04)]
            sm:p-6
          "
        >

          <div className="flex items-center gap-4">

            <SkeletonBlock
              className="
                h-16
                w-16
                shrink-0
                rounded-full
              "
            />

            <div className="min-w-0 flex-1 space-y-2">

              <SkeletonBlock
                className="
                  h-6
                  w-40
                  rounded-lg
                "
              />

              <SkeletonBlock
                className="
                  h-4
                  w-64
                  max-w-full
                  rounded-full
                "
              />

            </div>

          </div>

        </div>


        {/* STATS */}
        <div className="my-4 grid gap-3 sm:grid-cols-3">

          {Array.from({ length: 3 }).map((_, i) => (

            <div
              key={i}
              className="
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                shadow-[0_6px_24px_rgba(15,23,42,0.04)]
              "
            >

              <SkeletonBlock
                className="
                  h-4
                  w-24
                  rounded-full
                "
              />

              <SkeletonBlock
                className="
                  mt-3
                  h-7
                  w-20
                  rounded-lg
                "
              />

            </div>

          ))}

        </div>


        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3">

          <SkeletonBlock
            className="
              h-11
              w-28
              rounded-xl
            "
          />

          <SkeletonBlock
            className="
              h-11
              w-36
              rounded-xl
            "
          />

          <SkeletonBlock
            className="
              h-11
              w-24
              rounded-xl
            "
          />

        </div>

      </div>


      <style jsx global>{`
        @keyframes profileSkeletonShimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

    </main>
  )
}


/* =====================================================
   PROFILE
   ===================================================== */

function formatProfileDate(value: unknown) {
  if (typeof value !== "string" || !value.trim()) return "Not available"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "Not available"
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}

function DetailRow({ label, value }: { label: string; value: unknown }) {
  const text = value === null || value === undefined || value === "" ? "Not available" : String(value)
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <span className="text-sm font-medium text-mute">{label}</span>
      <span className="break-all text-sm font-semibold text-[#071923] sm:text-right">{text}</span>
    </div>
  )
}

export default function Profile() {

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  const {
    user,
    orders,
    logout,
    setLoginOpen,
    ready,
  } = useApp()


  /* Store hydrate hone tak skeleton */
  if (!ready) {
    return <ProfileSkeleton />
  }


  /* =====================================================
     NOT LOGGED IN
     ===================================================== */

  if (!user) {

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

        <div
          className="
            wrap
            flex
            min-h-[65vh]
            items-center
            justify-center
            py-20
          "
        >

          <div
            className="
              w-full
              max-w-md
              rounded-2xl
              border
              border-slate-100
              bg-white
              px-6
              py-12
              text-center
              shadow-[0_10px_35px_rgba(15,23,42,0.05)]
            "
          >

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#EEF4FD]
                text-2xl
              "
            >
              👤
            </div>


            <h1
              className="
                mt-5
                text-xl
                font-bold
                tracking-[-0.02em]
                text-[#071923]
              "
            >
              Welcome to Safalsevakendra
            </h1>


            <p
              className="
                mt-2
                text-sm
                leading-6
                text-mute
              "
            >
              Login to view your profile,
              orders and gift cards.
            </p>


            <button
              className="
                mt-6
                min-h-11
                rounded-xl
                bg-[#1B5FD1]
                px-6
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
              "
              onClick={() => setLoginOpen(true)}
            >
              Login
            </button>

          </div>

        </div>

      </main>
    )
  }


  /* =====================================================
     STATS
     ===================================================== */

  const profileName =
    user.fullName ||
    user.name ||
    [user.firstName, user.lastName].filter(Boolean).join(" ") ||
    "User"
  const profileId = user.id ?? user._id ?? user.userId
  const emailVerified = user.isEmailVerified === true
    ? "Verified"
    : user.isEmailVerified === false
      ? "Not verified"
      : "Status not available"

  const st = [
    [
      "Orders",
      orders.length,
    ],

    [
      "Total spent",
      inr(
        orders.reduce(
          (s: number, o: any) =>
            s + o.total,
          0
        )
      ),
    ],

    [
      "Active gift cards",
      orders.flatMap(
        (o: any) => o.vouchers
      ).length,
    ],
  ]


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

      <div
        className="
          wrap
          max-w-3xl
          pt-16
          pb-10
          sm:pt-20
        "
      >

        {/* =====================================================
            PROFILE
            ===================================================== */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-100
            bg-white
            p-5
            shadow-[0_8px_28px_rgba(15,23,42,0.05)]
            sm:p-6
          "
        >

          <div className="flex items-center gap-4">

            {/* AVATAR */}
            <span
              className="
                grid
                h-16
                w-16
                shrink-0
                place-items-center
                rounded-full
                bg-[#1B5FD1]
                text-2xl
                font-bold
                text-white
                shadow-md
                shadow-[#1B5FD1]/20
                ring-4
                ring-[#F4A81D]/30
              "
            >
              {profileName.charAt(0).toUpperCase()}
            </span>


            {/* USER INFO */}
            <div className="min-w-0">

              <p
                className="
                  mb-1
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1B5FD1]
                "
              >
                Safalsevakendra Account
              </p>


              <h1
                className="
                  truncate
                  text-xl
                  font-bold
                  tracking-[-0.02em]
                  text-[#071923]
                "
              >
                {user.name}
              </h1>


              <p
                className="
                  mt-1
                  truncate
                  text-sm
                  text-mute
                "
              >
                {user.email} · {user.phone}
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            STATS
            ===================================================== */}

        <div className="my-4 grid gap-3 sm:grid-cols-3">

          {st.map(([a, b]) => (

            <div
              key={a}
              className="
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                shadow-[0_6px_24px_rgba(15,23,42,0.04)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[#1B5FD1]/20
                hover:shadow-[0_10px_28px_rgba(27,95,209,0.10)]
              "
            >

              <p
                className="
                  text-xs
                  font-medium
                  text-mute
                "
              >
                {a}
              </p>


              <p
                className="
                  mt-2
                  text-xl
                  font-bold
                  tracking-[-0.02em]
                  text-[#1B5FD1]
                "
              >
                {b}
              </p>

            </div>

          ))}

        </div>


        {/* COMPLETE ACCOUNT DETAILS */}
        <section className="mt-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_6px_24px_rgba(15,23,42,0.04)] sm:p-6">
          <h2 className="mb-2 text-lg font-bold text-[#071923]">Account Details</h2>
          <DetailRow label="User ID" value={profileId} />
          <DetailRow label="Full Name" value={profileName} />
          <DetailRow label="Email Address" value={user.email} />
          <DetailRow label="Email Verified" value={emailVerified} />
          {/* <DetailRow label="Account Role" value={user.role} />
          <DetailRow label="Phone Number" value={user.phone ?? user.mobile} />
          <DetailRow label="Account Created" value={formatProfileDate(user.createdAt)} />
          <DetailRow label="Last Updated" value={formatProfileDate(user.updatedAt)} /> */}
        </section>

        {/* =====================================================
            ACTIONS
            ===================================================== */}

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          <Link
            href="/profile/orders"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              rounded-xl
              bg-[#1B5FD1]
              px-5
              text-sm
              font-bold
              text-white
              shadow-md
              shadow-[#1B5FD1]/20
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#154CB0]
              hover:shadow-lg
            "
          >
            My Orders
          </Link>


          <Link
            href="/profile/gift-cards"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              rounded-xl
              border
              border-[#F4A81D]/40
              bg-white
              px-5
              text-sm
              font-bold
              text-[#B8760A]
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-[#F4A81D]/70
              hover:bg-[#FEF6E2]
              hover:shadow-md
            "
          >
            My Gift Cards
          </Link>


          <button
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
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
              hover:border-red-200
              hover:bg-red-50
              hover:text-red-600
              hover:shadow-md
            "
            onClick={() => setShowLogoutConfirm(true)}
          >
            Logout
          </button>

        </div>

      </div>

      {/* LOGOUT CONFIRMATION POPUP */}
      {showLogoutConfirm && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowLogoutConfirm(false)
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-dialog-title"
            className="w-full max-w-sm rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-red-50 text-xl text-red-600">
              ↪
            </div>

            <h2
              id="logout-dialog-title"
              className="mt-4 text-center text-lg font-bold text-[#071923]"
            >
              Logout from Safalsevakendra?
            </h2>

            <p className="mt-2 text-center text-sm leading-6 text-mute">
              Are you sure you want to log out of your account?
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="min-h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#071923] transition hover:bg-slate-50"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="min-h-11 rounded-xl bg-red-600 px-4 text-sm font-bold text-white transition hover:bg-red-700"
                onClick={() => {
                  setShowLogoutConfirm(false)
                  logout()
                }}
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}