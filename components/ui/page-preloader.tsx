"use client";

import React, { useEffect, useState } from "react";
import { DotmCircular7 } from "@/components/ui/dotm-circular-7";

export interface PagePreloaderProps {
  /** Minimum display duration in milliseconds so the shutter animation plays smoothly. Defaults to 1400ms. */
  minDuration?: number;
  /** Custom brand title. Defaults to "BHUVANA". */
  title?: string;
  /** Custom subtitle. Defaults to "Creative Portfolio". */
  subtitle?: string;
  /** Callback fired when the preloader finishes fading out. */
  onComplete?: () => void;
}

export function PagePreloader({
  minDuration = 1400,
  title = "BHUVANA",
  subtitle = "Creative Portfolio · Content & Strategy",
  onComplete,
}: PagePreloaderProps) {
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadingOut(true);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  useEffect(() => {
    if (fadingOut) {
      const exitTimer = setTimeout(() => {
        setHidden(true);
        onComplete?.();
      }, 700); // matches duration-700
      return () => clearTimeout(exitTimer);
    }
  }, [fadingOut, onComplete]);

  // Click to skip immediately
  const handleSkip = () => {
    if (!fadingOut) {
      setFadingOut(true);
    }
  };

  if (hidden) return null;

  return (
    <div
      suppressHydrationWarning
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#173D31]/95 backdrop-blur-md transition-all duration-700 ease-out cursor-pointer select-none ${
        fadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-6 p-8 text-center" suppressHydrationWarning>
        {/* Animated Circular Dot Matrix Loader */}
        <div className="relative flex items-center justify-center p-3" suppressHydrationWarning>
          <DotmCircular7
            size={90}
            dotSize={11}
            speed={1.9}
            color="#B5F0A0"
            className="text-[#B5F0A0] drop-shadow-[0_0_16px_rgba(181,240,160,0.45)]"
          />
        </div>

        {/* Brand Typography */}
        <div className="flex flex-col items-center gap-1.5" suppressHydrationWarning>
          <span className="font-mono text-xs uppercase tracking-[0.35em] font-semibold text-[#F0F8C9]">
            {title}
          </span>
          <span className="text-[11px] font-mono tracking-wider text-[#D4DEDA]">
            {subtitle}
          </span>
        </div>

        {/* Subtle skip prompt */}
        <span className="mt-4 text-[10px] font-mono uppercase tracking-widest text-[#84918D] transition-opacity hover:text-[#B5F0A0]">
          Click anywhere to skip
        </span>
      </div>
    </div>
  );
}

export default PagePreloader;
