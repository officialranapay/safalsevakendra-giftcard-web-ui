
"use client";

function Skeleton({
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

function SectionSkeleton({
  type = "paragraph",
}: {
  type?: "paragraph" | "list" | "table";
}) {
  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center gap-2">
        <Skeleton className="h-6 w-10" />
        <Skeleton className="h-7 w-64 max-w-[75%]" />
      </div>

      {type === "paragraph" && (
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[94%]" />
          <Skeleton className="h-4 w-[78%]" />
        </div>
      )}

      {type === "list" && (
        <div className="space-y-3 pl-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-2 w-2 shrink-0 rounded-full" />
              <Skeleton
                className={`h-4 ${
                  i % 3 === 0
                    ? "w-[86%]"
                    : i % 3 === 1
                      ? "w-[72%]"
                      : "w-[92%]"
                }`}
              />
            </div>
          ))}
        </div>
      )}

      {type === "table" && (
        <div className="overflow-x-auto rounded-sm border border-[#DCEAF7]">
          <div className="min-w-[520px]">
            <div className="grid grid-cols-3 bg-[#EAF3FF]">
              <div className="border-r border-[#BFD8F2] p-4">
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="border-r border-[#BFD8F2] p-4">
                <Skeleton className="h-4 w-28" />
              </div>
              <div className="p-4">
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-t border-[#E2EAF2]"
              >
                <div className="border-r border-[#E2EAF2] p-4">
                  <Skeleton className="h-4 w-[65%]" />
                </div>
                <div className="border-r border-[#E2EAF2] p-4">
                  <Skeleton className="h-4 w-[82%]" />
                </div>
                <div className="p-4">
                  <Skeleton className="h-4 w-[55%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function PolicySkeleton() {
  return (
    <main
      className="min-h-screen bg-[#F7FBFF] px-4 py-8 text-[#071923] sm:px-6 md:px-8 lg:px-12"
      aria-label="Loading policy"
      aria-busy="true"
    >
      <div className="mx-auto max-w-[1230px] bg-white px-5 py-8 shadow-sm sm:px-8 md:px-10 md:py-12 lg:px-14">
        {/* DOCUMENT HEADER */}
        <header className="border-b-2 border-[#EAF3FF] pb-6">
          <div className="flex flex-col items-center">
            <Skeleton className="h-8 w-72 max-w-full md:h-9" />
            <Skeleton className="mt-4 h-8 w-full max-w-2xl md:h-9" />
            <Skeleton className="mt-4 h-4 w-52 max-w-full" />
            <Skeleton className="mt-2 h-4 w-60 max-w-full" />
          </div>
        </header>

        {/* DOCUMENT CONTROL */}
        <div className="mt-8 overflow-x-auto rounded-sm border border-[#DCEAF7]">
          <div className="min-w-[480px]">
            <div className="grid grid-cols-[1fr_2fr] bg-[#EAF3FF]">
              <div className="border-r border-[#BFD8F2] p-4">
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="p-4">
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_2fr] border-t border-[#E2EAF2]"
              >
                <div className="border-r border-[#E2EAF2] p-4">
                  <Skeleton
                    className={
                      i % 2 === 0 ? "h-4 w-32" : "h-4 w-44"
                    }
                  />
                </div>
                <div className="p-4">
                  <Skeleton
                    className={
                      i % 3 === 0
                        ? "h-4 w-[80%]"
                        : i % 3 === 1
                          ? "h-4 w-[62%]"
                          : "h-4 w-[72%]"
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POLICY CONTENT */}
        <div className="mt-10">
          <SectionSkeleton type="paragraph" />
          <SectionSkeleton type="list" />
          <SectionSkeleton type="paragraph" />
          <SectionSkeleton type="list" />
          <SectionSkeleton type="paragraph" />
          <SectionSkeleton type="list" />
          <SectionSkeleton type="paragraph" />
          <SectionSkeleton type="table" />
          <SectionSkeleton type="paragraph" />
          <SectionSkeleton type="list" />
          <SectionSkeleton type="paragraph" />
          <SectionSkeleton type="table" />
          <SectionSkeleton type="paragraph" />
          <SectionSkeleton type="list" />
        </div>

        {/* APPROVAL */}
        <section className="mt-10">
          <div className="mb-4 flex items-center gap-2">
            <Skeleton className="h-6 w-10" />
            <Skeleton className="h-7 w-48" />
          </div>

          <div className="overflow-x-auto rounded-sm border border-[#DCEAF7]">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 bg-[#EAF3FF]">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="border-r border-[#BFD8F2] p-4 last:border-r-0"
                  >
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
              </div>

              {Array.from({ length: 3 }).map((_, row) => (
                <div
                  key={row}
                  className="grid grid-cols-3 border-t border-[#E2EAF2]"
                >
                  {Array.from({ length: 3 }).map((_, col) => (
                    <div
                      key={col}
                      className="border-r border-[#E2EAF2] p-5 last:border-r-0"
                    >
                      <Skeleton
                        className={
                          col === 0
                            ? "h-4 w-[55%]"
                            : col === 1
                              ? "h-4 w-[80%]"
                              : "h-4 w-[48%]"
                        }
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t-2 border-[#EAF3FF] pt-6">
          <Skeleton className="mx-auto h-3 w-72 max-w-full" />
          <Skeleton className="mx-auto mt-3 h-3 w-48 max-w-full" />
        </footer>
      </div>

      {/* COMPONENT-SPECIFIC SHIMMER */}
      <style jsx global>{`
        .policy-skeleton-shimmer {
          background-image: linear-gradient(
            90deg,
            #e2e8f0 0%,
            #ffffff 45%,
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
