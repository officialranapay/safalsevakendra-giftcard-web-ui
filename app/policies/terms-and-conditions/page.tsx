import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SafalSevaKendra",
  description:
    "Terms and Conditions governing the use of SafalSevaKendra and the purchase of gift cards and vouchers.",
};

const companyDetails = [
  ["Company", "PROSPER PROFESSIONAL DEVELOPMENT LIFE PRIVATE LIMITED"],
  ["Website", "www.safalsevakendra.in"],
  ["Business", "Gift Cards, Gift Vouchers & Related Products"],
  ["Effective Date", "Insert Date Before Publishing"],
  ["Review Status", "Draft for Legal/Compliance Review"],
];

const sections = [
  {
    title: "Introduction and Acceptance",
    content: (
      <p>
        These Terms & Conditions (“Terms”) govern your access to and use of
        www.safalsevakendra.in (the “Website”) and your purchase of gift cards,
        gift vouchers and related products offered through the Website. The
        Website is operated by PROSPER PROFESSIONAL DEVELOPMENT LIFE PRIVATE
        LIMITED (“Prosper”, “we”, “us” or “our”). By accessing the Website,
        placing an order or purchasing a product, you agree to these Terms and
        the applicable product-specific terms. If you do not agree, please do
        not use the Website or purchase any product.
      </p>
    ),
  },
  {
    title: "Prosper’s Role and Product Issuer",
    content: (
      <p>
        Prosper offers or facilitates the sale of gift cards and vouchers
        through the Website under agreements with relevant banks, authorised
        Prepaid Payment Instrument (PPI) issuers, brands or other service
        partners, as applicable. Prosper does not represent that it
        independently holds an RBI PPI authorisation or an NPCI licence. Where
        a product is issued by a bank, authorised PPI issuer or other partner,
        the relevant issuer must be identified on the product page or before
        checkout, and its product terms will apply.
        <br />
        <br />
        Prosper’s role is limited to the activities permitted by its written
        agreements and applicable law. Nothing in these Terms should be
        interpreted as representing that Prosper is a bank, independently
        authorised PPI issuer, or NPCI-licensed entity.
      </p>
    ),
  },
  {
    title: "Eligibility and Customer Information",
    content: (
      <p>
        You must be legally capable of entering into a binding contract and
        must provide complete, accurate and up-to-date information when using
        the Website or placing an order. Additional verification may be
        required by Prosper or the relevant issuer/partner. Orders may be
        declined or delayed where information is incomplete, inconsistent,
        suspicious or fails applicable checks.
      </p>
    ),
  },
  {
    title: "Product Information and Availability",
    content: (
      <p>
        Before completing a purchase, review the product name, brand, issuer,
        denomination, price, applicable fees, validity/expiry, redemption
        instructions, exclusions and restrictions shown on the Website.
        Product availability, issuance and redemption are subject to the
        relevant issuer’s, brand’s and merchant’s terms and systems.
        Product-specific terms prevail over these general Terms to the extent
        of any inconsistency, subject to applicable law.
      </p>
    ),
  },
  {
    title: "Orders and Payment",
    content: (
      <p>
        An order is subject to payment confirmation, product availability,
        applicable risk checks and successful processing by the relevant
        issuer or partner. A payment confirmation alone does not guarantee
        issuance if the issuer or system declines or fails to process the
        order. Failed, duplicate or unsuccessful transactions will be handled
        under the applicable refund and failed-transaction policy and mandatory
        law.
      </p>
    ),
  },
  {
    title: "Digital Delivery",
    content: (
      <p>
        Gift card or voucher details may be delivered electronically through
        the channel specified at checkout, such as the customer’s account,
        registered email address, SMS or another supported channel. Delivery
        may be delayed by payment confirmation, issuer processing, security
        checks, maintenance or network issues. If a product is not delivered
        within the stated timeframe, contact{" "}
        <a
          href="mailto:anup.rai@safalsevakendra.in"
          className="font-semibold text-[#2456a6] underline"
        >
          anup.rai@safalsevakendra.in
        </a>{" "}
        with the order/reference number and payment proof. Do not send
        passwords, OTPs, CVV or full payment credentials.
      </p>
    ),
  },
  {
    title: "Use and Redemption of Gift Cards/Vouchers",
    content: (
      <p>
        Gift cards and vouchers may be subject to specific validity periods,
        merchant restrictions, usage limits, non-transferability,
        non-reloadability, and other conditions. Cash withdrawal, cash-out,
        fund transfer or conversion to cash may not be available. Redemption,
        partial use, remaining balance and merchant acceptance are governed by
        the product-specific issuer/brand terms. Customers should redeem
        before expiry and follow the instructions provided with the product.
      </p>
    ),
  },
  {
    title: "Customer Responsibilities and Prohibited Activities",
    content: (
      <>
        <p>You agree to use the Website lawfully and not to:</p>
        <ul className="my-3 list-disc space-y-2 pl-6">
          <li>Use the Website for fraud, money laundering or any unlawful purpose.</li>
          <li>Use a payment instrument or account without the owner’s authorisation.</li>
          <li>Provide false, misleading or incomplete information.</li>
          <li>Attempt to bypass transaction limits, security controls or verification.</li>
          <li>Interfere with the Website, attempt unauthorised access or compromise its security.</li>
          <li>Resell or commercially distribute products where not expressly authorised in writing.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Cancellation and Refunds",
    content: (
      <p>
        Digital gift cards and vouchers may be generated or redeemed
        irreversibly. Accordingly, orders may generally not be cancelled and
        successfully delivered valid codes may generally not be refunded,
        except where required by applicable law or permitted by the relevant
        issuer/product terms. Refunds may be considered for verified failed
        transactions, duplicate charges, non-delivery or fulfilment errors,
        subject to investigation and the separate Refund & Cancellation Policy.
        Eligible refunds will be handled through the original payment source
        where feasible and in accordance with applicable law and
        payment-provider processes.
      </p>
    ),
  },
  {
    title: "Security of Codes and Accounts",
    content: (
      <p>
        You are responsible for keeping account credentials, voucher codes,
        QR codes, PINs and redemption links confidential. Anyone who obtains a
        usable code may be able to redeem it. Do not share OTPs or passwords
        with anyone. Any reported loss, misuse or unauthorised activity should
        be reported promptly to{" "}
        <a
          href="mailto:anup.rai@safalsevakendra.in"
          className="font-semibold text-[#2456a6] underline"
        >
          anup.rai@safalsevakendra.in
        </a>
        . Responsibility will be determined in accordance with applicable law
        and the circumstances of the incident.
      </p>
    ),
  },
  {
    title: "Third-Party Issuers, Brands and Services",
    content: (
      <p>
        Products may be issued, processed or redeemed by third-party banks,
        authorised PPI issuers, payment providers, brands or merchants. Their
        own terms, eligibility rules, availability, redemption decisions and
        grievance procedures may apply. Prosper does not control third-party
        systems and cannot guarantee uninterrupted availability or acceptance
        outside the product’s published terms. Third-party names and trademarks
        belong to their respective owners and may be used only as permitted.
      </p>
    ),
  },
  {
    title: "Suspension, Rejection or Cancellation of Orders",
    content: (
      <p>
        Prosper may reject, hold, suspend or cancel an order or restrict Website
        access where reasonably necessary for fraud prevention, security, legal
        compliance, partner instructions, suspected misuse or technical issues.
        Where payment has been collected but a product is not fulfilled, the
        applicable refund or reversal process will be followed, subject to law
        and partner arrangements.
      </p>
    ),
  },
  {
    title: "Disclaimer and Limitation of Liability",
    content: (
      <p>
        The Website and its services are provided subject to availability. We
        make reasonable efforts to keep product information accurate but
        third-party terms, availability and systems may change. To the extent
        permitted by law, Prosper is not responsible for a third-party
        merchant’s refusal to honour a voucher used outside its terms, customer
        disclosure of a code/PIN, or outages outside Prosper’s reasonable
        control. Nothing in these Terms excludes liability or consumer rights
        that cannot lawfully be excluded.
      </p>
    ),
  },
  {
    title: "Privacy",
    content: (
      <p>
        Personal information is handled in accordance with the Website’s
        Privacy Policy. Information necessary to process an order may be shared
        with the relevant issuer, bank/PPI partner, brand/merchant, payment
        processor or service provider, and with competent authorities where
        required or permitted by law.
      </p>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <p>
        Prosper may update these Terms to reflect changes to products,
        operations, security, partner requirements or applicable law. The
        updated version will be published on the Website with a revised
        effective date. Continued use after publication constitutes acceptance
        to the extent permitted by law. Changes will not remove rights that
        cannot lawfully be excluded.
      </p>
    ),
  },
  {
    title: "Governing Law and Disputes",
    content: (
      <p>
        These Terms are governed by the laws of India, subject to mandatory
        consumer rights and statutory remedies. Disputes shall be handled by
        the competent court, authority or consumer forum having jurisdiction
        under applicable law. Nothing in this clause prevents a customer from
        approaching a forum legally available to them.
      </p>
    ),
  },
  {
    title: "Contact and Grievances",
    content: (
      <p>
        For questions, order issues, complaints or requests relating to these
        Terms, contact{" "}
        <a
          href="mailto:anup.rai@safalsevakendra.in"
          className="font-semibold text-[#2456a6] underline"
        >
          anup.rai@safalsevakendra.in
        </a>
        .
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfd] py-8 text-black sm:py-12">
      <article className="mx-auto w-full max-w-[1100px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        
<header className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="px-5 py-5 text-center sm:px-8 sm:py-6">
    <span className="inline-flex rounded-full border border-[#2456a6]/15 bg-[#2456a6]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2456a6]">
      Legal &amp; Compliance
    </span>

    <h1 className="mx-auto mt-3 max-w-4xl text-xl font-extrabold uppercase leading-snug text-[#2456a6] sm:text-2xl">
      Terms &amp; Conditions
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


        {/* Company Information */}
        <section className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <h2 className="border-b border-slate-200 bg-[#dcecf7] px-5 py-4 text-lg font-bold text-[#2456a6]">
            Company Information
          </h2>

          <div className="divide-y divide-slate-100">
            {companyDetails.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[200px_1fr] sm:gap-5"
              >
                <p className="text-sm font-semibold text-slate-700">
                  {label}
                </p>
                <p className="break-words text-sm leading-6 text-slate-600">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Terms Sections */}
        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-7 shadow-sm sm:px-8 sm:py-10 lg:px-12">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="mb-8 break-inside-avoid last:mb-0"
            >
              <h2 className="mb-3 flex items-start gap-3 text-lg font-bold leading-snug text-[#2456a6] sm:text-xl">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2456a6]/10 text-sm font-extrabold">
                  {index + 1}
                </span>
                <span>{section.title}</span>
              </h2>

              <div className="pl-0 text-sm leading-7 text-slate-700 sm:pl-11 sm:text-[15px]">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Pre-publication checklist */}
        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-7">
          <h2 className="text-lg font-bold text-amber-900">
            Important Pre-Publication Checklist
          </h2>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-950">
            {[
              "Insert the effective date.",
              "Identify the actual issuing bank/PPI issuer or brand for each product and link its terms before checkout.",
              "Confirm Prosper’s exact activities are permitted under signed partner agreements and applicable law.",
              "Align refunds, delivery timelines, customer support and complaint timelines with each issuer/partner agreement and applicable law.",
              "Have the document reviewed by Indian legal/compliance counsel before publishing.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 font-bold">☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-200 py-6 text-center">
          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} PROSPER PROFESSIONAL DEVELOPMENT LIFE
            PRIVATE LIMITED. All rights reserved.
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Terms & Conditions
          </p>
        </footer>
      </article>
    </main>
  );
}