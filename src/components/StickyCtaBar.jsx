import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { MessageCircle } from 'lucide-react'

const StickyCtaBar = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 200px
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      {/* Changed: White background → Midnight Blue gradient with stronger presence */}
      <div className="bg-gradient-to-l from-[#0f172a] via-[#1e293b] to-[#0f172a] border-t-4 border-[#3b82f6] shadow-2xl">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Text - Enhanced typography */}
            <div className="text-center sm:text-right">
              <p className="text-white font-bold text-lg sm:text-xl leading-relaxed">
                לא בטוחים עוד? צרו קשר ונדבר עוד היום
              </p>
            </div>

            {/* CTA Button - Premium unified style */}
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#1ea952] text-white font-bold text-lg sm:text-xl px-8 py-5 rounded-xl shadow-[0_6px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_32px_rgba(37,211,102,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
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
