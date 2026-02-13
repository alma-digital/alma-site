import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/972525473560?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5'

/**
 * Main CTA repeated before Footer – mobile only.
 * Same style as Hero primary (dominant); premium feel.
 */
const MobileCtaBeforeFooter = () => (
  <section className="mobile-cta-before-footer md:hidden" aria-label="צור קשר">
    <div className="mobile-cta-before-footer-inner">
      <Button
        asChild
        size="lg"
        className="mobile-cta-primary mobile-cta-before-footer-btn"
      >
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2"
        >
          לשיחת ייעוץ חינם
          <ArrowRight className="h-5 w-5" />
        </a>
      </Button>
    </div>
  </section>
)

export default MobileCtaBeforeFooter
