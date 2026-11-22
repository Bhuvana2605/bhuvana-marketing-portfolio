'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ResumePackageBox } from '@/components/resume-package-box'
import { ContactForm } from '@/components/contact-form'

export function Contact() {
  const [boxOpen, setBoxOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  useEffect(() => {
    if (!dialogOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeContact()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [dialogOpen])

  function closeContact() {
    setDialogOpen(false)
    setBoxOpen(false)
  }

  return <section id="contact" className="border-t border-[#079B78]/25 bg-[#075E59]/20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div className="mx-auto grid max-w-6xl items-center gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
      <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#B5F0A0]">A little delivery for you</span>
        <h2 className="mt-2 font-playfair text-3xl font-bold text-[#F0F8C9] sm:text-4xl md:text-5xl">Let’s make something meaningful.</h2>
        <p className="mt-4 max-w-md text-base leading-7 text-[#D4DEDA]">Open the parcel to leave a note, share what you’re looking for, or take a look at my resume.</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a href="mailto:chikotibhuvanasri26@gmail.com" className="text-[#B5F0A0] hover:text-[#F0F8C9]">chikotibhuvanasri26@gmail.com</a>
          <a href="https://www.linkedin.com/in/bhuvana-srii/" target="_blank" rel="noopener noreferrer" className="text-[#B5F0A0] hover:text-[#F0F8C9]">LinkedIn ↗</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex min-h-[360px] items-center justify-center lg:min-h-[440px]">
        <ResumePackageBox open={boxOpen} onOpenChange={(open) => { setBoxOpen(open); setDialogOpen(open) }} />
      </motion.div>
    </div>

    {dialogOpen && <div className="pointer-events-none fixed inset-0 z-40 bg-[#061A15]/25" aria-hidden="true" />}
    {dialogOpen && <section role="dialog" aria-labelledby="contact-dialog-title" aria-modal="false" className="pointer-events-auto fixed left-3 right-3 top-1/2 z-50 max-h-[78vh] -translate-y-1/2 overflow-y-auto rounded-2xl border border-[#079B78]/45 bg-[#173D31] text-[#D4DEDA] shadow-2xl lg:left-1/2 lg:right-auto lg:max-h-[88vh] lg:w-[min(42rem,48vw)] lg:-translate-x-1/2">
      <div className="flex items-start justify-between gap-4 border-b border-[#079B78]/30 p-5 sm:p-7">
        <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B5F0A0]">A note for Bhuvana</p><h2 id="contact-dialog-title" className="mt-1 font-playfair text-2xl font-bold text-[#F0F8C9] sm:text-3xl">Tell me what you have in mind.</h2></div>
        <button type="button" aria-label="Close contact form" onClick={closeContact} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#079B78]/40 text-xl text-[#F0F8C9] hover:bg-[#075E59]">×</button>
      </div>
      <div className="p-5 sm:p-7"><ContactForm /><div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#079B78]/25 pt-4"><Link href="/resume" target="_blank" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#B5F0A0] px-6 py-3 font-semibold text-[#173D31] transition hover:bg-[#CBF7B8]">View Resume <span className="ml-2" aria-hidden="true">↗</span></Link><button type="button" onClick={closeContact} className="text-xs text-[#84918D] hover:text-[#F0F8C9]">Close contact form</button></div></div>
    </section>}
  </section>
}
