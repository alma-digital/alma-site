import { Button } from './ui/button'
import { MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/972525473560?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%A2%D7%9C%20%D7%93%D7%A3%20%D7%A0%D7%97%D7%99%D7%AA%D7%94'

/**
 * Inline CTA block for mobile Conversion Flow.
 * Shown only on mobile (hidden on desktop via CSS).
 * Placed after every 2 sections; outline style so only Hero + Sticky stay dominant.
 */
const MobileCtaBlock = () => (
  <section
    className="mobile-cta-flow md:hidden"
    aria-label="צור קשר"
  >
    <div className="mobile-cta-flow-inner">
      <Button
        asChild
        variant="outline"
        size="lg"
        className="mobile-cta-flow-btn"
      >
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-5 w-5" />
          לשיחת וואטסאפ
        </a>
      </Button>
    </div>
  </section>
)

export default MobileCtaBlock
