"use client"

import { motion } from "framer-motion"
import { useApp } from "@/lib/store"
import { inr } from "@/lib/data"

export default function Voucher({ v }: { v: any }) {
  const { toast } = useApp()

  const cp = (t: string, m: string) => {
    navigator.clipboard?.writeText(t)
    toast(m)
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        rotateX: -40,
        y: 20,
      }}
      animate={{
        opacity: 1,
        rotateX: 0,
        y: 0,
      }}
      className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-deep p-5 text-white shadow-lg"
    >
      <div className="flex justify-between gap-2">
        <div>
          <p className="text-sm opacity-80">
            {v.brand} Gift Card
          </p>

          <p className="text-3xl font-extrabold">
            {inr(v.value)}
          </p>
        </div>

        <span className="h-fit rounded-full bg-gold px-3 py-1 text-xs font-bold capitalize">
          {v.status}
        </span>
      </div>

      <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <div className="rounded-xl bg-white/15 p-3">
          <p className="opacity-70">
            Voucher Code
          </p>

          <p className="break-all font-mono font-bold">
            {v.code}
          </p>
        </div>

        <div className="rounded-xl bg-white/15 p-3">
          <p className="opacity-70">
            PIN
          </p>

          <p className="font-mono font-bold">
            {v.pin}
          </p>
        </div>
      </div>

      <p className="mt-2 text-xs opacity-80">
        Expires {v.expiry}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-brand"
          onClick={() =>
            cp(v.code, "Voucher copied!")
          }
        >
          Copy Code
        </button>

        <button
          className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-brand"
          onClick={() =>
            cp(v.pin, "PIN copied!")
          }
        >
          Copy PIN
        </button>
      </div>
    </motion.div>
  )
}