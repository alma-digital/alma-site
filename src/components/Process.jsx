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
    <Box id="process" sx={{ py: 12, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Badge variant="default" className="mb-8 text-lg font-bold py-3 px-4">
            <Workflow className="ml-2 h-6 w-6" />
            התהליך
          </Badge>
          <Typography 
            variant="h2" 
            gutterBottom 
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

        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <Stack spacing={4}>
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative overflow-hidden bg-white border-2 border-[#e2e8f0] hover:border-current hover:-translate-x-2"
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
                <CardContent className="p-8 relative z-10">
                  <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
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

                    <Box sx={{ flex: 1, pt: 0.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <Box sx={{ fontSize: 32, color: step.color }}>
                          {step.icon}
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }}>
                          {step.title}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" sx={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#64748b' }}>
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>

          <Card className="mt-12 bg-[#0f172a] border-none [&_*]:!text-white">
            <CardContent className="p-6 text-center">
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
