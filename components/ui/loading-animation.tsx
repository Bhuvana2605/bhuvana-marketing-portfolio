"use client";

import React, { useEffect, useRef } from "react";
import { GIRL_FRAMES, BOY_FRAMES } from "./loading-animation-frames";

export interface LoadingAnimationColors {
  accent?: string;
  blue?: string;
  ink?: string;
  tint?: string;
}

export type HeadlineRowItem = [string, ("frame" | undefined)?];

export interface LoadingAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  role?: string;
  cta?: string;
  loadingLabel?: string;
  readyLabel?: string;
  replayLabel?: string;
  scrollHeight?: string;
  size?: number;
  spread?: number;
  showReveal?: boolean;
  autoplay?: boolean;
  characterGender?: "girl" | "boy";
  rows?: HeadlineRowItem[][];
  colors?: LoadingAnimationColors;
  frames?: string[];
  onComplete?: () => void;
  onGetStarted?: () => void;
}

const LA_STYLES = `
.la{--la-accent:#FF5000;--la-blue:#1F3BFF;--la-ink:#23262F;--la-tint:#FFEEE6;--la-track:320vh;position:relative;display:block;width:100%;background:var(--la-tint);color:var(--la-ink);font-family:"Space Mono",ui-monospace,SFMono-Regular,Menlo,monospace;-webkit-font-smoothing:antialiased;font-variant-ligatures:none}
.la *,.la *::before,.la *::after{box-sizing:border-box}
.la-track{position:relative;height:var(--la-track)}
.la-stage{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden}
.la-grid{position:absolute;inset:0;opacity:0;pointer-events:none;background-image:linear-gradient(to right,var(--la-g2) 1px,transparent 1px),linear-gradient(to bottom,var(--la-g2) 1px,transparent 1px),linear-gradient(to right,var(--la-g1) 1px,transparent 1px),linear-gradient(to bottom,var(--la-g1) 1px,transparent 1px);background-size:120px 120px,120px 120px,24px 24px,24px 24px}
.la-fig,.la-ui{position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none}
.la-top{position:absolute;left:0;right:0;top:0;display:flex;justify-content:flex-end;align-items:center;padding:22px 32px;z-index:5}
.la-auto,.la-auto .la-track,.la-auto .la-stage{height:100%;min-height:100vh;min-height:100svh}
.la-auto .la-stage{position:relative}
.la-auto .la-top,.la-auto .la-cue,.la-auto .la-replay{display:none !important}
.la-skip,.la-replay{background:none;border:0;padding:0;font:700 12px "Space Mono",monospace;text-transform:uppercase;letter-spacing:.8px;color:#4A505C;cursor:pointer}
.la-skip:hover,.la-replay:hover{color:var(--la-ink)}
.la-msg{position:absolute;inset:0;z-index:4;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:36px;padding:0 clamp(20px,6vw,96px);padding:0 clamp(20px,6cqw,96px);pointer-events:none;container-type:inline-size}
.la-h{margin:0;display:flex;flex-direction:column;align-items:flex-start;gap:1em;font:700 clamp(13px,calc((100vw - 2 * clamp(20px,6vw,96px)) / 14),84px)/1.05 "Space Mono",monospace;font-size:clamp(13px,calc((100cqw - 2 * clamp(20px,6cqw,96px)) / 14),84px);letter-spacing:-.045em;color:var(--la-ink)}
.la-row{display:block;white-space:nowrap}
.la-t{display:inline-block;white-space:pre;opacity:0}
.la-fr{position:relative;color:var(--la-blue);padding:.02em .16em .08em;margin:0 .12em;border:2px solid var(--la-blue);background:var(--la-bluet)}
.la-fr i{position:absolute;width:.17em;height:.17em;min-width:7px;min-height:7px;box-sizing:border-box;background:#fff;border:2px solid var(--la-blue);transform:translate(-50%,-50%)}
.la-cta{pointer-events:none;opacity:0;display:inline-flex;align-items:center;border:2px solid var(--la-ink);background:var(--la-accent);color:var(--la-ink);padding:14px 28px;font:700 17px "Space Mono",monospace;text-transform:uppercase;letter-spacing:1.2px;cursor:pointer;transition:transform .08s,filter .08s}
.la-cta:hover{filter:brightness(1.08)}
.la-cta:active{transform:translateY(1px);filter:brightness(.94)}
.la-cta:focus-visible,.la-skip:focus-visible,.la-replay:focus-visible{outline:3px solid var(--la-ink);outline-offset:3px}
.la-cue{position:absolute;left:32px;bottom:26px;z-index:3;font:700 12px "Space Mono",monospace;text-transform:uppercase;letter-spacing:1.4px}
.la-cue span{display:block;width:3px;height:30px;background:var(--la-ink);margin:10px 0 0 6px;animation:la-cue 1.4s steps(5) infinite}
@keyframes la-cue{0%{transform:scaleY(.2);transform-origin:top}60%{transform:scaleY(1);transform-origin:top}61%{transform-origin:bottom}100%{transform:scaleY(.1);transform-origin:bottom}}
.la-load{position:absolute;left:0;right:0;top:24px;z-index:6;text-align:center;display:none}
.la-load.on{display:block}
.la-load b{display:block;font:700 13px "Space Mono",monospace;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:10px}
.la-bar{display:flex;gap:5px;justify-content:center}
.la-bar i{width:18px;height:14px;background:var(--la-accent);opacity:.18}
.la-bar i.on{opacity:1}
.la-replay{display:none;margin-top:14px}
.la-load.done .la-replay{display:inline-block}
@media (max-width:640px){.la-top{padding:16px}.la-cue{left:16px}}
@media (prefers-reduced-motion:reduce){.la-cue span{animation:none}.la-cta{transition:none}}
`;

