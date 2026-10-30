
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund, Cancellation & Failed Transaction Policy | SafalSevaKendra",
  description:
    "Read the refund, cancellation, duplicate payment and failed transaction policy of Prosper Professional Development Life Private Limited.",
};

const sections = [
  {
    title: "Purpose and Scope",
    content: (
      <p>
        This policy explains how cancellation, refunds, duplicate payments,
        failed transactions and non-delivery issues are handled for gift cards
        and vouchers purchased through{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>
        , operated by PROSPER PROFESSIONAL DEVELOPMENT LIFE PRIVATE LIMITED
        (&quot;Prosper&quot;). It should be read with the Website Terms &amp;
        Conditions, Gift Card &amp; Voucher Policy and product-specific issuer
        terms.
        <br />
        <br />
        Actual refund eligibility and processing may depend on the product
        issuer, bank/PPI partner, merchant, payment provider, signed partner
        agreements and applicable law. This policy does not override mandatory
        legal rights.
      </p>
    ),
  },
  {
    title: "General Cancellation Rule",
    content: (
      <p>
        Gift cards and vouchers are digital products that may be generated or
        redeemed irreversibly. Once a valid voucher/card has been issued and
        successfully delivered, an order is generally not cancellable and the
        product is generally not refundable, except where required by
        applicable law or permitted by the product issuer&apos;s terms.
        Customers should review the brand, denomination, price, validity,
        redemption conditions and restrictions before confirming an order.
      </p>
    ),
  },
  {
    title: "Situations That May Qualify for a Refund or Reversal",
    content: (
      <div className="space-y-4">
        <p>
          A refund or reversal may be considered after verification in the
          following situations:
        </p>
        <ul className="space-y-3">
          {[
            "Payment was debited but the order failed and no gift card/voucher was issued.",
            "The same order was charged more than once and the duplicate transaction did not result in a separate valid product delivery.",
            "A verified technical or fulfilment error resulted in non-delivery or an unusable product.",
            "A refund is required by applicable law or the specific issuer/product terms.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Each request is reviewed individually. Submission of a request does
          not automatically guarantee approval.
        </p>
      </div>
    ),
  },
  {
    title: "Situations Generally Not Eligible",
    content: (
      <div className="space-y-4">
        <p>
          Subject to applicable law and issuer terms, refunds are generally
          not available where:
        </p>
        <ul className="space-y-3">
          {[
            "A valid gift card/voucher has been issued and delivered successfully and the customer changes their mind.",
            "The customer selected the wrong brand, denomination or product.",
            "A voucher code, PIN, QR code or redemption link has been disclosed, copied, lost, stolen or redeemed after delivery, unless the facts or applicable law require otherwise.",
            "The customer did not redeem the voucher before its expiry date.",
            "A merchant refuses redemption because the customer has not complied with the product's published terms.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "How to Submit a Refund Request",
    content: (
      <div className="space-y-4">
        <p>
          Email{" "}
          <a
            href="mailto:anup.rai@safalsevakendra.in"
            className="break-all font-medium text-[#2456a6] hover:underline"
          >
            anup.rai@safalsevakendra.in
          </a>{" "}
          and include the following details:
        </p>
        <ul className="space-y-3">
          {[
            "Order ID or transaction/reference number.",
            "Purchase date and approximate time.",
            "Amount paid and payment reference/UTR, if available.",
            "Product/brand and denomination.",
            "A short description of the issue.",
            "Relevant receipt or screenshot, with sensitive information masked.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          <strong>Security reminder:</strong> Do not send passwords, OTPs, CVV,
          full payment card details or a complete voucher PIN by email. Prosper
          may request reasonable additional information to verify the request.
        </div>
      </div>
    ),
  },
  {
    title: "Review and Processing",
    content: (
      <p>
        Prosper will review the information and, where necessary, coordinate
        with the issuing partner, bank/PPI issuer, merchant or payment
        provider. Eligible refunds will generally be initiated to the original
        payment source where feasible, or handled through the applicable
        payment-provider process. Actual credit timelines depend on the bank,
        payment provider and issuer. Where a payment was authorised but not
        captured, the transaction may be released/voided rather than refunded.
        Any timeline specifically required by applicable law or the relevant
        issuer/payment provider will apply.
      </p>
    ),
  },
  {
    title: "Failed, Pending or Delayed Transactions",
    content: (
      <div className="space-y-4">
        <p>
          If payment is debited but the order status remains failed, pending
          or the product is not delivered, customers should avoid placing
          repeated orders immediately. First check the order status and
          contact support with the transaction reference.
        </p>
        <p>
          Prosper will verify payment and fulfilment status with the relevant
          service provider. If no product was issued and the payment was
          captured, the eligible reversal/refund will be handled in accordance
          with applicable law and partner/payment-provider procedures.
        </p>
      </div>
    ),
  },
  {
    title: "Duplicate Payments",
    content: (
      <p>
        If you believe you were charged more than once for one order, email
        the details of each transaction. After verification, duplicate charges
        that did not result in a separate valid product delivery may be
        considered for reversal/refund.
      </p>
    ),
  },
  {
    title: "Suspected Fraud or Unauthorised Transactions",
    content: (
      <div className="space-y-4">
        <p>
          Report suspected unauthorised transactions promptly to{" "}
          <a
            href="mailto:anup.rai@safalsevakendra.in"
            className="break-all font-medium text-[#2456a6] hover:underline"
          >
            anup.rai@safalsevakendra.in
          </a>
          . Do not include OTPs, passwords, full card details or complete
          voucher codes in the email.
        </p>
        <p>
          If a bank account or payment instrument may be compromised, contact
          the relevant bank/payment provider immediately through its official
          channel.
        </p>
      </div>
    ),
  },
  {
    title: "Chargebacks and Disputes",
    content: (
      <p>
        Customers should provide accurate information when raising a dispute.
        Prosper may share relevant order and transaction records with the
        issuer, payment provider or competent authority as permitted or
        required by law. This policy does not restrict any dispute or
        chargeback right available under applicable law or the customer&apos;s
        payment-provider rules.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="space-y-3">
        <p>
          For refund, cancellation, failed-payment or delivery assistance,
          contact only the following email address:
        </p>
        <a
          href="mailto:anup.rai@safalsevakendra.in"
          className="inline-block break-all font-semibold text-[#2456a6] hover:underline"
        >
          anup.rai@safalsevakendra.in
        </a>
      </div>
    ),
  },
  {
    title: "Policy Updates and Applicable Law",
    content: (
      <p>
        Prosper may update this policy to reflect product, partner, operational
        or legal changes. The latest version and effective date will be
        published on the Website. This policy is governed by the laws of
        India, subject to mandatory consumer rights and statutory remedies.
        Nothing in this policy excludes rights or remedies that cannot
        lawfully be excluded.
      </p>
    ),
  },
];

const checklist = [
  "Insert the effective date.",
  "Confirm the policy matches each bank/PPI issuer and payment-provider agreement.",
  "Check statutory refund and failed-transaction timelines applicable to the actual payment flow.",
  "Publish links to this policy and the relevant product issuer's terms before checkout.",
  "Obtain Indian legal/compliance review before publication.",
];

export default function RefundCancellationFailedTransactionPage() {
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
      Refund, Cancellation &amp; Failed Transaction Policy
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

          {/* Before Publishing Checklist */}
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
                  Before Publishing — Checklist
                </h2>

                <p className="mt-3 text-sm leading-7 text-amber-900">
                  Complete these checks before making this policy public.
                </p>

                <ul className="mt-4 space-y-3">
                  {checklist.map((item) => (
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
              Need Help With a Refund?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              For refund, cancellation, failed-payment or delivery assistance,
              email our support contact with your order or transaction
              reference. Never include passwords, OTPs, CVV or complete
              voucher PINs.
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
            © {new Date().getFullYear()} PROSPER PROFESSIONAL DEVELOPMENT LIFE
            PRIVATE LIMITED.
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
