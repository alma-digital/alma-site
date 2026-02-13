import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { Sparkles, Lightbulb } from 'lucide-react'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

const About = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down(768))
  return (
    <Box id="about" sx={{ py: 12, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }} className="mobile-reveal-root max-sm:py-8 mobile-animate-in mobile-section-root">
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 100%)',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" className="mobile-container max-sm:px-4" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }} className="max-sm:mb-8 mobile-section-header">
          <Badge variant="secondary" className="mb-8 text-lg font-bold py-3 px-4 max-sm:text-base max-sm:py-2 max-sm:px-3 mobile-section-badge">
            <Lightbulb className="ml-2 h-6 w-6" />
            למה לבחור בי
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
              פיתוח אמיתי עם חשיבה עסקית.
            </Typography>
          )}
        </Box>

        <Grid container spacing={4} justifyContent="center" className="max-sm:gap-4">
          <Grid item xs={12} md={10} className="max-sm:w-full">
            <Card className="mobile-animate-card relative overflow-hidden bg-white border-2 border-[#e2e8f0] text-[#0f172a] shadow-xl hover:-translate-y-2 max-sm:w-full">
              <Box sx={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, transparent 100%)',
                opacity: 1
              }} />
              <CardContent className="relative z-10 p-8 md:p-12 max-sm:p-5">
                <Avatar 
                  sx={{ 
                    bgcolor: '#3b82f6',
                    width: 80,
                    height: 80,
                    mb: 3,
                    boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <Sparkles style={{ fontSize: 40, color: 'white' }} />
                </Avatar>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.9, color: '#0f172a', mb: 3 }} className="max-sm:!text-base max-sm:mb-4">
                  אני מגיע מעולם הפיתוח המלא, אבטחת מידע וניהול שרתי ענן.
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.9, color: '#0f172a', mb: 3 }} className="max-sm:!text-base max-sm:mb-4">
                  כל אתר נבנה מהיסוד, בלי תבניות כבדות ובלי קיצורי דרך.
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.9, color: '#0f172a' }} className="max-sm:!text-base">
                  האתר שלך יהיה מהיר, מאובטח ומוכן לצמיחה עתידית.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
