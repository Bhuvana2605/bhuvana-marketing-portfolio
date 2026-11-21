'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ScrollFloat } from '@/components/ui/scroll-float'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-[#173D31] px-5 pt-24 text-white sm:px-8 sm:pt-28 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(7,155,120,0.18),transparent_43%),radial-gradient(ellipse_at_65%_72%,rgba(181,240,160,0.12),transparent_48%),linear-gradient(135deg,#173D31_0%,#12352D_58%,#102C2B_100%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="w-full py-8 text-center md:py-12"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B5F0A0]/25 bg-[#075E59]/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D6F5C9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5F0A0]" /> Content Marketer
          </div>
          <p className="mb-3 text-sm font-medium tracking-wide text-[#D4DEDA]">Hello, I’m</p>
          <ScrollFloat
            as="h1"
            splitBy="chars"
            fromColor="#B5F0A0"
            animateOnMount
            containerClassName="mx-auto w-full max-w-5xl text-center font-playfair text-4xl font-bold leading-[1.08] tracking-tight text-[#F0F8C9] sm:text-5xl lg:text-6xl"
          >
            {'Bhuvana Sri\nChikoti.'}
          </ScrollFloat>
          <ScrollFloat
            as="p"
            splitBy="words"
            direction="up"
            fromColor="#B5F0A0"
            animateOnMount
            delay={0.18}
            containerClassName="mx-auto mt-6 w-full max-w-2xl text-center text-base font-normal leading-7 text-[#D4DEDA] sm:text-lg sm:leading-8"
            textClassName="mx-auto text-center"
          >
            {'I shape thoughtful stories into content that helps brands connect, grow, and stay memorable.'}
          </ScrollFloat>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-center">
            <Link href="/resume" className="inline-flex items-center justify-center rounded-lg bg-[#B5F0A0] px-6 py-3 text-base font-semibold text-[#173D31] transition-colors hover:bg-[#CBF7B8]">View Resume</Link>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-lg border border-[#B5F0A0]/50 px-6 py-3 text-base font-medium text-[#F0F8C9] transition-colors hover:border-[#B5F0A0] hover:bg-[#B5F0A0]/10">Let’s connect</Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-[#C0CEC8] md:justify-center">
            <span>Hyderabad, India</span><span className="hidden h-1 w-1 rounded-full bg-[#B5F0A0]/70 sm:block" /><span>Available for opportunities</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-[#B5F0A0]/15 py-5 text-xs text-[#C0CEC8] sm:flex-row">
        <Link href="#about" className="hidden items-center gap-2 transition-colors hover:text-[#F0F8C9] md:flex">
          Explore my work <span className="text-[#B5F0A0]">↓</span>
        </Link>
      </div>
    </section>
  )
}
