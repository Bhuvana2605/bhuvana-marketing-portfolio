'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Research',
    description: 'Learn the brand, audience, and content landscape.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Shape the strategy, voice, and content calendar.',
  },
  {
    number: '03',
    title: 'Create',
    description: 'Write hooks and scripts, then build the content.',
  },
  {
    number: '04',
    title: 'Edit & Improve',
    description: 'Polish each post, publish, and learn from results.',
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="border-t border-[#079B78]/25 bg-[#075E59]/20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#B5F0A0] sm:text-sm">
            My Process
          </span>
          <h2 className="mt-2 font-playfair text-3xl font-bold tracking-tight text-[#F0F8C9] sm:text-4xl md:text-5xl">
            A clear path from idea to post.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#D4DEDA] sm:text-base">
            Research, create, and refine—without overcomplicating the process.
          </p>
        </motion.div>

        <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="min-h-40 rounded-2xl border border-[#079B78]/35 bg-[#075E59]/45 p-5 transition-colors hover:border-[#B5F0A0]/50 hover:bg-[#075E59]/65 sm:p-6"
            >
              <span className="font-mono text-xs font-semibold tracking-widest text-[#E5E900]">
                {step.number}
              </span>
              <h3 className="mt-3 font-playfair text-xl font-bold text-[#F0F8C9] sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#D4DEDA]">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Workflow
