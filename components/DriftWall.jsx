"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import PropTypes from "prop-types";

import "./DriftWall.css";

/* =========================================================
   HELPERS
========================================================= */

const mulberry32 = (seed) => {
  let a = seed >>> 0;

  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const fillAndShuffle = (items, target, seed) => {
  if (!items.length) return [];

  const rand = mulberry32(seed);
  const out = [];

  const refill = () => {
    const pool = items.slice();

    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool;
  };

  let pool = refill();

  while (out.length < target) {
    if (pool.length === 0) pool = refill();

    const next = pool.pop();

    if (
      out.length > 0 &&
      next === out[out.length - 1] &&
      pool.length > 0
    ) {
      const swap = pool.pop();
      out.push(swap);
      pool.push(next);
    } else {
      out.push(next);
    }
  }

  return out;
};

const getItemColor = (index) => {
  const hue = (index * 137.508) % 360;
  return `hsl(${hue}, 55%, 55%)`;
};

/* =========================================================
   DRIFT WALL
========================================================= */

const DriftWall = ({
  items = [],
  columns = 5,
  tileWidth = 210,
  tileHeight = 262,
  gap = 18,
  radius = 16,
  enableWheel = true,
  grayscale = false,
  className = "",
  style = {},
  onItemClick,
}) => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [containerSize, setContainerSize] = useState({
    w: 0,
    h: 0,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [failed, setFailed] = useState({});

  const pointerDownPos = useRef(null);
  const wheelAnimX = useRef(null);
  const wheelAnimY = useRef(null);
  const initializedRef = useRef(false);

  /* ---------------- RESPONSIVE ---------------- */

  const responsive = useMemo(() => {
    const w = containerSize.w;

    if (w < 640) {
      const g = 12;
      const tw = Math.max(110, Math.min(150, (w - 40 - g) / 2));

      return {
        columns: Math.min(columns, 4),
        tileWidth: tw,
        tileHeight: Math.max(138, Math.min(188, tw * 1.25)),
        gap: g,
      };
    }

    if (w < 1024) {
      const g = 15;
      const tw = Math.max(145, Math.min(190, (w - 48 - g * 2) / 3));

      return {
        columns: Math.min(columns, 5),
        tileWidth: tw,
        tileHeight: Math.max(180, Math.min(238, tw * 1.25)),
        gap: g,
      };
    }

    return { columns, tileWidth, tileHeight, gap };
  }, [containerSize.w, columns, tileWidth, tileHeight, gap]);

  const cols = Math.max(
    1,
    Math.min(20, Math.floor(responsive.columns || 5))
  );

  const rows = cols;
  const totalCells = cols * rows;

  const tw = responsive.tileWidth;
  const th = responsive.tileHeight;
  const g = responsive.gap;

  const gridW = cols * tw + (cols - 1) * g;
  const gridH = rows * th + (rows - 1) * g;

  /* ---------------- ITEMS ---------------- */

  const displayItems = useMemo(
    () => fillAndShuffle(items, totalCells, 0xc0ffee),
    [items, totalCells]
  );

  /* ---------------- MEASURE CONTAINER ---------------- */

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();

      if (rect.width <= 0 || rect.height <= 0) return;

      setContainerSize((prev) =>
        prev.w === rect.width && prev.h === rect.height
          ? prev
          : { w: rect.width, h: rect.height }
      );
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  /* ---------------- DRAG BOUNDS ---------------- */

  const maxX = g;
  const minX = Math.min(maxX, containerSize.w - gridW - g);

  const maxY = g;
  const minY = Math.min(maxY, containerSize.h - gridH - g);

  const dragConstraints = {
    left: minX,
    right: maxX,
    top: minY,
    bottom: maxY,
  };

  /* ---------------- INITIAL POSITION ---------------- */

  useLayoutEffect(() => {
    if (containerSize.w <= 0 || containerSize.h <= 0) return;

    const startX = Math.max(
      minX,
      Math.min(maxX, (containerSize.w - gridW) / 2)
    );

   const startY = g;
    if (!initializedRef.current) {
      x.set(startX);
      y.set(startY);
      initializedRef.current = true;
    } else {
      x.set(Math.max(minX, Math.min(maxX, x.get())));
      y.set(Math.max(minY, Math.min(maxY, y.get())));
    }
  }, [
    containerSize.w,
    containerSize.h,
    gridW,
    gridH,
    minX,
    maxX,
    minY,
    maxY,
    x,
    y,
  ]);

  /* ---------------- WHEEL ---------------- */

  useEffect(() => {
    if (!enableWheel) return;

    const el = containerRef.current;
    if (!el) return;

    const clamp = (value, min, max) =>
      Math.min(Math.max(value, min), max);

    const onWheel = (event) => {
      event.preventDefault();

      const targetX = clamp(x.get() - event.deltaX, minX, maxX);
      const targetY = clamp(y.get() - event.deltaY, minY, maxY);

      wheelAnimX.current?.stop();
      wheelAnimY.current?.stop();

      wheelAnimX.current = animate(x, targetX, {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      });

      wheelAnimY.current = animate(y, targetY, {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      wheelAnimX.current?.stop();
      wheelAnimY.current?.stop();
    };
  }, [enableWheel, minX, maxX, minY, maxY, x, y]);

  /* ---------------- CLICK VS DRAG ---------------- */

  const handlePointerDown = useCallback((event) => {
    pointerDownPos.current = {
      x: event.clientX,
      y: event.clientY,
    };
  }, []);

  const handlePointerUp = useCallback(
    (event, item, index) => {
      const start = pointerDownPos.current;
      pointerDownPos.current = null;

      if (!start) return;

      const moved = Math.hypot(
        event.clientX - start.x,
        event.clientY - start.y
      );

      if (moved < 5) {
        onItemClick?.(item, index);

        if (item?.href) {
          window.open(item.href, item.target || "_self");
        }
      }
    },
    [onItemClick]
  );

  const handleImageError = useCallback((index) => {
    setFailed((prev) => ({ ...prev, [index]: true }));
  }, []);

  /* ---------------- STYLES ---------------- */

  const cssVars = useMemo(
    () => ({
      "--dw-radius": `${radius}px`,
      "--dw-gray": grayscale ? 1 : 0,
      cursor: isDragging ? "grabbing" : "grab",
      ...style,
    }),
    [radius, grayscale, isDragging, style]
  );

  const gridStyle = {
    width: gridW,
    height: gridH,
    gridTemplateColumns: `repeat(${cols}, ${tw}px)`,
    gridAutoRows: `${th}px`,
    gap: `${g}px`,
    x,
    y,
  };

  const rootClass = ["drift-wall", className]
    .filter(Boolean)
    .join(" ");

  /* ---------------- RENDER ---------------- */

  return (
    <div
      ref={containerRef}
      className={rootClass}
      style={cssVars}
      role="group"
      aria-label="Gift card gallery"
    >
      {containerSize.w > 0 && containerSize.h > 0 && (
        <motion.div
          className="drift-wall__grid"
          style={gridStyle}
          drag
          dragConstraints={dragConstraints}
          dragElastic={0}
          dragMomentum
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {displayItems.map((item, index) => {
            const src = item?.image;
            const alt = item?.title || "Gift card";
            const hasFailed = failed[index];

            return (
              <div
                key={`${src || "gift-card"}-${index}`}
                className="drift-wall__tile"
                style={{
                  width: tw,
                  height: th,
                  backgroundColor: getItemColor(index),
                }}
                onPointerDown={handlePointerDown}
                onPointerUp={(event) =>
                  handlePointerUp(event, item, index)
                }
                role="button"
                tabIndex={0}
                aria-label={alt}
              >
                {src && !hasFailed ? (
                  <img
                    src={src}
                    alt={alt}
                    loading={index < cols ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                    onError={() => handleImageError(index)}
                  />
                ) : null}
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

DriftWall.propTypes = {
  items: PropTypes.array,
  columns: PropTypes.number,
  tileWidth: PropTypes.number,
  tileHeight: PropTypes.number,
  gap: PropTypes.number,
  radius: PropTypes.number,
  enableWheel: PropTypes.bool,
  grayscale: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onItemClick: PropTypes.func,
};

export default DriftWall;