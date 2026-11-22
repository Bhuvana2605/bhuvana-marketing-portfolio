'use client'

import HalftoneWordmarkFooter, { FooterColumn } from '@/components/ui/halftone-wordmark-footer'

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Navigation',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Featured Work', href: '#work' },
      { label: 'Toolkit & capabilities', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        label: 'View Resume',
        href: '/resume',
        external: true,
      },
    ],
  },
  {
    title: 'Expertise',
    links: [
      { label: 'Social Media Strategy', href: '#about' },
      { label: 'Content Strategy', href: '#about' },
      { label: 'Creative Direction', href: '#about' },
      { label: 'AI Assisted Workflows', href: '#about' },
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <HalftoneWordmarkFooter
      wordmark="bhuvana"
      label="Bhuvana"
      meta={`Social Media Manager • © ${currentYear}`}
      columns={FOOTER_COLUMNS}
      preset="aurora"
      palette={{
        background: '#173D31',
        ink: '#D4DEDA',
        warm: '#B5F0A0',
      }}
      backToTop={true}
      height="520px"
    />
  )
}
