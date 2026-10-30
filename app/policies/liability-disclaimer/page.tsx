
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liability & Disclaimer Policy | SafalSevaKendra",
  description:
    "Read the Liability and Disclaimer Policy of Prosper Professional Development Life Private Limited.",
};

const sections = [
  {
    title: "Purpose and Scope",
    content: (
      <p>
        This Liability &amp; Disclaimer Policy explains the general limitations
        and responsibilities applicable when users access the website{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        or use gift card, voucher, digital payment-related, or other services
        made available through Prosper Professional Development Life Private
        Limited (&quot;Prosper&quot;). This document should be read with the
        applicable Terms and Conditions, product-specific terms, and the
        relevant issuer/provider terms.
      </p>
    ),
  },
  {
    title: "Role of Prosper and Third-Party Providers",
    content: (
      <p>
        Depending on the product, Prosper may facilitate access to or
        distribution of products or services offered by banks, authorised
        prepaid payment instrument (PPI) issuers, merchants, voucher providers,
        or other third parties. The actual issuer or service provider, where
        applicable, will be identified in the relevant product information or
        transaction flow. Prosper does not claim to be independently
        authorised by the Reserve Bank of India (RBI) or licensed by NPCI to
        issue PPI products or operate regulated payment systems. The relevant
        provider’s terms and applicable law govern the underlying product or
        service.
      </p>
    ),
  },
  {
    title: "Accuracy and Availability of Information",
    content: (
      <p>
        Prosper endeavours to keep website and product information reasonably
        accurate and current. However, product descriptions, offers, merchant
        acceptance, prices, availability, redemption conditions, and other
        information may change or be supplied by third parties. Information is
        provided subject to the applicable product terms and confirmation by
        the relevant provider.
      </p>
    ),
  },
  {
    title: "Third-Party Services and Merchant Responsibility",
    content: (
      <p>
        Third-party banks, issuers, merchants, voucher providers, payment
        processors, and technology partners may apply their own terms,
        conditions, eligibility requirements, operating hours, and service
        standards. Prosper is not responsible for independent acts, omissions,
        product decisions, or service failures of a third party, except to the
        extent liability cannot lawfully be excluded or where Prosper is
        responsible under applicable law or its contractual obligations. Users
        should review the relevant provider’s terms before purchase or
        redemption.
      </p>
    ),
  },
  {
    title: "Transactions, Redemption and Refunds",
    content: (
      <p>
        Gift cards and vouchers may be subject to expiry dates, merchant
        restrictions, partial-use rules, non-transferability, cancellation
        limits, and other product-specific conditions. A successful order or
        payment does not guarantee acceptance by every merchant or outlet.
        Refunds, reversals, and failed-transaction handling will be governed by
        the applicable product terms, the relevant provider’s rules, and
        applicable law. Users should retain transaction references and contact
        support if an issue arises.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, Prosper will not be liable
        for indirect, incidental, special, punitive, or consequential losses,
        including loss of profits, revenue, data, business opportunity, or
        goodwill arising from use of the website or third-party products.
        Nothing in this Policy excludes or limits liability that cannot be
        excluded or limited under applicable law, including any liability
        arising from fraud, wilful misconduct, or obligations that the law
        requires Prosper to fulfil.
      </p>
    ),
  },
  {
    title: "Website Access and Technical Issues",
    content: (
      <p>
        Prosper aims to maintain reliable access but does not guarantee
        uninterrupted, error-free, or continuously available website access.
        Access may be affected by maintenance, network disruptions, third-party
        outages, cyber incidents, or events beyond reasonable control. Users
        should not rely on the website as the sole record of a transaction and
        should preserve confirmations and receipts.
      </p>
    ),
  },
  {
    title: "User Responsibilities",
    content: (
      <p>
        Users are responsible for providing accurate information, protecting
        account credentials and OTPs, checking recipient details before
        confirming a transaction, reviewing product-specific conditions, and
        using the website lawfully. Users must promptly report suspected
        unauthorised activity or errors.
      </p>
    ),
  },
  {
    title: "No Professional Advice",
    content: (
      <p>
        Unless expressly stated otherwise, website content is general
        information and is not legal, tax, financial, or investment advice.
        Users should obtain appropriate professional advice where needed.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    content: (
      <p>
        Prosper may update this Policy from time to time. The revised version
        will be published on the website with an updated effective or revision
        date. Continued use after publication of changes is subject to
        applicable law and the updated terms.
      </p>
    ),
  },
];

export default function LiabilityDisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfd] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
    

<header className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="px-5 py-5 text-center sm:px-8 sm:py-6">
    <span className="inline-flex rounded-full border border-[#2456a6]/15 bg-[#2456a6]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2456a6]">
      Legal &amp; Compliance
    </span>

    <h1 className="mx-auto mt-3 max-w-4xl text-xl font-extrabold uppercase leading-snug text-[#2456a6] sm:text-2xl">
      Liability &amp; Disclaimer Policy
    </h1>

    <p className="mt-3 text-sm font-semibold text-slate-800 sm:text-base">
      Prosper Professional Development Life Private Limited
    </p>

    <a
      href="https://www.safalsevakendra.in"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-1 inline-block text-sm text-slate-500 underline underline-offset-4 hover:text-[#2456a6]"
    >
      www.safalsevakendra.in
    </a>

    <div className="mt-2 text-sm text-slate-500">
      Contact:{" "}
      <a
        href="mailto:anup.rai@safalsevakendra.in"
        className="break-all font-medium text-[#2456a6] underline"
      >
        anup.rai@safalsevakendra.in
      </a>
    </div>

    <div className="mt-3 flex flex-col justify-center gap-1 text-sm text-slate-500 sm:flex-row sm:gap-6">
      <p>
        <span className="font-semibold text-slate-700">Effective Date:</span>{" "}
        29 October 2026
      </p>

      <p>
        <span className="font-semibold text-slate-700">Last Updated:</span>{" "}
        29 October 2026
      </p>
    </div>
  </div>
</header>



        {/* Company Details */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Policy issued by
          </p>

          <h2 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
            Prosper Professional Development Life Private Limited
          </h2>

          <a
            href="https://www.safalsevakendra.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block break-all text-sm font-medium text-[#2456a6] hover:underline"
          >
            www.safalsevakendra.in
          </a>
        </section>

        {/* Policy Sections */}
        <div className="space-y-5">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eaf1ff] text-sm font-bold text-[#2456a6]">
                  {index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Contact */}
          <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2456a6] shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                  11. Contact
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  For questions or concerns about this Policy, contact:
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Prosper Professional Development Life Private Limited
                </p>

                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">Website: </span>
                  <a
                    href="https://www.safalsevakendra.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all font-medium text-[#2456a6] hover:underline"
                  >
                    www.safalsevakendra.in
                  </a>
                </p>

                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">Email: </span>
                  <a
                    href="mailto:anup.rai@safalsevakendra.in"
                    className="break-all font-medium text-[#2456a6] hover:underline"
                  >
                    anup.rai@safalsevakendra.in
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Review Note */}
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-7">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12 3 2.8 20h18.4L12 3Z" />
                  <path d="M12 9v5" />
                  <path d="M12 17h.01" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold text-amber-950 sm:text-xl">
                  Important Review Note
                </h2>

                <p className="mt-4 text-sm leading-7 text-amber-900 sm:text-base">
                  This is a general draft for business use and is not legal
                  advice. Before publication, it should be reviewed and
                  approved by qualified Indian legal and compliance
                  professionals, particularly for consumer protection,
                  payment services, RBI/PPI-related requirements, and the
                  specific contracts with banks, authorised issuers, merchants,
                  and other service providers.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Prosper Professional Development Life
            Private Limited.
          </p>

          <a
            href="/policies/terms-and-conditions"
            className="font-medium text-[#2456a6] hover:underline"
          >
            View Terms &amp; Conditions
          </a>
        </footer>
      </div>
    </main>
  );
}
