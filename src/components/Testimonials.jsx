import { useCallback } from 'react'
import {
  Box,
  Container,
  Typography,
  IconButton
} from '@mui/material'
import { Quote, ChevronRight, ChevronLeft, Star, ArrowLeft } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      direction: 'rtl',
      loop: true,
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 1 },
        '(min-width: 1024px)': { slidesToScroll: 1 }
      }
    },
    [Autoplay({ delay: 5500, stopOnInteraction: true, stopOnMouseEnter: true })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const testimonials = [
    {
      feedback: 'הדף יצא נקי ומקצועי, ובעיקר ברור - סוף סוף אנשים מבינים מה אני מציע ומשאירים פרטים.',
      role: 'בעל עסק קטן',
      industry: 'תחום השירותים',
      rating: 5,
      featured: true
    },
    {
      feedback: 'תהליך מסודר ומהיר, עם ירידה לפרטים. קיבלתי דף שנראה מעולה גם במובייל וגם במחשב.',
      role: 'בעלת עסק קטן',
      industry: 'תחום הטיפולים',
      rating: 5
    },
    {
      feedback: 'הכי אהבתי שלא הסתבכתי - הכול היה ברור, כולל חיבור לוואטסאפ והכוונה איך להשתמש בדף.',
      role: 'בעל עסק קטן',
      industry: 'תחום האימון',
      rating: 5
    },
    {
      feedback: 'הדף עזר לי להציג את העסק בצורה מסודרת ונעימה. הפניות התחילו להגיע כבר בשבוע הראשון.',
      role: 'בעלת עסק קטן',
      industry: 'תחום הקוסמטיקה',
      rating: 4
    },
    {
      feedback: 'שירות מקצועי וסבלני. הבנתי בדיוק מה אני מקבל, וזה בדיוק מה שקיבלתי - ללא הפתעות.',
      role: 'בעל עסק קטן',
      industry: 'תחום השיפוצים',
      rating: 5
    },
    {
      feedback: 'סוף סוף יש לי דף שמסביר ללקוחות בדיוק מה אני עושה. הטופס פשוט ונגיש, וזה משנה.',
      role: 'בעל עסק קטן',
      industry: 'תחום הייעוץ',
      rating: 4
    },
    {
      feedback: 'התהליך היה מהיר יותר ממה שחשבתי. הדף יצא מותאם לנייד בצורה מושלמת, וזה חשוב לי מאוד.',
      role: 'בעלת עסק קטן',
      industry: 'תחום האירועים',
      rating: 5
    },
    {
      feedback: 'דף נחיתה נקי שעושה את העבודה. הלקוחות שלי יודעים מה לעשות, וזה מוביל לפניות איכותיות.',
      role: 'בעל עסק קטן',
      industry: 'תחום הצילום',
      rating: 4
    },
    {
      feedback: 'ממש אהבתי את הפשטות והבהירות. לא צריך להיות טכנולוג כדי להבין איך לעבוד עם הדף.',
      role: 'בעלת עסק קטן',
      industry: 'תחום ההדרכה',
      rating: 5
    },
    {
      feedback: 'עבדנו ביחד בצורה נוחה, והתוצאה מדברת בעד עצמה. העסק נראה מקצועי ומזמין.',
      role: 'בעל עסק קטן',
      industry: 'תחום הרהיטים',
      rating: 4
    }
  ]

  return (
    <Box sx={{ py: 12, bgcolor: '#f8fafc' }} className="reveal-section max-sm:py-6">
      <Container maxWidth="lg" className="max-sm:px-4">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }} className="max-sm:mb-5 max-sm:text-center">
          <Typography 
            variant="h2" 
            gutterBottom 
            className="max-sm:!text-2xl max-sm:leading-tight"
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.8rem', md: '4rem' },
              mb: 3,
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              color: 'var(--color-heading)'
            }}
          >
            לקוחות מספרים
          </Typography>
          <Typography 
            variant="h5" 
            className="max-sm:!text-base"
            sx={{ 
              maxWidth: 800, 
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#64748b'
            }}
          >
            עסקים שרצו אתר רציני וקיבלו תוצאה בהתאם.
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative', mb: 6 }}>
          {/* Navigation Buttons */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            justifyContent: 'space-between',
            position: 'absolute',
            width: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            pointerEvents: 'none',
            px: -6
          }}>
            <IconButton
              onClick={scrollPrev}
              sx={{
                bgcolor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                width: 56,
                height: 56,
                pointerEvents: 'auto',
                transform: 'translateX(-28px)',
                '&:hover': {
                  bgcolor: '#3b82f6',
                  '& svg': { color: 'white' }
                },
                transition: 'all 0.3s'
              }}
            >
              <ChevronRight style={{ fontSize: 28, color: '#0f172a' }} />
            </IconButton>
            
            <IconButton
              onClick={scrollNext}
              sx={{
                bgcolor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                width: 56,
                height: 56,
                pointerEvents: 'auto',
                transform: 'translateX(28px)',
                '&:hover': {
                  bgcolor: '#3b82f6',
                  '& svg': { color: 'white' }
                },
                transition: 'all 0.3s'
              }}
            >
              <ChevronLeft style={{ fontSize: 28, color: '#0f172a' }} />
            </IconButton>
          </Box>

          {/* Embla Carousel - Added padding-top to prevent Quote icon clipping */}
          <div className="overflow-hidden pt-6 max-sm:overflow-x-hidden max-sm:max-w-[100vw]" ref={emblaRef}>
            <div className="flex" style={{ direction: 'rtl' }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="reveal-card flex-[0_0_100%] min-w-0 px-3 max-sm:px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  style={{ direction: 'rtl' }}
                >
                  <Card 
                    sx={{
                      position: 'relative',
                      overflow: 'visible',
                      height: '100%',
                      minHeight: 420,
                      mt: 3, // Added margin-top to accommodate the Quote icon
                      transition: 'all 0.3s',
                      bgcolor: testimonial.featured ? 'rgba(59, 130, 246, 0.02)' : 'white',
                      border: testimonial.featured ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(59, 130, 246, 0.15)'
                      }
                    }}
                  >
                    {/* Featured Badge */}
                    {testimonial.featured && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 20,
                          left: 20,
                          zIndex: 5
                        }}
                      >
                        <Badge variant="secondary" className="text-sm font-bold py-1.5 px-3">
                          מומלץ
                        </Badge>
                      </Box>
                    )}

                    {/* Quote Icon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        right: 30,
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: '#3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      <Quote style={{ color: 'white', fontSize: 24 }} />
                    </Box>

                    <CardContent className="mobile-testimonial-card p-10 pt-14 flex flex-col h-full max-sm:p-6 max-sm:pt-12">
                      {/* Feedback Text */}
                      <Typography
                        variant="body1"
                        className="mobile-testimonial-text max-sm:!text-base"
                        sx={{
                          fontSize: '1.15rem',
                          lineHeight: 1.8,
                          color: '#0f172a',
                          mb: 3,
                          fontStyle: 'italic',
                          flex: 1
                        }}
                      >
                        "{testimonial.feedback}"
                      </Typography>

                      {/* Stars Rating */}
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 3 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            fill="#fbbf24"
                            color="#fbbf24"
                            style={{ filter: 'drop-shadow(0 1px 2px rgba(251, 191, 36, 0.3))' }}
                          />
                        ))}
                      </Box>

                      {/* Role & Industry */}
                      <Box sx={{ pt: 3, borderTop: '2px solid #e2e8f0', mt: 'auto' }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#64748b',
                            fontSize: '0.95rem',
                            fontWeight: 600
                          }}
                        >
                          {testimonial.role} · {testimonial.industry}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Box>

        {/* CTA Section - Enhanced for better visibility */}
        <Box 
          sx={{ 
            textAlign: 'center',
            mt: 10,
            p: { xs: 5, md: 8 },
            borderRadius: 5,
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            border: 'none',
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #60a5fa, #3b82f6, #2563eb)',
            }
          }}
          className="max-sm:mt-5 max-sm:p-5 max-sm:mx-0"
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              color: 'white',
              mb: 5,
              lineHeight: 1.6,
              textShadow: '0 2px 10px rgba(0,0,0,0.1)',
              opacity: 0.95
            }}
          >
            מוכן להתקדם?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 500,
              fontSize: { xs: '1rem', md: '1.15rem' },
              color: 'rgba(255,255,255,0.95)',
              mb: 4,
              lineHeight: 1.6
            }}
          >
            אם אתה רוצה אתר שבנוי נכון מהיסוד ומייצר תוצאות,
            השאר פרטים ונצא לדרך.
          </Typography>
          
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-gray-50 text-[#3b82f6] font-bold text-lg sm:text-xl px-10 py-6 rounded-xl shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.45)] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3b82f6] max-sm:w-full max-sm:py-4 max-sm:text-base"
          >
            <a
              href="https://wa.me/972525473560?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%A4%D7%99%D7%93%D7%91%D7%A7%D7%99%D7%9D%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%93%D7%91%D7%A8%20%D7%A2%D7%9C%20%D7%93%D7%A3%20%D7%A0%D7%97%D7%99%D7%AA%D7%94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              בוא נתחיל
              <ArrowLeft className="h-6 w-6" />
            </a>
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Testimonials
