
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping, Delivery & Voucher Fulfilment Policy | SafalSevaKendra",
  description:
    "Read the shipping, digital delivery and voucher fulfilment policy of Prosper Professional Development Life Private Limited.",
};

const sections = [
  {
    title: "Purpose and Scope",
    content: (
      <p>
        This Shipping, Delivery &amp; Voucher Fulfilment Policy explains how
        Prosper Professional Development Life Private Limited (&quot;Prosper&quot;,
        &quot;we&quot;, &quot;our&quot; or &quot;us&quot;) handles delivery of gift cards,
        vouchers and related products purchased through{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>
        . Delivery methods and timelines may vary depending on the product,
        issuer, merchant, payment provider and order verification requirements.
      </p>
    ),
  },
  {
    title: "Digital Products",
    content: (
      <p>
        Gift cards and vouchers offered on the website may be delivered
        electronically, for example by email, SMS, a customer account, an
        order page or another delivery channel shown at checkout. The delivery
        method available for a specific product will be stated on the relevant
        product page or during checkout where applicable.
      </p>
    ),
  },
  {
    title: "Processing and Delivery Time",
    content: (
      <p>
        Orders are generally processed after payment confirmation and any
        required verification. Some digital products may be delivered shortly
        after successful processing; however, delivery is not guaranteed to be
        instantaneous. Delays may occur because of payment confirmation,
        system maintenance, high transaction volumes, issuer or merchant
        systems, security checks or other circumstances beyond our reasonable
        control.
        <br />
        <br />
        Any estimated delivery timeframe displayed on the product page or at
        checkout should be treated as the estimate applicable to that order.
        If no timeframe is displayed, customers may contact support for an
        update.
      </p>
    ),
  },
  {
    title: "Customer Responsibilities",
    content: (
      <ul className="space-y-3">
        {[
          "Provide a correct and accessible email address, mobile number or other required delivery information.",
          "Check spam, junk, promotions and blocked-message folders where delivery is by email or SMS.",
          "Keep order references and delivery messages secure and do not share voucher codes or redemption credentials publicly.",
          "Review product-specific terms, including validity, eligible merchants, redemption method, restrictions and any applicable expiry date.",
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
    title: "Delivery Failure or Non-Receipt",
    content: (
      <div className="space-y-4">
        <p>
          If a customer has not received a digital product within the stated
          or reasonably expected timeframe, the customer should contact
          support at{" "}
          <a
            href="mailto:anup.rai@safalsevakendra.in"
            className="break-all font-medium text-[#2456a6] hover:underline"
          >
            anup.rai@safalsevakendra.in
          </a>{" "}
          and provide the order ID or transaction reference.
        </p>
        <p>
          We may verify payment and order status, check the delivery details,
          and coordinate with the relevant issuer, merchant or service partner.
          Depending on the findings, we may arrange re-delivery, correct an
          eligible delivery detail, provide a status update or explain the
          available next steps under the applicable product terms.
        </p>
      </div>
    ),
  },
  {
    title: "Incorrect Contact Details",
    content: (
      <p>
        Customers are responsible for checking delivery details before placing
        an order. If incorrect details are entered, contact support promptly.
        Changes or re-delivery may not be possible after a voucher has been
        issued, delivered, viewed, redeemed or otherwise made available, and
        any request will be assessed under the product terms and applicable
        law.
      </p>
    ),
  },
  {
    title: "Physical Products, if Offered",
    content: (
      <p>
        If a product is specifically described as a physical card or physical
        item, the applicable product page or checkout should state the
        shipping method, expected delivery estimate, charges (if any) and
        relevant service area. Physical shipment terms apply only where such
        a product is actually offered. Do not assume that all gift cards or
        vouchers are physically shipped.
      </p>
    ),
  },
  {
    title: "Issuer and Partner Dependencies",
    content: (
      <p>
        Certain products may be issued, activated, delivered or fulfilled by
        third-party banks, authorised payment providers, PPI issuers, merchants
        or other service partners. In those cases, delivery and activation may
        depend on the partner&apos;s systems, requirements and product terms.
        The actual issuer or responsible provider should be identified in the
        relevant product information where applicable. Prosper does not
        represent that it independently holds an RBI, NPCI or other regulatory
        licence.
      </p>
    ),
  },
  {
    title: "Security and Voucher Use",
    content: (
      <div className="space-y-4">
        <p>
          Treat voucher codes, gift-card numbers, PINs, links and redemption
          credentials as confidential. Prosper will not ask customers to
          disclose one-time passwords or account passwords by email.
        </p>
        <p>
          If a code appears to have been exposed or used without permission,
          contact support promptly and, where relevant, the issuer or merchant.
          Recovery or replacement depends on the product terms, transaction
          records and applicable law.
        </p>
      </div>
    ),
  },
  {
    title: "Related Policies",
    content: (
      <div className="space-y-3">
        <p>
          This Policy should be read with the Terms &amp; Conditions, Gift Card
          &amp; Voucher Policy, Refund/Cancellation/Failed Transaction Policy,
          Privacy Policy and Grievance Redressal Policy published on the
          website. If a product-specific term differs, the applicable product
          terms and mandatory law will govern to the extent of any
          inconsistency.
        </p>

        <ul className="space-y-2">
          <li>
            <a
              href="/policies/terms-and-conditions"
              className="font-medium text-[#2456a6] hover:underline"
            >
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a
              href="/policies/gift-card-voucher"
              className="font-medium text-[#2456a6] hover:underline"
            >
              Gift Card &amp; Voucher Policy
            </a>
          </li>
          <li>
            <a
              href="/policies/refund-cancellation-failed-transaction"
              className="font-medium text-[#2456a6] hover:underline"
            >
              Refund, Cancellation &amp; Failed Transaction Policy
            </a>
          </li>
          <li>
            <a
              href="/policies/privacy-policy"
              className="font-medium text-[#2456a6] hover:underline"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/policies/grievance-redressal"
              className="font-medium text-[#2456a6] hover:underline"
            >
              Grievance Redressal Policy
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="space-y-3">
        <p>
          For delivery, voucher fulfilment or non-receipt assistance, contact
          our customer support team.
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
      </div>
    ),
  },
];

const checklist = [
  "Insert the effective date and last-updated date.",
  "Confirm actual delivery channels and product-specific delivery estimates.",
  "Confirm whether any physical products are sold and publish their applicable shipping details.",
  "Verify partner responsibilities and customer-support procedures.",
  "Avoid promising instant delivery or guaranteed replacement unless operationally accurate and supported by the relevant product terms.",
  "Obtain Indian legal/compliance review before publication.",
];

export default function ShippingDeliveryVoucherFulfilmentPage() {
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
      Shipping, Delivery &amp; Voucher Fulfilment Policy
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
                  12. Review Before Publication
                </h2>

                <p className="mt-3 text-sm leading-7 text-amber-900 sm:text-base">
                  Before publishing, confirm the actual delivery process and
                  complete the following checks.
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
