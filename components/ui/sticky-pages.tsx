"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export interface StickyPageItem {
  id?: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  content?: React.ReactNode;
  className?: string;
  bg?: string;
}

export interface StickyPagesProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of page items (alternatively pass children <StickyPage /> components) */
  pages?: StickyPageItem[];
  /** Height of each sticky page card. Default: "auto" */
  pageHeight?: string;
  /** Distance from top of viewport in pixels when page locks into sticky position. Default: 80 */
  topOffset?: number;
  /** Progressive pixel offset between stacked cards. Set to 0 for clean full replacement. Default: 0 */
  stackOffset?: number;
  /** Rounded top corners on pages as they stack over one another. Default: true */
  rounded?: boolean;
  /** Elevated top drop shadow as each page covers the previous one. Default: true */
  shadow?: boolean;
  /** Subtle top highlight border. Default: true */
  border?: boolean;
  /** Container custom classes */
  className?: string;
  /** Custom child <StickyPage> components */
  children?: React.ReactNode;
}

export interface StickyPageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  bg?: string;
}

export const StickyPage: React.FC<StickyPageProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      {children}
    </div>
  );
};

interface StickyPageCardProps {
  index: number;
  total: number;
  topOffset: number;
  stackOffset: number;
  pageHeight?: string;
  rounded?: boolean;
  shadow?: boolean;
  border?: boolean;
  children: React.ReactNode;
  className?: string;
  bg?: string;
  rawChild?: boolean;
}

const StickyPageCard: React.FC<StickyPageCardProps> = ({
  index,
  total,
  topOffset,
  stackOffset,
  pageHeight = "auto",
  rounded = true,
  shadow = true,
  border = true,
  children,
  className,
  bg = "bg-card",
  rawChild = false,
}) => {
  const stickyTop = `${topOffset + index * stackOffset}px`;

  return (
    <div
      id={`workflow-step-wrapper-${index}`}
      style={{
        position: "sticky",
        top: stickyTop,
        zIndex: index + 1,
      }}
      className="w-full will-change-transform mb-[4vh] sm:mb-[6vh]"
    >
      {rawChild ? (
        children
      ) : (
        <div
          className={cn(
            "relative w-full transition-all duration-300",
            rounded && "rounded-2xl sm:rounded-3xl",
            shadow && "shadow-[0_12px_45px_-10px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.65)]",
            border && "border border-border/80 dark:border-white/10",
            bg,
            className
          )}
        >
          <div className="relative z-10 w-full flex flex-col">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export const StickyPages: React.FC<StickyPagesProps> = ({
  pages,
  pageHeight = "auto",
  topOffset = 80,
  stackOffset = 0,
  rounded = true,
  shadow = true,
  border = true,
  className,
  children,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const childArray = React.Children.toArray(children);
  const isChildrenMode = childArray.length > 0;
  const total = isChildrenMode ? childArray.length : pages?.length || 0;

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
      {...props}
    >
      {/* Composition via custom child components (renders cleanly without double wrappers) */}
      {isChildrenMode &&
        childArray.map((child, idx) => (
          <StickyPageCard
            key={`sticky-page-${idx}`}
            index={idx}
            total={total}
            topOffset={topOffset}
            stackOffset={stackOffset}
            pageHeight={pageHeight}
            rawChild={true}
          >
            {child}
          </StickyPageCard>
        ))}

      {/* Composition via pages data array */}
      {!isChildrenMode &&
        pages?.map((page, idx) => (
          <StickyPageCard
            key={page.id || `sticky-page-${idx}`}
            index={idx}
            total={total}
            topOffset={topOffset}
            stackOffset={stackOffset}
            pageHeight={pageHeight}
            rounded={rounded}
            shadow={shadow}
            border={border}
            className={page.className}
            bg={page.bg}
            rawChild={false}
          >
            {page.content ? (
              page.content
            ) : (
              <DefaultPageContent page={page} index={idx} total={total} />
            )}
          </StickyPageCard>
        ))}
    </div>
  );
};

// Default layout when using pages data array
const DefaultPageContent: React.FC<{
  page: StickyPageItem;
  index: number;
  total: number;
}> = ({ page, index, total }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 sm:px-12 text-center max-w-4xl mx-auto py-12">
      {page.badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/20 mb-6">
          {page.badge}
        </span>
      )}
      {page.subtitle && (
        <span className="text-xs uppercase font-mono tracking-widest text-muted-foreground mb-2">
          {page.subtitle} • 0{index + 1} / 0{total}
        </span>
      )}
      {page.title && (
        <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight font-playfair">
          {page.title}
        </h2>
      )}
      {page.description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
          {page.description}
        </p>
      )}
    </div>
  );
};

export const StickyStack = StickyPages;
export const StackingPages = StickyPages;

export default StickyPages;
