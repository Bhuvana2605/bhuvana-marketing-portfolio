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
  { label: 'Toolkit', href: '#skills', icon: NimbusIcons.drop, fx: 'drop' },
  { label: 'Contact', href: '#contact', icon: NimbusIcons.plane, fx: 'plane' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sectionIds = ['about', 'experience', 'work', 'skills', 'contact']
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
          className="block text-lg md:text-xl font-playfair font-bold text-[#F0F8C9] hover:text-[#B5F0A0] transition-colors shrink-0"
        >
          Bhuvana
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex justify-center">
          <LiquidNavbar
            items={NAV_ITEMS}
            active={activeTab}
            onChange={(index) => setActiveTab(index)}
            tone="dark"
            sound={false}
          />
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#079B78]/40 bg-[#173D31]/80 text-[#F0F8C9] shadow-lg backdrop-blur-md transition hover:bg-[#075E59]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5F0A0] md:hidden"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-site-navigation"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        <nav
          id="mobile-site-navigation"
          aria-label="Mobile navigation"
          hidden={!isMobileMenuOpen}
          className="absolute right-0 top-full mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-[#079B78]/40 bg-[#173D31]/95 p-2 shadow-2xl shadow-[#071F19]/50 backdrop-blur-xl md:hidden"
        >
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={activeTab === index ? 'page' : undefined}
              onClick={() => {
                setActiveTab(index)
                setIsMobileMenuOpen(false)
              }}
              className={`flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5F0A0] ${
                activeTab === index
                  ? 'bg-[#075E59]/75 text-[#F0F8C9]'
                  : 'text-[#D4DEDA] hover:bg-[#075E59]/45 hover:text-[#F0F8C9]'
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center text-[#B5F0A0]" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
