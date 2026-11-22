import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: 'The contact form is not configured yet. Please email me directly for now.' }, { status: 503 })
  }

  let body: unknown
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 }) }
  const data = body as Record<string, unknown>
  const name = typeof data.name === 'string' ? data.name.trim() : ''
  const email = typeof data.email === 'string' ? data.email.trim() : ''
  const phone = typeof data.phone === 'string' ? data.phone.trim() : ''
  const message = typeof data.message === 'string' ? data.message.trim() : ''
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || phone.length > 40 || message.length < 10 || message.length > 4000) {
    return NextResponse.json({ error: 'Please provide a valid name, email, and message.' }, { status: 400 })
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
    }),
  })
  if (!response.ok) return NextResponse.json({ error: 'The message could not be sent right now. Please email me directly.' }, { status: 502 })
  return NextResponse.json({ ok: true })
}
