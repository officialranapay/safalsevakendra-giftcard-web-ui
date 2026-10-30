
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AML & CFT Policy | SafalSevaKendra",
  description:
    "Anti-Money Laundering and Counter-Terrorist Financing Policy of Prosper Professional Development Life Private Limited.",
};

const sections = [
  {
    title: "Policy Statement",
    content: (
      <p>
        Prosper Professional Development Life Private Limited (&quot;Prosper&quot;)
        is committed to preventing its website, distribution channels,
        business relationships, and services from being misused for money
        laundering, terrorist financing, fraud, or other unlawful activity.
        Prosper will apply risk-based controls appropriate to its actual role,
        products, contractual arrangements, and applicable law, and will
        cooperate with relevant banks, authorised prepaid payment instrument
        (PPI) issuers, merchants, payment partners, and competent authorities
        where legally required.
      </p>
    ),
  },
  {
    title: "Important Scope and Regulatory Status",
    content: (
      <p>
        This document is a company-level policy template for internal
        governance. The Prevention of Money Laundering Act, 2002, the
        Prevention of Money-Laundering (Maintenance of Records) Rules, 2005,
        and regulator-specific KYC/AML directions impose obligations on
        entities that fall within the applicable legal definitions and
        regulatory scope. Prosper must obtain legal/compliance advice to
        determine which direct obligations apply to its specific activities.
        Prosper does not claim that it independently holds an RBI authorisation
        or an NPCI licence to issue PPI products or operate regulated payment
        systems. Where a product is issued or operated by a bank or authorised
        provider, the relevant provider&apos;s controls, product terms, and
        contractual requirements must also be followed.
      </p>
    ),
  },
  {
    title: "Objectives",
    content: (
      <ul className="space-y-3">
        {[
          "Identify and assess money-laundering, terrorist-financing, fraud, and related financial-crime risks.",
          "Use proportionate customer, merchant, agent, and business-partner due diligence where appropriate to Prosper’s role.",
          "Identify unusual or suspicious activity and escalate it through approved internal and partner channels.",
          "Maintain accurate records and protect confidential customer and transaction information.",
          "Provide appropriate staff training, oversight, and periodic policy reviews.",
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
    title: "Governance and Responsibilities",
    content: (
      <p>
        The Board or authorised senior management should approve this Policy
        and ensure that responsibilities, resources, and escalation channels
        are documented. Prosper should designate an AML/compliance owner for
        internal coordination. This internal designation does not, by itself,
        make that person a statutory Principal Officer or Designated Director
        under the PMLA framework. Any statutory appointment, registration, or
        reporting responsibility must be made only if required and in the
        manner prescribed by applicable law.
        <br />
        <br />
        Staff must follow approved procedures, promptly raise concerns,
        preserve relevant records, and not alert a customer or other person
        where doing so could constitute unlawful disclosure or tipping-off.
      </p>
    ),
  },
  {
    title: "Risk-Based Approach",
    content: (
      <p>
        Prosper should document and periodically refresh a risk assessment
        covering, as relevant, customer and beneficial-owner types, products
        (including gift cards and vouchers), transaction values and frequency,
        delivery channels, geographies, merchants, agents, partners, and
        methods of payment. Controls should be proportionate to the risk
        identified and to Prosper&apos;s role in the transaction.
      </p>
    ),
  },
  {
    title: "Customer, Merchant and Partner Due Diligence",
    content: (
      <p>
        Where appropriate and lawful for Prosper&apos;s role, due diligence may
        include verifying identity and business details using reliable
        documents or independent sources; identifying beneficial owners and
        authorised representatives of business customers; understanding the
        purpose and expected nature of the relationship; checking relevant
        sanctions or restricted-party information where required; and
        documenting approvals. The exact KYC method and documents must follow
        applicable law and the relevant bank/issuer/partner agreement. Prosper
        must not represent that it performs regulated KYC on behalf of an
        issuer unless the relevant agreement and legal framework expressly
        permit it.
      </p>
    ),
  },
  {
    title: "Transaction Monitoring and Red Flags",
    content: (
      <div className="space-y-4">
        <p>
          Prosper should use controls appropriate to the services it actually
          handles to identify unusual patterns. Potential red flags include,
          without limitation:
        </p>
        <ul className="space-y-3">
          {[
            "Repeated purchases, redemptions, or attempted transactions inconsistent with the customer’s known profile.",
            "Multiple linked transactions apparently structured to avoid applicable limits or checks.",
            "Use of several accounts, payment methods, devices, or identities without a clear legitimate explanation.",
            "Transactions involving suspected stolen payment credentials, forged documents, or third-party funding without a reasonable basis.",
            "Unusual bulk gift-card or voucher activity, rapid purchase and resale, or repeated refund/reversal patterns.",
            "Attempts to bypass KYC, transaction limits, controls, or partner restrictions.",
            "Information suggesting links to fraud, criminal proceeds, sanctions evasion, or terrorist financing.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          A red flag is a reason for review, not proof of wrongdoing. Staff
          should document the facts and escalate concerns promptly through
          the approved process.
        </p>
      </div>
    ),
  },
  {
    title: "Escalation, Suspicious Activity and Regulatory Reporting",
    content: (
      <p>
        Staff must promptly escalate suspected suspicious activity to the
        designated internal compliance contact and, where relevant, to the
        responsible bank, authorised PPI issuer, payment partner, or merchant
        under the agreed procedure. Transactions may be held, declined, or
        restricted only where authorised by law, contract, and operational
        procedure. Any obligation to file reports with FIU-IND or another
        authority must be assessed against Prosper&apos;s actual legal status and
        activities. Where Prosper is legally required to report, it must
        follow the prescribed reporting route, format, confidentiality rules,
        and deadlines. Staff must not make an unsupported assurance that a
        report has been filed, nor disclose a report or investigation to the
        customer.
      </p>
    ),
  },
  {
    title: "Record Keeping and Confidentiality",
    content: (
      <p>
        Prosper should retain customer due-diligence records, transaction
        records, alerts, investigations, decisions, training records, and
        relevant business correspondence for the periods required by
        applicable law and its contracts with regulated partners. Retention
        periods can differ by record type and product; the applicable legal
        requirement must be confirmed rather than assuming a single period
        applies to every record. Records must be accurate, retrievable,
        access-controlled, and securely disposed of when retention is no
        longer required. Information must be shared only with authorised
        persons or entities and where there is a lawful basis.
      </p>
    ),
  },
  {
    title: "Training and Awareness",
    content: (
      <p>
        Relevant employees and agents should receive role-appropriate
        induction and periodic refresher training on AML/CFT risks, red flags,
        escalation procedures, confidentiality, customer data protection, and
        the requirements applicable to their work. Training completion should
        be recorded.
      </p>
    ),
  },
  {
    title: "Internal Review and Audit",
    content: (
      <p>
        Prosper should periodically review whether its controls are operating
        as intended, document material gaps, assign corrective actions, and
        track their completion. The review frequency and independent testing,
        if any, should be proportionate to the company&apos;s risk profile,
        partner requirements, and applicable law.
      </p>
    ),
  },
  {
    title: "Non-Compliance",
    content: (
      <p>
        Failure by staff or agents to follow approved AML/CFT procedures may
        result in internal disciplinary action or termination of a business
        relationship, subject to applicable law and contract. Potential legal
        or regulatory breaches must be escalated to senior management and
        legal/compliance advisers without delay.
      </p>
    ),
  },
  {
    title: "Policy Review and Approval",
    content: (
      <div className="space-y-4">
        <p>
          This Policy should be reviewed at least annually and sooner if there
          are material changes to products, business model, law, regulatory
          directions, partner requirements, or identified risks. It becomes
          the company&apos;s approved policy only after review and formal
          approval by the authorised governing body.
        </p>

        <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div>
            <p className="text-sm font-semibold text-slate-800">Approved by</p>
            <div className="mt-3 border-b border-dashed border-slate-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Designation</p>
            <div className="mt-3 border-b border-dashed border-slate-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Approval date
            </p>
            <div className="mt-3 border-b border-dashed border-slate-400" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="space-y-3">
        <p>Prosper Professional Development Life Private Limited</p>
        <p>
          <span className="font-semibold text-slate-800">Website: </span>
          <a
            href="https://www.safalsevakendra.in"
            target="_blank"
            rel="noopener noreferrer"
            className="break-all font-medium text-[#2456a6] hover:underline"
          >
            www.safalsevakendra.in
          </a>
        </p>
        <p>
          <span className="font-semibold text-slate-800">Email: </span>
          <a
            href="mailto:anup.rai@safalsevakendra.in"
            className="break-all font-medium text-[#2456a6] hover:underline"
          >
            anup.rai@safalsevakendra.in
          </a>
        </p>
      </div>
    ),
  },
];

export default function AmlCftPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfd] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
      

<header className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="px-5 py-6 text-center sm:px-10 sm:py-7">
    <span className="inline-flex rounded-full border border-[#2456a6]/15 bg-[#2456a6]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2456a6]">
      Legal & Compliance
    </span>

    <h1 className="mx-auto mt-4 max-w-4xl text-2xl font-extrabold uppercase leading-tight text-[#2456a6] sm:text-3xl lg:text-4xl">
      Anti-Money Laundering (AML) &amp; Counter-Terrorist Financing (CFT) Policy
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
        <span className="font-semibold text-slate-700">Version:</span> 1.0
      </p>

      <p>
        <span className="font-semibold text-slate-700">Effective Date:</span>{" "}
        29 October 2026
      </p>
    </div>
  </div>
</header>



        {/* Company Details */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Policy owner
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

        {/* Draft Notice */}
        <section className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-7 text-amber-950">
            <strong>Draft notice:</strong> This document is a policy template
            for internal review. It must not be represented as formally
            approved or as proof of regulatory compliance until the relevant
            legal review and approval process is complete.
          </p>
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

          {/* Regulatory References */}
          <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-7">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Regulatory Reference and Review Note
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              This draft is informed by the general framework under India’s
              Prevention of Money Laundering Act, 2002, the Prevention of
              Money-Laundering (Maintenance of Records) Rules, 2005, and
              relevant regulator directions where applicable.
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="https://fiuindia.gov.in/files/AML_Legislation/pmla_2002.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block break-all text-sm font-medium text-[#2456a6] hover:underline"
              >
                FIU-India — Prevention of Money Laundering Act, 2002
              </a>

              <a
                href="https://rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11142"
                target="_blank"
                rel="noopener noreferrer"
                className="block break-all text-sm font-medium text-[#2456a6] hover:underline"
              >
                Reserve Bank of India — Master Directions for PPI Issuers
              </a>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-700">
              This document is not legal advice and does not certify
              regulatory compliance. Before implementation or publication,
              an Indian AML/compliance lawyer and the company’s relevant
              bank/issuer partners should confirm applicability, reporting
              obligations, appointments, record-retention periods, and approval
              requirements.
            </p>
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
