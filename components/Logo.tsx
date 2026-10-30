"use client"

import { useState } from "react"
import { Product } from "@/lib/data"

// Drop official logos at /public/brands/<brand-slug>.png;
// a neutral monogram shows until then.

export default function Logo({
  p,
  size = 56,
}: {
  p: Product
  size?: number
}) {
  const [e, setE] = useState(false)

  return (
    <div
      className="grid shrink-0 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-slate-100"
      style={{
        width: size,
        height: size,
      }}
    >
      {!e ? (
        <img
          src={`/brands/${p.slug.replace(
            "-gift-card",
            ""
          )}.png`}
          alt={p.brand}
          className="h-full w-full object-contain p-2"
          onError={() => setE(true)}
        />
      ) : (
        <span
          className="font-bold"
          style={{
            color: p.color,
            fontSize: size / 2.4,
          }}
        >
          {p.brand[0]}
        </span>
      )}
    </div>
  )
}