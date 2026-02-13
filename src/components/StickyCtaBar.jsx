import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { MessageCircle } from 'lucide-react'

const MOBILE_BREAKPOINT = 640

const StickyCtaBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  )

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // On mobile: always show. On desktop: show after 200px scroll
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsVisible(true)
      } else if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showBar = isMobile || isVisible

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{ 
        pointerEvents: showBar ? 'auto' : 'none'
      }}
    >
      {/* Mobile: always visible + safe-area; Desktop: show after scroll */}
      <div 
        className="mobile-cta-card bg-gradient-to-l from-[#0f172a] via-[#1e293b] to-[#0f172a] border-t-4 border-[#3b82f6] shadow-2xl max-w-[100vw] overflow-x-hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="container mx-auto px-4 py-5 max-sm:px-4 max-sm:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 max-sm:gap-4 max-sm:items-stretch max-sm:text-center">
            {/* Text - Enhanced typography */}
            <div className="mobile-cta-text text-center sm:text-right max-sm:w-full">
              <p className="text-white font-bold text-lg sm:text-xl leading-relaxed max-sm:text-base">
                לא בטוחים עוד? צרו קשר ונדבר עוד היום
              </p>
            </div>

            {/* CTA Button - Premium unified style */}
            <Button
              asChild
              size="lg"
              className="mobile-cta-btn bg-[#25D366] hover:bg-[#1ea952] text-white font-bold text-lg sm:text-xl px-8 py-5 rounded-xl shadow-[0_6px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_32px_rgba(37,211,102,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 max-sm:w-full max-sm:justify-center max-sm:py-4 max-sm:text-base"
            >
              <a
                href="https://wa.me/972525473560?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%A2%D7%9C%20%D7%93%D7%A3%20%D7%A0%D7%97%D7%99%D7%AA%D7%94"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="h-6 w-6" />
                לשיחת וואטסאפ
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyCtaBar
