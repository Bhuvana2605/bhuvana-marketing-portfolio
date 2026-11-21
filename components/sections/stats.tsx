'use client'

import { motion } from 'framer-motion'
import { CountingNumber } from '@/components/ui/counting-number'

interface StatItem {
  number: number
  suffix?: string
  label: string
  description: string
}

const stats: StatItem[] = [
  {
    number: 5,
    label: 'Brands Managed',
    description: 'Across Diverse Business Sectors',
  },
  {
    number: 300,
    suffix: '+',
    label: 'Marketing Creatives',
    description: 'Designed for Campaigns & Events',
  },
  {
    number: 660,
    suffix: 'K',
    label: 'Highest Reel Views',
    description: 'Top-Performing Video Campaign',
  },
  {
    number: 10,
    suffix: '+',
    label: 'LinkedIn Campaigns',
    description: 'Promoting Community Initiatives',
  },
]

export function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#075E59]/35 border-y border-[#079B78]/25 backdrop-blur-sm">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="mb-2">
                <span className="text-4xl sm:text-5xl font-playfair font-bold text-[#B5F0A0] drop-shadow-[0_0_15px_rgba(181,240,160,0.3)]">
                  <CountingNumber value={stat.number} suffix={stat.suffix} />
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#F0F8C9] mb-1">
                {stat.label}
              </h3>
              <p className="text-[#D4DEDA] text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
