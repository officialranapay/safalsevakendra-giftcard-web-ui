"use client";

import React from "react";

/* =====================================================
   SHIMMER
===================================================== */

function Shimmer({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-xl
        bg-slate-100
        ${className}
      `}
    >
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          animate-[skeletonShimmer_1.7s_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/80
          to-transparent
        "
      />
    </div>
  );
}

/* =====================================================
   SECTION TITLE
===================================================== */

function SectionTitle({
  width = "w-48",
}: {
  width?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div className="space-y-2">
        <Shimmer className="h-3 w-24 rounded-full" />
        <Shimmer className={`h-8 ${width} rounded-lg`} />
      </div>

      <Shimmer className="hidden h-5 w-20 rounded-full sm:block" />
    </div>
  );
}

/* =====================================================
   HERO
   Matches actual Safalsevakendra homepage:
   centered heading + buttons + wide gift-card carousel
===================================================== */

function HeroSkeleton() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-sky to-ice">
      <div
        className="
          wrap
          w-full
          px-4
          pb-8
          pt-10
          sm:px-6
          sm:pb-10
          sm:pt-12
          md:px-8
          md:pb-12
          md:pt-14
          lg:px-10
          lg:pb-16
          lg:pt-16
          xl:pb-20
          xl:pt-20
        "
      >
        {/* HERO CONTENT */}

        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Badge */}
          <Shimmer className="mx-auto h-7 w-52 rounded-full" />

          {/* Heading */}
          <div className="mx-auto mt-5 max-w-4xl space-y-3">
            <Shimmer className="mx-auto h-12 w-[82%] rounded-xl sm:h-14 md:h-16 lg:h-[68px]" />
            <Shimmer className="mx-auto h-12 w-[62%] rounded-xl sm:h-14 md:h-16 lg:h-[68px]" />
          </div>

          {/* Description */}
          <div className="mx-auto mt-5 max-w-xl space-y-2">
            <Shimmer className="mx-auto h-4 w-[92%] rounded-full" />
            <Shimmer className="mx-auto h-4 w-[76%] rounded-full" />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Shimmer className="h-11 w-full rounded-xl sm:w-40" />
            <Shimmer className="h-11 w-full rounded-xl sm:w-32" />
          </div>
        </div>

        {/* =================================================
            GIFT CARD CAROUSEL
        ================================================= */}

        <div className="mx-auto mt-9 w-full sm:mt-11 md:mt-12 lg:mt-14">
          <div
            className="
              relative
              h-[220px]
              w-full
              overflow-hidden
              rounded-[24px]
              sm:h-[300px]
              md:h-[360px]
              lg:h-[420px]
            "
          >
            <div className="absolute inset-0 flex items-center justify-center gap-3 px-2 sm:gap-4 sm:px-4">
              {/* Main card */}
              <Shimmer
                className="
                  h-[78%]
                  w-[62%]
                  shrink-0
                  rounded-[22px]
                  sm:w-[54%]
                  lg:w-[52%]
                "
              />

              {/* Secondary cards */}
              <Shimmer
                className="
                  h-[78%]
                  w-[20%]
                  shrink-0
                  rounded-[22px]
                  sm:w-[19%]
                  lg:w-[18%]
                "
              />

              <Shimmer
                className="
                  h-[78%]
                  w-[14%]
                  shrink-0
                  rounded-[22px]
                  sm:w-[14%]
                  lg:w-[13%]
                "
              />

              <Shimmer
                className="
                  hidden
                  h-[78%]
                  w-[12%]
                  shrink-0
                  rounded-[22px]
                  md:block
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   CATEGORIES
===================================================== */

function CategoriesSkeleton() {
  return (
    <section className="wrap py-10">
      <SectionTitle width="w-52" />

      <div className="flex gap-4 overflow-hidden lg:grid lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="
              flex
              w-36
              shrink-0
              flex-col
              items-center
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-4
              shadow-sm
              lg:w-auto
            "
          >
            <Shimmer className="h-14 w-14 rounded-full" />
            <Shimmer className="mt-3 h-4 w-20 rounded-full" />
            <Shimmer className="mt-2 h-3 w-14 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   POPULAR BRANDS
===================================================== */

function PopularSkeleton() {
  return (
    <section className="wrap py-8">
      <div className="mb-6">
        <Shimmer className="h-3 w-24 rounded-full" />
        <Shimmer className="mt-2 h-8 w-56 rounded-lg" />
      </div>

      <div className="flex gap-4 overflow-hidden sm:gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="
              w-[72%]
              shrink-0
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-4
              shadow-sm
              sm:w-40
            "
          >
            <div className="flex h-20 w-full items-center justify-center rounded-xl bg-slate-50">
              <Shimmer className="h-14 w-14 rounded-xl" />
            </div>

            <div className="mt-3 space-y-2 text-center">
              <Shimmer className="mx-auto h-4 w-20 rounded-full" />
              <Shimmer className="mx-auto h-3 w-14 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   CATEGORY ROW
===================================================== */

function CategoryRowSkeleton() {
  return (
    <section className="wrap py-8">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div className="flex items-center gap-3">
          <Shimmer className="h-10 w-10 shrink-0 rounded-full" />

          <div className="space-y-2">
            <Shimmer className="h-7 w-48 rounded-lg" />
            <Shimmer className="h-3 w-36 rounded-full" />
          </div>
        </div>

        <Shimmer className="h-10 w-24 shrink-0 rounded-xl" />
      </div>

      <div className="flex gap-5 overflow-hidden sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="
              w-[88%]
              shrink-0
              overflow-hidden
              rounded-3xl
              border
              border-slate-100
              bg-white
              shadow-sm
              sm:w-auto
            "
          >
            <Shimmer className="h-44 w-full rounded-none sm:h-52" />

            <div className="flex items-center gap-3 px-4 py-4">
              <Shimmer className="h-11 w-11 shrink-0 rounded-xl" />

              <div className="min-w-0 flex-1 space-y-2">
                <Shimmer className="h-4 w-32 rounded-full" />
                <Shimmer className="h-3 w-24 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   OFFERS
===================================================== */

function OffersSkeleton() {
  return (
    <section className="wrap py-10">
      <div className="mb-5 flex items-center justify-between gap-4">
        <Shimmer className="h-8 w-40 rounded-lg" />

        <div className="flex items-center gap-2">
          <Shimmer className="hidden h-4 w-20 rounded-full sm:block" />
          <Shimmer className="h-6 w-24 rounded-full" />
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden sm:grid sm:grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="
              w-[75%]
              shrink-0
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-4
              shadow-sm
              sm:w-auto
            "
          >
            <Shimmer className="h-12 w-12 rounded-xl" />
            <Shimmer className="mt-4 h-8 w-24 rounded-lg" />
            <Shimmer className="mt-2 h-4 w-32 rounded-full" />
            <Shimmer className="mt-4 h-10 w-full rounded-xl" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   GALLERY
===================================================== */

function GallerySkeleton() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-sky to-ice py-14 lg:py-20">
      <div className="wrap text-center">
        <Shimmer className="mx-auto h-8 w-64 rounded-lg" />

        <Shimmer className="mx-auto mt-3 h-4 w-72 rounded-full" />

        <div
          className="
            mx-auto
            mt-8
            h-[320px]
            w-full
            overflow-hidden
            rounded-3xl
            sm:h-[450px]
            lg:h-[540px]
          "
        >
          <div className="flex h-full items-center justify-center gap-3 sm:gap-5">
            <Shimmer className="h-[52%] w-[24%] rounded-3xl" />
            <Shimmer className="h-[68%] w-[30%] rounded-3xl" />
            <Shimmer className="h-[52%] w-[24%] rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   HOW IT WORKS
===================================================== */

function HowItWorksSkeleton() {
  return (
    <section className="wrap py-14 lg:py-20">
      <div className="mb-8 text-center">
        <Shimmer className="mx-auto h-7 w-36 rounded-full" />

        <Shimmer className="mx-auto mt-4 h-10 w-56 rounded-xl sm:h-12 sm:w-64" />

        <Shimmer className="mx-auto mt-3 h-4 w-full max-w-lg rounded-full" />
      </div>

      <div
        className="
          h-[420px]
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-slate-50
          sm:h-[540px]
        "
      >
        <div className="relative h-full w-full">
          <Shimmer className="absolute left-[8%] top-[12%] h-[55%] w-[25%] rounded-3xl" />

          <Shimmer className="absolute left-[32%] top-[20%] h-[58%] w-[25%] rounded-3xl" />

          <Shimmer className="absolute left-[57%] top-[12%] h-[55%] w-[25%] rounded-3xl" />

          <Shimmer className="absolute left-[24%] top-[48%] h-[38%] w-[25%] rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   TOP BRANDS
===================================================== */

function TopBrandsSkeleton() {
  const positions = [
    "left-[8%] top-[15%]",
    "left-[28%] top-[7%]",
    "left-[53%] top-[15%]",
    "left-[72%] top-[32%]",
    "left-[18%] top-[55%]",
    "left-[48%] top-[68%]",
    "left-[75%] top-[62%]",
  ];

  return (
    <section className="overflow-hidden bg-gradient-to-b from-sky to-ice py-14 lg:py-20">
      <div className="wrap mb-8 text-center">
        <Shimmer className="mx-auto h-7 w-28 rounded-full" />

        <Shimmer className="mx-auto mt-4 h-10 w-48 rounded-xl sm:h-12 sm:w-60" />

        <Shimmer className="mx-auto mt-3 h-4 w-full max-w-lg rounded-full" />
      </div>

      <div className="relative h-[360px] w-full overflow-hidden sm:h-[500px]">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[210px]
            w-[210px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-[38px]
            border-slate-200
            sm:h-[330px]
            sm:w-[330px]
            sm:border-[58px]
          "
        />

        {positions.map((position, i) => (
          <Shimmer
            key={i}
            className={`
              absolute
              ${position}
              h-[72px]
              w-[115px]
              rounded-2xl
              sm:h-[100px]
              sm:w-[175px]
            `}
          />
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   FAQ
===================================================== */

function FAQSkeleton() {
  return (
    <section className="wrap max-w-3xl py-14 lg:py-20">
      <div className="mb-10 text-center">
        <Shimmer className="mx-auto h-10 w-72 rounded-xl sm:h-12 sm:w-96" />

        <Shimmer className="mx-auto mt-4 h-4 w-full max-w-md rounded-full" />
      </div>

      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="
              flex
              min-h-[64px]
              items-center
              justify-between
              gap-4
              rounded-[22px]
              border
              border-slate-200
              bg-white
              px-5
              py-4
              sm:px-6
            "
          >
            <Shimmer className="h-4 w-[65%] rounded-full" />
            <Shimmer className="h-5 w-5 shrink-0 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   FOOTER
===================================================== */

function FooterSkeleton() {
  return (
    <footer className="mt-10 bg-[#0E1120]">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
        {/* BRAND */}
        <div>
          <Shimmer className="h-12 w-36 rounded-xl bg-white/10" />

          <Shimmer className="mt-5 h-4 w-52 rounded-full bg-white/10" />

          <Shimmer className="mt-2 h-4 w-44 rounded-full bg-white/10" />

          <div className="mt-5 flex gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Shimmer
                key={i}
                className="h-10 w-10 rounded-full bg-white/10"
              />
            ))}
          </div>
        </div>

        {/* FOOTER COLUMNS */}
        {Array.from({ length: 3 }).map((_, column) => (
          <div key={column}>
            <Shimmer className="h-5 w-28 rounded-full bg-white/10" />

            <div className="mt-5 space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Shimmer
                  key={i}
                  className="h-4 w-32 rounded-full bg-white/10"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-5">
          <Shimmer className="mx-auto h-4 w-72 rounded-full bg-white/10" />
        </div>
      </div>
    </footer>
  );
}

/* =====================================================
   MAIN HOME SKELETON
===================================================== */

export default function HomeSkeleton() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <HeroSkeleton />

      <CategoriesSkeleton />

      <PopularSkeleton />

      <CategoryRowSkeleton />

      <CategoryRowSkeleton />

      <CategoryRowSkeleton />

      <OffersSkeleton />

      <GallerySkeleton />

      <HowItWorksSkeleton />

      <TopBrandsSkeleton />

      <FAQSkeleton />

      <FooterSkeleton />

      <style jsx global>{`
        @keyframes skeletonShimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}