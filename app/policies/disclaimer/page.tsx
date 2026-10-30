
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer Policy | SafalSevaKendra",
  description:
    "Read the Disclaimer Policy of Prosper Professional Development Life Private Limited for SafalSevaKendra, including third-party products, website availability and liability limitations.",
};

const sections = [
  {
    title: "General Information",
    content: (
      <p>
        The information on{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        is provided by Prosper Professional Development Life Private Limited
        (“Prosper”, “we”, “our” or “us”) for general information about our
        website, products and services. We aim to keep information accurate
        and current, but product details, availability, terms and service
        processes may change.
      </p>
    ),
  },
  {
    title: "Gift Cards, Vouchers and Third-Party Products",
    content: (
      <>
        <p>
          Gift cards, vouchers and related products displayed on the website
          may be issued, processed, activated or fulfilled by third-party
          banks, authorised payment providers, PPI issuers, merchants or other
          service partners. Product validity, eligible merchants, redemption
          rules, balance checks, restrictions, expiry, cancellation and other
          conditions may be determined by the actual issuer or merchant and
          will be described in the applicable product terms where available.
        </p>
        <p className="mt-3">
          Customers should review the product information and issuer or
          merchant terms before purchase or redemption. Prosper does not
          guarantee that every third-party product will remain continuously
          available or that a third-party system will always operate without
          interruption.
        </p>
      </>
    ),
  },
  {
    title: "No Independent Regulatory Licence Representation",
    content: (
      <p>
        Nothing on this website or in this Disclaimer should be interpreted
        as a statement that Prosper independently holds an RBI, NPCI or other
        regulatory licence or authorisation. Where a product is provided
        through a bank, authorised payment provider, PPI issuer, merchant or
        other partner, the applicable provider and its role should be
        identified in the relevant product information. Any regulated
        activity is subject to the responsible entity’s permissions,
        agreements and applicable law.
      </p>
    ),
  },
  {
    title: "Third-Party Websites and Services",
    content: (
      <p>
        The website may contain links to or integrations with third-party
        websites, apps, payment gateways, banks, issuers, merchants or service
        providers. These third parties operate independently and may have
        their own terms, privacy policies, service standards and complaint
        procedures. Unless expressly stated otherwise, Prosper does not
        control and is not responsible for the content, policies, availability
        or independent actions of third-party websites or services. This does
        not exclude any responsibility that cannot lawfully be excluded.
      </p>
    ),
  },
  {
    title: "Availability, Errors and Technical Interruptions",
    content: (
      <p>
        We endeavour to maintain website availability and accurate product
        information. However, access may occasionally be interrupted by
        maintenance, connectivity issues, technical errors, security events
        or third-party outages. Descriptions, prices, availability or other
        information may contain inadvertent errors. We will handle material
        errors and affected orders in accordance with applicable law and the
        relevant product terms.
      </p>
    ),
  },
  {
    title: "No Professional Advice",
    content: (
      <p>
        Website content is for general informational purposes and is not
        legal, tax, investment, financial or other professional advice.
        Customers should obtain independent professional advice where
        appropriate to their circumstances.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, Prosper will not be
        responsible for indirect or consequential loss arising from use of
        the website or third-party services where such exclusion is lawful.
        Nothing in this Disclaimer limits liability for fraud, wilful
        misconduct, negligence where liability cannot be excluded, statutory
        consumer rights, or any other liability that cannot legally be
        limited or excluded.
      </p>
    ),
  },
  {
    title: "Customer Responsibilities",
    content: (
      <ul className="list-disc space-y-3 pl-6">
        <li>
          Read the applicable Terms & Conditions and product-specific terms
          before purchase or redemption.
        </li>
        <li>
          Check validity, eligible merchants, restrictions, expiry and
          redemption instructions for a gift card or voucher.
        </li>
        <li>Keep voucher codes and redemption credentials secure.</li>
        <li>
          Provide accurate order and contact details and use the website
          lawfully.
        </li>
      </ul>
    ),
  },
  {
    title: "Changes to This Disclaimer",
    content: (
      <p>
        We may update this Disclaimer from time to time. Any updated version
        will be posted on{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        with a revised “Last Updated” date. Continued use of the website is
        subject to applicable law and the terms then in effect.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="space-y-3">
        <p>
          For questions relating to this Disclaimer, contact us at:
        </p>
        <a
          href="mailto:anup.rai@safalsevakendra.in"
          className="inline-block break-all font-semibold text-[#2456a6] underline"
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
      <>
        <p>
          This is a general draft and is not a substitute for legal advice.
          Before publication, confirm that all descriptions of Prosper’s role,
          partner arrangements, products and liability limitations are
          accurate. Have this Disclaimer reviewed by an Indian
          legal/compliance professional and ensure it is consistent with the
          Terms & Conditions, Privacy Policy and product-specific policies.
          Do not use a disclaimer to remove rights or responsibilities that
          apply under law.
        </p>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="font-semibold text-amber-900">
            Pre-publication checklist
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-amber-950">
            <li>Verify the company and partner descriptions.</li>
            <li>Confirm the accuracy of liability limitations.</li>
            <li>Check consistency with related website policies.</li>
            <li>Insert the effective and last updated dates.</li>
            <li>Obtain Indian legal/compliance review.</li>
          </ul>
        </div>
      </>
    ),
  },
];

export default function DisclaimerPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfd] py-8 text-slate-800 sm:py-12">
      <article className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        
<header className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

  <div className="px-5 py-6 text-center sm:px-8 sm:py-7">
    <span className="inline-flex rounded-full border border-[#2456a6]/15 bg-[#2456a6]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2456a6]">
      Legal &amp; Compliance
    </span>

    <h1 className="mx-auto mt-4 max-w-3xl text-2xl font-extrabold uppercase leading-tight text-[#2456a6] sm:text-3xl">
      Disclaimer Policy
    </h1>

   

    <p className="mt-4 text-base font-semibold text-slate-800">
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

    <div className="mt-4 flex flex-col justify-center gap-2 text-sm text-slate-500 sm:flex-row sm:gap-6">
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


        {/* Introduction */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-[#2456a6]">
            About This Disclaimer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            This Disclaimer explains important information regarding the
            SafalSevaKendra website, third-party products, service availability
            and the responsibilities of customers and service providers.
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
