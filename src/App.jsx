import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCtaBar from './components/StickyCtaBar'

function App() {
  const observerRef = useRef(null)

  // Scroll to top on page load/refresh - ENHANCED
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Mobile-only: animate-in on scroll (once), respect prefers-reduced-motion
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = document.documentElement
    if (reducedMotion) {
      el.querySelectorAll('.mobile-animate-in').forEach((node) => node.classList.add('is-visible'))
      return
    }
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    )
    const nodes = el.querySelectorAll('.mobile-animate-in')
    nodes.forEach((n) => observerRef.current?.observe(n))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="overflow-x-hidden max-w-[100vw] max-sm:pb-24 sm:pb-20">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCtaBar />
    </div>
  )
}

export default App
