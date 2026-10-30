
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Property & Copyright Policy | SafalSevaKendra",
  description:
    "Read the Intellectual Property and Copyright Policy of Prosper Professional Development Life Private Limited.",
};

const sections = [
  {
    title: "Purpose",
    content: (
      <p>
        This Intellectual Property &amp; Copyright Policy explains the
        ownership and permitted use of content, branding and materials made
        available through{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        by Prosper Professional Development Life Private Limited
        (&quot;Prosper&quot;, &quot;we&quot;, &quot;our&quot; or
        &quot;us&quot;), subject to the rights of third-party owners.
      </p>
    ),
  },
  {
    title: "Our Website Content",
    content: (
      <p>
        Unless otherwise stated, website text, design elements, graphics,
        logos, page layouts, original materials and other content created by
        Prosper are owned by Prosper or used under permission or licence. All
        rights remain with the relevant rights holder. Nothing on the website
        transfers ownership of intellectual property to a visitor or customer.
      </p>
    ),
  },
  {
    title: "Third-Party Trademarks and Product Materials",
    content: (
      <p>
        Gift cards, vouchers, brand names, logos, product images, trademarks
        and other materials relating to banks, issuers, merchants or service
        partners may belong to those third parties. Such materials are
        displayed only where permitted for product identification, promotion
        or service delivery. Their appearance on the website does not mean
        that Prosper owns them or that the relevant brand endorses Prosper,
        except where an authorised relationship is expressly stated.
      </p>
    ),
  },
  {
    title: "Permitted Use",
    content: (
      <p>
        You may access and use the website for lawful personal or business
        purposes consistent with the applicable Terms &amp; Conditions.
        Unless permitted by law or authorised in writing by the relevant
        rights holder, you must not copy, reproduce, modify, distribute,
        publish, publicly display, sell, create derivative works from or
        commercially exploit website content, trademarks, logos, voucher
        artwork or other protected materials.
      </p>
    ),
  },
  {
    title: "Prohibited Activities",
    content: (
      <ul className="space-y-3">
        {[
          "Using Prosper’s name, logo or branding in a way that suggests unauthorised affiliation, sponsorship or endorsement.",
          "Removing copyright, trademark or other proprietary notices from content.",
          "Uploading or distributing content that infringes another person’s intellectual property rights.",
          "Using automated methods to copy or extract protected website content in a manner that violates applicable terms or law.",
          "Misusing gift-card or voucher images, codes, redemption materials or brand assets.",
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
    title: "Reporting Suspected Infringement",
    content: (
      <div className="space-y-4">
        <p>
          If you believe that content on the website infringes your
          intellectual property rights, email{" "}
          <a
            href="mailto:anup.rai@safalsevakendra.in?subject=Intellectual%20Property%20Complaint"
            className="break-all font-medium text-[#2456a6] hover:underline"
          >
            anup.rai@safalsevakendra.in
          </a>{" "}
          with the subject &quot;Intellectual Property Complaint&quot;.
        </p>
        <p>
          Include your contact details, identification of the protected work,
          the exact page or content in question, an explanation of the alleged
          infringement and information reasonably demonstrating your authority
          to make the complaint.
        </p>
        <p>
          We may request further information to assess the complaint and may
          restrict or remove content where appropriate and consistent with
          applicable law and our contractual obligations. Submitting a
          complaint does not guarantee a particular outcome.
        </p>
      </div>
    ),
  },
  {
    title: "Customer-Submitted Content",
    content: (
      <p>
        If the website permits you to submit reviews, feedback, images or
        other content, you are responsible for ensuring that you have the
        necessary rights and permissions. You must not submit content that
        infringes intellectual property rights or violates applicable law.
        Any licence granted to Prosper for such content should be stated in
        the relevant website terms or submission process.
      </p>
    ),
  },
  {
    title: "No Unauthorised Licence",
    content: (
      <p>
        Except for the limited right to access and use the website as permitted
        by the applicable terms, no licence or right to Prosper’s or any third
        party’s intellectual property is granted by implication, estoppel or
        otherwise. Any additional permission must be obtained from the
        relevant rights holder.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Policy from time to time. The revised version will
        be posted on{" "}
        <a
          href="https://www.safalsevakendra.in"
          className="font-medium text-[#2456a6] hover:underline"
        >
          www.safalsevakendra.in
        </a>{" "}
        with an updated &quot;Last Updated&quot; date.
      </p>
    ),
  },
];

export default function IntellectualPropertyCopyrightPage() {
  return (
    <main className="min-h-screen bg-[#f8fcfd] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        

<div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="px-5 py-5 text-center sm:px-8 sm:py-6">
    <span className="inline-flex rounded-full border border-[#2456a6]/15 bg-[#2456a6]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2456a6]">
      Legal &amp; Compliance
    </span>

    <h1 className="mx-auto mt-3 max-w-4xl text-xl font-extrabold uppercase leading-snug text-[#2456a6] sm:text-2xl">
      Intellectual Property &amp; Copyright Policy
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
</div>

        {/* Company Information */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
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
        </div>

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

          {/* Contact */}
          <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2456a6] shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                  10. Contact
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  For intellectual property or copyright-related queries,
                  contact us using the details below.
                </p>

                <p className="mt-4 text-sm text-slate-700">
                  <span className="font-semibold">Email: </span>
                  <a
                    href="mailto:anup.rai@safalsevakendra.in"
                    className="break-all font-medium text-[#2456a6] hover:underline"
                  >
                    anup.rai@safalsevakendra.in
                  </a>
                </p>

                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">Website: </span>
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
            </div>
          </section>

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

              <div>
                <h2 className="text-lg font-bold text-amber-950 sm:text-xl">
                  11. Review Before Publication
                </h2>

                <p className="mt-4 text-sm leading-7 text-amber-900 sm:text-base">
                  This is a general draft. Before publication, confirm
                  ownership and licensing of all website text, images, logos,
                  brand assets and product materials, and ensure that any
                  third-party trademarks are used with appropriate permission.
                  Have this Policy reviewed by an Indian legal/compliance
                  professional and align it with the website’s Terms &amp;
                  Conditions and partner agreements.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
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
        </div>
      </div>
    </main>
  );
}
