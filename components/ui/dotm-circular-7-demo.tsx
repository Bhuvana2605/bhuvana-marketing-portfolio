"use client";

import React, { useState } from "react";
import { DotmCircular7, DotmColorPreset } from "@/components/ui/dotm-circular-7";

export default function DotmCircular7Demo() {
  const [size, setSize] = useState(120);
  const [dotSize, setDotSize] = useState(14);
  const [speed, setSpeed] = useState(1.8);
  const [preset, setPreset] = useState<DotmColorPreset>("solid-theme");

  const presets: DotmColorPreset[] = [
    "solid-theme",
    "solid-mint",
    "solid-coral",
    "solid-amber",
    "grad-sunset",
    "grad-ocean",
    "grad-neon",
    "grad-aurora",
    "grad-fire",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6 gap-8">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 bg-muted/50 border border-border/60 rounded-2xl p-4 max-w-xl text-xs font-mono">
        <div className="flex items-center gap-2">
          <span>Preset:</span>
          <select
            value={preset}
            onChange={(e) => setPreset(e.target.value as DotmColorPreset)}
            className="bg-background border border-border rounded px-2 py-1"
          >
            {presets.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span>Speed:</span>
          <input
            type="range"
            min="0.5"
            max="4"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-20 cursor-pointer"
          />
          <span>{speed.toFixed(1)}x</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Size:</span>
          <input
            type="range"
            min="48"
            max="200"
            step="8"
            value={size}
            onChange={(e) => {
              const newSize = parseInt(e.target.value);
              setSize(newSize);
              setDotSize(Math.max(4, Math.round(newSize * 0.115)));
            }}
            className="w-20 cursor-pointer"
          />
          <span>{size}px</span>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="flex flex-col items-center justify-center p-16 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm shadow-xl min-w-[320px] min-h-[320px]">
        <DotmCircular7
          size={size}
          dotSize={dotSize}
          speed={speed}
          colorPreset={preset}
        />
        <div className="mt-8 flex flex-col items-center gap-1">
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-semibold">
            Gate Shift
          </span>
          <span className="text-[11px] font-mono text-muted-foreground">
            dotm-circular-7 · 21st.dev
          </span>
        </div>
      </div>
    </div>
  );
}

