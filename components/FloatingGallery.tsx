"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { animate } from "framer-motion"

const LAYOUT = [
  { w: 220, h: 280, x: 12, y: 10 },
  { w: 260, h: 200, x: 42, y: 35 },
  { w: 200, h: 260, x: 74, y: 8 },
  { w: 240, h: 240, x: 26, y: 62 },
  { w: 220, h: 300, x: 60, y: 74 },
  { w: 180, h: 220, x: 88, y: 48 },
]

const hash = (i: number) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453
  return s - Math.floor(s)
}

export default function FloatingGallery({
  images = [],
  background = "#EAF6FF",
  cardWidth = 220,
  rounded = 16,
  speed = 50,
  fit = "cover",
  layout,
  transition = { type: "tween", duration: 0.25, ease: [0, 0, 0.58, 1] },
}: any) {
  const root = useRef<HTMLDivElement>(null)
  const parts = useRef<any[]>([])
  const nodes = useRef<any[]>([])
  const size = useRef({ w: 0, h: 0 })
  const anims = useRef<any[]>([])
  const [zoomed, setZoomed] = useState<number | null>(null)
  const zr = useRef<number | null>(null)
  zr.current = zoomed

  const seed = useCallback(() => {
    const { w: W, h: H } = size.current
    if (!W || !H) return

    const L = layout || LAYOUT
    const sc = layout
      ? 1
      : Math.max(0.55, Math.min(1, W / 1100)) * (cardWidth / 220)

    parts.current = images.map((_: any, i: number) => {
      const s = L[i % L.length]
      const w = s.w * sc
      const h = s.h * sc
      const p = parts.current[i]

      return {
        x: (s.x / 100) * W - w / 2,
        y: p ? p.y : (s.y / 100) * H - h / 2,
        z: p ? p.z : 0,
        tz: p ? p.tz : 0,
        w,
        h,
        m: layout ? 1 : 0.65 + hash(i) * 0.7,
      }
    })
  }, [images.length, cardWidth, layout])

  useEffect(() => {
    const el = root.current!
    const f = () => {
      size.current = { w: el.offsetWidth, h: el.offsetHeight }
      seed()
    }
    f()
    const ro = new ResizeObserver(f)
    ro.observe(el)
    return () => ro.disconnect()
  }, [seed])

  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const { w: W, h: H } = size.current
      if (!W || !H) return

      parts.current.forEach((a, i) => {
        const n = nodes.current[i]
        if (!n) return
        const frozen = zr.current === i

        if (!frozen && !reduce) {
          a.y += (speed / 50) * 40 * a.m * dt
          if (a.y > H) a.y -= H + a.h
        }

        const tz = frozen ? 1 : 0
        if (a.tz !== tz) {
          a.tz = tz
          anims.current[i]?.stop()
          const from = a.z
          const d = tz - from
          anims.current[i] = animate(0, 1, {
            ...transition,
            onUpdate: (t: number) => {
              a.z = from + d * t
            },
          })
        }

        const z = a.z
        const px = a.x + ((W - a.w) / 2 - a.x) * z
        const py = a.y + ((H - a.h) / 2 - a.y) * z
        const fitS = Math.min(1.6, (W * 0.9) / a.w, (H * 0.9) / a.h)
        const s = 1 + (fitS - 1) * z

        n.style.width = a.w + "px"
        n.style.height = a.h + "px"
        n.style.transform = `translate3d(${px}px,${py}px,0) scale(${s})`
        n.style.zIndex = z > 0.001 ? "999" : "1"
      })
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div
      ref={root}
      onClick={() => zoomed !== null && setZoomed(null)}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background,
        isolation: "isolate",
        touchAction: "pan-y",
      }}
    >
      {images.map((im: any, i: number) => {
        const isZ = zoomed === i

        const go = (e: any) => {
          e.stopPropagation()
          if (isZ && im.link) {
            window.open(im.link, "_blank", "noopener")
            return
          }
          setZoomed(zoomed !== null ? null : i)
        }

        return (
          <div
            key={i}
            ref={(n) => {
              nodes.current[i] = n
            }}
            onClick={go}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                go(e)
              }
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: rounded,
              overflow: "hidden",
              cursor: "pointer",
              userSelect: "none",
              background: "transparent",
              boxShadow: isZ
                ? "0 30px 50px rgba(1,120,210,.35)"
                : "0 10px 20px rgba(7,89,133,.18)",
              willChange: "transform",
            }}
          >
            {im.src && (
              <img
                src={im.src}
                alt=""
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: fit,
                  display: "block",
                  pointerEvents: "none",
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}