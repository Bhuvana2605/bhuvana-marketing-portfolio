'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import FolderFloat from '@/components/ui/folder-float'

interface WorkFolder {
  label: string
  sublabel: string
  items: { label: string; value: string }[]
}

const WORK_FOLDERS: WorkFolder[] = [
  {
    label: 'Community',
    sublabel: 'LinkedIn campaigns',
    items: [{ label: 'DevCatalyst', value: '/work/devcatalyst' }],
  },
  {
    label: 'Jewellery',
    sublabel: 'Social branding',
    items: [{ label: 'Manchala Ashok Jewellers', value: '/work/jewellers' }],
  },
  {
    label: 'Wellness',
    sublabel: '2 client projects',
    items: [
      { label: 'Khusboo · Life Coach', value: '/work/khusboo' },
      { label: 'Beena · Life Coach', value: '/work/beena' },
    ],
  },
  {
    label: 'Business',
    sublabel: 'MSME coaching',
    items: [{ label: 'Deepak Poddar · MSME', value: '/work/deepak' }],
  },
]

export function FeaturedWork() {
  const router = useRouter()

  return (
    <section id="work" className="border-t border-[#079B78]/25 bg-[#173D31] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#B5F0A0] sm:text-sm">
            Selected Portfolio
          </span>
          <h2 className="mt-2 font-playfair text-3xl font-bold text-[#F0F8C9] sm:text-4xl md:text-5xl">
            Featured Work
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#D4DEDA] sm:text-base">
            Browse projects by client. Open a folder, then select a project to see its work and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-16 rounded-3xl border border-[#079B78]/35 bg-[#075E59]/25 px-4 py-12 sm:grid-cols-2 sm:px-8 sm:py-14 lg:gap-x-16">
          {WORK_FOLDERS.map((folder, index) => (
            <motion.div
              key={folder.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex min-h-[230px] w-full items-start justify-center pt-5"
            >
              <FolderFloat
                items={folder.items}
                label={folder.label}
                sublabel={folder.sublabel}
                trigger="click"
                closeOnSelect
                physics={false}
                folderColor="#075E59"
                frontColor="#079B78"
                paperColor="#F0F8C9"
                itemColor="#B5F0A0"
                itemTextColor="#173D31"
                labelColor="#F0F8C9"
                width={220}
                height={146}
                radius={18}
                spread={150}
                lift={28}
                className="z-0 data-[open]:z-20"
                onSelect={(value) => {
                  if (typeof value === 'string') router.push(value)
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
