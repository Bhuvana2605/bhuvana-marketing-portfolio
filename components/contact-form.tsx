'use client'

import { type FormEvent, useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setStatus('')
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Your message could not be sent. Please try again.')
      form.reset()
      setStatus('Thanks — your note has been sent. I’ll be in touch soon.')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.')
    } finally { setSending(false) }
  }

  return <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
    <label className="grid gap-1.5 text-sm font-medium text-[#F0F8C9]">Your name<input name="name" autoComplete="name" required maxLength={100} className="min-h-12 rounded-lg border border-[#079B78]/45 bg-[#075E59]/55 px-3 text-[#F0F8C9] outline-none placeholder:text-[#84918D] focus:border-[#B5F0A0] focus:ring-2 focus:ring-[#B5F0A0]/20" placeholder="Name" /></label>
    <label className="grid gap-1.5 text-sm font-medium text-[#F0F8C9]">Email address<input name="email" type="email" autoComplete="email" required maxLength={254} className="min-h-12 rounded-lg border border-[#079B78]/45 bg-[#075E59]/55 px-3 text-[#F0F8C9] outline-none placeholder:text-[#84918D] focus:border-[#B5F0A0] focus:ring-2 focus:ring-[#B5F0A0]/20" placeholder="you@example.com" /></label>
    <label className="grid gap-1.5 text-sm font-medium text-[#F0F8C9] sm:col-span-2">Phone number <span className="font-normal text-[#84918D]">(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} className="min-h-12 rounded-lg border border-[#079B78]/45 bg-[#075E59]/55 px-3 text-[#F0F8C9] outline-none placeholder:text-[#84918D] focus:border-[#B5F0A0] focus:ring-2 focus:ring-[#B5F0A0]/20" placeholder="Include your country code" /></label>
    <label className="grid gap-1.5 text-sm font-medium text-[#F0F8C9] sm:col-span-2">What would you like to work on?<textarea name="message" required minLength={10} maxLength={4000} rows={5} className="resize-y rounded-lg border border-[#079B78]/45 bg-[#075E59]/55 px-3 py-3 text-[#F0F8C9] outline-none placeholder:text-[#84918D] focus:border-[#B5F0A0] focus:ring-2 focus:ring-[#B5F0A0]/20" placeholder="A few details about the project, role, or collaboration…" /></label>
    <div className="sm:col-span-2"><button type="submit" disabled={sending} className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#B5F0A0] px-6 py-3 font-semibold text-[#173D31] transition hover:bg-[#CBF7B8] disabled:cursor-wait disabled:opacity-70 sm:w-auto">{sending ? 'Sending…' : 'Send message'}</button><p aria-live="polite" className="mt-3 min-h-5 text-sm text-[#B5F0A0]">{status}</p></div>
  </form>
}
