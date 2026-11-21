'use client'

import { useEffect, useState } from 'react'

interface CountingNumberProps {
  value: number
  suffix?: string
  duration?: number
}

export function CountingNumber({ value, suffix = '', duration = 1400 }: CountingNumberProps) {
  const [count, setCount] = useState(0)
  const [element, setElement] = useState<HTMLSpanElement | null>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setCount(value)
      return
    }

    if (!element) return

    let frame = 0
    let startedAt: number | undefined
    let hasStarted = false
    const animate = (time: number) => {
      startedAt ??= time
      const progress = Math.min((time - startedAt) / duration, 1)
      const eased = 1 - (1 - progress) ** 4
      setCount(Math.round(value * eased))
      if (progress < 1) frame = window.requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasStarted) return
      hasStarted = true
      frame = window.requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [duration, element, value])

  return <span ref={setElement}>{count.toLocaleString()}{suffix}</span>
}
