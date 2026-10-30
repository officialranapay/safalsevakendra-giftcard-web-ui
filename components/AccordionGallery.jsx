"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./AccordionGallery.css";

const AccordionGallery = ({
  items = [],
  defaultIndex = 0,
  expandRatio = 0.52,
  trigger = "hover",
  height = 430,
  gap = 10,
  radius = 20,
  accentColor = "#ffffff",
  overlayColor = "#060010",
  textColor = "#ffffff",
  duration = 0.6,
  ease = "power3.out",
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  showLabels = true,
  grayscale = false,
}) => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
const touchStartXRef = useRef(null);
const touchStartYRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;

    if (!container || !items.length) return;

    const panels = panelsRef.current.filter(Boolean);

    /*
     * =====================================================
     * DESKTOP / TABLET
     * =====================================================
     */

    const getExpandedWidth = () => {
      const width = container.offsetWidth;

      return width * expandRatio;
    };

    const getCollapsedWidth = () => {
      const totalGap = gap * (items.length - 1);
      const expandedWidth = getExpandedWidth();
      const available =
        container.offsetWidth - totalGap;

      return Math.max(
        60,
        (available - expandedWidth) /
          Math.max(items.length - 1, 1)
      );
    };

    const setPanel = (
      index,
      animate = true
    ) => {
      const expandedWidth =
        getExpandedWidth();

      const collapsedWidth =
        getCollapsedWidth();

      panels.forEach((panel, i) => {
        const isActive = i === index;

        const width = isActive
          ? expandedWidth
          : collapsedWidth;

        const target = {
          width,
          filter:
            grayscale && !isActive
              ? "grayscale(100%)"
              : "grayscale(0%)",
        };

        if (animate) {
          gsap.to(panel, {
            ...target,
            duration,
            ease,
            overwrite: true,
          });
        } else {
          gsap.set(panel, target);
        }

        const image =
          panel.querySelector(
            ".accordion-gallery__image"
          );

        const label =
          panel.querySelector(
            ".accordion-gallery__label"
          );

        const overlay =
          panel.querySelector(
            ".accordion-gallery__overlay"
          );

        if (image) {
          gsap.to(image, {
            scale: 1,
            x: "0%",
            duration: duration + 0.1,
            ease,
            overwrite: true,
          });
        }

        if (label) {
          gsap.to(label, {
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 15,
            duration: duration * 0.75,
            delay: isActive ? stagger : 0,
            ease,
            overwrite: true,
          });
        }

        if (overlay) {
          gsap.to(overlay, {
            opacity: isActive ? 0.15 : 0.42,
            duration,
            ease,
            overwrite: true,
          });
        }
      });
    };

    /*
     * =====================================================
     * INITIAL STATE
     * =====================================================
     */

    setPanel(defaultIndex, false);

    const handleTouchStart = (event) => {
  // Mobile CardSwap handle karega
  if (window.innerWidth < 520) return;

  const touch = event.touches[0];

  touchStartXRef.current = touch.clientX;
  touchStartYRef.current = touch.clientY;
};

const handleTouchEnd = (event) => {
  // Mobile CardSwap handle karega
  if (window.innerWidth < 520) return;

  if (
    touchStartXRef.current === null ||
    touchStartYRef.current === null
  ) {
    return;
  }

  const touch = event.changedTouches[0];

  const diffX =
    touch.clientX - touchStartXRef.current;

  const diffY =
    touch.clientY - touchStartYRef.current;

  // Vertical movement hai to ignore
  if (
    Math.abs(diffX) < 50 ||
    Math.abs(diffX) < Math.abs(diffY)
  ) {
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    return;
  }

  /*
   * Current opened card find karo
   */
  let currentIndex = defaultIndex;

  panels.forEach((panel, index) => {
    const width = parseFloat(
      panel.style.width
    );

    if (
      Math.abs(
        width - getExpandedWidth()
      ) < 2
    ) {
      currentIndex = index;
    }
  });

  let nextIndex = currentIndex;

  /*
   * LEFT SWIPE
   * next card
   */
  if (diffX < 0) {
    nextIndex = Math.min(
      currentIndex + 1,
      panels.length - 1
    );
  }

  /*
   * RIGHT SWIPE
   * previous card
   */
  if (diffX > 0) {
    nextIndex = Math.max(
      currentIndex - 1,
      0
    );
  }

  if (nextIndex !== currentIndex) {
    event.preventDefault();

    setPanel(nextIndex, true);
  }

  touchStartXRef.current = null;
  touchStartYRef.current = null;
};
    /*
     * =====================================================
     * WHEEL
     * =====================================================
     */

    let wheelLocked = false;

    const handleWheel = (event) => {
      if (wheelLocked) return;

      const delta =
        Math.abs(event.deltaY) >
        Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;

      if (Math.abs(delta) < 10) return;

      let currentIndex = defaultIndex;

      panels.forEach((panel, index) => {
        const width = parseFloat(
          panel.style.width
        );

        if (
          Math.abs(
            width - getExpandedWidth()
          ) < 2
        ) {
          currentIndex = index;
        }
      });

      const nextIndex =
        delta > 0
          ? Math.min(
              currentIndex + 1,
              items.length - 1
            )
          : Math.max(
              currentIndex - 1,
              0
            );

      if (nextIndex === currentIndex) {
        return;
      }

      event.preventDefault();

      wheelLocked = true;

      setPanel(nextIndex, true);

      setTimeout(() => {
        wheelLocked = false;
      }, Math.max(450, duration * 1000));
    };

    container.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );
