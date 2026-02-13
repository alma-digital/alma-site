import { useEffect, useRef, useCallback } from 'react'

const AUTOPLAY_DELAY_MS = 3000
const RESUME_AFTER_MS = 4000
export const PREMIUM_DURATION = 50 // Embla duration for ~900ms scroll feel

/**
 * Premium mobile carousel autoplay: rAF-based, pause on touch, resume 4s after.
 * Respects prefers-reduced-motion.
 * @param {Object} emblaApi - Embla API from useEmblaCarousel
 * @param {boolean} isMobile - Apply only when true (e.g. width <= 768)
 */
export function usePremiumCarouselAutoplay(emblaApi, isMobile) {
  const rafRef = useRef(null)
  const lastScrollTimeRef = useRef(Date.now())
  const resumeTimeoutRef = useRef(null)
  const isPausedRef = useRef(false)

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const tick = useCallback(() => {
    if (!emblaApi || !isMobile || isPausedRef.current || prefersReducedMotion)
      return
    const now = Date.now()
    if (now - lastScrollTimeRef.current >= AUTOPLAY_DELAY_MS) {
      emblaApi.scrollNext()
      lastScrollTimeRef.current = now
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [emblaApi, isMobile])

  useEffect(() => {
    if (!emblaApi || !isMobile || prefersReducedMotion) return

    const onPointerDown = () => {
      isPausedRef.current = true
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
        resumeTimeoutRef.current = null
      }
    }

    const onPointerUp = () => {
      resumeTimeoutRef.current = setTimeout(() => {
        isPausedRef.current = false
        lastScrollTimeRef.current = Date.now()
        resumeTimeoutRef.current = null
      }, RESUME_AFTER_MS)
    }

    emblaApi.on('pointerDown', onPointerDown)
    emblaApi.on('pointerUp', onPointerUp)
    lastScrollTimeRef.current = Date.now()
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
      emblaApi.off('pointerDown', onPointerDown)
      emblaApi.off('pointerUp', onPointerUp)
    }
  }, [emblaApi, isMobile, prefersReducedMotion, tick])

  return {}
}
