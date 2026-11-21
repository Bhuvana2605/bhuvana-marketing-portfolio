'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import Stack from '@/components/ui/Stack'

const SKILL_CATEGORIES = [
  {
    title: 'Marketing',
    description: 'Build a clear, consistent voice and content that connects.',
    skills: ['Social Media Management', 'Content Marketing', 'Copywriting'],
  },
  {
    title: 'Platforms',
    description: 'Plan and publish for the channels where audiences engage.',
    skills: ['Instagram', 'LinkedIn'],
  },
  {
    title: 'Design',
    description: 'Create campaign visuals that feel polished and on-brand.',
    skills: ['Canva', 'Adobe Express', 'Gamma'],
  },
  {
    title: 'AI Tools',
    description: 'Support research, ideation, and everyday creative work.',
    skills: ['ChatGPT', 'Claude'],
  },
  {
    title: 'Other',
    description: 'The strategy and planning behind cohesive campaigns.',
    skills: ['Content Calendar Management', 'Branding', 'Campaign Planning', 'Content Strategy'],
  },
]

const SKILL_CARDS = SKILL_CATEGORIES.map((category, index) => (
  <article
    key={category.title}
    className="flex h-full flex-col justify-between bg-[radial-gradient(ellipse_at_top_right,rgba(181,240,160,0.14),transparent_48%),linear-gradient(145deg,#075E59_0%,#12483E_56%,#173D31_100%)] p-6 text-left sm:p-8"
  >
    <div>
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#B5F0A0]">
          Toolkit · 0{index + 1}
        </span>
        <Sparkles className="h-5 w-5 text-[#F0F8C9]/80" aria-hidden="true" />
      </div>
      <h3 className="font-playfair text-3xl font-bold text-[#F0F8C9] sm:text-4xl">
        {category.title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-[#D4DEDA] sm:text-base">
        {category.description}
      </p>
    </div>
    <ul className="mt-8 flex flex-wrap gap-2">
      {category.skills.map(skill => (
        <li
          key={skill}
          className="rounded-full border border-[#B5F0A0]/25 bg-[#173D31]/65 px-3 py-1.5 text-xs font-medium text-[#F0F8C9] sm:text-sm"
        >
          {skill}
        </li>
      ))}
    </ul>
  </article>
))

export function Skills() {
  const [wideStack, setWideStack] = useState(false)

  useEffect(() => {
    const breakpoint = window.matchMedia('(min-width: 1280px)')
    const updateLayout = () => setWideStack(breakpoint.matches)
    updateLayout()
    breakpoint.addEventListener('change', updateLayout)
    return () => breakpoint.removeEventListener('change', updateLayout)
  }, [])

  return (
    <section id="skills" className="overflow-x-clip border-t border-[#079B78]/25 bg-[#173D31] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-2xl text-left lg:mx-0"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#B5F0A0] sm:text-sm">
              Toolkit &amp; Capabilities
            </span>
            <h2 className="mt-3 font-playfair text-3xl font-bold leading-tight text-[#F0F8C9] sm:text-4xl md:text-5xl">
              Skills &amp; Platforms
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#D4DEDA] sm:text-base sm:leading-8">
              These are the skills and platforms I use in my work. I’m always learning and building on them.
            </p>
          </motion.div>

          <div className="mx-auto mt-8 flex w-full max-w-[360px] flex-col items-center sm:mt-0 sm:max-w-[400px] lg:max-w-[430px]">
            <div className="h-[320px] w-full sm:h-[370px] lg:h-[410px]">
              <Stack
                layout={wideStack ? 'fan' : 'deck'}
                visible={5}
                spread={wideStack ? 0.8 : 0.25}
                depth={0.4}
                radius={24}
                frame={1}
                frameColor="#B5F0A0"
                tilt={18}
                speed={0.9}
                sendToBackOnClick
                cards={SKILL_CARDS}
                ariaLabel="Skills and platforms cards"
                className="touch-pan-y"
              />
            </div>
            <p className="mt-4 text-center font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#B5F0A0]/80 sm:mt-6 sm:text-xs sm:tracking-[0.2em]">
              Drag, swipe, or click the top card to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