function ensureAssets() {
  if (typeof document === "undefined") return;
  if (!document.getElementById("la-styles")) {
    const style = document.createElement("style");
    style.id = "la-styles";
    style.textContent = LA_STYLES;
    document.head.appendChild(style);
  }
  if (!document.getElementById("la-font")) {
    const link = document.createElement("link");
    link.id = "la-font";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap";
    document.head.appendChild(link);
  }
}

const FRAME_MARKERS = [
  [0, 0],
  [50, 0],
  [100, 0],
  [0, 50],
  [100, 50],
  [0, 100],
  [50, 100],
  [100, 100],
];

const DEFAULT_ROWS: HeadlineRowItem[][] = [
  [["You have "], ["consumed", "frame"], [" enough."]],
  [["It's time to "], ["create", "frame"], ["."]],
];

const GRID_COLS = 66; // sa
const GRID_ROWS = 53; // sn
const ASPECT_RATIO = 14.65 / 10.8; // w0
const FADE_EDGE = 9; // M0

const clamp = (b: number, min = 0, max = 1) => Math.max(min, Math.min(max, b));
const smooth = (b: number) => {
  b = clamp(b);
  return b * b * (3 - 2 * b);
};
const hash = (b: number, m: number) =>
  (((b * 73856093) ^ (m * 19349663)) >>> 0) % 1000 / 1000;
