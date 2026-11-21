"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

export interface ProjectItem {
  title: string
  description: string
  year?: string
  meta?: string
  link?: string
  image: string
}

export interface ProjectShowcaseProps {
  projects?: ProjectItem[]
  title?: string
  className?: string
}

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    title: "Lumina",
    description: "AI-powered design system generator.",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Flux",
    description: "Real-time collaboration for creative teams.",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Prism",
    description: "Color palette extraction from any image.",
    year: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Vertex",
    description: "3D modeling toolkit for the web.",
    year: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
  },
]

export function ProjectShowcase({
  projects = DEFAULT_PROJECTS,
  title = "Selected Work",
  className = "",
}: ProjectShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full mx-auto ${className}`}
    >
      {title && (
        <h3 className="text-muted-foreground text-xs sm:text-sm font-medium tracking-widest uppercase font-mono mb-6">
          {title}
        </h3>
      )}

      {/* Floating Cursor-Following Image Preview */}
      <div
        className="pointer-events-none absolute top-0 left-0 z-50 hidden md:block overflow-hidden rounded-xl shadow-2xl border border-border/50"
        style={{
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 90}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition:
            "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[280px] h-[180px] bg-secondary rounded-xl overflow-hidden shadow-inner">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => {
          const rowContent = (
            <div className="relative border-t border-border py-4 transition-all duration-300 ease-out sm:py-5">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-3 sm:-mx-4 px-3 sm:px-4 bg-secondary/50 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <span className="text-foreground font-playfair font-semibold text-lg sm:text-xl tracking-tight group-hover:text-primary transition-colors">
                      <span className="relative">
                        {project.title}
                        {/* Animated underline */}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-primary
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </span>

                    {/* Arrow that slides in */}
                    {project.link && <ArrowUpRight
                      className={`
                        w-4 h-4 text-primary
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />}
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      text-sm mt-1 leading-relaxed transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-foreground/90" : "text-muted-foreground"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                {(project.meta || project.year) && <span
                  className={`
                    text-xs font-mono text-muted-foreground tabular-nums shrink-0 pt-1
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-primary font-semibold" : ""}
                  `}
                >
                  {project.meta ?? project.year}
                </span>}
              </div>
            </div>
          )

          const hoverProps = {
            className: 'group block',
            onMouseEnter: () => handleMouseEnter(index),
            onMouseLeave: handleMouseLeave,
          }

          return project.link ? (
            <a key={project.title} href={project.link} {...hoverProps}>
              {rowContent}
            </a>
          ) : (
            <div key={project.title} {...hoverProps}>
              {rowContent}
            </div>
          )
        })}

        {/* Bottom border for last item */}
        <div className="border-t border-border" />
      </div>
    </div>
  )
}

export default ProjectShowcase
