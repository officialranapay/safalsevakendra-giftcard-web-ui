
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SafalSevaKendra",
  description:
    "Read the Privacy Policy of Prosper Professional Development Life Private Limited to understand how personal information may be collected, used, stored and shared.",
};

const sections = [
  {
    title: "Introduction",
    content: (
      <p>
        Prosper Professional Development Life Private Limited (&quot;Prosper&quot;,
        &quot;we&quot;, &quot;our&quot; or &quot;us&quot;) respects your privacy and is
        committed to handling personal information responsibly. This Privacy
        Policy explains how information may be collected, used, stored, shared
        and protected when you visit{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        or use our services, including gift cards, vouchers and related digital
        services.
        <br />
        <br />
        This Policy should be read together with the applicable Terms &amp;
        Conditions and product-specific terms. Where a gift card, voucher,
        payment or other service is issued or processed by a bank, payment
        provider, PPI issuer, merchant or other partner, that partner may
        separately process information under its own privacy policy.
      </p>
    ),
  },
  {
    title: "Information We May Collect",
    content: (
      <ul className="space-y-3">
        {[
          "Identity and contact details, such as name, email address, mobile number and other details you provide.",
          "Account and transaction information, such as order IDs, purchase history, voucher or gift-card details, transaction status and customer-support records.",
          "Payment-related information, such as payment status, reference numbers and limited transaction details received from payment partners. Full card, bank or payment credentials should be handled by authorised payment providers where applicable.",
          "Technical information, such as IP address, browser/device information, access logs, approximate location derived from technical data, and website usage information.",
          "Communication and preference information, including messages sent to customer support and choices you make about notifications or marketing.",
          "Information required for fraud prevention, legal compliance, dispute handling or partner onboarding, where applicable and lawfully collected.",
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
    title: "How We Use Information",
    content: (
      <ul className="space-y-3">
        {[
          "To create or manage accounts and fulfil orders for gift cards, vouchers or related services.",
          "To process transactions, provide order updates, verify transaction status and coordinate with relevant issuers, merchants, banks or service providers.",
          "To respond to enquiries, complaints, refund requests and customer-support matters.",
          "To maintain website security, prevent fraud, detect misuse and protect our users and business.",
          "To improve our website, services, user experience and operational processes.",
          "To send service-related communications and, where permitted, promotional communications in accordance with applicable preferences and law.",
          "To comply with applicable laws, lawful requests, contractual obligations and audit requirements.",
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
    title: "Legal Basis and Consent",
    content: (
      <p>
        We will process personal information in accordance with applicable
        Indian law and any other law that applies to the relevant activity.
        Where consent is required, we will seek it in the manner required by
        law. Where processing is necessary to provide a requested service,
        perform a contract, meet legal obligations, address security risks or
        handle a dispute, we may process information for those purposes to the
        extent permitted by applicable law. You may withdraw consent where
        processing is based on consent; withdrawal may affect our ability to
        provide the relevant service, and it will not invalidate processing
        already carried out lawfully.
      </p>
    ),
  },
  {
    title: "Sharing and Disclosure",
    content: (
      <div className="space-y-4">
        <p>
          We may share relevant information, limited to what is reasonably
          necessary, with:
        </p>
        <ul className="space-y-3">
          {[
            "Gift-card or voucher issuers, banks, authorised payment providers, PPI issuers, merchants and service partners involved in delivering the product.",
            "Payment gateways, technology providers, hosting providers, customer-support providers and security or fraud-prevention vendors.",
            "Professional advisers, auditors and insurers where reasonably required.",
            "Government authorities, regulators, courts or law-enforcement agencies when disclosure is required or permitted by law.",
            "A successor or relevant party in connection with a merger, restructuring, business transfer or similar transaction, subject to appropriate safeguards.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          We do not intend to sell personal information as a standalone
          product. Partners receiving information may process it under their
          own terms and policies.
        </p>
      </div>
    ),
  },
  {
    title: "Third-Party Services and Partner Policies",
    content: (
      <p>
        Our website or services may link to, or depend on, third-party
        websites, apps, payment gateways, banks, issuers, merchants or other
        providers. We do not control their independent privacy practices.
        Please review the relevant third-party privacy notice and product
        terms before using their services. The identity of the actual
        gift-card/voucher issuer or payment provider should be shown in the
        applicable product information where relevant.
      </p>
    ),
  },
  {
    title: "Cookies and Similar Technologies",
    content: (
      <p>
        We may use cookies, pixels, local storage and similar technologies for
        essential website functions, security, preferences, analytics and
        performance. Where required, we will seek consent before using
        non-essential technologies. You can manage cookies through your
        browser settings, but disabling certain cookies may affect website
        functionality.
      </p>
    ),
  },
  {
    title: "Data Security",
    content: (
      <p>
        We use reasonable technical, organisational and administrative
        safeguards designed to protect information against unauthorised
        access, loss, misuse, alteration or disclosure. No internet
        transmission or storage system can be guaranteed to be completely
        secure. Please keep account credentials confidential and notify us
        promptly if you suspect unauthorised use.
      </p>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <p>
        We retain personal information only for as long as reasonably
        necessary for the purposes described in this Policy, including
        service delivery, dispute resolution, security, accounting, audit and
        legal or regulatory requirements. Retention periods may vary by
        information type and applicable law. When information is no longer
        required, we will take appropriate steps to delete it, anonymise it
        or securely dispose of it, subject to legal retention obligations.
      </p>
    ),
  },
  {
    title: "Your Rights and Choices",
    content: (
      <p>
        Subject to applicable law and verification of your identity, you may
        have rights to request access to or correction of personal
        information, seek deletion where permitted, withdraw consent where
        processing is based on consent, manage marketing preferences, or
        raise a grievance. Some information may need to be retained to meet
        legal, accounting, fraud-prevention or dispute-resolution obligations.
        We will respond to requests in accordance with applicable law.
      </p>
    ),
  },
  {
    title: "Children’s Privacy",
    content: (
      <p>
        Our services are not knowingly directed at children where parental
        consent or additional safeguards are required by applicable law. If
        you believe a child has provided personal information inappropriately,
        contact us so we can assess and take appropriate action in accordance
        with applicable law.
      </p>
    ),
  },
  {
    title: "International Transfers",
    content: (
      <p>
        If personal information is transferred or accessed across borders, we
        will do so subject to applicable legal requirements and appropriate
        safeguards, where required.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our services, practices or legal requirements. The revised version
        will be posted on our website with an updated &quot;Last Updated&quot; date.
        Please review it periodically.
      </p>
    ),
  },
  {
    title: "Grievances and Contact",
    content: (
      <div className="space-y-4">
        <p>
          For privacy questions, requests or complaints, contact us at:
        </p>
        <a
          href="mailto:anup.rai@safalsevakendra.in"
          className="inline-block break-all font-medium text-[#2456a6] hover:underline"
        >
          anup.rai@safalsevakendra.in
        </a>
        <p>
          Please include enough information for us to identify the relevant
          request, but do not send passwords, full payment-card details or
          other unnecessary sensitive information by email.
        </p>
      </div>
    ),
  },
];

const implementationNotes = [
  "Confirm the actual categories of personal information collected by the website and each service.",
  "Verify the actual data flows, vendors, payment partners and any cross-border access or transfers.",
  "Check which cookies, analytics tools, pixels and local-storage technologies are actually used.",
  "Define retention periods based on actual operational practices, contractual requirements and applicable law.",
  "Establish and verify the process for privacy requests, consent withdrawal and grievance handling.",
  "Obtain Indian legal and privacy-compliance review before publication.",
  "Do not publish claims about certifications, security controls, licences or compliance unless they are accurate and supported by evidence.",
];

export default function PrivacyPolicyPage() {
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
      Privacy Policy
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

          {/* Implementation Notes */}
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
                  15. Important Implementation Notes
                </h2>

                <p className="mt-4 text-sm leading-7 text-amber-900 sm:text-base">
                  Before publishing this Policy, Prosper should confirm its
                  actual data practices and applicable legal obligations.
                  Complete the following checks:
                </p>

                <ul className="mt-4 space-y-3">
                  {implementationNotes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                      <span className="text-sm leading-6 text-amber-950">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-sm leading-7 text-amber-900">
                  This draft should be checked by Indian legal and
                  privacy-compliance professionals before publication.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-7">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Contact Us
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              For privacy questions, requests or complaints, contact Prosper
              Professional Development Life Private Limited.
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