const esc = (b: string) =>
  b.replace(/[&<>"]/g, (m) => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[m] || m));

const rgba = (hex: string, alpha: number) => {
  const clean = hex.replace("#", "");
  const num = parseInt(
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean,
    16
  );
  return `rgba(${(num >> 16) & 255},${(num >> 8) & 255},${num & 255},${alpha})`;
};

const headRow = (row: HeadlineRowItem[]) =>
  `<span class="la-row" aria-hidden="true">${row
    .map(([text, type]) =>
      type === "frame"
        ? `<span class="la-t la-fr">${esc(text)}${FRAME_MARKERS.map(
            ([rx, ry]) => `<i style="left:${rx}%;top:${ry}%"></i>`
          ).join("")}</span>`
        : `<span class="la-t">${esc(text)}</span>`
    )
    .join("")}</span>`;

function mountLoadingAnimation(container: HTMLElement, options: LoadingAnimationProps = {}) {
  ensureAssets();

  const colors = {
    accent: "#FF5000",
    blue: "#1F3BFF",
    ink: "#23262F",
    tint: "#FFEEE6",
    ...(options.colors || {}),
  };

  const rows = options.rows && options.rows.length ? options.rows : DEFAULT_ROWS;

  const config = {
    name: "Bhuvana",
    role: "Social Media & Content Strategist",
    cta: "Explore Work",
    loadingLabel: "Setting up your desk",
    readyLabel: "Desk ready",
    replayLabel: "Replay",
    scrollHeight: "320vh",
    size: 0.5,
    spread: 1,
    showReveal: true,
    autoplay: false,
    characterGender: "girl" as const,
    ...options,
  };

  const size = clamp(config.size, 0.2, 1);
  const spread = clamp(config.spread, 0.2, 2);
  const reducedMotion =
    typeof matchMedia === "function" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  container.classList.add("la");
  if (config.autoplay) {
    container.classList.add("la-auto");
  }

  container.style.setProperty("--la-accent", colors.accent);
  container.style.setProperty("--la-blue", colors.blue);
  container.style.setProperty("--la-ink", colors.ink);
  container.style.setProperty("--la-tint", colors.tint);
  container.style.setProperty("--la-bluet", rgba(colors.blue, 0.08));
  container.style.setProperty("--la-g1", rgba(colors.accent, 0.09));
  container.style.setProperty("--la-g2", rgba(colors.accent, 0.2));
  container.style.setProperty("--la-track", config.scrollHeight);

  const headlineAccessible = rows
    .map((r) => r.map((c) => c[0]).join(""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  container.innerHTML = `
    <div class="la-track">
      <div class="la-stage">
        <div class="la-grid" aria-hidden="true"></div>
        <canvas class="la-fig" aria-hidden="true"></canvas>
        <canvas class="la-ui" aria-hidden="true"></canvas>
        <div class="la-top"><button class="la-skip" type="button">Skip ↓</button></div>
        <div class="la-cue">Scroll<span></span></div>
        <div class="la-msg">
          <h1 class="la-h" aria-label="${esc(headlineAccessible)}">${rows.map(headRow).join("")}</h1>
          <button class="la-cta" type="button" tabindex="-1">${esc(config.cta)}</button>
        </div>
        <div class="la-load" role="status">
          <b>${esc(config.loadingLabel)}</b>
          <div class="la-bar">${"<i></i>".repeat(16)}</div>
          <button class="la-replay" type="button">${esc(config.replayLabel)}</button>
        </div>
      </div>
    </div>`;

  const q = <T extends HTMLElement>(sel: string) => container.querySelector(sel) as T;
  const trackEl = q<HTMLDivElement>(".la-track");
  const stageEl = q<HTMLDivElement>(".la-stage");
  const figCanvas = q<HTMLCanvasElement>(".la-fig");
  const uiCanvas = q<HTMLCanvasElement>(".la-ui");
  const gridEl = q<HTMLDivElement>(".la-grid");
  const textSpans = [...container.querySelectorAll<HTMLSpanElement>(".la-t")];
  const ctaBtn = q<HTMLButtonElement>(".la-cta");
  const cueEl = q<HTMLDivElement>(".la-cue");
  const loadEl = q<HTMLDivElement>(".la-load");
  const loadLabelEl = q<HTMLElement>(".la-load b");
  const barSegments = [...container.querySelectorAll<HTMLElement>(".la-bar i")];

  // Pick frames: custom frames prop > girl frames (default) > boy frames
  const frameSource =
    config.frames && config.frames.length
      ? config.frames
      : config.characterGender === "boy"
      ? BOY_FRAMES
      : GIRL_FRAMES;

  const bounds = { x0: GRID_COLS, y0: GRID_ROWS, x1: 0, y1: 0 };
  const decodedFrames = frameSource.map((b64) => {
    const raw = atob(b64);
    const arr = new Uint8Array(GRID_COLS * GRID_ROWS);
    for (let j = 0; j < arr.length; j++) {
      const bit = (raw.charCodeAt(j >> 3) >> (7 - (j & 7))) & 1;
      arr[j] = bit;
      if (bit) {
        const x = j % GRID_COLS;
        const y = (j / GRID_COLS) | 0;
        if (x < bounds.x0) bounds.x0 = x;
        if (x > bounds.x1) bounds.x1 = x;
        if (y < bounds.y0) bounds.y0 = y;
        if (y > bounds.y1) bounds.y1 = y;
      }
    }
    return arr;
  });

  const totalFrames = decodedFrames.length;
  const figWidth = bounds.x1 - bounds.x0 + 1;
  const figHeight = bounds.y1 - bounds.y0 + 1;

  const state = {
    phase: "scroll" as "scroll" | "assemble" | "load" | "done",
    p: 0,
    target: 0,
    loadStart: 0,
    f0: 0,
    raf: 0,
    alive: true,
    d: 1,
    frame: 0,
    autoStart: 0,
    doneAt: 0,
  };

  const cursor = {
    mx: -999,
    my: -999,
    x: -999,
    y: -999,
    r: 0,
    tr: 0,
  };

  let cachedUiCanvas: HTMLCanvasElement | null = null;
  let revealBufferCanvas: HTMLCanvasElement | null = null;
  let layout = {
    W: 0,
    H: 0,
    cw: 0,
    ch: 0,
    ox: 0,
    oy: 0,
    fx0: 0,
    fx1: 0,
    fy0: 0,
    fy1: 0,
  };

  const computeGeo = (w: number, h: number) => {
    let ch = (size * h) / figHeight;
    let cw = ch / ASPECT_RATIO;
    if (figWidth * cw > w * 0.7) {
      cw = (w * 0.7) / figWidth;
      ch = cw * ASPECT_RATIO;
    }
    return {
      cw,
      ch,
      ox: w / 2 - ((bounds.x0 + bounds.x1 + 1) / 2) * cw,
      oy: h / 2 - ((bounds.y0 + bounds.y1 + 1) / 2) * ch,
    };
  };

  function drawRulers(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const ink = (a: number) => rgba(colors.ink, a);
    const line = (x1: number, y1: number, x2: number, y2: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1 + 0.5, y1 + 0.5);
      ctx.lineTo(x2 + 0.5, y2 + 0.5);
      ctx.stroke();
    };

    const rulerSize = 18;
    ctx.fillStyle = "rgba(255,255,255,.82)";
    ctx.fillRect(0, 0, w, rulerSize);
    ctx.fillRect(0, 0, rulerSize, h);

    line(0, rulerSize, w, rulerSize, ink(0.35));
    line(rulerSize, 0, rulerSize, h, ink(0.35));

    ctx.fillStyle = ink(0.7);
    ctx.font = '700 8px "Space Mono", monospace';
    ctx.textBaseline = "top";

    for (let x = 0; x <= w; x += 10) {
      const len = x % 100 === 0 ? 12 : x % 50 === 0 ? 8 : 4;
      line(x, rulerSize - len, x, rulerSize, ink(0.5));
      if (x % 100 === 0 && x) {
        ctx.fillText(String(x), x + 3, 2);
      }
    }

    for (let y = 0; y <= h; y += 10) {
      const len = y % 100 === 0 ? 12 : y % 50 === 0 ? 8 : 4;
      line(rulerSize - len, y, rulerSize, y, ink(0.5));
      if (y % 100 === 0 && y) {
        ctx.save();
        ctx.translate(2, y + 3);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(String(y), -ctx.measureText(String(y)).width, 0);
        ctx.restore();
      }
    }
  }

  function buildUiCache() {
    const w = stageEl.clientWidth;
    const h = stageEl.clientHeight;
    const dpr = state.d;

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 1;

    const accent = (a: number) => rgba(colors.accent, a);
    const blue = (a: number) => rgba(colors.blue, a);
    const line = (x1: number, y1: number, x2: number, y2: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x1 + 0.5, y1 + 0.5);
      ctx.lineTo(x2 + 0.5, y2 + 0.5);
      ctx.stroke();
    };

    for (let x = 0; x <= w; x += 24) {
      line(x, 0, x, h, x % 120 === 0 ? accent(0.2) : accent(0.09));
    }
    for (let y = 0; y <= h; y += 24) {
      line(0, y, w, y, y % 120 === 0 ? accent(0.2) : accent(0.09));
    }

    drawRulers(ctx, w, h);

    const geo = computeGeo(w, h);
    const pad = 10;
    const fx0 = geo.ox + bounds.x0 * geo.cw - pad;
    const fx1 = geo.ox + (bounds.x1 + 1) * geo.cw + pad;
    const fy0 = geo.oy + bounds.y0 * geo.ch - pad;
    const fy1 = geo.oy + (bounds.y1 + 1) * geo.ch + pad;

    layout = { W: w, H: h, ...geo, fx0, fx1, fy0, fy1 };

    line(fx0, 0, fx0, h, blue(0.3));
    line(fx1, 0, fx1, h, blue(0.3));
    line(0, fy0, w, fy0, blue(0.3));
    line(0, fy1, w, fy1, blue(0.3));
    line(w / 2, 0, w / 2, h, accent(0.35));

    ctx.strokeStyle = blue(0.9);
    ctx.strokeRect(fx0 + 0.5, fy0 + 0.5, fx1 - fx0, fy1 - fy0);

    const handleSize = 6;
    [
      [fx0, fy0],
      [(fx0 + fx1) / 2, fy0],
      [fx1, fy0],
      [fx0, (fy0 + fy1) / 2],
      [fx1, (fy0 + fy1) / 2],
      [fx0, fy1],
      [(fx0 + fx1) / 2, fy1],
      [fx1, fy1],
    ].forEach(([hx, hy]) => {
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = blue(1);
      ctx.fillRect(hx - handleSize / 2 + 0.5, hy - handleSize / 2 + 0.5, handleSize, handleSize);
      ctx.strokeRect(hx - handleSize / 2 + 0.5, hy - handleSize / 2 + 0.5, handleSize, handleSize);
    });

    const drawPill = (
      text: string,
      px: number,
      py: number,
      bgColor: string,
      textColor: string
    ) => {
      ctx.font = '700 9px "Space Mono", monospace';
      const tw = ctx.measureText(text).width + 12;
      ctx.fillStyle = bgColor;
      ctx.fillRect(px, py, tw, 15);
      ctx.fillStyle = textColor;
      ctx.textBaseline = "middle";
      ctx.fillText(text, px + 6, py + 8);
      ctx.textBaseline = "top";
      return tw;
    };

    drawPill(config.name, fx0, fy0 - 20, blue(1), "#fff");
    drawPill(
      `${Math.round(fx1 - fx0)} × ${Math.round(fy1 - fy0)}`,
      (fx0 + fx1) / 2 - 30,
      fy1 + 7,
      blue(1),
      "#fff"
    );

    cachedUiCanvas = canvas;
    revealBufferCanvas = document.createElement("canvas");
    revealBufferCanvas.width = canvas.width;
    revealBufferCanvas.height = canvas.height;
  }

  function fit() {
    const dpr = window.devicePixelRatio || 1;
    state.d = dpr;
    figCanvas.width = uiCanvas.width = Math.round(stageEl.clientWidth * dpr);
    figCanvas.height = uiCanvas.height = Math.round(stageEl.clientHeight * dpr);
    buildUiCache();
  }

  function drawFigure(frameIndex: number) {
    const ctx = figCanvas.getContext("2d")!;
    const w = figCanvas.width;
    const h = figCanvas.height;
    ctx.clearRect(0, 0, w, h);

    const { cw, ch, ox, oy } = computeGeo(w, h);
    const curFrame = frameIndex % totalFrames;
    const curBits = decodedFrames[curFrame];
    const nextBits = decodedFrames[(curFrame + 1) % totalFrames];
    const blendFrac =
      curFrame >= totalFrames - 4 ? (curFrame - (totalFrames - 4) + 1) / 4 : 0;
    const scrollP = state.p;
    const minDim = Math.min(w, h);

    ctx.fillStyle = colors.accent;

    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        const bitIdx = row * GRID_COLS + col;
        const isActive =
          blendFrac && hash(col, row) < blendFrac
            ? nextBits[bitIdx]
            : curBits[bitIdx];

        if (
          !isActive ||
          (row > bounds.y1 - FADE_EDGE &&
            hash(col * 7 + 3, row * 11 + 5) > (bounds.y1 - row + 1) / (FADE_EDGE + 1))
        ) {
          continue;
        }

        let dispersion = 0;
        if (scrollP > 0) {
          dispersion = clamp(scrollP * 1.5 - hash(col * 3 + 1, row * 5 + 2) * 0.5);
          dispersion = dispersion * dispersion * (3 - 2 * dispersion);
        }

        if (dispersion >= 0.995) continue;

        if (dispersion === 0) {
          const px = Math.round(ox + col * cw);
          const py = Math.round(oy + row * ch);
          ctx.globalAlpha = 1;
          ctx.fillRect(
            px,
            py,
            Math.round(ox + (col + 1) * cw) - px,
            Math.round(oy + (row + 1) * ch) - py
          );
          continue;
        }

        const angle = hash(col, row) * 6.2832;
        const dist =
          dispersion * (0.04 + hash(row + 7, col + 3) * 0.46) * minDim * spread;
        const scaleFactor = 1 - dispersion * 0.6;

        ctx.globalAlpha = 1 - dispersion * 0.92;
        ctx.fillRect(
          ox + col * cw + Math.cos(angle) * dist + dispersion * w * 0.02,
          oy + row * ch + Math.sin(angle) * dist - dispersion * dispersion * h * 0.1,
          cw * scaleFactor,
          ch * scaleFactor
        );
      }
    }
    ctx.globalAlpha = 1;
  }

  function drawAnnotations(ctx: CanvasRenderingContext2D, frameIndex: number) {
    const { W, H, cw, ch, ox, oy, fx0, fx1, fy0, fy1 } = layout;
    const rulerOffset = 18;
    const accent = (a: number) => rgba(colors.accent, a);
    const blue = (a: number) => rgba(colors.blue, a);
    const ink = (a: number) => rgba(colors.ink, a);
    const at = (thresh: number) =>
      reducedMotion ? 0 : smooth((state.p - thresh) / 0.12);

    const line = (x1: number, y1: number, x2: number, y2: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x1 + 0.5, y1 + 0.5);
      ctx.lineTo(x2 + 0.5, y2 + 0.5);
      ctx.stroke();
    };

    const pill = (
      text: string,
      px: number,
      py: number,
      bgColor: string,
      textColor: string
    ) => {
      ctx.font = '700 9px "Space Mono", monospace';
      const tw = ctx.measureText(text).width + 12;
      ctx.fillStyle = bgColor;
      ctx.fillRect(px, py, tw, 15);
      ctx.fillStyle = textColor;
      ctx.textBaseline = "middle";
      ctx.fillText(text, px + 6, py + 8);
      return tw;
    };

    const panel = (
      px: number,
      py: number,
      pw: number,
      title: string,
      entries: [string, string][]
    ) => {
      px = Math.max(rulerOffset + 6, Math.min(W - pw - 6, px));
      const ph = 20 + entries.length * 15 + 6;
      ctx.fillStyle = "rgba(255,255,255,.93)";
      ctx.fillRect(px, py, pw, ph);
      ctx.strokeStyle = ink(0.7);
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 0.5, py + 0.5, pw, ph);
      ctx.textBaseline = "middle";
      ctx.fillStyle = ink(1);
      ctx.font = '700 8px "Space Mono", monospace';
      ctx.fillText(title.toUpperCase(), px + 8, py + 10);
      line(px, py + 19, px + pw, py + 19, ink(0.25));

      entries.forEach(([key, val], idx) => {
        const itemY = py + 20 + idx * 15 + 8;
        ctx.font = '400 9px "Space Mono", monospace';
        ctx.fillStyle = ink(0.55);
        ctx.fillText(key, px + 8, itemY);
        ctx.font = '700 9px "Space Mono", monospace';
        ctx.fillStyle = ink(1);
        ctx.textAlign = "right";
        ctx.fillText(val, px + pw - 8, itemY);
        ctx.textAlign = "left";
      });
    };

    const when = (thresh: number, drawFn: () => void) => {
      const alpha = at(thresh);
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      drawFn();
      ctx.restore();
    };

    const curFrame = frameIndex % totalFrames;
    const rotateDeg = Math.round((curFrame / totalFrames) * 360);

    when(0.1, () =>
      panel(fx1 + 14, fy0, 138, "Layers", [
        ["◉ Figure", ""],
        ["◉ Pixels", String(GRID_COLS * GRID_ROWS)],
        ["◉ Background", ""],
      ])
    );

    when(0.25, () =>
      panel(fx0 - 14 - 142, fy0, 142, "Properties", [
        [
          "Role",
          config.role.length > 14
            ? config.role.slice(0, 13) + "…"
            : config.role,
        ],
        ["X", `${Math.round(fx0)}`],
        ["Y", `${Math.round(fy0)}`],
        ["W × H", `${Math.round(fx1 - fx0)}×${Math.round(fy1 - fy0)}`],
        ["Rotate", `${rotateDeg}°`],
        ["Pixel", `${cw.toFixed(1)}×${ch.toFixed(1)}`],
        ["Frame", `${curFrame + 1}/${totalFrames}`],
        ["Colour", "1-bit"],
      ])
    );

    when(0.4, () => {
      const midY = (fy0 + fy1) / 2;
      const midX = (fx0 + fx1) / 2;
      line(rulerOffset, midY, fx0, midY, accent(0.9));
      line(rulerOffset, midY - 4, rulerOffset, midY + 4, accent(0.9));
      line(fx0, midY - 4, fx0, midY + 4, accent(0.9));
      pill(
        String(Math.round(fx0 - rulerOffset)),
        (rulerOffset + fx0) / 2 - 12,
        midY - 20,
        accent(1),
        colors.ink
      );

      line(midX, rulerOffset, midX, fy0, accent(0.9));
      line(midX - 4, rulerOffset, midX + 4, rulerOffset, accent(0.9));
      line(midX - 4, fy0, midX + 4, fy0, accent(0.9));
      pill(
        String(Math.round(fy0 - rulerOffset)),
        midX + 8,
        (rulerOffset + fy0) / 2 - 8,
        accent(1),
        colors.ink
      );
    });

    when(0.55, () => {
      const pw = figWidth * cw;
      const ph = figHeight * ch;
      const cx = ox + ((bounds.x0 + bounds.x1 + 1) / 2) * cw;
      const cy = oy + bounds.y0 * ch;
      const pts = [
        [cx - 0.22 * pw, cy + 0.3 * ph],
        [cx - 0.13 * pw, cy + 0.04 * ph],
        [cx + 0.13 * pw, cy + 0.04 * ph],
        [cx + 0.22 * pw, cy + 0.3 * ph],
      ];
      const ex = 0.07 * pw;
      const ey = 0.1 * ph;

      ctx.strokeStyle = blue(0.9);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pts[0][0] + 0.5, pts[0][1] + 0.5);
      ctx.bezierCurveTo(
        pts[1][0] - ex,
        pts[1][1] - ey,
        pts[2][0] + ex,
        pts[2][1] - ey,
        pts[3][0] + 0.5,
        pts[3][1] + 0.5
      );
      ctx.stroke();

      pts.forEach(([px, py], i) => {
        const offset = i % 2 ? ex : -ex;
        line(px, py, px + offset, py - ey, blue(0.5));
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = blue(0.7);
        ctx.beginPath();
        ctx.arc(px + offset + 0.5, py - ey + 0.5, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.strokeStyle = blue(1);
        ctx.fillRect(px - 2.5, py - 2.5, 6, 6);
        ctx.strokeRect(px - 2.5, py - 2.5, 6, 6);
      });
    });

    when(0.7, () => {
      pill("Layer 1 · 66 × 53", fx1 + 14, fy1 - 80, "#fff", ink(1));
      pill("Pixel mask", fx1 + 14, fy1 - 58, "#fff", ink(1));
      pill("Opacity 100%", fx0 - 96, fy1 - 80, "#fff", ink(1));
      pill(
        `Fill  ${colors.accent.replace("#", "").toUpperCase()}`,
        fx0 - 108,
        fy1 - 58,
        "#fff",
        ink(1)
      );
      ctx.fillStyle = colors.accent;
      ctx.fillRect(fx0 - 106, fy1 - 55, 9, 9);
    });

    when(0.85, () => {
      const py = fy1 + 28 < H - 24 ? fy1 + 28 : fy0 - 44;
      ctx.fillStyle = colors.accent;
      ctx.fillRect(fx0, py, 14, 14);
      ctx.strokeStyle = ink(0.8);
      ctx.strokeRect(fx0 + 0.5, py + 0.5, 14, 14);

      ctx.fillStyle = "#fff";
      ctx.fillRect(fx0 + 20, py, 14, 14);
      ctx.strokeRect(fx0 + 20.5, py + 0.5, 14, 14);
      line(fx0 + 20, py + 14, fx0 + 34, py, ink(0.8));

      pill(
        `on #${colors.accent.replace("#", "").toUpperCase()}  off none`,
        fx0 + 42,
        py - 1,
        "#fff",
        ink(1)
      );
      pill("Export 1x", fx1 - 56, py - 1, blue(1), "#fff");
    });
  }

  function drawHeadlineGuides(ctx: CanvasRenderingContext2D, alpha: number) {
    const dpr = state.d;
    const w = stageEl.clientWidth;
    const h = stageEl.clientHeight;
    const rulerOffset = 18;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 1;

    const accent = (a: number) => rgba(colors.accent, a);
    const blue = (a: number) => rgba(colors.blue, a);
    const line = (x1: number, y1: number, x2: number, y2: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x1 + 0.5, y1 + 0.5);
      ctx.lineTo(x2 + 0.5, y2 + 0.5);
      ctx.stroke();
    };

    const pill = (
      text: string,
      px: number,
      py: number,
      bgColor: string,
      textColor: string
    ) => {
      ctx.font = '700 9px "Space Mono", monospace';
      const tw = ctx.measureText(text).width + 12;
      ctx.fillStyle = bgColor;
      ctx.fillRect(px, py, tw, 15);
      ctx.fillStyle = textColor;
      ctx.textBaseline = "middle";
      ctx.fillText(text, px + 6, py + 8);
      return tw;
    };

    const isSmall = w < 640;
    const frameBoxes = [...container.querySelectorAll<HTMLElement>(".la-fr")].map(
      (el) => ({
        x: el.offsetLeft,
        y: el.offsetTop,
        w: el.offsetWidth,
        h: el.offsetHeight,
      })
    );

    drawRulers(ctx, w, h);
    ctx.textBaseline = "top";

    frameBoxes.forEach((box, idx) => {
      const bx = box.x;
      const bx2 = box.x + box.w;
      const by = box.y;
      const by2 = box.y + box.h;

      line(bx, rulerOffset, bx, h, blue(0.28));
      line(bx2, rulerOffset, bx2, h, blue(0.28));
      line(rulerOffset, by, w, by, blue(0.28));
      line(rulerOffset, by2, w, by2, blue(0.28));

      ctx.fillStyle = blue(0.3);
      ctx.fillRect(bx + 1, 0, box.w, rulerOffset - 1);
      ctx.fillRect(0, by + 1, rulerOffset - 1, box.h);

      ctx.fillStyle = blue(1);
      ctx.font = '700 8px "Space Mono", monospace';
      ctx.textBaseline = "top";
      ctx.fillText(String(Math.round(bx)), bx + 3, 2);

      if (isSmall) return;

      pill(`Text ${idx + 1}`, bx, by - 21, blue(1), "#fff");
      const coordText = `x ${Math.round(bx)}  y ${Math.round(by)}`;
      ctx.font = '700 9px "Space Mono", monospace';
      pill(
        coordText,
        bx2 - ctx.measureText(coordText).width - 12,
        by - 21,
        colors.ink,
        "#fff"
      );
      pill(
        `${Math.round(box.w)} × ${Math.round(box.h)}`,
        (bx + bx2) / 2 - 30,
        by2 + 7,
        blue(1),
        "#fff"
      );
    });

    const headEl = q<HTMLElement>(".la-h");
    const gap = Math.round(ctaBtn.offsetTop - (headEl.offsetTop + headEl.offsetHeight));
    const guideX = ctaBtn.offsetLeft + 16;

    if (gap > 6) {
      const topY = headEl.offsetTop + headEl.offsetHeight;
      const botY = ctaBtn.offsetTop;
      line(guideX, topY, guideX, botY, accent(0.95));
      line(guideX - 4, topY, guideX + 4, topY, accent(0.95));
      line(guideX - 4, botY, guideX + 4, botY, accent(0.95));
      if (!isSmall) {
        pill(String(gap), guideX + 8, (topY + botY) / 2 - 8, accent(1), colors.ink);
      }
    }

    const hLeft = headEl.offsetLeft;
    const hTop = headEl.offsetTop - 18;

    if (!isSmall && hLeft - rulerOffset > 26) {
      line(rulerOffset, hTop, hLeft, hTop, accent(0.95));
      line(rulerOffset, hTop - 4, rulerOffset, hTop + 4, accent(0.95));
      line(hLeft, hTop - 4, hLeft, hTop + 4, accent(0.95));
      pill(
        String(Math.round(hLeft - rulerOffset)),
        (rulerOffset + hLeft) / 2 - 10,
        hTop - 20,
        accent(1),
        colors.ink
      );
    }

    if (!isSmall) {
      ctx.fillStyle = rgba(colors.ink, 0.55);
      ctx.font = '700 9px "Space Mono", monospace';
      ctx.textBaseline = "top";
      ctx.fillText(
        `Landing  ${Math.round(w)} × ${Math.round(h)}`,
        rulerOffset + 8,
        rulerOffset + 8
      );
    }

    ctx.globalAlpha = 1;
  }

  function drawReveal(frameIndex: number) {
    const ctx = uiCanvas.getContext("2d")!;
    const dpr = state.d;

    cursor.x += (cursor.mx - cursor.x) * 0.35;
    cursor.y += (cursor.my - cursor.y) * 0.35;
    cursor.r += (cursor.tr - cursor.r) * 0.16;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);

    const revealFrac = reducedMotion ? 1 : smooth((state.p - 0.4) / 0.15);
    const inspectFrac = 1 - revealFrac;

    if (config.showReveal && revealFrac > 0.01) {
      drawHeadlineGuides(ctx, revealFrac);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    if (
      !config.showReveal ||
      !cachedUiCanvas ||
      !revealBufferCanvas ||
      cursor.r < 2 ||
      inspectFrac < 0.01
    ) {
      return;
    }

    const bctx = revealBufferCanvas.getContext("2d")!;
    const bw = uiCanvas.width;
    const bh = uiCanvas.height;

    bctx.setTransform(1, 0, 0, 1, 0, 0);
    bctx.globalCompositeOperation = "source-over";
    bctx.clearRect(0, 0, bw, bh);
    bctx.drawImage(cachedUiCanvas, 0, 0);
    bctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    drawAnnotations(bctx, frameIndex);

    const cx = cursor.x;
    const cy = cursor.y;
    const cr = cursor.r * (1 + state.p * 0.9);

    bctx.strokeStyle = rgba(colors.blue, 0.7);
    bctx.lineWidth = 1;
    bctx.beginPath();
    bctx.moveTo(cx, 0);
    bctx.lineTo(cx, bh / dpr);
    bctx.moveTo(0, cy);
    bctx.lineTo(bw / dpr, cy);
    bctx.stroke();

    const coordStr = `x ${Math.round(cursor.x)}   y ${Math.round(cursor.y)}`;
    bctx.font = '700 9px "Space Mono", monospace';
    bctx.textBaseline = "middle";
    const strWidth = bctx.measureText(coordStr).width + 12;

    bctx.fillStyle = colors.ink;
    bctx.fillRect(cx + 12, cy + 12, strWidth, 15);
    bctx.fillStyle = "#fff";
    bctx.fillText(coordStr, cx + 18, cy + 20);

    bctx.fillStyle = colors.blue;
    bctx.fillRect(cx - 3, 0, 6, 18);
    bctx.fillRect(0, cy - 3, 18, 6);

    bctx.globalCompositeOperation = "destination-in";
    const gradient = bctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
    gradient.addColorStop(0, "rgba(0,0,0,1)");
    gradient.addColorStop(0.7, "rgba(0,0,0,.85)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    bctx.fillStyle = gradient;
    bctx.fillRect(0, 0, bw / dpr, bh / dpr);

    ctx.globalAlpha = inspectFrac;
    ctx.drawImage(revealBufferCanvas, 0, 0);
    ctx.globalAlpha = 1;
  }

  function updateDom() {
    const progress = state.p;
    const ctaFrac = reducedMotion ? 1 : smooth((progress - 0.9) / 0.08);

    textSpans.forEach((span, idx) => {
      const spanFrac = reducedMotion ? 1 : smooth((progress - 0.4 - idx * 0.022) / 0.2);
      span.style.opacity = String(spanFrac);
      span.style.transform = `translateY(${(1 - spanFrac) * 22}px) scale(${
        0.82 + 0.18 * spanFrac
      })`;
    });

    gridEl.style.opacity = config.showReveal
      ? String(reducedMotion ? 1 : smooth((progress - 0.4) / 0.15))
      : "0";

    const isCtaActive = state.phase === "scroll" && ctaFrac > 0.5;
    ctaBtn.style.opacity = String(state.phase === "scroll" ? ctaFrac : 0);
    ctaBtn.style.pointerEvents = isCtaActive ? "auto" : "none";
    ctaBtn.tabIndex = isCtaActive ? 0 : -1;

    cueEl.style.opacity =
      state.phase === "scroll" ? String(1 - smooth(progress / 0.12)) : "0";
  }

  function complete() {
    document.body.style.overflow = "";
    state.phase = "done";
    state.p = 0;
    state.target = 0;
    loadLabelEl.textContent = config.readyLabel;
    barSegments.forEach((seg) => seg.classList.add("on"));
    loadEl.classList.add("on", "done");

    options.onComplete?.();
    container.dispatchEvent(
      new CustomEvent("loadinganimation:complete", { bubbles: true })
    );
  }

  function begin() {
    if (state.phase === "scroll") {
      options.onGetStarted?.();
      if (reducedMotion) {
        complete();
        return;
      }
      state.phase = "assemble";
      state.target = 0;
      if (!config.autoplay) {
        document.body.style.overflow = "hidden";
      }
    }
  }

  function resetUi() {
    loadEl.classList.remove("on", "done");
    loadLabelEl.textContent = config.loadingLabel;
    barSegments.forEach((seg) => seg.classList.remove("on"));
  }

  function replay() {
    state.phase = "scroll";
    state.p = 0;
    state.target = 0;
    state.autoStart = 0;
    document.body.style.overflow = "";
    resetUi();
    if (!config.autoplay) {
      trackEl.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }

  function loop(time: number) {
    state.raf = 0;
    if (!state.alive) return;

    const rect = trackEl.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      if (config.autoplay && state.phase === "scroll") {
        if (!state.autoStart) state.autoStart = time;
        const elapsed = (time - state.autoStart) / 1000;
        state.target =
          reducedMotion || elapsed < 1.2
            ? 0
            : elapsed < 4.4
            ? smooth((elapsed - 1.2) / 3.2)
            : 1;
        if (elapsed > 6.6) {
          begin();
        }
      } else if (state.phase === "scroll") {
        const scrollDist = Math.max(1, trackEl.offsetHeight - stageEl.clientHeight);
        state.target = reducedMotion ? 0 : clamp(-rect.top / scrollDist);
      }

      if (config.autoplay && state.phase === "done") {
        if (!state.doneAt) state.doneAt = time;
        if (time - state.doneAt > 1600) {
          state.phase = "scroll";
          state.p = 0;
          state.target = 0;
          state.autoStart = time;
          state.doneAt = 0;
          resetUi();
        }
      }

      state.p +=
        (state.target - state.p) * (state.phase === "assemble" ? 0.085 : 0.16);
      if (Math.abs(state.target - state.p) < 0.002) {
        state.p = state.target;
      }

      let curFrame = reducedMotion
        ? Math.floor(totalFrames * 0.38)
        : Math.floor((time / 1000) * 12) % totalFrames;

      if (state.phase === "assemble" && state.p < 0.02) {
        state.phase = "load";
        state.loadStart = time;
        state.f0 = curFrame;
        state.p = 0;
        loadEl.classList.add("on");
      }

      if (state.phase === "load") {
        const step = Math.floor(((time - state.loadStart) / 1000) * 24);
        if (step >= totalFrames) {
          complete();
        } else {
          curFrame = (state.f0 + step) % totalFrames;
          barSegments.forEach((seg, idx) =>
            seg.classList.toggle("on", idx < Math.round((step / totalFrames) * 16))
          );
        }
      }

      state.frame = curFrame;
      drawFigure(curFrame);
      drawReveal(curFrame);
      updateDom();
    }

    state.raf = requestAnimationFrame(loop);
  }

  const onMove = (e: PointerEvent) => {
    const sRect = stageEl.getBoundingClientRect();
    cursor.mx = e.clientX - sRect.left;
    cursor.my = e.clientY - sRect.top;
    if (cursor.r < 2) {
      cursor.x = cursor.mx;
      cursor.y = cursor.my;
    }
    cursor.tr = 240;
  };

  const onLeave = () => {
    cursor.tr = 0;
  };

  stageEl.addEventListener("pointermove", onMove);
  stageEl.addEventListener("pointerleave", onLeave);
  ctaBtn.addEventListener("click", begin);

  const skipBtn = q<HTMLButtonElement>(".la-skip");
  const onSkip = () => {
    window.scrollTo({
      top:
        trackEl.getBoundingClientRect().top +
        window.scrollY +
        Math.max(0, trackEl.offsetHeight - stageEl.clientHeight),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };
  skipBtn.addEventListener("click", onSkip);

  const replayBtn = q<HTMLButtonElement>(".la-replay");
  replayBtn.addEventListener("click", replay);

  const resizeObserver =
    typeof ResizeObserver === "function" ? new ResizeObserver(() => fit()) : null;
  resizeObserver?.observe(stageEl);

  fit();
  state.raf = requestAnimationFrame(loop);

  return {
    replay,
    destroy() {
      state.alive = false;
      cancelAnimationFrame(state.raf);
      resizeObserver?.disconnect();
      stageEl.removeEventListener("pointermove", onMove);
      stageEl.removeEventListener("pointerleave", onLeave);
      ctaBtn.removeEventListener("click", begin);
      skipBtn.removeEventListener("click", onSkip);
      replayBtn.removeEventListener("click", replay);
      document.body.style.overflow = "";
      container.innerHTML = "";
      container.classList.remove("la");
    },
  };
}

export function LoadingAnimation({
  className,
  style,
  onComplete,
  onGetStarted,
  ...rest
}: LoadingAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const callbacksRef = useRef({ onComplete, onGetStarted });
  callbacksRef.current = { onComplete, onGetStarted };

  const depsKey = JSON.stringify([
    rest.name,
    rest.role,
    rest.cta,
    rest.loadingLabel,
    rest.readyLabel,
    rest.replayLabel,
    rest.scrollHeight,
    rest.size,
    rest.spread,
    rest.showReveal,
    rest.autoplay,
    rest.characterGender,
    rest.rows,
    rest.colors,
    rest.frames ? rest.frames.length : 0,
  ]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const instance = mountLoadingAnimation(el, {
      ...rest,
      onComplete: () => callbacksRef.current.onComplete?.(),
      onGetStarted: () => callbacksRef.current.onGetStarted?.(),
    });

    return () => instance.destroy();
  }, [depsKey]);

  return <div ref={containerRef} className={className} style={style} />;
}

export default LoadingAnimation;

