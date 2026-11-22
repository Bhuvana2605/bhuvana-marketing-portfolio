'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const PROJECTS = [
  { name: 'DevCatalyst', type: 'Community · LinkedIn', result: '10+ campaigns for workshops, hackathons, and community events.', image: '/images/post1.png', href: '/work/devcatalyst' },
  { name: 'Manchala Ashok Jewellers', type: 'Jewellery · Social branding', result: '300+ campaign creatives for a brand with 8K+ followers.', image: '/images/CR1.png', href: '/work/jewellers' },
  { name: 'Khusboo · Life Coach', type: 'Wellness · Short-form video', result: 'Audience-led storytelling with a Reel reaching 660K views.', href: '/work/khusboo' },
  { name: 'Beena · Life Coach', type: 'Wellness · Audience growth', result: 'Grew the account from 800 to 1,645 followers (+105%).', href: '/work/beena' },
  { name: 'Deepak Poddar · MSME', type: 'Business · Social content', result: 'Educational campaigns supporting +4.8K followers and a 220K-view Reel.', href: '/work/deepak' },
]

export function FeaturedWork() {
  return <section id="work" className="border-t border-[#079B78]/25 bg-[#173D31] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#B5F0A0]">Selected portfolio</span>
        <h2 className="mt-2 font-playfair text-3xl font-bold text-[#F0F8C9] sm:text-4xl md:text-5xl">A few stories, in full view.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#D4DEDA] sm:text-base">A quick look at the briefs and outcomes. Open a project only if you’d like the process and examples behind it.</p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => <motion.article key={project.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group overflow-hidden rounded-2xl border border-[#079B78]/35 bg-[#075E59]/30 transition-colors hover:border-[#B5F0A0]/55">
          <Link href={project.href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#B5F0A0]">
            <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_35%,rgba(181,240,160,0.15),transparent_65%),linear-gradient(145deg,#075E59,#173D31)]">
              {project.image ? <img src={project.image} alt={`${project.name} campaign example`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /> : <div className="px-7 text-center"><span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#B5F0A0]/80">Selected work</span><p className="mt-2 font-playfair text-2xl font-bold text-[#F0F8C9]">{project.name}</p><span className="mt-3 inline-block h-px w-12 bg-[#B5F0A0]/70" /></div>}
            </div>
            <div className="p-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B5F0A0]">{project.type}</p><h3 className="mt-2 font-playfair text-xl font-bold text-[#F0F8C9]">{project.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-[#D4DEDA]">{project.result}</p><span className="mt-4 inline-block text-sm font-semibold text-[#B5F0A0]">See examples <span aria-hidden="true">↗</span></span></div>
          </Link>
        </motion.article>)}
      </div>
    </div>
  </section>
}

export default FeaturedWork
