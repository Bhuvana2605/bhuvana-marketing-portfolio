'use client'

import { motion } from 'framer-motion'
import Lanyard from '@/components/ui/lanyard'

const FOCUS_AREAS = [
  'Brand consistency',
  'Content strategy',
  'Content research',
  'Viral scriptwriting',
  'Short-form editing',
]

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#FEF0B6] px-6 py-20 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#472F26] sm:text-sm">
            Professional Summary
          </span>

          <h2 className="mb-6 mt-2 font-playfair text-3xl font-bold text-[#472F26] sm:text-4xl md:text-5xl">
            Who I Am
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-[#472F26] sm:text-lg">
            I’m a Social Media &amp; Content Marketing professional who helps brands show up with a clear, consistent voice. My work spans content strategy and research, viral scriptwriting, and short-form video editing—turning audience insights into engaging, on-brand social content.
          </p>

          <ul className="mt-7 flex max-w-2xl flex-wrap gap-2.5" aria-label="Areas of focus">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-[#472F26]/40 bg-[#BBD3E0]/45 px-3.5 py-2 text-xs font-medium text-[#472F26] sm:text-sm"
              >
                {area}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="relative mx-auto h-[410px] w-full max-w-[440px] sm:h-[500px] md:h-[540px]"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-[8%] bottom-[8%] top-[12%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(71,47,38,0.26)_0%,rgba(187,211,224,0.12)_44%,transparent_72%)] blur-2xl" />
          <Lanyard
            frontImage="/images/profile-trimmed.png"
            backImage="/images/profile-trimmed.png"
            imageFit="contain"
            imageScale={1.1}
            imageOffsetY={0.14}
            cardColor="#472F26"
            orientation="portrait"
            finish="matte"
            cornerRadius={0.24}
            size={0.6}
            anchor="center"
            strapLength={0.45}
            strapColor="#472F26"
            strapWidth={0.72}
            metal="graphite"
            gravity={0.8}
            damping={0.42}
            elasticity={0.5}
            breeze={0.16}
            interactive
            intro
            className="relative z-10 h-full w-full"
          />
          <p className="absolute bottom-1 left-0 right-0 z-20 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#472F26]/80 sm:text-xs">
            Drag to swing <span className="px-1 text-[#472F26]">·</span> Click to flip
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
