"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { CSSProperties, KeyboardEvent } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import type { Transition } from "framer-motion"

export interface SpotlightImage {
  image?: string
  /** Click on an already-open frame opens this link */
  href?: string
  alt?: string
  offsetY?: number
}

export type SpotlightTrigger = "auto" | "hover" | "click"

export interface SpotlightTrack {
  collapsedWidth?: number
  expandedWidth?: number
  gap?: number
}
export interface SpotlightPanel {
  height?: number
  radius?: number
  dim?: number
}
export interface SpotlightSelector {
  box?: boolean
  lines?: boolean
  lineLength?: number
  thickness?: number
  color?: string
}
export interface SpotlightEntrance {
  animate?: boolean
  duration?: number
  stagger?: number
}

export interface SpotlightFramesProps {
  images?: SpotlightImage[]
  background?: string
  startIndex?: number
  /** thinnest a closed frame may get (px). Extra frames are dropped if they don't fit */
  minCollapsed?: number
  /** open frame width as a fraction of total width */
  expandedRatio?: number
  track?: SpotlightTrack
  panel?: SpotlightPanel
  selector?: SpotlightSelector
  entrance?: SpotlightEntrance
  trigger?: SpotlightTrigger
  transition?: Transition
  style?: CSSProperties
}

const DEFAULT_IMAGES: SpotlightImage[] = [
  { image: "/hero/amazon1.png", alt: "Amazon", href: "/gift-cards/amazon-gift-card" },
  { image: "/hero/Flipkart1.png", alt: "Flipkart", href: "/gift-cards/flipkart-gift-card" },
  { image: "/hero/meesho1.png", alt: "Meesho", href: "/gift-cards/meesho-gift-card" },
  { image: "/hero/myntra1.png", alt: "Myntra", href: "/gift-cards/myntra-gift-card" },
  { image: "/hero/swiggy1.png", alt: "Swiggy", href: "/gift-cards/swiggy-gift-card" },
]

const DEFAULT_TRACK: Required<SpotlightTrack> = {
  collapsedWidth: 80,
  expandedWidth: 400,
  gap: 2,
}
const DEFAULT_PANEL: Required<SpotlightPanel> = { height: 400, radius: 0, dim: 0 }
const DEFAULT_SELECTOR: Required<SpotlightSelector> = {
  box: true,
  lines: true,
  lineLength: 600,
  thickness: 3,
  color: "#FF9418", // logo orange
}
const DEFAULT_ENTRANCE: Required<SpotlightEntrance> = {
  animate: true,
  duration: 0.9,
  stagger: 0.06,
}

const DEFAULT_TRANSITION: Transition = {
  type: "tween",
  duration: 0.9,
  ease: [0.075, 0.82, 0.165, 1],
}
const ENTRANCE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const DIM_TRANSITION = "filter 600ms cubic-bezier(0.075, 0.82, 0.165, 1)"
const DIM_FLOOR = 0.18

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v))

interface Slot {
  left: number
  width: number
}

