
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KYC & Customer Verification Policy | SafalSevaKendra",
  description:
    "Read the KYC and Customer Verification Policy of Prosper Professional Development Life Private Limited.",
};

const sections = [
  {
    title: "Purpose",
    content: (
      <p>
        This KYC &amp; Customer Verification Policy describes the customer
        information and verification steps that Prosper Professional
        Development Life Private Limited (&quot;Prosper&quot;, &quot;we&quot;,
        &quot;our&quot; or &quot;us&quot;) may apply when providing access to
        gift cards, vouchers and related services through{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>
        . The steps applied will depend on the product, the role of Prosper,
        the requirements of the relevant issuer or service partner, and
        applicable law.
      </p>
    ),
  },
  {
    title: "Important Role and Scope",
    content: (
      <p>
        Prosper may facilitate access to gift cards, vouchers and related
        services provided or issued by third-party banks, merchants,
        authorised payment providers or other partners. The actual issuer or
        regulated service provider may have its own customer identification,
        KYC, eligibility and transaction requirements. This Policy does not
        claim that Prosper independently holds an RBI, NPCI or other
        regulatory licence. Where a regulated partner’s requirements apply,
        those requirements and the applicable product terms will govern.
      </p>
    ),
  },
  {
    title: "Information That May Be Requested",
    content: (
      <ul className="space-y-3">
        {[
          "Name and contact details, such as email address and mobile number.",
          "Age or date-of-birth confirmation and eligibility information, where required.",
          "Identity or address information and supporting documents, only where lawfully required for the relevant service.",
          "Order, payment reference, transaction and product-related information.",
          "Additional information reasonably necessary to prevent fraud, investigate a transaction or meet a partner’s lawful requirements.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Verification Process",
    content: (
      <ol className="list-decimal space-y-3 pl-5 marker:font-semibold marker:text-[#2456a6]">
        <li>
          Customers may be asked to provide accurate and complete information
          before placing an order or accessing a particular service.
        </li>
        <li>
          Information may be checked for completeness, consistency and
          authenticity, using lawful methods and authorised service providers
          where appropriate.
        </li>
        <li>
          For products issued or processed by a partner, the partner may
          conduct its own KYC, identity checks, eligibility checks or payment
          verification.
        </li>
        <li>
          Additional documents or clarification may be requested where
          necessary to resolve a mismatch, suspected fraud or a legal or
          partner requirement.
        </li>
        <li>
          Verification may be delayed or declined if information is
          incomplete, inconsistent, unverifiable or not provided when lawfully
          required.
        </li>
      </ol>
    ),
  },
  {
    title: "Accuracy and Customer Responsibilities",
    content: (
      <p>
        Customers must provide information that is true, current and complete
        and must not submit forged, altered, misleading or unauthorised
        documents. Customers should promptly correct information that becomes
        inaccurate. A customer must not use another person’s identity or
        payment details without lawful authority.
      </p>
    ),
  },
  {
    title: "When We May Restrict or Decline a Transaction",
    content: (
      <div className="space-y-4">
        <p>
          Subject to applicable law and contractual obligations, a transaction
          or service request may be delayed, declined, cancelled or restricted
          where:
        </p>
        <ul className="space-y-3">
          {[
            "Required information or documents have not been supplied.",
            "Verification cannot be completed or the information appears inconsistent.",
            "There are reasonable indicators of fraud, misuse, unauthorised activity or a security risk.",
            "The relevant issuer, payment provider, merchant or other partner declines or restricts the transaction.",
            "A restriction is necessary to comply with applicable law, a lawful direction or relevant product terms.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Where appropriate and legally permitted, we will provide a general
          explanation or instructions for resolving the issue. We may be
          unable to disclose details where doing so could compromise security,
          an investigation or legal obligations.
        </p>
      </div>
    ),
  },
  {
    title: "Handling and Sharing Verification Information",
    content: (
      <p>
        Verification information will be used only for relevant service
        delivery, verification, fraud prevention, customer support, dispute
        handling and legal or contractual compliance purposes. Where
        necessary, information may be shared with the relevant issuer, bank,
        authorised payment provider, merchant, technology vendor or competent
        authority, subject to applicable law and appropriate safeguards.
        Please also review our Privacy Policy and the privacy notices of
        relevant partners.
      </p>
    ),
  },
  {
    title: "Storage, Security and Retention",
    content: (
      <p>
        We aim to apply reasonable safeguards to protect verification
        information. Information will be retained only for as long as
        reasonably necessary for the purposes for which it was collected or
        as required by applicable law, partner requirements or legitimate
        dispute, audit and security needs. Specific retention periods should
        be confirmed against actual operational practices and legal
        requirements before publication.
      </p>
    ),
  },
  {
    title: "Customer Requests and Grievances",
    content: (
      <div className="space-y-3">
        <p>
          For questions about verification, correction of information or a
          complaint relating to this Policy, contact us using the details
          below.
        </p>
        <a
          href="mailto:anup.rai@safalsevakendra.in"
          className="inline-flex break-all font-medium text-[#2456a6] hover:underline"
        >
          anup.rai@safalsevakendra.in
        </a>
      </div>
    ),
  },
  {
    title: "Policy Updates",
    content: (
      <p>
        We may update this Policy to reflect changes in our services, partner
        requirements or applicable law. The updated version will be published
        on{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        with a revised &quot;Last Updated&quot; date.
      </p>
    ),
  },
];

const reviewItems = [
  "Confirm the specific products offered and Prosper’s role in each transaction.",
  "Identify applicable issuer and service-partner KYC requirements.",
  "Confirm which identity documents may lawfully be collected and how they will be handled.",
  "Verify actual data-security practices and retention periods.",
  "Obtain Indian legal/compliance review before publication.",
  "Do not collect Aadhaar numbers or other sensitive identity data unless there is a lawful basis and an approved process for doing so.",
];

export default function KYCCustomerVerificationPage() {
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
      KYC &amp; Customer Verification Policy
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

          {/* Review Before Publication */}
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
                  11. Important Review Before Publication
                </h2>

                <p className="mt-4 text-sm leading-7 text-amber-900 sm:text-base">
                  This document is a general draft and does not itself create a
                  regulatory KYC obligation or authorise Prosper to conduct
                  regulated activities. Before publication, complete the
                  following checks:
                </p>

                <ul className="mt-4 space-y-3">
                  {reviewItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                      <span className="text-sm leading-6 text-amber-950">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-7">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Contact Us
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              For questions about this Policy, verification requirements or
              correction of information, please contact:
            </p>
            <a
              href="mailto:anup.rai@safalsevakendra.in"
              className="mt-3 inline-block break-all text-sm font-semibold text-[#2456a6] hover:underline"
            >
              anup.rai@safalsevakendra.in
            </a>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Prosper Professional Development Life
            Private Limited.
          </p>

          <a
            href="/policies/privacy-policy"
            className="font-medium text-[#2456a6] hover:underline"
          >
            View Privacy Policy
          </a>
        </footer>
      </div>
    </main>
  );
}
