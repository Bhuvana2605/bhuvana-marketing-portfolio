"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PackageBox } from "@/components/ui/package-box";

function CustomShippingLabel() {
  return (
    <div
      className="h-full w-full rounded-[2px] bg-[#BBD3E0] p-[6%] flex flex-col justify-between text-[6px] font-mono leading-none select-none text-[#472F26] border border-[#472F26]/50"
      style={{ boxShadow: "0 1px 3px rgba(71,47,38,0.5)" }}
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-[#472F26]/40 pb-[3%]">
        <span className="font-bold tracking-wider text-[#472F26]">CONTACT · NOTE</span>
        <span className="text-[5px] bg-[#472F26] text-[#BBD3E0] font-bold px-1 py-0.5 rounded-[1px]">AIR</span>
      </div>

      <div className="flex gap-[6%] my-[3%] items-center">
        {/* Realistic barcode */}
        <div
          className="w-[44%] h-[26px]"
          style={{
            background:
              "repeating-linear-gradient(90deg,#BBD3E0 0 1px,transparent 1px 2px,#BBD3E0 2px 3.5px,transparent 3.5px 5px,#BBD3E0 5px 7px,transparent 7px 8px)",
          }}
        />
        <div className="flex flex-col gap-0.5 text-[5px] leading-tight">
          <span className="font-bold text-[#472F26]">TO: CLIENT</span>
          <span className="text-[#472F26]">TALENT / CREATIVE</span>
          <span className="text-[#472F26] font-bold">FRAGILE ✦</span>
        </div>
      </div>

      <div className="border-t border-[#472F26]/40 pt-[2%] text-[5px] text-[#472F26] flex justify-between">
        <span>FROM: BHUVANA</span>
        <span className="text-[#472F26]">№ 2605</span>
      </div>
    </div>
  );
}

export function ResumeSlipContent() {
  return (
    <div className="flex h-full flex-col justify-between p-4 font-sans text-[#472F26] select-text bg-[#BBD3E0] border border-[#472F26]/40">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between text-[7px] font-mono uppercase tracking-[0.2em] text-[#472F26] border-b border-[#472F26]/30 pb-1.5">
          <span>Curriculum Vitae</span>
          <span className="font-semibold text-[#472F26]">№ BHV-2026</span>
        </div>

        {/* Profile Info */}
        <div className="mt-2.5 flex items-start justify-between border-b border-[#472F26]/30 pb-2">
          <div>
            <h3 className="font-serif text-[16px] font-bold tracking-tight text-[#472F26] leading-none">
              Bhuvana Sri Chikoti
            </h3>
            <p className="mt-1 text-[8.5px] font-medium text-[#472F26] tracking-wide">
              Social Media &amp; Content Marketing
            </p>
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FEF0B6] border border-[#472F26]/50 text-[9px] font-bold text-[#472F26]">
            BC
          </span>
        </div>

        {/* Highlights */}
        <div className="mt-2.5">
          <p className="text-[7px] font-mono uppercase tracking-widest font-bold text-[#472F26] mb-1">
            Proven Track Record
          </p>
          <div className="space-y-1 text-[8px] text-[#472F26] leading-snug">
            <div className="flex items-center gap-1.5">
              <ArrowUpRight aria-hidden="true" className="h-2 w-2 shrink-0 text-[#472F26]" />
              <span><strong>5 Brands</strong> managed across diverse sectors</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#472F26] font-bold">✦</span>
              <span><strong>300+ Creatives</strong> &amp; <strong>660K</strong> top Reel reach</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#472F26] font-bold">⚡</span>
              <span><strong>AI Workflows</strong> via ChatGPT, Claude &amp; Canva</span>
            </div>
          </div>
        </div>

        {/* Core Skills Tags */}
        <div className="mt-2.5">
          <p className="text-[7px] font-mono uppercase tracking-widest font-bold text-[#472F26] mb-1">
            Skills &amp; Platforms
          </p>
          <div className="flex flex-wrap gap-1 text-[7px] font-medium">
            <span className="rounded bg-[#FEF0B6] px-1.5 py-0.5 text-[#472F26] border border-[#472F26]/40">
              Content Strategy
            </span>
            <span className="rounded bg-[#FEF0B6] px-1.5 py-0.5 text-[#472F26] border border-[#472F26]/40">
              Copywriting
            </span>
            <span className="rounded bg-[#FEF0B6] px-1.5 py-0.5 text-[#472F26] border border-[#472F26]/40">
              Instagram &amp; LinkedIn
            </span>
            <span className="rounded bg-[#FEF0B6] px-1.5 py-0.5 text-[#472F26] border border-[#472F26]/40">
              Canva &amp; Adobe Express
            </span>
            <span className="rounded bg-[#FEF0B6] px-1.5 py-0.5 text-[#472F26] border border-[#472F26]/40">
              ChatGPT &amp; Claude
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-2 border-t border-[#472F26]/30 flex items-center justify-between mt-auto">
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#472F26] px-3 py-1.5 text-[8.5px] font-semibold text-[#FEF0B6] shadow transition-all hover:bg-[#472F26] hover:scale-105 active:scale-95"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Open Resume</span>
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Verified Circular Stamp */}
        <span
          className="grid h-8 w-8 -rotate-12 place-items-center rounded-full border border-dashed border-[#BBD3E0]/80 text-[6.5px] font-bold uppercase tracking-wider text-[#472F26] select-none"
        >
          READY
        </span>
      </div>
    </div>
  );
}

export function ResumePackageBox({ className, open: controlledOpen, onOpenChange }: { className?: string; open?: boolean; onOpenChange?: (open: boolean) => void } = {}) {
  const [internalOpen, setOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const handleOpenChange = (nextOpen: boolean) => {
    if (controlledOpen === undefined) setOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  return (
    <div className={`relative z-20 flex flex-col items-center justify-center my-2 pointer-events-auto w-full max-w-md ${className || ''}`}>
      {/* Title / Cue Banner */}
      <div className="flex flex-col items-center gap-1.5 mb-3 text-center select-none">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#BBD3E0]/80 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-[#472F26] border border-[#472F26]/40 shadow-xs">
          <span>📦</span>
          <span>Contact parcel</span>
        </div>
        <p className="text-xs text-[#472F26]/80 font-mono tracking-wide">
          {open ? "Click the parcel to close the contact form" : "Click on the parcel to contact me"}
        </p>
      </div>

      {/* 3D Package Box */}
      <div className="w-full flex justify-center">
        <PackageBox
          open={open}
          onOpenChange={handleOpenChange}
          maxWidth={360}
          hint={false}
          openLabel="Click on the parcel to contact Bhuvana"
          closeLabel="Close contact form"
          label={<CustomShippingLabel />}
          colors={{
            box: "#BBD3E0", // Light azure parcel
            tape: "#472F26", // Dark gray brown tape
            paper: "#FEF0B6", // Light yellow parchment
            ink: "#472F26", // Dark gray brown ink
            accent: "#472F26", // Dark gray brown accent
          }}
        >
          <div className="flex h-full flex-col items-center justify-center border border-[#472F26]/40 bg-[#BBD3E0] p-5 text-center text-[#472F26]">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#472F26]">A little note</span>
            <p className="mt-4 max-w-[14rem] font-serif text-lg italic leading-snug text-[#472F26]">Tell me what you have in mind. I’d love to hear from you.</p>
            <span className="mt-5 text-[#472F26]" aria-hidden="true">✦</span>
          </div>
        </PackageBox>
      </div>
    </div>
  );
}

export default ResumePackageBox;

