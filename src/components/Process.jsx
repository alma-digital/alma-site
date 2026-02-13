import {
  Box,
  Container,
  Typography,
  Avatar,
  Stack
} from '@mui/material'
import {
  Chat,
  Create,
  Build,
  Rocket
} from '@mui/icons-material'
import { Workflow } from 'lucide-react'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

const Process = () => {
  const steps = [
    {
      num: '01',
      icon: <Chat />,
      title: 'שיחת היכרות ואפיון',
      description: 'מבינים את העסק ואת היעדים.',
      color: '#3b82f6'
    },
    {
      num: '02',
      icon: <Create />,
      title: 'בניית מבנה ותוכן',
      description: 'מתכננים אתר שמכוון להמרה.',
      color: '#0f172a'
    },
    {
      num: '03',
      icon: <Build />,
      title: 'עיצוב ופיתוח',
      description: 'קוד מודרני, נקי ומהיר.',
      color: '#3b82f6'
    },
    {
      num: '04',
      icon: <Rocket />,
      title: 'בדיקות ועלייה לאוויר',
      description: 'אופטימיזציה וליווי לאחר ההשקה.',
      color: '#0f172a'
    }
  ]

  return (
    <Box id="process" sx={{ py: 12, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }} className="max-sm:py-6 mobile-animate-in">
      <Container maxWidth="lg" className="mobile-container max-sm:px-4">
        <Box sx={{ textAlign: 'center', mb: 10 }} className="max-sm:mb-5 max-sm:text-center">
          <Badge variant="default" className="mb-8 text-lg font-bold py-3 px-4 max-sm:mb-4 max-sm:text-base max-sm:py-2 max-sm:px-3">
            <Workflow className="ml-2 h-6 w-6" />
            התהליך
          </Badge>
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
            תהליך עבודה ברור
          </Typography>
          <Typography 
            variant="h5" 
            className="max-sm:!text-base"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              fontSize: { xs: '1.25rem', md: '1.45rem' },
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#64748b'
            }}
          >
            תהליך קצר, ברור ויעיל - בלי כאב ראש.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 900, mx: 'auto' }} className="max-sm:w-full">
          <Stack spacing={4} className="max-sm:gap-3">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative overflow-hidden bg-white border-2 border-[#e2e8f0] hover:border-current hover:-translate-x-2 max-sm:w-full"
                style={{ borderColor: '#e2e8f0' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = step.color}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
              >
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                  background: step.color === '#3b82f6' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 100%)' : 'linear-gradient(135deg, rgba(15, 23, 42, 0.03) 0%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  pointerEvents: 'none'
                }} className="hover:opacity-100" />
                <CardContent className="p-8 relative z-10 max-sm:p-5">
                  <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }} className="max-sm:flex-col max-sm:items-center max-sm:text-center">
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        background: step.color,
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        flexShrink: 0,
                        boxShadow: step.color === '#3b82f6' ? '0 8px 24px rgba(59, 130, 246, 0.3)' : '0 8px 24px rgba(15, 23, 42, 0.2)'
                      }}
                    >
                      {step.num}
                    </Avatar>

                    <Box sx={{ flex: 1, pt: 0.5 }} className="max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }} className="max-sm:justify-center">
                        <Box sx={{ fontSize: 32, color: step.color }}>
                          {step.icon}
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }} className="max-sm:!text-lg">
                          {step.title}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" sx={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#64748b' }} className="max-sm:!text-base max-sm:text-center">
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>

          <Card className="mt-12 bg-[#0f172a] border-none [&_*]:!text-white max-sm:mt-6">
            <CardContent className="p-6 text-center max-sm:!p-4">
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white !important' }}>
                ✨ תהליך פשוט, ברור ויעיל - בלי כאב ראש
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default Process
