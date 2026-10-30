
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grievance Redressal Policy | SafalSevaKendra",
  description:
    "Read the Grievance Redressal Policy of Prosper Professional Development Life Private Limited, including complaint submission, escalation, refunds and customer support.",
};

const sections = [
  {
    title: "Purpose and Scope",
    content: (
      <p>
        Prosper Professional Development Life Private Limited (“Prosper”,
        “we”, “our” or “us”) aims to provide a clear process for customers to
        raise concerns about orders, gift cards, vouchers, payments, service
        delivery, website access or customer support associated with{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] underline"
        >
          www.safalsevakendra.in
        </a>
        . This Policy explains how a customer can submit a complaint and how
        it may be reviewed and addressed.
      </p>
    ),
  },
  {
    title: "Products Provided Through Partners",
    content: (
      <p>
        Some gift cards, vouchers, payment services or related products may be
        issued, processed or fulfilled by third-party banks, authorised
        payment providers, PPI issuers, merchants or other service partners.
        Where a complaint relates to a partner’s product, transaction or
        decision, Prosper may coordinate with the relevant partner or direct
        the customer to the partner’s official complaint channel. The
        partner’s own terms and grievance process may also apply. Prosper does
        not represent that it independently holds an RBI, NPCI or other
        regulatory licence.
      </p>
    ),
  },
  {
    title: "How to Submit a Complaint",
    content: (
      <>
        <p>Customers may submit a complaint by email:</p>
        <a
          href="mailto:anup.rai@safalsevakendra.in"
          className="mt-3 inline-block break-all font-semibold text-[#2456a6] underline"
        >
          anup.rai@safalsevakendra.in
        </a>
        <p className="mt-3">
          Please use a subject line such as “Customer Complaint – [Order/
          Transaction Reference]” and include the information needed to
          identify the issue.
        </p>
      </>
    ),
  },
  {
    title: "Information to Include",
    content: (
      <>
        <p>Please provide the following information where available:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Customer name and a contact email address.</li>
          <li>
            Order ID, transaction reference or other relevant reference, if
            available.
          </li>
          <li>Product name, such as gift card or voucher, and purchase date.</li>
          <li>A clear description of the issue and the resolution requested.</li>
          <li>
            Relevant supporting documents or screenshots, with unnecessary
            personal or payment information hidden.
          </li>
        </ul>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="font-semibold text-amber-900">
            Protect your sensitive information
          </p>
          <p className="mt-2 text-sm leading-6 text-amber-950">
            Do not email passwords, full payment-card numbers, PINs, OTPs or
            other authentication credentials. We may request additional
            information where reasonably necessary, using an appropriate
            channel.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Acknowledgement and Resolution Process",
    content: (
      <>
        <p>Complaints may be handled through the following steps:</p>
        <ol className="mt-3 list-decimal space-y-2 pl-6">
          <li>
            We will review the complaint and, where practicable, acknowledge
            receipt within a reasonable period.
          </li>
          <li>
            We may verify the order or transaction details and request
            clarification or supporting information.
          </li>
          <li>
            Where a partner is responsible for issuing, processing or
            fulfilling the product, we may refer or escalate the relevant
            issue to that partner and follow up where appropriate.
          </li>
          <li>
            We will communicate the outcome or the next steps when sufficient
            information is available, subject to applicable law and partner
            processes.
          </li>
        </ol>
        <div className="mt-4 rounded-xl border border-[#2456a6]/15 bg-[#2456a6]/5 p-4">
          <p className="font-semibold text-[#2456a6]">
            Proposed internal service targets
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700">
            <li>Acknowledge complaints within 2 business days.</li>
            <li>Aim to provide an initial response within 7 business days.</li>
          </ul>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            These targets must be confirmed before publication. They are
            operational proposals, not a representation of a statutory
            deadline. Complex cases, partner investigations or legal
            requirements may take longer.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Escalation",
    content: (
      <p>
        If the customer is dissatisfied with the response or has not received
        an update within the communicated timeframe, the customer may reply to
        the same email thread and request escalation. Where the matter is
        controlled by a bank, issuer, payment provider, merchant or another
        partner, the customer may also use that partner’s official grievance
        channel. Any statutory or regulator-based escalation route should be
        used only where applicable to the product and the responsible
        regulated entity.
      </p>
    ),
  },
  {
    title: "Refunds, Failed Transactions and Disputes",
    content: (
      <p>
        Complaints concerning refunds, cancellations, failed payments,
        duplicate debits, voucher delivery or redemption will be assessed
        under the applicable product terms, Refund/Cancellation/Failed
        Transaction Policy and the relevant partner’s procedures. A refund or
        reversal is not guaranteed in every case; eligibility, timelines and
        responsibility depend on the transaction facts, product terms and
        applicable law.
      </p>
    ),
  },
  {
    title: "Fair Treatment and Privacy",
    content: (
      <p>
        We aim to handle complaints fairly, respectfully and without
        unreasonable discrimination. Complaint information will be accessed
        and shared only as reasonably necessary to investigate and resolve the
        matter, provide customer support, prevent fraud or comply with
        applicable law. Please refer to our Privacy Policy for further
        information.
      </p>
    ),
  },
  {
    title: "Record Keeping",
    content: (
      <p>
        We may maintain complaint records, correspondence, transaction
        references and resolution details for service improvement, audit,
        dispute handling and legal or regulatory purposes, subject to
        applicable retention requirements and our Privacy Policy.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="space-y-3">
        <p>For customer grievances, contact:</p>
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
          Before publishing this draft, Prosper should confirm the designated
          grievance officer or responsible team, the operational response
          targets, escalation contacts for each relevant partner, and any
          product-specific or statutory timelines that apply. Do not publish
          unverified officer names, telephone numbers, regulatory escalation
          routes or guaranteed resolution periods. This document should be
          reviewed by an Indian legal/compliance professional before
          publication.
        </p>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="font-semibold text-amber-900">
            Pre-publication checklist
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-amber-950">
            <li>Confirm the responsible grievance officer or team.</li>
            <li>Verify the complaint acknowledgement and response targets.</li>
            <li>Confirm escalation contacts for relevant partners.</li>
            <li>Check applicable statutory and product-specific timelines.</li>
            <li>Obtain Indian legal/compliance review.</li>
          </ul>
        </div>
      </>
    ),
  },
];

export default function GrievanceRedressalPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfd] py-8 text-slate-800 sm:py-12">
      <article className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-10">
        {/* Policy Header */}
       
<header className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="px-5 py-5 text-center sm:px-8 sm:py-6">
    <span className="inline-flex rounded-full border border-[#2456a6]/15 bg-[#2456a6]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2456a6]">
      Legal &amp; Compliance
    </span>

    <h1 className="mx-auto mt-3 max-w-4xl text-xl font-extrabold uppercase leading-snug text-[#2456a6] sm:text-2xl">
      Grievance Redressal Policy
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


        {/* Introduction */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-[#2456a6]">
            About This Policy
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            This Policy explains how customers can submit complaints relating
            to orders, payments, gift cards, vouchers, website access and
            customer support, and how those complaints may be reviewed and
            escalated.
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
