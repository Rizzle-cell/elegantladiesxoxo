'use client'
import { useEffect } from 'react'

export default function SmoothScrollClient(){
  useEffect(() => {
    // Enable native smooth behavior as a baseline
    try { document.documentElement.style.scrollBehavior = 'smooth' } catch(e) {}

    // Lightweight JS smoothing to provide a Lenis-like gentle inertia without external deps.
    let running = true
    let current = window.scrollY || 0
    let target = current

    const onWheel = (e) => {
      target += e.deltaY * 0.6
      const max = Math.max(0, document.body.scrollHeight - window.innerHeight)
      target = Math.max(0, Math.min(target, max))
    }

    window.addEventListener('wheel', onWheel, { passive: true })

    const raf = () => {
      if (!running) return
      current += (target - current) * 0.12
      window.scrollTo(0, current)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      running = false
      window.removeEventListener('wheel', onWheel)
    }
  }, [])

  return null
}
