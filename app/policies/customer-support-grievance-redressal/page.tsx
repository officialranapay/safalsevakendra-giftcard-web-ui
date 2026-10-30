
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support & Grievance Redressal Policy | SafalSevaKendra",
  description:
    "Learn how to contact Prosper Professional Development Life Private Limited for customer support, complaints, transaction issues, and grievance escalation.",
};

const companyName = "Prosper Professional Development Life Private Limited";
const supportEmail = "anup.rai@safalsevakendra.in";
const website = "https://www.safalsevakendra.in";

const sections = [
  {
    title: "1. Purpose",
    content: (
      <p>
        {companyName} ("Prosper") aims to provide users with a clear channel
        to raise questions, service requests, and complaints relating to{" "}
        <a
          href={website}
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        and products or services made available through the website, including
        gift cards and vouchers.
      </p>
    ),
  },
  {
    title: "2. Contact Channel",
    content: (
      <>
        <p>
          Customers may contact Prosper by email at{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="font-semibold text-[#2456a6] hover:underline"
          >
            {supportEmail}
          </a>
          .
        </p>
        <p className="mt-3">
          To help us review a request, customers should provide their name,
          registered email address or other relevant account identifier, order
          or transaction reference (if applicable), the date of the transaction,
          a clear description of the issue, and supporting documents or
          screenshots where appropriate.
        </p>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="font-semibold text-amber-900">
            Important security notice
          </p>
          <p className="mt-1 text-sm text-amber-900">
            Customers should not send passwords, PINs, CVVs, full card details,
            or OTPs by email.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "3. Complaint Acknowledgement and Handling",
    content: (
      <p>
        Prosper will make reasonable efforts to acknowledge complaints within
        a reasonable period, review the information provided, and communicate
        any next steps or request for additional details. Resolution time may
        depend on the nature of the complaint and, where relevant, the response
        of a bank, authorised PPI issuer, merchant, voucher provider, or other
        third-party service provider.
      </p>
    ),
  },
  {
    title: "4. Information to Include in a Complaint",
    content: (
      <>
        <p>
          To help us investigate and respond to a complaint, please include the
          following information where available:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "Customer name and preferred reply email address.",
            "Order ID, voucher reference, or transaction ID, if available.",
            "Transaction date and amount, where relevant.",
            "Merchant or product name and a description of the issue.",
            "Relevant confirmation, receipt, or screenshot with sensitive information concealed.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf2ff] text-xs font-bold text-[#2456a6]">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "5. Escalation and Third-Party Products",
    content: (
      <>
        <p>
          If a complaint concerns a product issued, operated, or fulfilled by
          a third-party bank, authorised prepaid payment instrument (PPI)
          issuer, merchant, or service provider, Prosper may refer or escalate
          the matter to the relevant provider where appropriate and permitted.
          Customers may also use the official complaint or escalation channel
          of that provider.
        </p>
        <p className="mt-3">
          The applicable provider’s terms and regulatory grievance process may
          apply to the underlying product or transaction.
        </p>
        <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="font-semibold text-[#173d78]">
            Issuer and regulatory disclosure
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Prosper does not claim to be independently authorised by the
            Reserve Bank of India (RBI) or licensed by NPCI to issue PPI
            products or operate regulated payment systems. The responsible
            issuer or provider should be identified in the relevant product
            information or transaction flow.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "6. Fraud or Unauthorised Transactions",
    content: (
      <>
        <p>
          Customers should promptly report suspected fraud, unauthorised
          transactions, compromised accounts, or incorrect voucher delivery
          by emailing{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="font-semibold text-[#2456a6] hover:underline"
          >
            {supportEmail}
          </a>
          .
        </p>
        <p className="mt-3">
          Customers should also contact the relevant bank, card issuer, or
          service provider immediately where applicable.
        </p>
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="font-semibold text-red-800">
            Never share confidential credentials
          </p>
          <p className="mt-1 text-sm leading-6 text-red-800">
            Never share an OTP, PIN, password, CVV, or full payment-card
            credentials with anyone claiming to provide support.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "7. Response and Resolution Timelines",
    content: (
      <p>
        Prosper will handle complaints as promptly as reasonably practicable
        and in accordance with applicable law and contractual obligations.
        Specific statutory or provider-mandated timelines, where applicable,
        will take precedence. A fixed resolution deadline should not be
        published unless the company has approved an operational process that
        can reliably meet it.
      </p>
    ),
  },
  {
    title: "8. Customer Rights",
    content: (
      <p>
        Nothing in this Policy limits a customer’s rights to approach a
        competent consumer commission, regulator, bank, authorised issuer,
        or other appropriate authority where permitted under applicable law.
      </p>
    ),
  },
  {
    title: "9. Privacy and Use of Complaint Information",
    content: (
      <p>
        Information submitted with a complaint will be used to review,
        investigate, respond to, and document the issue, subject to applicable
        law and the company’s Privacy Policy. Customers should share only
        information necessary to investigate the complaint and should conceal
        sensitive payment credentials.
      </p>
    ),
  },
  {
    title: "10. Updates to this Policy",
    content: (
      <p>
        Prosper may update this Policy from time to time. The current version
        should be published on{" "}
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        with an effective or revision date.
      </p>
    ),
  },
  {
    title: "11. Customer Support Contact",
    content: (
      <div className="space-y-3">
        <p className="font-semibold text-slate-900">{companyName}</p>
        <div>
          <span className="text-slate-500">Website: </span>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all font-medium text-[#2456a6] hover:underline"
          >
            www.safalsevakendra.in
          </a>
        </div>
        <div>
          <span className="text-slate-500">Email: </span>
          <a
            href={`mailto:${supportEmail}`}
            className="break-all font-medium text-[#2456a6] hover:underline"
          >
            {supportEmail}
          </a>
        </div>
      </div>
    ),
  },
];

export default function CustomerSupportGrievanceRedressalPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfd] pb-16">
      {/* Hero */}
     
<header className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="px-5 py-6 text-center sm:px-10 sm:py-7">
    <span className="inline-flex rounded-full border border-[#2456a6]/15 bg-[#2456a6]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2456a6]">
      Legal &amp; Compliance
    </span>

    <h1 className="mx-auto mt-4 max-w-4xl text-2xl font-extrabold uppercase leading-tight text-[#2456a6] sm:text-3xl lg:text-4xl">
      Customer Support &amp; Grievance Redressal Policy
    </h1>

    <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
      Information on how to contact us, submit a complaint, report
      transaction concerns, and escalate issues relating to our website,
      gift cards, and vouchers.
    </p>

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

    <div className="mt-2 text-sm text-slate-500">
      Contact:{" "}
      <a
        href={`mailto:${supportEmail}`}
        className="break-all font-medium text-[#2456a6] underline"
      >
        {supportEmail}
      </a>
    </div>

    <p className="mt-3 text-sm text-slate-500">
      <span className="font-semibold text-slate-700">Effective Date:</span>{" "}
      29 October 2026
    </p>
  </div>
</header>


      {/* Policy Content */}
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mb-8 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm leading-6 text-slate-600">
            This Policy explains the support and grievance channels available
            through {companyName}. Please avoid including confidential payment
            credentials in your complaint.
          </p>
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <span className="font-semibold text-slate-800">
              Official Support Email
            </span>
            <a
              href={`mailto:${supportEmail}`}
              className="break-all font-medium text-[#2456a6] hover:underline"
            >
              {supportEmail}
            </a>
          </div>
        </div>

        <div className="space-y-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-7"
            >
              <h2 className="text-lg font-bold leading-7 text-slate-900 sm:text-xl">
                {section.title}
              </h2>
              <div className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Legal Review Note */}
        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-7">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg text-amber-800">
              !
            </span>
            <div>
              <h2 className="text-lg font-bold text-amber-950">
                Important Legal &amp; Operational Review Note
              </h2>
              <p className="mt-3 text-sm leading-7 text-amber-950/90">
                This is a general draft and is not legal advice. Before
                publication, obtain review from qualified Indian legal and
                compliance professionals. Confirm that the complaint-handling
                process, escalation contacts, acknowledgement and resolution
                timelines, and third-party issuer/merchant arrangements match
                the company’s actual operations and applicable legal
                requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Contact */}
        <div className="mt-8 rounded-2xl bg-[#173d78] p-6 text-white sm:p-8">
          <h2 className="text-xl font-bold">Need help with an order?</h2>
          <p className="mt-2 text-sm leading-6 text-blue-100">
            Contact our support team with your order or transaction reference
            and a clear description of the issue.
          </p>
          <a
            href={`mailto:${supportEmail}`}
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#173d78] transition hover:bg-blue-50"
          >
            {supportEmail}
          </a>
          <p className="mt-5 text-xs text-blue-200">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
