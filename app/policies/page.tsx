
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies & Guidelines | Safal Seva Kendra",
  description:
    "Read the policies, terms, privacy guidelines, and customer support information of Safal Seva Kendra.",
};

const policies = [
  {
    title: "Terms and Conditions",
    slug: "terms-and-conditions",
    description: "Understand the terms governing the use of our platform and services.",
  },
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    description: "Learn how we collect, use, store, and protect your personal information.",
  },
  {
    title: "Refund, Cancellation & Failed Transaction",
    slug: "refund-cancellation-failed-transaction",
    description: "Review the applicable refund, cancellation, and failed transaction procedures.",
  },
  {
    title: "Gift Card & Voucher Policy",
    slug: "gift-card-voucher",
    description: "Understand the terms for purchasing, redeeming, and using gift cards and vouchers.",
  },
  {
    title: "Shipping & Delivery / Voucher Fulfilment",
    slug: "shipping-delivery-voucher-fulfilment",
    description: "Learn about digital voucher delivery and fulfilment procedures.",
  },
  {
    title: "KYC & Customer Verification",
    slug: "kyc-customer-verification",
    description: "Review customer verification requirements and applicable procedures.",
  },
  {
    title: "AML & CFT Policy",
    slug: "aml-cft-policy",
    description: "Read our anti-money laundering and counter-terrorism financing guidelines.",
  },
  {
    title: "Fraud Prevention & Transaction Security",
    slug: "fraud-prevention-transaction-security",
    description: "Learn about transaction security measures and fraud prevention practices.",
  },
  {
    title: "Customer Support & Grievance Redressal",
    slug: "customer-support-grievance-redressal",
    description: "Find information about customer assistance and complaint resolution.",
  },
  {
    title: "Grievance Redressal",
    slug: "grievance-redressal",
    description: "Review the process for raising and resolving grievances.",
  },
  {
    title: "Disclaimer",
    slug: "disclaimer",
    description: "Understand the limitations and conditions associated with our services.",
  },
  {
    title: "Liability Disclaimer",
    slug: "liability-disclaimer",
    description: "Review the applicable limitations of liability.",
  },
  {
    title: "Intellectual Property & Copyright",
    slug: "intellectual-property-copyright",
    description: "Learn about intellectual property rights and permitted use of website content.",
  },
  {
    title: "Governing Law & Jurisdiction",
    slug: "governing-law-jurisdiction",
    description: "Review the applicable legal framework and jurisdiction provisions.",
  },
  {
    title: "Third-Party, Bank, PPI Issuer & Merchant Terms",
    slug: "third-party-bank-ppi-issuer-merchant-terms",
    description: "Understand the terms applicable to third-party providers, banks, issuers, and merchants.",
  },
];

function DocumentIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M7 3.75h7l5 5v11.5a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-13a2.5 2.5 0 0 1 2-2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.75v5h5M8.5 13h7M8.5 16.5h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900">
      {/* Header */}
   

      {/* Page heading */}
      <section className="mx-auto max-w-5xl px-5 pb-8 pt-12 sm:px-8 sm:pt-16">
  {/* Top Row */}
  <div className="mb-8 flex items-center justify-between gap-4">
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2456a6]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#2456a6]" />
      Policies & Guidelines
    </div>

    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-[#2456a6] hover:bg-blue-50 hover:text-[#2456a6]"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to Home
    </Link>
  </div>

  {/* Heading */}
  <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
    Our policies, clearly explained.
  </h1>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
    Find information about our services, privacy practices, transactions,
    customer support, and applicable terms. Please review the relevant
    policy before using our services.
  </p>

  {/* Policy Information */}
  <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-500">
    <span className="inline-flex items-center gap-2">
      <DocumentIcon />
      {policies.length} policy documents
    </span>

    <span className="hidden h-4 w-px bg-slate-300 sm:block" />

    <span>Clear information. Easy access.</span>
  </div>
</section>
      {/* Policy list: one card per row */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
        <div className="grid grid-cols-1 gap-4">
          {policies.map((policy, index) => (
            <article
              key={policy.slug}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(36,86,166,0.07)] sm:p-6"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2456a6] transition group-hover:bg-[#2456a6] group-hover:text-white">
                  <DocumentIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-xs font-medium tracking-wide text-slate-400">
                    POLICY {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2 className="text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                    {policy.title}
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {policy.description}
                  </p>
                </div>

                <Link
                  href={`/policies/${policy.slug}`}
                  aria-label={`View ${policy.title}`}
                  className="group/link inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-semibold text-[#2456a6] transition hover:border-[#2456a6] hover:bg-blue-50 sm:px-4"
                >
                  <span className="hidden sm:inline">View Policy</span>
                  <span className="sm:hidden">View</span>
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Customer support */}
      <section className="mx-auto max-w-5xl px-5 pb-12 sm:px-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Need help with a policy?
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            If you have questions about our policies or need assistance,
            contact our support team.
          </p>

          <a
            href="mailto:anup.rai@safalsevakendra.in"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#2456a6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b4386]"
          >
            Contact Support
            <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} Prosper Professional Development Life
            Private Limited.
          </p>

          <a
            href="https://www.safalsevakendra.in"
            className="font-medium text-[#2456a6] hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            safalsevakendra.in
          </a>
        </div>
      </footer>
    </main>
  );
}
