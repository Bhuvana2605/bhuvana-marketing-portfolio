'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { LiquidNavbar, NimbusIcons, type LiquidNavItem } from '@/components/ui/liquid-glass-navbar'

const briefCaseIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const NAV_ITEMS: LiquidNavItem[] = [
  { label: 'About', href: '#about', icon: NimbusIcons.user, fx: 'wave' },
  { label: 'Experience', href: '#experience', icon: briefCaseIcon, fx: 'spin' },
  { label: 'Work', href: '#work', icon: NimbusIcons.globe, fx: 'spin' },
  { label: 'Workflow', href: '#workflow', icon: NimbusIcons.drop, fx: 'drop' },
  { label: 'Contact', href: '#contact', icon: NimbusIcons.plane, fx: 'plane' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sectionIds = ['about', 'experience', 'work', 'workflow', 'contact']
      const scrollPosition = window.scrollY + 250

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(i)
          return
        }
      }
      if (window.scrollY < 200) {
        setActiveTab(0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#173D31]/85 backdrop-blur-md py-2.5 shadow-lg shadow-[#173D31]/40' : 'bg-transparent py-4'
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="hidden md:block text-xl font-playfair font-bold text-[#F0F8C9] hover:text-[#B5F0A0] transition-colors shrink-0"
        >
          Bhuvana
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
          <LiquidNavbar
            items={NAV_ITEMS}
            active={activeTab}
            onChange={(index) => setActiveTab(index)}
            tone="dark"
            sound={false}
          />
        </div>

      </div>
    </motion.header>
  )
}
