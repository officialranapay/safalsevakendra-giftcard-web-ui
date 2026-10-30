import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third-Party Bank, PPI Issuer & Merchant Terms Policy | SafalSevaKendra",
  description:
    "Learn about third-party bank, PPI issuer, merchant and service-provider terms applicable to gift cards and vouchers on SafalSevaKendra.",
};

const sections = [
  {
    title: "Purpose",
    content: (
      <p>
        This Policy explains how third-party terms may apply to gift cards,
        vouchers and related products made available through{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        by Prosper Professional Development Life Private Limited (“Prosper”,
        “we”, “our” or “us”).
      </p>
    ),
  },
  {
    title: "Third-Party Issuers and Service Providers",
    content: (
      <p>
        Gift cards, vouchers and related products may be issued, processed,
        activated, delivered or fulfilled by third-party banks, authorised
        Prepaid Payment Instrument (PPI) issuers, merchants or other service
        providers. The role of each party depends on the product and the
        arrangements in place.
      </p>
    ),
  },
  {
    title: "Applicable Product Terms",
    content: (
      <p>
        Customers must review and comply with the terms applicable to the
        selected product, including eligibility criteria, validity period,
        expiry date, redemption instructions, participating merchants,
        transaction limits, exclusions and other usage restrictions.
        Product-specific terms may be displayed on the product page, during
        checkout or through the relevant issuer or merchant.
      </p>
    ),
  },
  {
    title: "Identification of the Responsible Provider",
    content: (
      <p>
        Where relevant, the actual issuer, merchant or responsible service
        provider should be identified in the product information or related
        customer communication. Customers should refer to the applicable
        product documentation to understand who issues the product, who
        processes a transaction and who is responsible for redemption or
        support.
      </p>
    ),
  },
  {
    title: "Partner Processing and Availability",
    content: (
      <p>
        Order processing, activation, delivery, balance checks and redemption
        may depend on the systems, procedures and availability of the relevant
        third-party provider. Delays, restrictions or service interruptions may
        occur. Where reasonably possible, Prosper will provide available
        order-status information or coordinate with the relevant partner in
        accordance with the applicable arrangements and law.
      </p>
    ),
  },
  {
    title: "Customer Responsibilities",
    content: (
      <ul className="list-disc space-y-3 pl-6">
        <li>
          Read the applicable product terms before purchasing or redeeming a
          gift card or voucher.
        </li>
        <li>
          Check the product value, validity, eligible merchants, expiry and
          redemption instructions before purchase.
        </li>
        <li>
          Keep voucher codes, PINs, redemption links and other credentials
          confidential.
        </li>
        <li>
          Contact the responsible issuer or merchant where an issue falls
          within that provider’s control, and contact Prosper for assistance
          with orders placed through our website.
        </li>
      </ul>
    ),
  },
  {
    title: "Prosper’s Role and Regulatory Clarification",
    content: (
      <p>
        Prosper may facilitate access to products under agreements or
        arrangements with relevant third-party providers. Prosper does not
        represent that it independently holds an RBI, NPCI or other regulatory
        licence. Any regulated service is subject to the permissions,
        responsibilities and terms applicable to the responsible regulated
        entity and the relevant product.
      </p>
    ),
  },
  {
    title: "Conflicts and Applicable Law",
    content: (
      <p>
        If these general terms differ from specific terms issued by the actual
        issuer, merchant or service provider for a particular product, the
        product-specific terms will apply to the extent relevant and permitted
        by applicable law. Nothing in this Policy limits any mandatory rights
        or remedies available to customers under Indian law.
      </p>
    ),
  },
  {
    title: "Related Policies",
    content: (
      <>
        <p>
          This Policy should be read with the website Terms & Conditions, Gift
          Card & Voucher Policy, Refund/Cancellation/Failed Transaction Policy,
          Privacy Policy, Shipping/Delivery/Voucher Fulfilment Policy and
          Grievance Redressal Policy.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="/policies/terms-and-conditions"
            className="rounded-lg border border-[#2456a6]/20 bg-[#2456a6]/5 px-3 py-2 text-sm font-medium text-[#2456a6] hover:bg-[#2456a6]/10"
          >
            Terms & Conditions
          </a>
        </div>
      </>
    ),
  },
  {
    title: "Customer Support",
    content: (
      <div className="space-y-3">
        <p>
          For assistance with orders placed through the Website or questions
          relating to this Policy, contact:
        </p>

        <a
          href="mailto:anup.rai@safalsevakendra.in"
          className="inline-flex break-all font-semibold text-[#2456a6] underline"
        >
          anup.rai@safalsevakendra.in
        </a>

        <p>
          Website:{" "}
          <a
            href="https://www.safalsevakendra.in"
            className="font-medium text-[#2456a6] underline"
          >
            www.safalsevakendra.in
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Review Before Publication",
    content: (
      <div className="space-y-4">
        <p>
          This is a general draft. Before publication, verify the exact role of
          Prosper and each partner, the applicable agreements, product-specific
          terms and customer-support responsibilities. Do not identify a
          partner as an issuer or regulated provider unless that description is
          accurate. Obtain Indian legal/compliance review before publication.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="font-semibold text-amber-900">
            Pre-publication checklist
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-amber-950">
            <li>Confirm the actual issuer and service provider for each product.</li>
            <li>Verify the signed partner agreements and permitted activities.</li>
            <li>Confirm customer-support and grievance responsibilities.</li>
            <li>Insert the effective date and last updated date.</li>
            <li>Obtain Indian legal/compliance review before publication.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function ThirdPartyTermsPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfd] py-8 text-slate-800 sm:py-12">
      <article className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-10">
        {/* Policy Header */}
        
<header className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="px-5 py-5 text-center sm:px-8 sm:py-6">
    <span className="inline-flex rounded-full border border-[#2456a6]/15 bg-[#2456a6]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2456a6]">
      Legal &amp; Compliance
    </span>

    <h1 className="mx-auto mt-3 max-w-4xl text-xl font-extrabold leading-snug text-[#2456a6] sm:text-2xl">
      Third-Party Bank, PPI Issuer &amp; Merchant Terms Policy
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

    <div className="mt-3 flex flex-col justify-center gap-1 text-sm text-slate-500 sm:flex-row sm:gap-6">
      <p>
        <span className="font-semibold text-slate-700">
          Effective Date:
        </span>{" "}
        29 October 2026
      </p>

      <p>
        <span className="font-semibold text-slate-700">
          Last Updated:
        </span>{" "}
        29 October 2026
      </p>
    </div>
  </div>
</header>


        {/* Policy Introduction */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-[#2456a6]">
            About This Policy
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            This Policy explains the relationship between Prosper,
            third-party issuers, merchants and service providers involved in
            making gift cards and vouchers available through SafalSevaKendra.
          </p>
        </section>

        {/* Policy Sections */}
        <div className="space-y-5">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2456a6]/10 text-sm font-extrabold text-[#2456a6]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold leading-snug text-[#2456a6] sm:text-xl">
                    {section.title}
                  </h2>

                  <div className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-10 rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center shadow-sm">
          <p className="text-sm font-semibold text-slate-700">
            Prosper Professional Development Life Private Limited
          </p>

          <a
            href="mailto:anup.rai@safalsevakendra.in"
            className="mt-2 inline-block break-all text-sm text-[#2456a6] underline"
          >
            anup.rai@safalsevakendra.in
          </a>

          <p className="mt-4 text-xs leading-6 text-slate-400">
            © {new Date().getFullYear()} SafalSevaKendra. All rights reserved.
          </p>
        </footer>
      </article>
    </main>
  );
}