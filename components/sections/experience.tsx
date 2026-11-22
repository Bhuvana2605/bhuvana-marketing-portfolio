'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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
    proofs: [{ label: 'DevCatalyst event campaign', href: '/work/devcatalyst' }],
    proofLabel: 'More campaign proof',
  },
  {
    role: 'Social Media Manager',
    company: 'Manchala Ashok Jewellers',
    story: 'After managing the brand for almost three years, its Instagram audience had levelled off at around 8K. I created a giveaway Reel to re-engage people and attract new followers. That single Reel brought in 1,500 followers.',
    result: '+1,500 followers from one giveaway Reel',
    proofs: [{ label: 'Jewellery campaign', href: '/work/jewellers' }],
    proofLabel: 'More campaign proof',
  },
]

export function Experience() {
  return <section id="experience" className="border-t border-[#079B78]/25 bg-[#075E59]/25 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#B5F0A0]">Experience</span>
        <h2 className="mt-2 font-playfair text-3xl font-bold text-[#F0F8C9] sm:text-4xl md:text-5xl">My experience, chapter by chapter.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#D4DEDA] sm:text-base">From finding the content that drove audience growth, to filling an event in a week, to re-energising a long-running brand—these are a few stories behind the results.</p>
      </motion.div>
      <div className="relative space-y-6 before:absolute before:bottom-6 before:left-[13px] before:top-6 before:w-px before:bg-gradient-to-b before:from-[#B5F0A0] before:via-[#079B78]/60 before:to-transparent sm:before:left-[17px]">
        {EXPERIENCES.map((exp, idx) => <motion.article key={exp.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.08 }} className="relative ml-9 rounded-2xl border border-[#079B78]/35 bg-gradient-to-br from-[#075E59]/80 to-[#173D31]/90 p-5 shadow-xl shadow-[#173D31]/35 transition-colors hover:border-[#B5F0A0]/50 sm:ml-12 sm:p-7">
          <span className="absolute -left-[42px] top-6 flex h-7 w-7 items-center justify-center rounded-full border border-[#B5F0A0]/60 bg-[#173D31] font-mono text-[10px] font-bold text-[#B5F0A0] sm:-left-[54px] sm:h-9 sm:w-9 sm:text-xs">0{idx + 1}</span>
          <div className="border-b border-[#079B78]/25 pb-4"><p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#B5F0A0]">{exp.company}</p><h3 className="mt-1 font-playfair text-xl font-bold text-[#F0F8C9] sm:text-2xl">{exp.role}</h3></div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#D4DEDA]">{exp.story}</p>
          <p className="mt-4 font-playfair text-lg font-bold text-[#B5F0A0]">{exp.result}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B5F0A0]">{exp.proofLabel}</span>
            {exp.proofs.map(proof => <Link key={proof.href} href={proof.href} className="font-semibold text-[#F0F8C9] underline decoration-[#B5F0A0]/50 underline-offset-4 hover:text-[#B5F0A0]">{proof.label} ↗</Link>)}
          </div>
        </motion.article>)}
      </div>
    </div>
  </section>
}

export default Experience
