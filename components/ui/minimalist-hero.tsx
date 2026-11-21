'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface NavLinkItem {
  label: string
  href: string
}

export interface SocialLinkItem {
  icon: React.ComponentType<{ className?: string }>
  href: string
}

export interface OverlayText {
  part1: string
  part2: string
}

export interface MinimalistHeroProps {
  logoText?: string
  navLinks?: NavLinkItem[]
  mainText?: string
  readMoreLink?: string
  imageSrc?: string
  imageAlt?: string
  overlayText?: OverlayText
  socialLinks?: SocialLinkItem[]
  locationText?: string
  className?: string
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
    >
      {children}
    </a>
  )
}

function SocialIcon({
  href,
  icon: Icon,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground/60 transition-colors hover:text-foreground"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

export function MinimalistHero({
  logoText = 'mnmlst.',
  navLinks = [],
  mainText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus.',
  readMoreLink = '#',
  imageSrc = 'https://cdn.21st.dev/assets/mirror/21/2172cd84238bbee1a57a87b64322655b09c2ffa4ea89acaef7e9989c3abd272d.png',
  imageAlt = 'A portrait of a person in a black turtleneck, in profile.',
  overlayText = { part1: 'less is', part2: 'more.' },
  socialLinks = [],
  locationText = 'Arlington Heights, IL',
  className,
}: MinimalistHeroProps) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-5 bg-foreground" />
        </motion.button>
      </header>

      {/* Main Content Grid */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 py-12 md:py-0">
        {/* Left Column: Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left mt-8 md:mt-0"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font"
          >
            Read More
          </a>
        </motion.div>

        {/* Center Column: Vibrant accent circle + portrait image */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full my-6 md:my-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[280px] w-[280px] rounded-full bg-yellow-400/90 sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px]"
          />
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-48 object-cover sm:w-56 md:w-64 scale-125 md:scale-150 lg:w-72"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const target = e.currentTarget
              target.onerror = null
              target.src =
                'https://cdn.21st.dev/assets/mirror/69/69f133c713200aa29789f9f07a83f105cc28793926179eb4a224b0454a743a00.svg'
            }}
          />
        </div>

        {/* Right Column: Bold Typography Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-6xl font-extrabold text-foreground sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, idx) => (
            <SocialIcon key={idx} href={link.href} icon={link.icon} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  )
}

export default MinimalistHero

