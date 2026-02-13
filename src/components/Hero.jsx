import {
  Box,
  Container,
  Typography,
  Grid,
  CardContent,
  Paper
} from '@mui/material'
import {
  TrendingUp,
  Speed,
  Verified,
  Star
} from '@mui/icons-material'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-scroll'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Hero = () => {
  const stats = [
    { 
      number: '20+', 
      label: 'פרויקטים מוצלחים', 
      icon: <Verified sx={{ fontSize: 40 }} />, 
      color: '#3b82f6'
    },
    { 
      number: '98%', 
      label: 'שביעות רצון לקוחות', 
      icon: <TrendingUp sx={{ fontSize: 40 }} />, 
      color: '#0f172a'
    },
    { 
      number: '3+', 
      label: 'שנות ניסיון', 
      icon: <Speed sx={{ fontSize: 40 }} />, 
      color: '#3b82f6'
    }
  ]

  return (
    <Box
      id="home"
      className="mobile-reveal-root mobile-hero-section max-sm:min-h-[60vh] sm:min-h-screen"
      sx={{
        minHeight: { xs: '60vh', sm: '100vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#ffffff',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(15, 23, 42, 0.05) 0%, transparent 50%)',
          opacity: 1
        }
      }}
    >
      <Container maxWidth="lg" className="mobile-container max-sm:px-4 max-sm:py-6 sm:py-8" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
        <Grid container spacing={8} alignItems="center" className="max-sm:flex-col max-sm:gap-4 sm:gap-8">
          {/* Content */}
          <Grid item xs={12} md={6} className="max-sm:order-2 max-sm:text-center max-sm:w-full mobile-animate-in">
            <Badge variant="secondary" className="mobile-hero-badge mb-8 text-base font-semibold py-2 px-4 max-sm:mb-4 max-sm:text-sm max-sm:py-1.5 max-sm:px-3">
              <Sparkles className="ml-2 h-5 w-5" />
              דפי נחיתה לעסקים קטנים
            </Badge>
            
            <Typography 
              variant="h1" 
              className="mobile-animate-heading mobile-h1 max-sm:!text-3xl sm:!text-5xl max-sm:leading-tight max-sm:mb-2"
              sx={{ 
                fontSize: { xs: '2.8rem', md: '4rem', lg: '4.5rem' },
                fontWeight: 800,
                color: 'var(--color-heading)',
                mb: 2,
                lineHeight: 1.15,
                letterSpacing: '-0.03em'
              }}
            >
              אתרי תדמית ודפי נחיתה שמביאים לקוחות.
            </Typography>
            
            <Typography 
              variant="h5" 
              className="mobile-animate-body mobile-hero-subline max-sm:!text-base sm:!text-lg max-sm:mb-4 max-sm:leading-relaxed"
              sx={{ 
                color: '#64748b',
                mb: 5,
                lineHeight: 1.85,
                fontWeight: 400,
                fontSize: { xs: '1.15rem', md: '1.3rem' }
              }}
            >
              אני בונה אתרים בקוד נקי, מהיר ומאובטח.
              פיתוח Full Stack בהתאמה מלאה לעסק שלך.
              המטרה ברורה: יותר פניות, יותר אמון, יותר תוצאות.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6 }} className="mobile-hero-buttons max-sm:flex-col max-sm:items-center max-sm:gap-3 max-sm:mb-5">
              <Button 
                asChild
                size="lg"
                className="mobile-animate-btn mobile-btn-block bg-[#0f172a] text-white hover:bg-[#1e293b] hover:scale-105 shadow-lg hover:shadow-xl text-lg font-bold px-8 py-4 rounded-xl transition-all duration-300 max-sm:w-full max-sm:justify-center max-sm:text-base max-sm:py-3"
              >
                <a 
                  href="https://wa.me/972525473560?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  לשיחת ייעוץ חינם
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="max-sm:w-full">
                <Button 
                  variant="outline"
                  size="lg"
                  className="mobile-animate-btn mobile-btn-block border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a]/5 hover:scale-105 text-lg font-bold px-8 py-4 rounded-xl transition-all duration-300 max-sm:w-full max-sm:justify-center max-sm:text-base max-sm:py-3"
                >
                  לצפייה בעבודות
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="max-sm:w-full sm:hidden">
                <Button 
                  variant="ghost"
                  size="lg"
                  className="mobile-animate-btn mobile-btn-block text-[#3b82f6] hover:bg-[#3b82f6]/10 text-base font-semibold py-3 max-sm:w-full max-sm:justify-center"
                >
                  לדבר עכשיו →
                </Button>
              </Link>
              <div className="mobile-trust-row mobile-only">
                <span>✓ קוד נקי</span>
                <span>✓ תמיכה</span>
                <span>✓ תוצאות</span>
              </div>
            </Box>
          </Grid>

          {/* Visual */}
          <Grid item xs={12} md={6} className="max-sm:order-1 max-sm:flex max-sm:justify-center max-sm:w-full">
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
              className="max-sm:w-full max-sm:max-w-[260px] sm:max-w-[420px]"
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 550,
                  aspectRatio: '1',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(15, 23, 42, 0.05) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(20px)',
                  border: '3px solid rgba(59, 130, 246, 0.2)',
                  boxShadow: '0 25px 80px rgba(59, 130, 246, 0.15), inset 0 0 60px rgba(59, 130, 246, 0.05)',
                  transition: 'all 0.4s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05) rotate(5deg)',
                    boxShadow: '0 35px 100px rgba(59, 130, 246, 0.2), inset 0 0 80px rgba(59, 130, 246, 0.1)',
                    border: '3px solid rgba(59, 130, 246, 0.4)'
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -30,
                    background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent, rgba(15, 23, 42, 0.05))',
                    borderRadius: '50%',
                    animation: 'spin 8s linear infinite',
                    zIndex: -1
                  },
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                  }
                }}
              >
                <Box 
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1
                  }}
                >
                  <img 
                    src="/logo.png" 
                    alt="Alma Digital" 
                    className="max-w-full h-auto w-full block"
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%',
                      display: 'block',
                      filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Stats Cards - משודרגים; מובייל: carousel אופקי */}
        <Grid container spacing={3} sx={{ mt: 8 }} className="mobile-stats-carousel max-sm:mt-5 max-sm:gap-4">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index} className="mobile-animate-card mobile-stats-slide max-sm:w-full">
              <Paper 
                elevation={0}
                sx={{ 
                  position: 'relative',
                  bgcolor: '#ffffff',
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid #e2e8f0',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.03)',
                    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.15)',
                    borderColor: '#3b82f6'
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 6,
                    background: stat.color,
                  }
                }}
              >
                <CardContent sx={{ py: 4, px: 3, textAlign: 'center' }} className="max-sm:!py-4 max-sm:!px-4">
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: stat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: `0 10px 30px ${stat.color === '#3b82f6' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(15, 23, 42, 0.2)'}`,
                      color: 'white'
                    }}
                    className="max-sm:!w-14 max-sm:!h-14 max-sm:!mb-2"
                  >
                    {stat.icon}
                  </Box>

                  {/* Number */}
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 900,
                      color: stat.color,
                      mb: 1.5,
                      fontSize: { xs: '2.5rem', md: '3rem' }
                    }}
                    className="max-sm:!text-2xl max-sm:!mb-1"
                  >
                    {stat.number}
                  </Typography>

                  {/* Label */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#64748b',
                      fontWeight: 600,
                      fontSize: '1.1rem'
                    }}
                    className="max-sm:!text-sm"
                  >
                    {stat.label}
                  </Typography>

                  {/* Decorative stars */}
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 0.5 }} className="max-sm:!mt-1">
                    {[1, 2, 3, 4, 5].map((starNum) => (
                      <Star 
                        key={starNum} 
                        sx={{ 
                          fontSize: 16, 
                          color: '#3b82f6',
                          filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))'
                        }} 
                      />
                    ))}
                  </Box>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
