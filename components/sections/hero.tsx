'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Lanyard from '@/components/ui/lanyard'

const FOCUS = ['Content strategy', 'Storytelling', 'Campaign planning', 'Short-form video']

export function Hero() {
  return (
    <section id="about" className="relative isolate min-h-[760px] overflow-hidden bg-[#173D31] px-5 pb-14 pt-24 text-white sm:px-8 sm:pt-28 lg:min-h-screen lg:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_68%_48%,rgba(7,155,120,0.2),transparent_42%),linear-gradient(135deg,#173D31_0%,#12352D_58%,#102C2B_100%)]" />
      <div className="relative z-10 mx-auto grid min-h-[620px] max-w-6xl items-center gap-4 lg:min-h-[calc(100vh-120px)] lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12 }} className="relative z-10 py-10 text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B5F0A0]/25 bg-[#075E59]/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D6F5C9]"><span className="h-1.5 w-1.5 rounded-full bg-[#B5F0A0]" /> Social media &amp; content marketing</div>
          <p className="mb-2 font-mono text-sm text-[#D4DEDA]">Hello, I’m</p>
          <h1 className="max-w-3xl font-playfair text-5xl font-bold leading-[1.02] tracking-tight text-[#F0F8C9] sm:text-6xl lg:text-7xl">Bhuvana Sri<br />Chikoti<span className="text-[#B5F0A0]">.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#D4DEDA] sm:text-lg sm:leading-8">I turn audience insight into stories people want to stop for, share, and remember. From the first hook to the final post, I help brands show up with a voice that feels like them.</p>
          <p className="mt-4 max-w-xl font-serif text-lg italic leading-7 text-[#B5F0A0] sm:text-xl">“Good content makes people feel seen before it asks them to click.”</p>
          <ul className="mt-6 flex max-w-xl flex-wrap gap-2" aria-label="Areas of focus">{FOCUS.map((item) => <li key={item} className="rounded-full border border-[#079B78]/40 bg-[#075E59]/40 px-3 py-1.5 text-xs text-[#D6F5C9]">{item}</li>)}</ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/resume" className="inline-flex items-center justify-center rounded-lg bg-[#B5F0A0] px-6 py-3 text-base font-semibold text-[#173D31] transition-colors hover:bg-[#CBF7B8]">View Resume</Link>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-lg border border-[#B5F0A0]/50 px-6 py-3 text-base font-medium text-[#F0F8C9] transition-colors hover:bg-[#B5F0A0]/10">Start a conversation</Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#C0CEC8]"><span>Hyderabad, India</span><span className="text-[#B5F0A0]">·</span><span>Open to thoughtful collaborations</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.25 }} className="relative mx-auto h-[390px] w-full max-w-[440px] sm:h-[480px] lg:h-[560px]">
          <span id="lanyard-origin" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[calc(6%_-_60px)] h-px w-px" />
          <Lanyard frontImage="/images/profile-trimmed.png" backImage="/images/lanyard-back.svg" imageFit="contain" imageScale={1.1} imageOffsetY={0.14} cardColor="#075E59" orientation="portrait" finish="matte" cornerRadius={0.24} size={0.6} anchor="center" strapLength={0.45} strapColor="#079B78" strapWidth={1.1} metal="graphite" gravity={0.8} damping={0.42} elasticity={0.5} breeze={0.3} interactive intro freeRoam className="" />
          <p className="absolute bottom-5 left-0 right-0 z-40 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[#D6F5C9]">Drag across the page <span className="px-1 text-[#E5E900]">·</span> Click to flip</p>
        </motion.div>
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl justify-between border-t border-[#B5F0A0]/15 pt-5 text-xs text-[#C0CEC8]"><a href="#work" className="transition-colors hover:text-[#F0F8C9]">Explore selected work <span className="text-[#B5F0A0]">↓</span></a><span className="hidden sm:inline">Strategy with a human point of view</span></div>
    </section>
  )
}
