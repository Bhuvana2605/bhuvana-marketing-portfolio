'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface JobExperience {
  role: string
  company: string
  period: string
  summary?: string
  responsibilities: string[]
}

const EXPERIENCES: JobExperience[] = [
  {
    role: 'Social Media Manager',
    company: 'IP Agency',
    period: 'August 2026 – Present',
    summary:
      'Manage social media content for multiple clients, focusing on content strategy, audience-centric storytelling, content planning, caption writing, post creation, Reel publishing, and engagement-driven campaigns.',
    responsibilities: [
      'Executing audience-centric storytelling and engagement campaigns.',
      'Planning and coordinating multi-client content calendars.',
      'End-to-end post creation, caption writing, and Reel publishing.',
      'Driving content performance and audience connection.',
    ],
  },
  {
    role: 'Social Media Head',
    company: 'DevCatalyst',
    period: 'August 2025 – Present',
    responsibilities: [
      'Planned and published 10+ LinkedIn posts promoting workshops, hackathons, and community initiatives.',
      "Wrote promotional copy aligned with the organization's brand voice and campaign objectives.",
      'Collaborated with organizers and designers to ensure timely publication.',
      'Designed 2+ promotional creatives when required.',
    ],
  },
  {
    role: 'Social Media Manager',
    company: 'Manchala Ashok Jewellers',
    period: 'January 2022 – Present',
    responsibilities: [
      "Managed the brand's Instagram presence with 8K+ followers.",
      'Designed 300+ marketing creatives for jewellery collections, festive campaigns, and promotional events.',
      'Wrote captions maintaining a consistent premium brand identity.',
      'Planned monthly content calendars and coordinated regular publishing.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="border-t border-[#079B78]/25 bg-[#075E59]/25 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#B5F0A0] sm:text-sm">
            Employment History
          </span>
          <h2 className="mt-2 font-playfair text-3xl font-bold text-[#F0F8C9] sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#D4DEDA] sm:text-base">
            A growing practice in social media, content strategy, and community building.
          </p>
        </motion.div>

        <div className="relative space-y-6 before:absolute before:bottom-6 before:left-[13px] before:top-6 before:w-px before:bg-gradient-to-b before:from-[#B5F0A0] before:via-[#079B78]/60 before:to-transparent sm:before:left-[17px]">
          {EXPERIENCES.map((exp, idx) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative ml-9 rounded-2xl border border-[#079B78]/35 bg-gradient-to-br from-[#075E59]/80 to-[#173D31]/90 p-6 shadow-xl shadow-[#173D31]/40 transition-all hover:border-[#B5F0A0]/50 hover:shadow-[0_18px_55px_-28px_rgba(181,240,160,0.45)] sm:ml-12 sm:p-8"
            >
              <span className="absolute -left-[42px] top-7 flex h-7 w-7 items-center justify-center rounded-full border border-[#B5F0A0]/60 bg-[#173D31] font-mono text-[10px] font-bold text-[#B5F0A0] shadow-[0_0_18px_rgba(181,240,160,0.15)] sm:-left-[54px] sm:h-9 sm:w-9 sm:text-xs">
                0{idx + 1}
              </span>
              <div className="mb-4 flex flex-col justify-between gap-2 border-b border-[#079B78]/25 pb-4 sm:flex-row sm:items-center">
                <div>
                  {exp.company === 'DevCatalyst' || exp.company === 'Manchala Ashok Jewellers' ? (
                    <Link
                      href={exp.company === 'DevCatalyst' ? '/work/devcatalyst' : '/work/jewellers'}
                      className="font-mono text-xs font-semibold uppercase tracking-wider text-[#B5F0A0] transition-colors hover:text-[#F0F8C9]"
                    >
                      {exp.company} ↗
                    </Link>
                  ) : (
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#B5F0A0]">
                      {exp.company}
                    </span>
                  )}
                  <h3 className="mt-0.5 font-playfair text-xl font-bold text-[#F0F8C9] sm:text-2xl">
                    {exp.role}
                  </h3>
                </div>
                <span className="w-fit shrink-0 rounded-full border border-[#079B78]/40 bg-[#173D31] px-3 py-1 text-xs font-mono font-medium text-[#B5F0A0]">
                  {exp.period}
                </span>
              </div>

              {exp.summary && (
                <p className="mb-4 text-xs leading-relaxed text-[#D4DEDA] sm:text-sm">
                  {exp.summary}
                </p>
              )}

              <ul className="space-y-2 text-xs text-[#D4DEDA] sm:text-sm">
                {exp.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex items-start gap-2.5">
                    <span className="mt-0.5 font-bold text-[#B5F0A0]">✓</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
