import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar
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

const Services = () => {
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
    <Box id="services" sx={{ py: 12, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Badge variant="secondary" className="mb-8 text-lg font-bold py-3 px-4">
            <Briefcase className="ml-2 h-6 w-6" />
            שירותים
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
            השירותים שלי
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
            שירותים ממוקדים שמביאים תוצאות - בלי רעש מיותר.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="h-full text-center p-8 border-2 border-[#e2e8f0] hover:border-[#3b82f6]">
                <CardContent className="p-0 h-full flex flex-col">
                  <Avatar 
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
                  
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2, color: '#0f172a' }}>
                    {service.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ lineHeight: 1.8, flexGrow: 1, color: '#64748b' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Benefits Bar */}
        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="text-center py-6 bg-[#0f172a] border-none hover:scale-105 hover:bg-[#1e293b] [&_*]:!text-white">
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
