'use client'

import React, { Suspense, lazy, useEffect, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export interface SplineSceneProps {
  scene: string
  className?: string
  fallback?: React.ReactNode
}

export function SplineScene({ scene, className, fallback }: SplineSceneProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className={`flex items-center justify-center ${className || ''}`}>
        {fallback || (
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        )}
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className={`flex items-center justify-center ${className || ''}`}>
          {fallback || (
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          )}
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}

export default SplineScene

