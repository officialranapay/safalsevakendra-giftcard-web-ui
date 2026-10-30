export interface Product {
  id: string
  slug: string
  brand: string
  title: string
  category: string
  color: string
  discount: number
  cashback: number
  rating: number
  reviews: number
  validity: string
  denoms: number[]
  desc: string
  popular: boolean
}

const raw =
  "Shopping:Amazon#FF9900,Flipkart#2874F0,Meesho#F43397,RuPay#D9A441,Tata Cliq#DA1C5C,Shoppers Stop#111827,Lenskart#0B2A4A,Decathlon#0082C3,IKEA#0058A3,FirstCry#F58220,Pepperfry#F26B21;Food:Swiggy#FC8019,Zomato#E23744,Dominos#006491,Starbucks#00704A,McDonalds#DA291C;Fashion:Myntra#FF3F6C,Ajio#2C4152,Lifestyle#E31837,Westside#1B1B1B,Nykaa Fashion#E80071;Travel:MakeMyTrip#EB2226,Cleartrip#F4511E,Uber#000000,OYO#EE2E24,Ixigo#F26B3A;Entertainment:Netflix#E50914,Spotify#1DB954,BookMyShow#C4242B,PVR#1D2C5B,SonyLIV#1B1B1B;Electronics:Croma#00C2A8,Apple#111111,Google Play#01875F,Samsung#1428A0,Reliance Digital#E42529"

let n = 0

export const products: Product[] = raw
  .split(";")
  .flatMap((g) => {
    const [c, l] = g.split(":")

    return l.split(",").map((x) => {
      const [b, color] = x.split("#")

      n++

      const s = b.toLowerCase().replace(/ /g, "-")

      return {
        id: "P" + n,
        slug: s + "-gift-card",
        brand: b,
        title: b + " Gift Card",
        category: c,
        color: "#" + color,
        discount: 3 + (n * 7) % 8,
        cashback: n % 3,
        rating: 4 + ((n * 3) % 10) / 10,
        reviews: 200 + n * 137,
        validity: "12 months",
        denoms: [100,200,500,1000, 2000, 5000, 10000],
        desc: `Gift ${b} shopping power to anyone. Delivered instantly by email and SMS, valid across ${b} online and partner stores.`,
        popular: n % 3 === 0,
      }
    })
  })

export const categories = [
  ...new Set(products.map((p) => p.category)),
].map((c) => ({
  name: c,
  count: products.filter((p) => p.category === c).length,
}))

export const bySlug = (s: string) =>
  products.find((p) => p.slug === s)

export const inr = (x: number) =>
  "₹" + x.toLocaleString("en-IN")

export const cardImg = (p: Product) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="500"
    >
      <defs>
        <linearGradient
          id="g"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0"
            stop-color="${p.color}"
          />
          <stop
            offset="1"
            stop-color="#075985"
          />
        </linearGradient>
      </defs>

      <rect
        width="800"
        height="500"
        rx="40"
        fill="url(#g)"
      />

      <text
        x="50"
        y="270"
        font-family="Arial"
        font-weight="700"
        font-size="84"
        fill="#fff"
      >
        ${p.brand}
      </text>

      <text
        x="50"
        y="440"
        font-family="Arial"
        font-size="34"
        fill="#fff"
        opacity=".85"
      >
        Safalsevakendra Gift Card
      </text>

      <circle
        cx="700"
        cy="90"
        r="36"
        fill="#D9A441"
      />
    </svg>
  `)

export const coupons: Record<
  string,
  {
    pct?: number
    flat?: number
    min: number
    max?: number
  }
> = {
  WELCOME10: {
    pct: 10,
    min: 500,
    max: 200,
  },

  GIFT20: {
    pct: 20,
    min: 1000,
    max: 500,
  },

  RANAPAY50: {
    flat: 50,
    min: 750,
  },

  FESTIVE15: {
    pct: 15,
    min: 1500,
    max: 400,
  },
}

export function applyCoupon(
  code: string,
  sub: number
) {
  const c =
    coupons[code.trim().toUpperCase()]

  if (!c) {
    return {
      ok: false,
      amount: 0,
      msg: "Invalid coupon",
    }
  }

  if (sub < c.min) {
    return {
      ok: false,
      amount: 0,
      msg: `Minimum order ${inr(c.min)} required`,
    }
  }

  const a =
    c.flat ??
    Math.min(
      Math.round(
        (sub * (c.pct || 0)) / 100
      ),
      c.max ?? 1e9
    )

  return {
    ok: true,
    amount: a,
    msg: "Coupon applied successfully",
  }
}

const A =
  "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

const r = (k: number) =>
  Array.from(
    { length: k },
    () =>
      A[
        Math.floor(
          Math.random() * A.length
        )
      ]
  ).join("")

const d = () =>
  new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")

export const genVoucherCode = () =>
  `RPGC-${r(4)}-${r(4)}-${r(2)}`

export const genVoucherPin = () =>
  String(
    Math.floor(
      100000 + Math.random() * 900000
    )
  )

export const genOrderId = () =>
  "RPGC" +
  d() +
  String(
    Math.floor(
      1000 + Math.random() * 9000
    )
  )

export const genPaymentId = () =>
  "PAY" + d() + r(4)

export const lineOf = (i: any) => {
  const s = i.amount * i.qty

  return {
    s,
    d: Math.round(
      (s * i.discount) / 100
    ),
  }
}