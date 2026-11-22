"use client";

import React, { useState } from "react";
import { PackageBox } from "@/components/ui/package-box";

function CustomShippingLabel() {
  return (
    <div
      className="h-full w-full rounded-[2px] bg-[#075E59] p-[6%] flex flex-col justify-between text-[6px] font-mono leading-none select-none text-[#F0F8C9] border border-[#079B78]/50"
      style={{ boxShadow: "0 1px 3px rgba(7,94,89,0.5)" }}
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-[#079B78]/40 pb-[3%]">
        <span className="font-bold tracking-wider text-[#F0F8C9]">EXPRESS · CV</span>
        <span className="text-[5px] bg-[#B5F0A0] text-[#173D31] font-bold px-1 py-0.5 rounded-[1px]">AIR</span>
      </div>

      <div className="flex gap-[6%] my-[3%] items-center">
        {/* Realistic barcode */}
        <div
          className="w-[44%] h-[26px]"
          style={{
            background:
              "repeating-linear-gradient(90deg,#B5F0A0 0 1px,transparent 1px 2px,#B5F0A0 2px 3.5px,transparent 3.5px 5px,#B5F0A0 5px 7px,transparent 7px 8px)",
          }}
        />
        <div className="flex flex-col gap-0.5 text-[5px] leading-tight">
          <span className="font-bold text-[#F0F8C9]">TO: CLIENT</span>
          <span className="text-[#D4DEDA]">TALENT / CREATIVE</span>
          <span className="text-[#B5F0A0] font-bold">FRAGILE ✦</span>
        </div>
      </div>

      <div className="border-t border-[#079B78]/40 pt-[2%] text-[5px] text-[#D4DEDA] flex justify-between">
        <span>FROM: BHUVANA</span>
        <span className="text-[#B5F0A0]">№ 2605</span>
      </div>
    </div>
  );
}

export function ResumeSlipContent() {
  return (
    <div className="flex h-full flex-col justify-between p-4 font-sans text-[#D4DEDA] select-text bg-[#075E59] border border-[#079B78]/40">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between text-[7px] font-mono uppercase tracking-[0.2em] text-[#84918D] border-b border-[#079B78]/30 pb-1.5">
          <span>Curriculum Vitae</span>
          <span className="font-semibold text-[#B5F0A0]">№ BHV-2026</span>
        </div>

        {/* Profile Info */}
        <div className="mt-2.5 flex items-start justify-between border-b border-[#079B78]/30 pb-2">
          <div>
            <h3 className="font-serif text-[16px] font-bold tracking-tight text-[#F0F8C9] leading-none">
              Bhuvana Sri Chikoti
            </h3>
            <p className="mt-1 text-[8.5px] font-medium text-[#B5F0A0] tracking-wide">
              Social Media &amp; Content Marketing
            </p>
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#173D31] border border-[#079B78]/50 text-[9px] font-bold text-[#B5F0A0]">
            BC
          </span>
        </div>

        {/* Highlights */}
        <div className="mt-2.5">
          <p className="text-[7px] font-mono uppercase tracking-widest font-bold text-[#84918D] mb-1">
            Proven Track Record
          </p>
          <div className="space-y-1 text-[8px] text-[#D4DEDA] leading-snug">
            <div className="flex items-center gap-1.5">
              <span className="text-[#B5F0A0] font-bold">↗</span>
              <span><strong>5 Brands</strong> managed across diverse sectors</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#B5F0A0] font-bold">✦</span>
              <span><strong>300+ Creatives</strong> &amp; <strong>660K</strong> top Reel reach</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#B5F0A0] font-bold">⚡</span>
              <span><strong>AI Workflows</strong> via ChatGPT, Claude &amp; Canva</span>
            </div>
          </div>
        </div>

        {/* Core Skills Tags */}
        <div className="mt-2.5">
          <p className="text-[7px] font-mono uppercase tracking-widest font-bold text-[#84918D] mb-1">
            Skills &amp; Platforms
          </p>
          <div className="flex flex-wrap gap-1 text-[7px] font-medium">
            <span className="rounded bg-[#173D31] px-1.5 py-0.5 text-[#B5F0A0] border border-[#079B78]/40">
              Content Strategy
            </span>
            <span className="rounded bg-[#173D31] px-1.5 py-0.5 text-[#B5F0A0] border border-[#079B78]/40">
              Copywriting
            </span>
            <span className="rounded bg-[#173D31] px-1.5 py-0.5 text-[#B5F0A0] border border-[#079B78]/40">
              Instagram &amp; LinkedIn
            </span>
            <span className="rounded bg-[#173D31] px-1.5 py-0.5 text-[#B5F0A0] border border-[#079B78]/40">
              Canva &amp; Adobe Express
            </span>
            <span className="rounded bg-[#173D31] px-1.5 py-0.5 text-[#B5F0A0] border border-[#079B78]/40">
              ChatGPT &amp; Claude
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-2 border-t border-[#079B78]/30 flex items-center justify-between mt-auto">
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#B5F0A0] px-3 py-1.5 text-[8.5px] font-semibold text-[#173D31] shadow transition-all hover:bg-[#cbf7b8] hover:scale-105 active:scale-95"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Open Resume</span>
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Verified Circular Stamp */}
        <span
          className="grid h-8 w-8 -rotate-12 place-items-center rounded-full border border-dashed border-[#B5F0A0]/80 text-[6.5px] font-bold uppercase tracking-wider text-[#B5F0A0] select-none"
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
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#075E59]/80 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-[#B5F0A0] border border-[#079B78]/40 shadow-xs">
          <span>📦</span>
          <span>Official CV Package</span>
        </div>
        <p className="text-xs text-[#D4DEDA]/80 font-mono tracking-wide">
          {open ? "Click box or button to fold close" : "Click parcel to unbox Bhuvana's resume"}
        </p>
      </div>

      {/* 3D Package Box */}
      <div className="w-full flex justify-center">
        <PackageBox
          open={open}
          onOpenChange={handleOpenChange}
          maxWidth={360}
          openLabel="📦 Click to unbox resume"
          closeLabel="Fold box close"
          label={<CustomShippingLabel />}
          colors={{
            box: "#173D31", // Dark Forest box
            tape: "#079B78", // Forest Green tape
            paper: "#075E59", // Deep Teal parchment
            ink: "#F0F8C9", // Pale Lime ink
            accent: "#B5F0A0", // Soft Mint accent
          }}
        >
          <div className="flex h-full flex-col items-center justify-center border border-[#079B78]/40 bg-[#075E59] p-5 text-center text-[#D4DEDA]">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#B5F0A0]">A little note</span>
            <p className="mt-4 max-w-[14rem] font-serif text-lg italic leading-snug text-[#F0F8C9]">Tell me what you have in mind. I’d love to hear from you.</p>
            <span className="mt-5 text-[#B5F0A0]" aria-hidden="true">✦</span>
          </div>
        </PackageBox>
      </div>
    </div>
  );
}

export default ResumePackageBox;

