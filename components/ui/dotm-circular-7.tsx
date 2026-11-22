"use client";

import React, { useEffect, useState, useMemo } from "react";

export type DotmColorPreset =
  | "solid-theme"
  | "solid-mint"
  | "solid-coral"
  | "solid-amber"
  | "grad-sunset"
  | "grad-ocean"
  | "grad-neon"
  | "grad-aurora"
  | "grad-fire";

export interface DotmCircular7Props {
  /** Total dimension in pixels (width & height). Defaults to 36 (or 150 in demo). */
  size?: number;
  /** Size of each dot in pixels. Defaults to 5 (or 16 in demo). */
  dotSize?: number;
  /** Speed multiplier for the sweep cycle. Defaults to 1.8. */
  speed?: number;
  /** Whether the animation runs continuously. Defaults to true. */
  animated?: boolean;
  /** Whether animation triggers only on hover. Defaults to false. */
  hoverAnimated?: boolean;
  /** Dot fill color (CSS color string). Defaults to "currentColor". */
  color?: string;
  /** Named color preset */
  colorPreset?: DotmColorPreset;
  /** Additional class names for the root container. */
  className?: string;
  /** Inline style overrides. */
  style?: React.CSSProperties;
  /** Accessibility label */
  ariaLabel?: string;
}

const COLOR_PRESETS: Record<DotmColorPreset, { fill: string; glow?: string }> = {
  "solid-theme": { fill: "currentColor", glow: "currentColor" },
  "solid-mint": { fill: "#BBD3E0", glow: "#BBD3E0" },
  "solid-coral": { fill: "#ff6b4a", glow: "#ff6b4a" },
  "solid-amber": { fill: "#f59e0b", glow: "#f59e0b" },
  "grad-sunset": {
    fill: "linear-gradient(135deg, #472F26 0%, #FEF0B6 52%, #BBD3E0 100%)",
    glow: "#BBD3E0",
  },
  "grad-ocean": {
    fill: "linear-gradient(140deg, #BBD3E0 0%, #472F26 48%, #FEF0B6 100%)",
    glow: "#BBD3E0",
  },
  "grad-neon": {
    fill: "linear-gradient(145deg, #FEF0B6 0%, #BBD3E0 46%, #472F26 100%)",
    glow: "#BBD3E0",
  },
  "grad-aurora": {
    fill: "linear-gradient(145deg, #472F26 0%, #BBD3E0 45%, #FEF0B6 100%)",
    glow: "#BBD3E0",
  },
  "grad-fire": {
    fill: "linear-gradient(145deg, #472F26 0%, #FEF0B6 45%, #BBD3E0 100%)",
    glow: "#BBD3E0",
  },
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

function useCyclePhase({
  active,
  cycleMsBase = 1600,
  speed = 1.8,
}: {
  active: boolean;
  cycleMsBase?: number;
  speed?: number;
}): number {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!active) {
      setPhase(0);
      return;
    }

    const effSpeed = speed > 0 ? speed : 1;
    const period = cycleMsBase / effSpeed;
    const cycleDuration = period > 0 && Number.isFinite(period) ? period : 1000;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = ((now - startTime) % cycleDuration + cycleDuration) % cycleDuration;
      setPhase(elapsed / cycleDuration);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active, cycleMsBase, speed]);

  return phase;
}

// 5x5 circular mask: 4 corner dots are masked out
function isWithinCircularMask(row: number, col: number): boolean {
  return !(
    (row === 0 && (col === 0 || col === 4)) ||
    (row === 4 && (col === 0 || col === 4))
  );
}

const MIN_OPACITY = 0.08;
const MAX_OPACITY = 0.92;

export function DotmCircular7({
  size = 36,
  dotSize = 5,
  speed = 1.8,
  animated = true,
  hoverAnimated = false,
  color = "currentColor",
  colorPreset,
  className = "",
  style,
  ariaLabel = "Loading...",
}: DotmCircular7Props) {
  const [mounted, setMounted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRunning =
    mounted && !reducedMotion && (hoverAnimated ? isHovered : animated);

  const cycleProgress = useCyclePhase({
    active: isRunning,
    cycleMsBase: 1600,
    speed,
  });

  const gap = Math.max(1, Math.floor((size - dotSize * 5) / 4));
  const matrixSpan = dotSize * 5 + gap * 4;

  const resolvedColor = colorPreset
    ? COLOR_PRESETS[colorPreset]?.fill ?? color
    : color;

  const isGradient = resolvedColor.includes("gradient");

  const dots = useMemo(() => {
    const list: Array<{
      key: string;
      row: number;
      col: number;
      isActive: boolean;
      opacity: number;
    }> = [];

    const Tl = !mounted || reducedMotion || !isRunning ? 0 : cycleProgress * Math.PI * 2;

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        const isActive = isWithinCircularMask(r, c);
        if (!isActive) {
          list.push({ key: `${r}-${c}`, row: r, col: c, isActive: false, opacity: 0 });
          continue;
        }

        if (!mounted) {
          // SSR and initial client hydration render matching static opacity
          list.push({ key: `${r}-${c}`, row: r, col: c, isActive: true, opacity: 0.35 });
          continue;
        }

        const nl = c - 2;
        const dl = r - 2;
        const zl = Math.sqrt(nl * nl + dl * dl);
        const rt = Math.atan2(dl, nl);

        const Pl = 0.5 + 0.5 * Math.cos(5 * rt - Tl * 1.7);
        const Ml = 0.5 + 0.5 * Math.cos(zl * 3.3 - Tl * 1.2);
        const Ll = 0.5 + 0.5 * Math.cos((nl + dl) * 1.6 + Tl * 1.35);
        const Bl = 0.68 * Math.pow(Pl, 2.2) + 0.22 * Ml + 0.1 * Ll;

        const rawOpacity = MIN_OPACITY + (MAX_OPACITY - MIN_OPACITY) * Bl;
        list.push({
          key: `${r}-${c}`,
          row: r,
          col: c,
          isActive: true,
          opacity: Number(rawOpacity.toFixed(3)),
        });
      }
    }

    return list;
  }, [mounted, reducedMotion, isRunning, cycleProgress]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        width: `${matrixSpan}px`,
        height: `${matrixSpan}px`,
        ...style,
      }}
    >
      <div
        className="grid grid-cols-5 grid-rows-5"
        style={{
          width: `${matrixSpan}px`,
          height: `${matrixSpan}px`,
          gap: `${gap}px`,
        }}
      >
        {dots.map(({ key, isActive, opacity }) => (
          <span
            key={key}
            aria-hidden="true"
            suppressHydrationWarning
            className="block rounded-full transition-opacity"
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              ...(isGradient
                ? { backgroundImage: resolvedColor }
                : { backgroundColor: resolvedColor }),
              opacity: isActive ? opacity : 0,
              visibility: isActive ? "visible" : "hidden",
              pointerEvents: "none",
              willChange: "opacity",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default DotmCircular7;
