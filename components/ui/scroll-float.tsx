'use client'

import {
  Children,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  type ElementType,
  type ReactNode,
  type RefObject,
} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './scroll-float.css'

gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const clampToScroll = (position: string) =>
  position.startsWith('clamp(') ? position : `clamp(${position})`
const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1)
const smoothstep = (from: number, to: number, value: number) => {
  const k = clamp01((value - from) / (to - from))
  return k * k * (3 - 2 * k)
}
const random = (index: number, salt: number) => {
  const value = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453
  return value - Math.floor(value)
}

type PieceOrder = 'start' | 'end' | 'center' | 'edges' | 'random'
type ScrollFloatProps = {
  children: ReactNode
  as?: ElementType
  scrollContainerRef?: RefObject<HTMLElement | null>
  containerClassName?: string
  textClassName?: string
  effect?: 'float' | 'flip' | 'scatter' | 'blur' | 'wave'
  splitBy?: 'chars' | 'words'
  direction?: 'up' | 'down'
  order?: PieceOrder
  fromColor?: string
  animationDuration?: number
  ease?: string
  scrollStart?: string
  scrollEnd?: string
  stagger?: number
  distance?: number
  stretch?: number
  smoothing?: number
  animateOnMount?: boolean
  delay?: number
}

function getDelays(count: number, order: PieceOrder, stagger: number) {
  const middle = (count - 1) / 2
  const ranks = Array.from({ length: count }, (_, index) => {
    if (order === 'end') return count - 1 - index
    if (order === 'center') return Math.abs(index - middle)
    if (order === 'edges') return middle - Math.abs(index - middle)
    return index
  })
  if (order === 'random') {
    const shuffled = ranks.map((_, index) => index).sort((a, b) => random(a, 9) - random(b, 9))
    shuffled.forEach((target, rank) => { ranks[target] = rank })
  }
  const first = Math.min(...ranks)
  return ranks.map(rank => (rank - first) * Math.max(0, stagger))
}

