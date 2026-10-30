import Link from "next/link"

const values = [
  {
    number: "01",
    title: "Trust",
    text: "We focus on transparent experiences, reliable transactions and clear product information so customers can purchase and use gift cards with confidence.",
  },
  {
    number: "02",
    title: "Simplicity",
    text: "Gift cards should be easy to discover, purchase, receive and use. We design every step of the journey around simplicity.",
  },
  {
    number: "03",
    title: "Security",
    text: "We prioritize secure payment flows, responsible handling of customer information and controls designed to protect every transaction.",
  },
  {
    number: "04",
    title: "Choice",
    text: "We bring together gift-card options across shopping, food, entertainment, travel and everyday experiences.",
  },
  {
    number: "05",
    title: "Customer First",
    text: "Every product and experience is designed around convenience, transparency and a better customer journey.",
  },
  {
    number: "06",
    title: "Responsible Growth",
    text: "We aim to build a dependable digital gifting platform through responsible operations, strong partnerships and continuous improvement.",
  },
]


const categories = [
  "Shopping & Lifestyle",
  "Food & Dining",
  "Entertainment",
  "Travel & Experiences",
  "Fashion & Beauty",
  "Everyday Digital Gifting",
]


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#071923]">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="border-b border-slate-100">

        <div
          className="
            mx-auto
            max-w-[1180px]
            px-5
            py-16
            sm:px-8
            sm:py-20
            lg:px-10
            lg:py-24
          "
        >

          <div className="max-w-[820px]">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#0870ef]
              "
            >
              About Safalsevakendra Gift Cards
            </p>


            <h1
              className="
                mt-4
                text-[42px]
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#071923]
                sm:text-[54px]
                lg:text-[64px]
              "
            >
              Digital gifting,
              <span className="text-[#0870ef]">
                {" "}made simple.
              </span>
            </h1>


            <p
              className="
                mt-6
                max-w-[720px]
                text-[15px]
                leading-7
                text-[#315f91]
                sm:text-base
                sm:leading-8
              "
            >
              Safalsevakendra Gift Cards is a digital gifting platform built to make
              gifting simple, convenient and meaningful. Discover digital
              gift cards for the brands, experiences and everyday moments
              that matter.
            </p>


            <p
              className="
                mt-4
                max-w-[720px]
                text-[14px]
                leading-7
                text-slate-500
              "
            >
              From last-minute celebrations to thoughtful everyday gestures,
              Safalsevakendra brings digital gifting into one smooth and convenient
              experience.
            </p>


            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/gift-cards"
                className="
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0870ef]
                  px-6
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_24px_rgba(8,112,239,0.18)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#0765d8]
                  hover:shadow-[0_12px_28px_rgba(8,112,239,0.22)]
                "
              >
                Explore Gift Cards
              </Link>


              <Link
                href="/policies"
                className="
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  text-sm
                  font-bold
                  text-[#071923]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#0870ef]/30
                  hover:bg-sky/20
                "
              >
                Our Policies
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
          ===================================================== */}

      <section
        className="
          mx-auto
          max-w-[1180px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-10
        "
      >

        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">

          <div>

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#0870ef]
              "
            >
              Who We Are
            </p>


            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-[-0.03em]
                text-[#071923]
                sm:text-4xl
              "
            >
              About Safalsevakendra
            </h2>


            <div className="mt-4 h-1 w-10 rounded-full bg-[#0870ef]" />

          </div>


          <div className="space-y-5 text-[15px] leading-8 text-[#315f91]">

            <p>
              Safalsevakendra Gift Cards is designed as a modern digital gifting
              destination where customers can discover and purchase gift cards
              for the brands and experiences they love.
            </p>


            <p>
              Our focus is to simplify digital gifting by bringing product
              discovery, purchase and delivery into a convenient online
              experience.
            </p>


            <p>
              Whether it is a birthday, festival, celebration, appreciation or
              simply a thoughtful gesture, Safalsevakendra aims to make gifting easier
              and more accessible.
            </p>


            <p>
              We believe that a good gifting experience should be simple,
              transparent and dependable — from choosing the right gift card
              to completing the purchase.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION / MISSION
          ===================================================== */}

      <section className="border-y border-slate-100 bg-slate-50/50">

        <div
          className="
            mx-auto
            max-w-[1180px]
            px-5
            py-16
            sm:px-8
            sm:py-20
            lg:px-10
          "
        >

          <div className="grid gap-5 md:grid-cols-2">

            {/* VISION */}

            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-[0_6px_25px_rgba(15,23,42,0.035)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[#0870ef]/25
                hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]
                sm:p-8
              "
            >

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#0870ef]
                "
              >
                Our Vision
              </p>


              <h2
                className="
                  mt-3
                  text-2xl
                  font-bold
                  tracking-[-0.025em]
                  text-[#071923]
                  sm:text-3xl
                "
              >
                Make Digital Gifting Effortless.
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#315f91]
                "
              >
                To create a trusted digital gifting experience where finding,
                buying and sharing the perfect gift is simple, convenient and
                memorable.
              </p>

            </div>


            {/* MISSION */}

            <div
              className="
                rounded-2xl
                bg-[#0870ef]
                p-7
                text-white
                shadow-[0_14px_38px_rgba(8,112,239,0.14)]
                sm:p-8
              "
            >

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                Our Mission
              </p>


              <h2
                className="
                  mt-3
                  text-2xl
                  font-bold
                  tracking-[-0.025em]
                  sm:text-3xl
                "
              >
                Better Gifting, One Experience at a Time.
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-white/75
                "
              >
                To provide a seamless digital gifting platform with a strong
                focus on customer convenience, product choice, secure
                transactions and dependable service.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
          ===================================================== */}

      <section
        className="
          mx-auto
          max-w-[1180px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-10
        "
      >

        <div>

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#0870ef]
            "
          >
            What We Stand For
          </p>


          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-[-0.03em]
              text-[#071923]
              sm:text-4xl
            "
          >
            Our Core Values
          </h2>


          <p
            className="
              mt-4
              max-w-[650px]
              text-sm
              leading-7
              text-[#315f91]
            "
          >
            The principles that shape how we build our products, work with
            partners and serve our customers.
          </p>

        </div>


        <div
          className="
            mt-9
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {values.map((value) => (

            <div
              key={value.number}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_6px_25px_rgba(15,23,42,0.035)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[#0870ef]/25
                hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]
              "
            >

              <div className="flex items-center justify-between">

                <span
                  className="
                    grid
                    h-9
                    w-9
                    place-items-center
                    rounded-lg
                    bg-sky/50
                    text-xs
                    font-bold
                    text-[#0870ef]
                  "
                >
                  {value.number}
                </span>


                <span className="h-px w-14 bg-slate-200" />

              </div>


              <h3
                className="
                  mt-6
                  text-lg
                  font-bold
                  text-[#071923]
                "
              >
                {value.title}
              </h3>


              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-[#315f91]
                "
              >
                {value.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHAT WE OFFER
          ===================================================== */}

      <section
        className="
          mx-auto
          max-w-[1180px]
          px-5
          sm:px-8
          lg:px-10
        "
      >

        <div
          className="
            overflow-hidden
            rounded-2xl
            bg-[#071923]
            shadow-[0_16px_45px_rgba(7,25,35,0.10)]
          "
        >

          <div className="px-6 py-12 sm:px-10 sm:py-14">

            <div
              className="
                grid
                gap-10
                lg:grid-cols-[0.75fr_1.25fr]
                lg:items-center
              "
            >

              <div>

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#62A8FF]
                  "
                >
                  Gift For Every Occasion
                </p>


                <h2
                  className="
                    mt-3
                    text-3xl
                    font-bold
                    tracking-[-0.03em]
                    text-white
                    sm:text-4xl
                  "
                >
                  Something for
                  <span className="block text-[#62A8FF]">
                    Everyone.
                  </span>
                </h2>


                <p
                  className="
                    mt-5
                    max-w-[500px]
                    text-sm
                    leading-7
                    text-white/60
                  "
                >
                  Explore gift-card experiences across categories designed for
                  birthdays, celebrations, rewards, festivals and everyday
                  gifting.
                </p>

              </div>


              <div
                className="
                  grid
                  gap-3
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >

                {categories.map((category, index) => (

                  <div
                    key={category}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-4
                      transition
                      duration-200
                      hover:border-white/20
                      hover:bg-white/[0.07]
                    "
                  >

                    <span
                      className="
                        grid
                        h-8
                        w-8
                        shrink-0
                        place-items-center
                        rounded-lg
                        bg-[#0870ef]
                        text-[10px]
                        font-bold
                        text-white
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    <span
                      className="
                        text-xs
                        font-semibold
                        leading-5
                        text-white/80
                      "
                    >
                      {category}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST
          ===================================================== */}

      <section
        className="
          mx-auto
          max-w-[1180px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-10
        "
      >

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-7
            shadow-[0_8px_30px_rgba(15,23,42,0.035)]
            sm:p-9
          "
        >

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >

            <div>

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#0870ef]
                "
              >
                Built Around Trust
              </p>


              <h2
                className="
                  mt-3
                  text-2xl
                  font-bold
                  tracking-[-0.025em]
                  text-[#071923]
                  sm:text-3xl
                "
              >
                A gifting experience designed with care.
              </h2>


              <p
                className="
                  mt-4
                  max-w-[720px]
                  text-sm
                  leading-7
                  text-[#315f91]
                "
              >
                Safalsevakendra focuses on creating a clear and dependable customer
                journey. Product information, transaction handling, customer
                support and operational processes are designed with
                responsibility and transparency in mind.
              </p>

            </div>


            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-4
                lg:grid-cols-2
              "
            >

              <div className="rounded-xl bg-slate-50 px-5 py-4 text-center">
                <p className="text-lg font-bold text-[#0870ef]">
                  Secure
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Experience
                </p>
              </div>


              <div className="rounded-xl bg-slate-50 px-5 py-4 text-center">
                <p className="text-lg font-bold text-[#0870ef]">
                  Simple
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Journey
                </p>
              </div>


              <div className="rounded-xl bg-slate-50 px-5 py-4 text-center">
                <p className="text-lg font-bold text-[#0870ef]">
                  Digital
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Gifting
                </p>
              </div>


              <div className="rounded-xl bg-slate-50 px-5 py-4 text-center">
                <p className="text-lg font-bold text-[#0870ef]">
                  Trusted
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Service
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="px-5 pb-16 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-[1180px]">

          <div
            className="
              rounded-2xl
              bg-[#0870ef]
              px-7
              py-12
              text-center
              text-white
              shadow-[0_18px_50px_rgba(8,112,239,0.16)]
              sm:px-10
              sm:py-14
            "
          >

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white/60
              "
            >
              Ready to Gift?
            </p>


            <h2
              className="
                mx-auto
                mt-3
                max-w-[650px]
                text-3xl
                font-bold
                tracking-[-0.03em]
                sm:text-4xl
              "
            >
              Find a gift they'll love.
            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-[600px]
                text-sm
                leading-7
                text-white/70
              "
            >
              Discover digital gift cards made for celebrations,
              rewards and everyday moments.
            </p>


            <Link
              href="/gift-cards"
              className="
                mt-7
                inline-flex
                h-11
                items-center
                justify-center
                rounded-xl
                bg-white
                px-7
                text-sm
                font-bold
                text-[#0870ef]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-slate-50
              "
            >
              Explore Gift Cards
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}