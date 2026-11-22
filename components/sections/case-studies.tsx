'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface CaseStudy {
  id: number
  title: string
  role: string
  duration: string
  overview: string
  responsibilities: string[]
  images: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'DevCatalyst',
    role: 'Social Media Head',
    duration: 'Aug 2025 – Present',
    overview:
      'DevCatalyst is a student-led technical community that organizes workshops, hackathons, networking events, and community initiatives for aspiring developers.',
    responsibilities: [
      'Planned LinkedIn content strategy for community events.',
      'Wrote promotional copy for workshops and hackathons.',
      'Collaborated with organizers and designers to publish campaigns.',
      'Designed promotional creatives whenever additional design support was required.',
    ],
    images: [
      '/images/post1.png',
      '/images/post2.png',
      '/images/post3.png',
      '/images/post4.png',
    ],
  },
  {
    id: 2,
    title: 'Manchala Ashok Jewellers',
    role: 'Social Media Manager',
    duration: '2022 – Present',
    overview:
      "Manchala Ashok Jewellers is a family-owned jewellery brand specializing in handcrafted gold, diamond, and silver jewellery. I manage the brand's Instagram presence and create content that maintains a premium visual identity.",
    responsibilities: [
      'Managed the Instagram account.',
      'Planned content calendars.',
      'Designed marketing creatives.',
      'Wrote captions aligned with the brand identity.',
      'Maintained consistent visual branding.',
    ],
    images: [
      '/images/CR1.png',
      '/images/CR2.png',
      '/images/CR3.png',
      '/images/CR4.png',
    ],
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#BBD3E0]/30 border-y border-[#472F26]/25 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-[#472F26] font-semibold text-sm tracking-widest uppercase">
            Case Studies
          </span>

          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mt-2 text-[#472F26]">
            Featured Work
          </h2>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="grid lg:grid-cols-2 gap-16 items-start"
            >
              {/* LEFT */}

              <div>
                <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-8 text-[#472F26]">
                  {study.title}
                </h3>

                <div className="space-y-8">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#472F26] font-semibold">
                      Role
                    </p>

                    <p className="mt-2 text-lg text-[#472F26]">
                      {study.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#472F26] font-semibold">
                      Duration
                    </p>

                    <p className="mt-2 text-lg text-[#472F26]">
                      {study.duration}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#472F26] font-semibold">
                      Overview
                    </p>

                    <p className="mt-2 leading-8 text-[#472F26]">
                      {study.overview}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#472F26] font-semibold">
                      Responsibilities
                    </p>

                    <ul className="mt-4 space-y-3">
                      {study.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-[#472F26]"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#472F26] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* RIGHT */}

              <div className="space-y-5">

                {/* Featured Image */}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-2xl shadow-xl shadow-[#472F26]/60 border border-[#472F26]/35"
                >
                  <Image
                    src={study.images[0]}
                    alt={`${study.title} Featured`}
                    width={900}
                    height={1100}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </motion.div>

                {/* Bottom Grid */}

                <div className="grid grid-cols-3 gap-4">

                  {study.images.slice(1).map((image, idx) => (

                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.04 }}
                      className="overflow-hidden rounded-xl shadow-md border border-[#472F26]/35"
                    >
                      <Image
                        src={image}
                        alt={`${study.title} ${idx + 2}`}
                        width={500}
                        height={700}
                        className="w-full aspect-[4/5] object-cover"
                      />
                    </motion.div>

                  ))}

                </div>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}