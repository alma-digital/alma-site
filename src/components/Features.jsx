import {
  Box,
  Container,
  Typography,
  Grid
} from '@mui/material'
import {
  TrendingUp,
  Palette,
  Settings,
  Devices,
  Chat,
  Security,
  SupportAgent
} from '@mui/icons-material'
import { Sparkles } from 'lucide-react'
import { Badge } from './ui/badge'

const Features = () => {
  const features = [
    {
      icon: <TrendingUp />,
      text: 'אתר חכם שמביא לקוחות חדשים בקלות'
    },
    {
      icon: <Palette />,
      text: 'עיצוב נקי ומדויק שמציג אותך במיטבך'
    },
    {
      icon: <Settings />,
      text: 'מותאם אישית לעסק'
    },
    {
      icon: <Devices />,
      text: 'מותאם לכל מחשב ומובייל'
    },
    {
      icon: <Chat />,
      text: 'חיבור מהיר לוואטסאפ + טופס יצירת קשר'
    },
    {
      icon: <Security />,
      text: 'אבטחה מלאה'
    },
    {
      icon: <SupportAgent />,
      text: 'ליווי אישי ותמיכה עד שהאתר באוויר'
    }
  ]

  return (
    <Box id="features" sx={{ py: 10, bgcolor: '#ffffff' }} className="mobile-reveal-root max-sm:py-6 mobile-section-spacing mobile-section-root">
      <div className="desktop-only">
        {/* Header Bar */}
        <Box 
          sx={{ 
            bgcolor: '#3b82f6',
            py: 6,
            mb: 10,
            textAlign: 'center'
          }}
          className="max-sm:py-4 max-sm:mb-6"
        >
          <Container maxWidth="lg" className="max-sm:px-4">
            <Typography 
              variant="h2" 
              className="max-sm:!text-2xl max-sm:leading-tight"
              sx={{ 
                color: 'white',
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                letterSpacing: '-0.02em'
              }}
            >
              רק פה אתם מקבלים
            </Typography>
          </Container>
        </Box>

        {/* Features Grid */}
        <Container maxWidth="lg" className="max-sm:px-4">
          <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center" className="max-sm:gap-4">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} className="max-sm:w-full">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 3,
                    transition: 'all 0.3s',
                    height: '100%',
                    '&:hover': {
                      bgcolor: 'rgba(59, 130, 246, 0.03)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      bgcolor: 'rgba(59, 130, 246, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3b82f6',
                      fontSize: 36,
                      mb: 3
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="body1"
                    className="max-sm:!text-base"
                    sx={{
                      color: '#0f172a',
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      fontWeight: 500
                    }}
                  >
                    {feature.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      {/* מובייל בלבד: אקורדיון */}
      <div className="mobile-only">
        <div className="mobile-container">
          <Box sx={{ textAlign: 'center' }} className="mobile-section-header">
            <Badge variant="secondary" className="mobile-section-badge">
              <Sparkles className="ml-2 h-5 w-5" />
              רק פה אתם מקבלים
            </Badge>
          </Box>
          {features.map((feature, index) => (
            <details key={index} className="mobile-animate-card mobile-accordion-item">
              <summary>
                <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                  {feature.icon}
                  <span>{feature.text}</span>
                </Box>
              </summary>
              <div className="mobile-accordion-body">{feature.text}</div>
            </details>
          ))}
        </div>
      </div>
    </Box>
  )
}

export default Features