export default function SpotlightFrames(props: SpotlightFramesProps) {
  const {
    images = DEFAULT_IMAGES,
    background = "transparent",
    startIndex,
    minCollapsed = 38,
    expandedRatio = 0.3,
    track,
    panel,
    selector,
    entrance,
    trigger = "auto",
    transition = DEFAULT_TRANSITION,
    style,
  } = props

  const router = useRouter()

  const trackOpts = { ...DEFAULT_TRACK, ...track }
  const panelOpts = { ...DEFAULT_PANEL, ...panel }
  const selectorOpts = { ...DEFAULT_SELECTOR, ...selector }
  const entranceOpts = { ...DEFAULT_ENTRANCE, ...entrance }

  const allFrames = useMemo(
    () => images.filter((i) => i && i.image),
    [images]
  )

  const frameRef = useRef<HTMLDivElement | null>(null)
  const [frame, setFrame] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const node = frameRef.current
    if (!node || typeof ResizeObserver === "undefined") return
    const observer = new ResizeObserver(([entry]) => {
      const box = entry.contentRect
      setFrame({ width: box.width, height: box.height })
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // ---- fill the full width: open frame + as many thin frames as fit ----
  const gap = trackOpts.gap
  const expandedWidth = Math.min(
    trackOpts.expandedWidth,
    Math.max(160, frame.width * expandedRatio)
  )
  const fit =
    frame.width > 0
      ? Math.floor((frame.width - expandedWidth) / (minCollapsed + gap)) + 1
      : allFrames.length
  const count = Math.max(1, Math.min(allFrames.length, fit))
  const frames = useMemo(() => allFrames.slice(0, count), [allFrames, count])
  const collapsedWidth =
    count > 1
      ? Math.max(0, (frame.width - expandedWidth - gap * (count - 1)) / (count - 1))
      : 0
  const defaultStart = startIndex ?? Math.floor((count - 1) / 2)

  const [canHover, setCanHover] = useState(true)
  useEffect(() => {
    if (trigger !== "auto") return
    if (typeof window === "undefined" || !window.matchMedia) return
    const query = window.matchMedia("(hover: hover) and (pointer: fine)")
    const read = () => setCanHover(query.matches)
    read()
    query.addEventListener("change", read)
    return () => query.removeEventListener("change", read)
  }, [trigger])

  const opensOnHover = trigger === "hover" || (trigger === "auto" && canHover)

  const [focused, setFocused] = useState(0)
  useEffect(() => {
    setFocused(clamp(Math.round(defaultStart), 0, Math.max(0, count - 1)))
  }, [defaultStart, count])

  const panelNodes = useRef<(HTMLDivElement | null)[]>([])

  const onPanelKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>, index: number) => {
      if (event.key === "Enter" && index === focused) {
        const href = frames[index]?.href
        if (href) router.push(href)
        return
      }
      const step =
        event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0
      if (step === 0) return
      event.preventDefault()
      const next = clamp(index + step, 0, count - 1)
      setFocused(next)
      panelNodes.current[next]?.focus()
    },
    [count, focused, frames, router]
  )

  const onPanelClick = (index: number) => {
    if (index === focused) {
      const href = frames[index]?.href
      if (href) router.push(href)
    } else {
      setFocused(index)
    }
  }

  const scale = 1

  const reserve = selectorOpts.lines ? selectorOpts.lineLength * 2 : 0
  const panelHeight =
    frame.height > 0
      ? Math.max(120, Math.min(panelOpts.height, frame.height - reserve))
      : panelOpts.height

  const slots = useMemo<Slot[]>(() => {
    const out: Slot[] = []
    let left = 0
    for (let i = 0; i < count; i++) {
      const width = i === focused ? expandedWidth : collapsedWidth
      out.push({ left, width })
      left += width + gap
    }
    return out
  }, [count, focused, collapsedWidth, expandedWidth, gap])

  const { box, lines, lineLength, thickness, color } = selectorOpts
  const marker = slots[clamp(focused, 0, Math.max(0, count - 1))]
  const showSelector = (box || lines) && marker !== undefined

  const dimAmount = clamp(panelOpts.dim, 0, 10) / 10
  const dimmedFilter =
    dimAmount > 0
      ? `brightness(${(1 - dimAmount * (1 - DIM_FLOOR)).toFixed(3)})`
      : "none"

  const measured = frame.width > 0

  return (
    <div
      ref={frameRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: panelHeight,
          transform: "translateY(-50%)",
        }}
      >
        {measured &&
          frames.map(({ image, alt, offsetY = 0 }, index) => {
            const slot = slots[index]
            const isOpen = index === focused
            return (
              <motion.div
                key={index}
                ref={(node: HTMLDivElement | null) => {
                  panelNodes.current[index] = node
                }}
                role="button"
                tabIndex={0}
                aria-label={`${alt ?? "Frame"} ${index + 1} of ${count}`}
                aria-pressed={isOpen}
                initial={false}
                animate={{ left: slot.left, width: slot.width }}
                transition={transition}
                onFocus={() => setFocused(index)}
                onKeyDown={(e) => onPanelKeyDown(e, index)}
                onPointerEnter={opensOnHover ? () => setFocused(index) : undefined}
                onClick={() => onPanelClick(index)}
                style={{
                  position: "absolute",
                  top: 0,
                  height: "100%",
                  overflow: "hidden",
                  cursor: "pointer",
                  borderRadius: panelOpts.radius,
                  outlineOffset: 2,
                  willChange: "left, width",
                  boxShadow: isOpen
                    ? "0 18px 40px rgba(8,102,213,0.22)"
                    : "none",
                }}
              >
                <motion.div
                  initial={entranceOpts.animate ? { opacity: 0, y: 28 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: entranceOpts.duration,
                    delay: index * entranceOpts.stagger,
                    ease: ENTRANCE_EASE,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    filter: isOpen ? "none" : dimmedFilter,
                    transition: DIM_TRANSITION,
                  }}
                >
                  <img
                    src={image}
                    alt={alt ?? ""}
                    draggable={false}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 0,
                      transform: "translateX(-50%)",
                      width: expandedWidth,
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: `50% calc(50% + ${offsetY * scale}px)`,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  />
                </motion.div>

                {/* themed caption on the open frame */}
                {isOpen && expandedWidth > 220 && (
                  <motion.div
                    key="caption"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 }}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: "36px 16px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      background:
                        "linear-gradient(to top, rgba(16,33,58,0.85), rgba(16,33,58,0))",
                      pointerEvents: "none",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 15,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {alt?.replace(" gift card", " Gift Card")}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        background: "#FF9418",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 12,
                        padding: "6px 12px",
                        borderRadius: 999,
                      }}
                    >
                      Buy now
                    </span>
                  </motion.div>
                )}
              </motion.div>
            )
          })}

        {measured && showSelector && (
          <motion.div
            aria-hidden
            initial={false}
            animate={{ left: marker.left, width: marker.width }}
            transition={transition}
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
              boxSizing: "border-box",
              border: box ? `${thickness}px solid ${color}` : "none",
              borderRadius: panelOpts.radius,
              pointerEvents: "none",
              zIndex: 100,
              willChange: "left, width",
            }}
          >
            {lines && (
              <>
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "100%",
                    transform: "translateX(-50%)",
                    width: thickness,
                    height: lineLength,
                    background: color,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "100%",
                    transform: "translateX(-50%)",
                    width: thickness,
                    height: lineLength,
                    background: color,
                  }}
                />
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}
