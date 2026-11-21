'use client'

import { motion } from 'framer-motion'
import { ResumePackageBox } from '@/components/resume-package-box'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#173D31] border-t border-[#079B78]/25 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Contact Copy & Channels (Left-Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-widest uppercase bg-[#075E59]/70 text-[#B5F0A0] border border-[#079B78]/40 shadow-xs mb-4">
              <span className="text-[#E5E900]">✦</span> Get in Touch
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-playfair font-bold text-[#F0F8C9] tracking-tight mb-5">
              Let&apos;s Work Together
            </h2>

            <p className="text-base sm:text-lg text-[#D4DEDA] leading-relaxed mb-8 max-w-lg">
              I&apos;m always interested in opportunities related to social media strategy,
              branding, content marketing, and creative direction. Whether you have an open role,
              a campaign in mind, or want to collaborate, feel free to reach out.
            </p>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
              {/* Email Card */}
              <a
                href="mailto:bhuvanasri2605@gmail.com"
                className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-[#075E59]/50 border border-[#079B78]/35 hover:border-[#B5F0A0]/60 hover:bg-[#075E59]/75 transition-all group shadow-md shadow-[#173D31]/40"
              >
                <div className="w-9 h-9 rounded-lg bg-[#079B78]/25 flex items-center justify-center text-[#B5F0A0] shrink-0 border border-[#079B78]/40 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] font-mono uppercase text-[#84918D] tracking-wider">Email</span>
                  <span className="text-xs font-medium text-[#F0F8C9] group-hover:text-[#B5F0A0] transition-colors truncate">
                    bhuvanasri2605@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/bhuvana-srii/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-[#075E59]/50 border border-[#079B78]/35 hover:border-[#B5F0A0]/60 hover:bg-[#075E59]/75 transition-all group shadow-md shadow-[#173D31]/40"
              >
                <div className="w-9 h-9 rounded-lg bg-[#079B78]/25 flex items-center justify-center text-[#B5F0A0] shrink-0 border border-[#079B78]/40 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.806 0-9.722h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.384 3.704 4.362v5.58zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.727 1.715-1.958 1.715zm1.946 11.019H3.391V8.711h3.892v11.741zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] font-mono uppercase text-[#84918D] tracking-wider">Connect</span>
                  <span className="text-xs font-medium text-[#F0F8C9] group-hover:text-[#B5F0A0] transition-colors truncate">
                    LinkedIn
                  </span>
                </div>
              </a>
            </div>

            {/* Availability & Location Indicator */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#D4DEDA]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5E900] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5E900]"></span>
                </span>
                <span>Available for Opportunities</span>
              </div>
              <span className="text-[#84918D]">·</span>
              <span className="text-[#F0F8C9]">Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Right Column: 3D Package Box Animation (Unboxes Resume) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <ResumePackageBox />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
