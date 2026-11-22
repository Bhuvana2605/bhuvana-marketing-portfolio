'use client'

import { motion } from 'framer-motion'

const GROUPS = [
  { title: 'Strategy & storytelling', text: 'Content strategy · Audience research · Brand voice · Copywriting · Campaign planning' },
  { title: 'Social & community', text: 'Instagram · LinkedIn · Content calendars · Community engagement · Publishing' },
  { title: 'Creative production', text: 'Canva · Adobe Express · Short-form video · Reels · Campaign creatives' },
  { title: 'Everyday tools', text: 'ChatGPT · Claude · Gamma · AI supported research and ideation' },
]

export function Skills() {
  return <section id="skills" className="border-t border-[#079B78]/25 bg-[#173D31] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#B5F0A0]">Toolkit &amp; capabilities</span>
        <h2 className="mt-2 font-playfair text-3xl font-bold text-[#F0F8C9] sm:text-4xl md:text-5xl">What I bring to the table.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#D4DEDA] sm:text-base">I take an idea from audience research through strategy and creative production to a published post, then use what performs to shape the next one.</p>
      </motion.div>
      <div className="mt-9 grid gap-3 sm:grid-cols-2">
        {GROUPS.map((group, i) => <motion.article key={group.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="rounded-2xl border border-[#079B78]/35 bg-[#075E59]/30 p-5 sm:p-6">
          <h3 className="font-playfair text-xl font-bold text-[#F0F8C9]">{group.title}</h3><p className="mt-2 text-sm leading-6 text-[#D4DEDA]">{group.text}</p>
        </motion.article>)}
      </div>
    </div>
  </section>
}

export default Skills
