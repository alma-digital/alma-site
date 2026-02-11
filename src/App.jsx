import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCtaBar from './components/StickyCtaBar'

function App() {
  // Scroll to top on page load/refresh - ENHANCED
  useEffect(() => {
    // Scroll immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    
    // Also scroll after a tiny delay to catch late renders
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ paddingBottom: '80px' }}>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCtaBar />
    </div>
  )
}

export default App