export function ScrollFloat({
  children,
  as: Tag = 'h2',
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  effect = 'float',
  splitBy = 'chars',
  direction = 'up',
  order = 'start',
  fromColor = 'currentColor',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  distance = 120,
  stretch = 2.3,
  smoothing = 0,
  animateOnMount = false,
  delay = 0,
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLElement | null>(null)
  const textRef = useRef<HTMLSpanElement | null>(null)
  const text = useMemo(() => {
    const parts = Children.toArray(children)
    return parts.every(part => typeof part === 'string' || typeof part === 'number')
      ? parts.join('')
      : null
  }, [children])
  const shiftColor = fromColor && fromColor !== 'currentColor' ? fromColor : null
  const shiftStyle = useMemo(
    () => shiftColor
      ? { color: `color-mix(in oklab, ${shiftColor} calc(var(--scroll-float-mix, 0) * 100%), currentColor)` }
      : undefined,
    [shiftColor],
  )
  const splitText = useMemo(() => {
    if (text === null) return null
    return text.split('\n').map((line, lineIndex) => (
      <span className="scroll-float-line" key={lineIndex}>
        {line.split(/(\s+)/).map((word, wordIndex) => word.trim() === '' ? word : (
          <span className="scroll-float-word" key={wordIndex}>
            {Array.from(word).map((char, charIndex) => (
              <span className="scroll-float-char" key={charIndex} style={shiftStyle}>{char}</span>
            ))}
          </span>
        ))}
      </span>
    ))
  }, [text, shiftStyle])

  useIsomorphicLayoutEffect(() => {
    const el = containerRef.current
    const textEl = textRef.current
    if (!el || !textEl || (scrollContainerRef && !scrollContainerRef.current)) return

    const scroller = scrollContainerRef?.current || window
    const pieces = el.querySelectorAll(splitBy === 'words' ? '.scroll-float-word' : '.scroll-float-char')
    const targets: Element[] = pieces.length ? Array.from(pieces) : [textEl]
    const indexOf = new Map(targets.map((target, index) => [target, index]))
    const at = (fn: (index: number) => number) => (_: number, target: Element) => fn(indexOf.get(target) ?? 0)
    const middle = (targets.length - 1) / 2
    const edge = (index: number) => middle > 0 ? (index - middle) / middle : 0
    const delays = getDelays(targets.length, order, stagger)
    const sign = direction === 'down' ? -1 : 1
    const reach = Math.max(0, Number(distance) || 0) / 120
    const squeeze = stretch > 0 ? stretch ** -0.43 : 1
    const baseEase = gsap.parseEase(ease) || ((progress: number) => progress)
    const timing = (progress: number) => clamp01(baseEase(progress))
    const size = () => parseFloat(getComputedStyle(textEl).fontSize) || 16
    const swell = (progress: number) => {
      const t = timing(progress)
      return 1 - Math.cos(t * Math.PI * 2.5) * Math.pow(1 - t, 2.6)
    }
    const sway = (progress: number) => {
      const t = timing(progress)
      return Math.sin(t * Math.PI * 2.5) * Math.pow(1 - t, 2.6)
    }
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      if (animateOnMount) {
        const entrance = gsap.fromTo(targets, {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: direction === 'down' ? -120 * reach : 120 * reach,
          scaleY: stretch,
          scaleX: squeeze,
          transformOrigin: direction === 'down' ? '50% 100%' : '50% 0%',
        }, {
          duration: animationDuration,
          delay,
          stagger: (index: number) => delays[index] || 0,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          clearProps: 'willChange',
        })
        return () => entrance.kill()
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: clampToScroll(scrollEnd),
          scrub: smoothing > 0 ? smoothing : true,
          invalidateOnRefresh: true,
        },
      })
      const add = (fromVars: gsap.TweenVars, toVars: gsap.TweenVars) => {
        gsap.set(targets, { willChange: 'opacity, transform', ...fromVars })
        return timeline.fromTo(targets, { willChange: 'opacity, transform', ...fromVars }, {
          duration: animationDuration,
          stagger: (index: number) => delays[index] || 0,
          ...toVars,
        }, 0)
      }

      if (effect === 'flip') {
        add({ rotationX: -90 * sign, transformPerspective: () => size() * 4, transformOrigin: () => `50% 50% ${(-size() * 0.55 * reach).toFixed(2)}`, backfaceVisibility: 'hidden' }, { ease, rotationX: 0 })
        add({ opacity: 0 }, { ease: progress => smoothstep(0.05, 0.55, timing(progress)), opacity: 1 })
      } else if (effect === 'scatter') {
        add({ x: at(index => ((random(index, 1) * 2 - 1) * 1.3 - edge(index) * 0.9) * size() * reach), y: at(index => sign * (0.35 + random(index, 2)) * size() * 1.1 * reach), rotation: at(index => (random(index, 3) < 0.5 ? -1 : 1) * (40 + random(index, 4) * 120)), scale: at(index => 0.35 + random(index, 5) * 0.9), transformOrigin: '50% 50%' }, { ease, x: 0, y: 0, rotation: 0, scale: 1 })
        add({ opacity: 0 }, { ease: progress => smoothstep(0, 0.4, timing(progress)), opacity: 1 })
      } else if (effect === 'blur') {
        add({ opacity: 0, y: () => sign * size() * 0.3 * reach, scale: 1.45, filter: () => `blur(${(size() * 0.2).toFixed(2)}px)`, transformOrigin: '50% 50%' }, { ease, opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' })
      } else if (effect === 'wave') {
        add({ yPercent: 120 * reach * sign, scaleY: stretch, scaleX: squeeze, transformOrigin: sign > 0 ? '50% 100%' : '50% 0%' }, { ease: swell, yPercent: 0, scaleY: 1, scaleX: 1 })
        add({ rotation: 0 }, { ease: sway, rotation: -16 * sign })
        add({ opacity: 0 }, { ease: progress => clamp01(timing(progress) * 2.5), opacity: 1 })
      } else {
        add({ opacity: 0, yPercent: 120 * reach * sign, scaleY: stretch, scaleX: squeeze, transformOrigin: sign > 0 ? '50% 0%' : '50% 100%' }, { ease, opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1 })
      }

      if (shiftColor) {
        add({ '--scroll-float-mix': 1 }, { ease: progress => smoothstep(0.5, 1, timing(progress)), '--scroll-float-mix': 0 })
      }
    })

    return () => media.revert()
  }, [animateOnMount, animationDuration, delay, direction, distance, ease, effect, order, scrollContainerRef, scrollEnd, scrollStart, shiftColor, smoothing, splitBy, stagger, stretch, text])

  const Heading = Tag
  return (
    <Heading
      ref={containerRef as never}
      className={`scroll-float ${effect === 'float' ? '' : 'scroll-float--open'} ${containerClassName}`}
    >
      {text !== null && <span className="scroll-float-sr">{text}</span>}
      <span
        ref={textRef}
        className={`scroll-float-text ${textClassName}`}
        style={{ ...(text === null ? shiftStyle : undefined), textAlign: 'center', width: '100%' }}
        aria-hidden={text !== null ? true : undefined}
      >
        {splitText ?? children}
      </span>
    </Heading>
  )
}
