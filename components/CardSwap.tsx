"use client";

import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

type CardSwapProps = {
  children: React.ReactNode;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
};

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function Card({
  children,
  className = "",
  style,
}: CardProps) {
  return (
    <div
      className={`card-swap-card ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "18px",
        background: "#fff",
        touchAction: "pan-y",
        userSelect: "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
}: CardSwapProps) {
  const cards = Children.toArray(children);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const nextCard = () => {
    setActiveIndex((current) =>
      (current + 1) % cards.length
    );
  };

  const previousCard = () => {
    setActiveIndex((current) =>
      (current - 1 + cards.length) % cards.length
    );
  };

  /* AUTO SLIDE */
  useEffect(() => {
    if (cards.length <= 1 || paused) return;

    timerRef.current = setInterval(() => {
      nextCard();
    }, delay);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [cards.length, delay, paused]);

  /* TOUCH START */
  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    const touch = e.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  /* TOUCH END */
  const handleTouchEnd = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch = e.changedTouches[0];

    const diffX =
      touch.clientX - touchStartX.current;

    const diffY =
      touch.clientY - touchStartY.current;

    /*
      Only trigger horizontal swipe.
      Normal vertical page scrolling remains untouched.
    */
    if (
      Math.abs(diffX) > 50 &&
      Math.abs(diffX) > Math.abs(diffY)
    ) {
      if (diffX < 0) {
        // Swipe LEFT
        nextCard();
      } else {
        // Swipe RIGHT
        previousCard();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      className="card-swap"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        perspective: "1000px",
        touchAction: "pan-y",
      }}
      onMouseEnter={() => {
        if (pauseOnHover) {
          setPaused(true);
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover) {
          setPaused(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {cards.map((child, index) => {
        if (!isValidElement(child)) {
          return null;
        }

        const offset =
          (index - activeIndex + cards.length) %
          cards.length;

        const isActive = offset === 0;

        const translateY =
          offset === 0
            ? 0
            : offset * verticalDistance;

        const scale =
          offset === 0
            ? 1
            : Math.max(
                0.88,
                1 - offset * 0.04
              );

        const translateZ =
          -offset * cardDistance;

        const opacity =
          offset >= 4 ? 0 : 1;

        return cloneElement(
          child as React.ReactElement<any>,
          {
            key: index,

            style: {
              ...(child.props?.style || {}),

              zIndex:
                cards.length - offset,

              opacity,

              transform: `
                translate3d(
                  0,
                  ${translateY}px,
                  ${translateZ}px
                )
                scale(${scale})
              `,

              transition:
                "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease",

              pointerEvents:
                isActive ? "auto" : "none",

              willChange:
                "transform, opacity",

              WebkitUserSelect: "none",
              userSelect: "none",
            },
          }
        );
      })}
    </div>
  );
}