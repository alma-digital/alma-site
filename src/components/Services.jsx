import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material'
import {
  Smartphone,
  Language,
  FlashOn,
  TrendingUp,
  SupportAgent,
  EmojiEvents
} from '@mui/icons-material'
import { Briefcase } from 'lucide-react'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import useEmblaCarousel from 'embla-carousel-react'
import { usePremiumCarouselAutoplay, PREMIUM_DURATION } from '../hooks/usePremiumCarouselAutoplay'

const AUTOPLAY_DELAY_MS = 3000

const Services = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down(768))
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const emblaOptions = {
    align: 'center',
    direction: 'rtl',
    loop: true,
    duration: PREMIUM_DURATION,
    slidesToScroll: 1,
    breakpoints: { '(min-width: 769px)': { active: false } }
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [])
  usePremiumCarouselAutoplay(emblaApi, isMobile)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  useEffect(() => {
    if (!isMobile) return
    const start = Date.now()
    const t = setInterval(() => {
      const elapsed = (Date.now() - start) % AUTOPLAY_DELAY_MS
      setProgress(elapsed / AUTOPLAY_DELAY_MS)
    }, 50)
    return () => clearInterval(t)
  }, [isMobile, selectedIndex])
  const services = [
    {
      icon: <Smartphone />,
      title: 'דף נחיתה ממיר',
      description: 'עמוד ממוקד שמטרתו להגדיל פניות ומכירות.',
      color: '#3b82f6'
    },
    {
      icon: <Language />,
      title: 'אתר תדמית מקצועי',
      description: 'נוכחות דיגיטלית שמחזקת אמון וסמכות.',
      color: '#0f172a'
    },
    {
      icon: <FlashOn />,
      title: 'שדרוג אתר קיים',
      description: 'שיפור עיצוב, חוויית משתמש וביצועים.',
      color: '#3b82f6'
    },
    {
      icon: <TrendingUp />,
      title: 'אופטימיזציה וביצועים',
      description: 'טעינה מהירה וחוויית שימוש חלקה.',
      color: '#0f172a'
    },
    {
      icon: <SupportAgent />,
      title: 'אבטחה והקשחת מערכת',
      description: 'הגנה מפני פריצות ושמירה על יציבות.',
      color: '#3b82f6'
    },
    {
      icon: <EmojiEvents />,
      title: 'ליווי טכני מלא',
      description: 'מהאפיון ועד העלייה לאוויר.',
      color: '#0f172a'
    }
  ]

  const benefits = [
    { icon: <TrendingUp />, title: 'מיקוד בפניות', subtitle: 'הכל מתוכנן להוביל לפעולה' },
    { icon: <SupportAgent />, title: 'ליווי מלא', subtitle: 'תמיכה לאורך כל הדרך' },
    { icon: <EmojiEvents />, title: 'עבודה נקייה', subtitle: 'עיצוב וקוד ברמה גבוהה' }
  ]

  return (
    <Box id="services" sx={{ py: 12, bgcolor: 'white' }} className="mobile-reveal-root max-sm:py-6 mobile-section-root">
      <Container maxWidth="lg" className="max-sm:px-4">
        <Box sx={{ textAlign: 'center', mb: 8 }} className="max-sm:mb-8 max-sm:text-center mobile-section-header">
          <Badge variant="secondary" className="mb-8 text-lg font-bold py-3 px-4 max-sm:text-base max-sm:py-2 max-sm:px-3 mobile-section-badge">
            <Briefcase className="ml-2 h-6 w-6" />
            שירותים
          </Badge>
          {!isMobile && (
            <Typography 
              variant="h2" 
              gutterBottom 
              className="mobile-animate-heading max-sm:!text-2xl max-sm:leading-tight"
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2.8rem', md: '4rem' },
                mb: 3,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                color: 'var(--color-heading)'
              }}
            >
              השירותים שלי
            </Typography>
          )}
          <Typography 
            variant="h5" 
            className="mobile-animate-body max-sm:!text-base mobile-section-desc"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              fontSize: { xs: '1.25rem', md: '1.45rem' },
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#64748b',
              ...(isMobile && { mt: 0, mb: 0 })
            }}
          >
            שירותים ממוקדים שמביאים תוצאות - בלי רעש מיותר.
          </Typography>
        </Box>

        <div ref={emblaRef} className="services-carousel embla-premium">
          <div className="embla-premium__container">
            {services.map((service, index) => (
              <div
                key={index}
                className={`embla-premium__slide service-card carousel-item ${selectedIndex === index ? 'is-center' : ''}`}
              >
                <Card className="mobile-animate-card mobile-services-card mobile-stat-card h-full text-center p-8 border-2 border-[#e2e8f0] hover:border-[#3b82f6] max-sm:p-5 max-sm:w-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <Avatar
                      className="mobile-services-icon-wrap mobile-stat-icon-circle"
                      sx={{
                        width: 90,
                        height: 90,
                        background: service.color,
                        mx: 'auto',
                        mb: 3,
                        boxShadow: service.color === '#3b82f6' ? '0 10px 30px rgba(59, 130, 246, 0.3)' : '0 10px 30px rgba(15, 23, 42, 0.2)'
                      }}
                    >
                      <Box sx={{ fontSize: 45 }}>
                        {service.icon}
                      </Box>
                    </Avatar>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2, color: '#0f172a' }} className="mobile-card-title max-sm:!text-lg">
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, flexGrow: 1, color: '#64748b' }} className="mobile-card-desc max-sm:!text-base">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="embla-premium-dots max-sm:flex sm:hidden" role="tablist" aria-label="בחירת שירות">
            {services.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={selectedIndex === index}
                aria-label={`שירות ${index + 1}`}
                className="embla-premium-dot"
                onClick={() => emblaApi?.scrollTo(index)}
              >
                <span
                  className="embla-premium-dot__progress"
                  style={{ transform: `scaleX(${selectedIndex === index ? progress : 0})` }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Benefits Bar */}
        <Grid container spacing={3} className="max-sm:gap-4">
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index} className="max-sm:w-full">
              <Card className="mobile-animate-card text-center py-6 bg-[#0f172a] border-none hover:scale-105 hover:bg-[#1e293b] [&_*]:!text-white max-sm:py-4">
                <CardContent>
                  <Box sx={{ fontSize: 50, mb: 1, color: 'white' }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, color: 'white !important' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.95, color: 'rgba(226, 232, 240, 0.95) !important' }}>
                    {benefit.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Services
