"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type Status = "idle" | "success" | "error"

interface CodeSlotsProps {
    autoFocus?: boolean
  length?: number
  value?: string
  status?: Status
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  accentColor?: string // focus ring
  inkColor?: string // success color
  slotColor?: string // slot background
  digitColor?: string
  dangerColor?: string
  slotSize?: number
  gap?: number
  radius?: number
  bounce?: number
  settle?: number
  rise?: number
  cascade?: number // ms delay between slots on success
  mask?: boolean
  caret?: boolean
  disabled?: boolean
}

export default function CodeSlots({
  length = 6,
  value,
  status = "idle",
  onChange,
  onComplete,
  accentColor = "#18181b",
  inkColor = "#16a34a",
  slotColor = "#f4f4f5",
  digitColor = "#18181b",
  dangerColor = "#ff3b30",
  slotSize = 44,
  gap = 8,
  radius = 12,
  bounce = 0.2,
  settle = 0.3,
  rise = 8,
  cascade = 20,
  mask = false,
  caret = true,
  disabled = false,
  autoFocus = false,
}: CodeSlotsProps) {
  const [inner, setInner] = useState("")
  const [focused, setFocused] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus) ref.current?.focus()
  }, [autoFocus])

  const code = value ?? inner

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, length)
    if (value === undefined) setInner(v)
    onChange?.(v)
    if (v.length === length) onComplete?.(v)
  }

  return (
    <div
      className="relative mx-auto w-fit"
      onClick={() => ref.current?.focus()}
    >
      <input
        ref={ref}
        value={code}
        onChange={handle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disabled={disabled}
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={length}
        aria-label="Verification code"
        className="absolute inset-0 z-10 h-full w-full cursor-text opacity-0"
      />

      <div className="flex" style={{ gap }}>
        {Array.from({ length }).map((_, i) => {
          const digit = code[i]
          const isActive = focused && i === Math.min(code.length, length - 1)

          const borderColor =
            status === "error"
              ? dangerColor
              : status === "success"
              ? inkColor
              : isActive
              ? accentColor
              : "transparent"

          return (
            <motion.div
              key={i}
              animate={
                status === "error"
                  ? { x: [0, -6, 6, -4, 4, 0] }
                  : status === "success"
                  ? { scale: [1, 1.12, 1] }
                  : { x: 0, scale: 1 }
              }
              transition={
                status === "success"
                  ? { duration: 0.35, delay: (i * cascade) / 1000 }
                  : { duration: 0.4 }
              }
              className="relative grid place-items-center font-semibold"
              style={{
                width: slotSize,
                height: slotSize + 8,
                borderRadius: radius,
                background: slotColor,
                color: status === "error" ? dangerColor : digitColor,
                border: `2px solid ${borderColor}`,
                fontSize: slotSize * 0.45,
                transition: "border-color .2s, color .2s",
              }}
            >
              {digit && (
                <motion.span
                  key={digit + i}
                  initial={{ y: rise, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", bounce, duration: settle }}
                >
                  {mask ? "•" : digit}
                </motion.span>
              )}

              {caret && !digit && isActive && status === "idle" && (
                <motion.span
                  className="absolute h-5 w-0.5 rounded"
                  style={{ background: accentColor }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}