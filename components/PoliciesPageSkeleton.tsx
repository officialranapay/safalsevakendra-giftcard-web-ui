
"use client";

function SkeletonBox({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`policy-skeleton-shimmer rounded-lg bg-slate-100 ${className}`}
    />
  );
}

export default function PoliciesPageSkeleton() {
  return (
    <main
      className="min-h-screen bg-[#f8fcfd]"
      aria-label="Loading policies"
      aria-busy="true"
    >
      {/* HERO */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-[#edf5ff] via-white to-[#f5fbff] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SkeletonBox className="h-9 w-52 rounded-full" />

          <SkeletonBox className="mt-5 h-10 w-full max-w-2xl sm:h-12" />

          <SkeletonBox className="mt-4 h-4 w-full max-w-3xl" />
          <SkeletonBox className="mt-2 h-4 w-4/5 max-w-2xl" />

          <div className="mt-6 flex flex-wrap gap-3">
            <SkeletonBox className="h-10 w-36 rounded-lg" />
            <SkeletonBox className="h-10 w-52 rounded-lg" />
          </div>
        </div>
      </section>

      {/* POLICY SECTION HEADER */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-7">
          <SkeletonBox className="h-7 w-64" />
          <SkeletonBox className="mt-3 h-4 w-full max-w-xl" />
        </div>

        {/* 15 actual policy cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="flex h-full min-h-[250px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <SkeletonBox className="h-10 w-10 shrink-0 rounded-xl" />
                <SkeletonBox className="h-6 w-16 rounded-full" />
              </div>

              <SkeletonBox
                className={`mt-5 h-5 ${
                  index % 3 === 0
                    ? "w-[90%]"
                    : index % 3 === 1
                      ? "w-[75%]"
                      : "w-[85%]"
                }`}
              />

              <div className="mt-4 space-y-2">
                <SkeletonBox className="h-3 w-full" />
                <SkeletonBox className="h-3 w-[94%]" />
                <SkeletonBox className="h-3 w-[72%]" />
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <SkeletonBox className="h-3 w-20" />
                <SkeletonBox className="h-10 w-28 rounded-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* CUSTOMER SUPPORT */}
        <div className="mt-10 rounded-2xl bg-[#173d78] p-6 sm:p-8">
          <SkeletonBox className="h-7 w-64" />
          <SkeletonBox className="mt-3 h-4 w-full max-w-xl" />
          <SkeletonBox className="mt-2 h-4 w-4/5 max-w-md" />
          <SkeletonBox className="mt-5 h-11 w-44 rounded-xl" />
        </div>

        {/* LEGAL NOTICE */}
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <SkeletonBox className="h-4 w-full" />
          <SkeletonBox className="mt-3 h-4 w-[92%]" />
          <SkeletonBox className="mt-3 h-4 w-[68%]" />
        </div>
      </section>

      <style jsx global>{`
        .policy-skeleton-shimmer {
          background-image: linear-gradient(
            90deg,
            #e2e8f0 0%,
            #f8fafc 45%,
            #e2e8f0 100%
          );
          background-size: 700px 100%;
          animation: policySkeletonShimmer 1.6s linear infinite;
        }

        @keyframes policySkeletonShimmer {
          0% {
            background-position: -700px 0;
          }

          100% {
            background-position: 700px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .policy-skeleton-shimmer {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