container.addEventListener(
  "touchstart",
  handleTouchStart,
  {
    passive: true,
  }
);

container.addEventListener(
  "touchend",
  handleTouchEnd,
  {
    passive: false,
  }
);
    /*
     * =====================================================
     * CLEANUP
     * =====================================================
     */

    return () => {
      container.removeEventListener(
        "wheel",
        handleWheel
      );

      container.removeEventListener(
  "touchstart",
  handleTouchStart
);

container.removeEventListener(
  "touchend",
  handleTouchEnd
);

      gsap.killTweensOf(panels);

      panels.forEach((panel) => {
        const image =
          panel.querySelector(
            ".accordion-gallery__image"
          );

        const label =
          panel.querySelector(
            ".accordion-gallery__label"
          );

        const overlay =
          panel.querySelector(
            ".accordion-gallery__overlay"
          );

        if (image) {
          gsap.killTweensOf(image);
        }

        if (label) {
          gsap.killTweensOf(label);
        }

        if (overlay) {
          gsap.killTweensOf(overlay);
        }
      });
    };
  }, [
    items,
    defaultIndex,
    expandRatio,
    gap,
    grayscale,
    duration,
    ease,
    parallax,
    stagger,
  ]);

  /*
   * =====================================================
   * HOVER
   * =====================================================
   */

  const handleEnter = (index) => {
    if (trigger !== "hover") return;

    const container =
      containerRef.current;

    const panels =
      panelsRef.current.filter(Boolean);

    if (
      !container ||
      !panels.length
    ) {
      return;
    }

    const expandedWidth =
      container.offsetWidth *
      expandRatio;

    const totalGap =
      gap * (items.length - 1);

    const collapsedWidth =
      (container.offsetWidth -
        totalGap -
        expandedWidth) /
      Math.max(
        items.length - 1,
        1
      );

    panels.forEach((panel, i) => {
      const active = i === index;

      gsap.to(panel, {
        width: active
          ? expandedWidth
          : collapsedWidth,
        duration,
        ease,
        overwrite: true,
      });

      const image =
        panel.querySelector(
          ".accordion-gallery__image"
        );

      const label =
        panel.querySelector(
          ".accordion-gallery__label"
        );

      const overlay =
        panel.querySelector(
          ".accordion-gallery__overlay"
        );

      if (image) {
        gsap.to(image, {
          scale: 1,
          x: "0%",
          duration: duration + 0.1,
          ease,
          overwrite: true,
        });
      }

      if (label) {
        gsap.to(label, {
          opacity: active ? 1 : 0,
          y: active ? 0 : 15,
          duration: duration * 0.75,
          ease,
          overwrite: true,
        });
      }

      if (overlay) {
        gsap.to(overlay, {
          opacity: active
            ? 0.15
            : 0.42,
          duration,
          ease,
          overwrite: true,
        });
      }

      if (grayscale) {
        gsap.to(panel, {
          filter: active
            ? "grayscale(0%)"
            : "grayscale(100%)",
          duration,
          ease,
          overwrite: true,
        });
      }
    });
  };

  /*
   * =====================================================
   * CLICK
   * =====================================================
   */

  const handleClick = (item) => {
    if (
      !item.link ||
      item.link === "#"
    ) {
      return;
    }

    window.location.href =
      item.link;
  };

  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <div
      ref={containerRef}
      className="accordion-gallery"
      style={{
        "--accordion-height": `${height}px`,
        "--accordion-gap": `${gap}px`,
        "--accordion-radius": `${radius}px`,
        "--accordion-accent":
          accentColor,
        "--accordion-overlay":
          overlayColor,
        "--accordion-text":
          textColor,
        "--accordion-tilt":
          `${tilt}deg`,
      }}
    >
      {items.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          ref={(element) => {
            panelsRef.current[index] =
              element;
          }}
          className={`accordion-gallery__item ${
            index === 0
              ? "is-active"
              : ""
          }`}
          onMouseEnter={() =>
            handleEnter(index)
          }
          onClick={() =>
            handleClick(item)
          }
          role={
            item.link &&
            item.link !== "#"
              ? "link"
              : undefined
          }
          tabIndex={
            item.link &&
            item.link !== "#"
              ? 0
              : undefined
          }
        >
          <img
            src={item.image}
            alt={
              item.label ||
              `Gallery image ${
                index + 1
              }`
            }
            className="accordion-gallery__image"
            draggable="false"
          />

          <div className="accordion-gallery__overlay" />

          {showLabels && (
            <div className="accordion-gallery__content">
              <span className="accordion-gallery__number">
                {String(
                  index + 1
                ).padStart(2, "0")}
              </span>

              <span className="accordion-gallery__label">
                {item.label}
              </span>
            </div>
          )}

          <div className="accordion-gallery__shine" />
        </div>
      ))}
    </div>
  );
};

export default AccordionGallery;