
"use client";

import { useEffect, useRef, useState } from "react";

interface Item {
  src: string;
  alt?: string;
}

interface InfiniteSpiralProps {
  items?: Item[];
  animationMode?: "auto" | "scroll";
  speed?: number;
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  verticalSpacing?: number;
  perspective?: number;
  cardRadius?: number;
  centerScale?: number;
  edgeBlur?: number;
  cardsPerTurn?: number;
  pauseOnHover?: boolean;
  direction?: "up" | "down";
  rotation?: number;
  cardTilt?: number;
  edgeFade?: number;
  imageFit?: "cover" | "contain";
  grayscale?: number;
}

const DEFAULT_IMAGES: Item[] = [
  {
    src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/ed7b1c40-3332-43d8-a9eb-4615ef341b00/w=800",
    alt: "Gift card",
  },
  {
    src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/bd541261-75be-469c-7dc0-dae0ce81c400/w=800",
    alt: "Shopping gift card",
  },
  {
    src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/7d4d2641-d6a8-4fef-e85c-b12ed100d500/w=800",
    alt: "Brand gift card",
  },
  {
    src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/933a7615-f4b6-4eae-8ed1-705fa0e24400/w=800",
    alt: "Gift card collection",
  },
  {
    src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/31afae9c-5ba3-4ec3-2534-ed8198ed1100/w=800",
    alt: "Gift card",
  },
  {
    src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/859c75ea-953e-489e-be61-91a03a35d700/w=800",
    alt: "Shopping card",
  },
  {
    src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/e60dd7f7-a44f-40a7-df62-095b19cd8700/w=800",
    alt: "Gift card",
  },
  {
    src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/eec164e9-23f8-4f87-b48a-a208fa806100/w=800",
    alt: "Gift card collection",
  },
];

export default function InfiniteSpiral({
  items = DEFAULT_IMAGES,
  animationMode = "auto",
  speed = 0.3,
  radius = 180,
  cardWidth = 110,
  cardHeight = 110,
  verticalSpacing = 0,
  perspective = 1100,
  cardRadius = 12,
  centerScale = 1.15,
  edgeBlur = 0,
  cardsPerTurn = 8,
  pauseOnHover = true,
  direction = "up",
  rotation = 0,
  cardTilt = 0,
  edgeFade = 0.2,
  imageFit = "cover",
  grayscale = 0,
}: InfiniteSpiralProps) {
  const [angle, setAngle] = useState(0);
  const [scrollAngle, setScrollAngle] = useState(0);

  const hovering = useRef(false);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationMode !== "auto") return;

    const animate = (now: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = now;
      }

      const delta = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      if (!(pauseOnHover && hovering.current)) {
        const directionFactor = direction === "up" ? 1 : -1;

        setAngle(
          (previous) =>
            previous + delta * speed * directionFactor * 60
        );
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [animationMode, speed, direction, pauseOnHover]);

  useEffect(() => {
    if (animationMode !== "scroll") return;

    const element = containerRef.current;
    if (!element) return;

    const handleWheel = (event: WheelEvent) => {
      setScrollAngle((previous) => previous + event.deltaY * speed * 0.15);
    };

    element.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [animationMode, speed]);

  if (!items.length) return null;

  const currentAngle = angle + scrollAngle;
  const count = Math.max(3, Math.floor(cardsPerTurn));
  const total = items.length;

  return (
   <div
  ref={containerRef}
  className="relative h-full w-full overflow-hidden"
  style={{ perspective }}
>
      <div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((item, index) => {
          const itemAngle =
            (index / total) * Math.PI * 2 +
            (currentAngle * Math.PI) / 180 +
            (rotation * Math.PI) / 180;

          const x = Math.sin(itemAngle) * radius;
          const z = Math.cos(itemAngle) * radius;
          const y =
            verticalSpacing === 0
              ? 0
              : Math.sin(itemAngle * (count / 2)) * verticalSpacing;

          const depth = (z / radius + 1) / 2;
          const scale = 0.78 + depth * (centerScale - 0.78);
          const opacity = Math.max(
            0.25,
            1 - Math.pow(1 - depth, 2) * edgeFade
          );
          const blur = (1 - depth) * edgeBlur;

          return (
          <div
  key={`${item.src}-${index}`}
  onMouseEnter={() => {
    hovering.current = true;
  }}
  onMouseLeave={() => {
    hovering.current = false;
  }}
  className="absolute left-1/2 top-1/2 overflow-hidden bg-white"
              style={{
                width: cardWidth,
                height: cardHeight,
                marginLeft: -cardWidth / 2,
                marginTop: -cardHeight / 2,
                borderRadius: cardRadius,
                opacity,
                zIndex: Math.round(depth * 100),
                filter: `blur(${blur}px) grayscale(${grayscale})`,
                transform: `
                  translate3d(${x}px, ${y}px, ${z}px)
                  scale(${scale})
                  rotateY(${cardTilt ? -itemAngle * (cardTilt / 90) : 0}rad)
                `,
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.14)",
                backfaceVisibility: "hidden",
                willChange: "transform",
              }}
            >
              <img
                src={item.src}
                alt={item.alt ?? ""}
                draggable={false}
                loading="lazy"
                className="block h-full w-full"
                style={{
                  objectFit: imageFit,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
