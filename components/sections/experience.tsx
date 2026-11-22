'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const EXPERIENCES = [
  {
    role: 'Social Media Manager',
    company: 'IP Agency',
    story: 'Beena’s account started at 800 followers. I analysed her profile, identified the content her audience responded to best, and shaped the strategy around what was already working. Applying that approach helped grow her audience to nearly 1,700 followers.',
    result: '800 → nearly 1,700 followers',
    proofs: [
      { label: 'Beena', href: '/work/beena' },
      { label: 'Khusboo', href: '/work/khusboo' },
      { label: 'Deepak', href: '/work/deepak' },
    ],
    proofLabel: 'Explore client work',
  },
  {
    role: 'Social Media Head',
    company: 'DevCatalyst',
    story: 'We had one week and a goal of 300 registrations for a DevCatalyst event. I kept social posts active and collaborated with relevant communities to extend the campaign’s reach. That push brought in 300 registrations within the week.',
    result: '300 registrations in one week',
    proofs: [{ label: 'DevCatalyst', href: '/work/devcatalyst' }],
    proofLabel: 'More campaign proof',
  },
  {
    role: 'Social Media Manager',
    company: 'Manchala Ashok Jewellers',
    story: 'After managing the brand for almost three years, its Instagram audience had levelled off at around 8K. I created a giveaway Reel to re-engage people and attract new followers. That single Reel brought in 1,500 followers.',
    result: '+1,500 followers from one giveaway Reel',
    proofs: [{ label: 'Manchala Ashok Jewellers', href: '/work/jewellers' }],
    proofLabel: 'More campaign proof',
  },
]

export function Experience() {
  return <section id="experience" className="border-t border-[#472F26]/25 bg-[#BBD3E0]/25 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#472F26]">Experience</span>
        <h2 className="mt-2 font-playfair text-3xl font-bold text-[#472F26] sm:text-4xl md:text-5xl">My experience, chapter by chapter.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#472F26] sm:text-base">From finding the content that drove audience growth, to filling an event in a week, to re-energising a long-running brand—these are a few stories behind the results.</p>
      </motion.div>
      <div className="relative space-y-6 before:absolute before:bottom-6 before:left-[13px] before:top-6 before:w-px before:bg-gradient-to-b before:from-[#BBD3E0] before:via-[#472F26]/60 before:to-transparent sm:before:left-[17px]">
        {EXPERIENCES.map((exp, idx) => <motion.article key={exp.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.08 }} className="relative ml-9 rounded-2xl border border-[#472F26]/35 bg-gradient-to-br from-[#BBD3E0]/80 to-[#FEF0B6]/90 p-5 shadow-xl shadow-[#472F26]/35 transition-colors hover:border-[#BBD3E0]/50 sm:ml-12 sm:p-7">
          <span className="absolute -left-[42px] top-6 flex h-7 w-7 items-center justify-center rounded-full border border-[#BBD3E0]/60 bg-[#FEF0B6] font-mono text-[10px] font-bold text-[#472F26] sm:-left-[54px] sm:h-9 sm:w-9 sm:text-xs">0{idx + 1}</span>
          <div className="border-b border-[#472F26]/25 pb-4"><p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#472F26]">{exp.company}</p><h3 className="mt-1 font-playfair text-xl font-bold text-[#472F26] sm:text-2xl">{exp.role}</h3></div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#472F26]">{exp.story}</p>
          <p className="mt-4 font-playfair text-lg font-bold text-[#472F26]">{exp.result}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="font-handwriting text-lg font-semibold text-[#472F26]">{exp.proofLabel}</span>
            {exp.proofs.map(proof => <Link key={proof.href} href={proof.href} className="inline-flex items-center gap-1 font-handwriting text-lg font-semibold text-[#472F26] underline decoration-[#BBD3E0]/70 underline-offset-4 hover:text-[#472F26]">{proof.label}<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-[#472F26]" /></Link>)}
          </div>
        </motion.article>)}
      </div>
    </div>
  </section>
}

export default Experience
