"use client";

import React, { useState } from "react";
import { LoadingAnimation } from "@/components/ui/loading-animation";

export default function LoadingAnimationDemo() {
  const [gender, setGender] = useState<"girl" | "boy">("girl");
  const [autoplay, setAutoplay] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      {/* Floating control toolbar to toggle girl / boy / autoplay */}
      <div className="fixed top-5 left-5 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full border border-black/10 shadow-lg text-xs font-mono">
        <span className="font-bold text-neutral-800">Character:</span>
        <button
          onClick={() => setGender("girl")}
          className={`px-2.5 py-1 rounded-full transition-all ${
            gender === "girl"
              ? "bg-[#FF5000] text-white font-bold"
              : "text-neutral-600 hover:text-black"
          }`}
        >
          Girl 👧
        </button>
        <button
          onClick={() => setGender("boy")}
          className={`px-2.5 py-1 rounded-full transition-all ${
            gender === "boy"
              ? "bg-[#1F3BFF] text-white font-bold"
              : "text-neutral-600 hover:text-black"
          }`}
        >
          Boy 👦
        </button>

        <span className="h-3 w-px bg-neutral-300 mx-1" />

        <button
          onClick={() => setAutoplay((prev) => !prev)}
          className={`px-2.5 py-1 rounded-full transition-all ${
            autoplay
              ? "bg-neutral-900 text-white font-bold"
              : "text-neutral-600 hover:text-black"
          }`}
        >
          {autoplay ? "Auto ON" : "Scroll Mode"}
        </button>
      </div>

      <LoadingAnimation
        name="Bhuvana"
        role="Content Strategist & Creative Lead"
        cta="Explore Portfolio"
        loadingLabel="Setting up Bhuvana's studio"
        readyLabel="Studio ready"
        characterGender={gender}
        autoplay={autoplay}
        scrollHeight="320vh"
        size={0.52}
        spread={1.05}
        showReveal={true}
        colors={{
          accent: "#FF5000",
          blue: "#1F3BFF",
          ink: "#23262F",
          tint: "#FFF5EF",
        }}
      />
    </div>
  );
}

