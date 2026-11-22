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
    <section id="workflow" className="border-t border-[#472F26]/25 bg-[#BBD3E0]/20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#472F26] sm:text-sm">
            My Process
          </span>
          <h2 className="mt-2 font-playfair text-3xl font-bold tracking-tight text-[#472F26] sm:text-4xl md:text-5xl">
            A clear path from idea to post.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#472F26] sm:text-base">
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
              className="min-h-40 rounded-2xl border border-[#472F26]/35 bg-[#BBD3E0]/45 p-5 transition-colors hover:border-[#BBD3E0]/50 hover:bg-[#BBD3E0]/65 sm:p-6"
            >
              <span className="font-mono text-xs font-semibold tracking-widest text-[#472F26]">
                {step.number}
              </span>
              <h3 className="mt-3 font-playfair text-xl font-bold text-[#472F26] sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#472F26]">
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
