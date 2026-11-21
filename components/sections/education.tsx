'use client'

import { motion } from 'framer-motion'

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#075E59]/20 border-t border-[#079B78]/25">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-[#B5F0A0] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase font-mono">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-[#F0F8C9] mt-2">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="rounded-3xl border border-[#079B78]/40 bg-[#075E59]/45 backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-[#173D31]/40"
        >
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#079B78]/25 border border-[#079B78]/40 flex items-center justify-center text-[#B5F0A0] shrink-0 shadow-xs">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B5F0A0] font-semibold">
                Undergraduate Degree
              </span>
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-[#F0F8C9] mt-0.5">
                B.E. Computer Engineering
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#D4DEDA] mt-1">
                Matrusri Engineering College
              </p>
              <p className="text-xs font-mono text-[#84918D] mt-0.5">
                November 2022 – June 2026 · Hyderabad, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto bg-[#173D31]/90 px-5 py-3 rounded-2xl border border-[#079B78]/40 shadow-inner">
            <div className="flex flex-col text-right">
              <span className="text-[10.5px] font-mono text-[#84918D] uppercase tracking-wider">
                Academic Score
              </span>
              <span className="text-lg sm:text-xl font-mono font-bold text-[#B5F0A0]">
                CGPA: 8.27
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

