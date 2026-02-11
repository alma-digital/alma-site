import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Alert,
  Paper,
  Stack
} from '@mui/material'
import {
  Email,
  Phone,
  LocationOn,
  Send as SendIcon
} from '@mui/icons-material'
import { Mail } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Email />,
      title: 'אימייל',
      value: 'info@almadigitalil.com',
      link: 'mailto:info@almadigitalil.com',
      color: '#3b82f6'
    },
    {
      icon: <Phone />,
      title: 'טלפון',
      value: '0525473560',
      link: 'tel:+972525473560',
      color: '#0f172a'
    },
    {
      icon: <LocationOn />,
      title: 'מיקום',
      value: 'ישראל',
      color: '#3b82f6'
    }
  ]

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: 12, 
        background: '#ffffff',
        position: 'relative'
      }}
      className="max-sm:py-8"
    >
      <Container maxWidth="lg" className="max-sm:px-4">
        <Box sx={{ textAlign: 'center', mb: 8 }} className="max-sm:mb-6 max-sm:text-center">
          <Badge variant="secondary" className="mb-8 text-lg font-bold py-3 px-4 max-sm:mb-6 max-sm:text-base max-sm:py-2 max-sm:px-3">
            <Mail className="ml-2 h-6 w-6" />
            צור קשר
          </Badge>
          <Typography 
            variant="h2" 
            gutterBottom 
            className="text-shadow-md max-sm:!text-2xl max-sm:leading-tight"
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.8rem', md: '4rem' },
              mb: 3,
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              color: 'var(--color-heading)'
            }}
          >
            בוא נבנה משהו חזק
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            className="text-shadow-sm max-sm:!text-base"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              fontSize: { xs: '1.25rem', md: '1.45rem' },
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#64748b'
            }}
          >
            ספר לי על העסק שלך ומה אתה רוצה להשיג -
            ואחזור אליך עם כיוון ברור להמשך תוך 24 שעות.
          </Typography>
        </Box>

        <Grid container spacing={6} className="max-sm:gap-4 max-sm:flex-col">
          {/* Contact Form - IMPROVED */}
          <Grid item xs={12} md={7} className="max-sm:w-full">
            <Paper 
              elevation={12} 
              sx={{ 
                p: { xs: 4, md: 6 }, 
                borderRadius: 5,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(15, 23, 42, 0.02) 100%)',
                border: '2px solid',
                borderColor: '#e2e8f0',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 60px rgba(59, 130, 246, 0.15)',
                  borderColor: '#3b82f6'
                }
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Box 
                  sx={{ 
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: '#3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <SendIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography 
                  variant="h3" 
                  gutterBottom 
                  className="max-sm:!text-xl"
                  sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1.3,
                    color: 'var(--color-heading)'
                  }}
                >
                  בוא נבנה משהו חזק
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#64748b' }} className="max-sm:!text-base">
                  ספר לי על העסק שלך ומה אתה רוצה להשיג -
                  ואחזור אליך עם כיוון ברור להמשך תוך 24 שעות.
                </Typography>
              </Box>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="max-sm:w-full">
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 1.5,
                          fontSize: '1.05rem',
                          color: '#0f172a'
                        }}
                        className="max-sm:!text-base"
                      >
                        👤 שם מלא *
                      </Typography>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="איך קוראים לך?"
                        className="h-14 text-lg border-[3px] border-[#667eea] focus:border-[#764ba2] transition-all shadow-md"
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} className="max-sm:w-full">
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 1.5,
                          fontSize: '1.05rem',
                          color: '#0f172a'
                        }}
                        className="max-sm:!text-base"
                      >
                        📱 טלפון *
                      </Typography>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="0525473560"
                        className="h-14 text-lg border-[3px] border-[#667eea] focus:border-[#764ba2] transition-all shadow-md"
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 1.5,
                          fontSize: '1.05rem',
                          color: '#0f172a'
                        }}
                      >
                        ✉️ אימייל *
                      </Typography>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@example.com"
                        className="h-14 text-lg border-[3px] border-[#667eea] focus:border-[#764ba2] transition-all shadow-md"
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 1.5,
                          fontSize: '1.05rem',
                          color: '#0f172a'
                        }}
                      >
                        💬 ספרו לי על הפרויקט
                      </Typography>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="מה אתם צריכים? (אפשר להשאיר ריק)"
                        className="min-h-[140px] text-lg border-[3px] border-[#cbd5e1] focus:border-[#3b82f6] transition-all shadow-md resize-none"
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} className="max-sm:w-full">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-16 text-xl font-bold shadow-2xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all max-sm:h-14 max-sm:text-base"
                    >
                      <SendIcon className="ml-3" sx={{ fontSize: 28 }} />
                      שלח הודעה עכשיו
                    </Button>
                  </Grid>

                  {submitted && (
                    <Grid item xs={12}>
                      <Alert 
                        severity="success"
                        sx={{ 
                          borderRadius: 3,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          py: 2,
                          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
                          border: '2px solid #10b981'
                        }}
                      >
                        ✅ מעולה! ההודעה נשלחה בהצלחה. אחזור אליך תוך 24 שעות!
                      </Alert>
                    </Grid>
                  )}
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info Cards - IMPROVED */}
          <Grid item xs={12} md={5} className="max-sm:w-full">
            <Stack spacing={4} className="max-sm:gap-4">
              <Box 
                sx={{ 
                  p: 4,
                  borderRadius: 4,
                  background: '#3b82f6',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  ⚡ תגובה תוך 24 שעות
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.95 }}>
                  כל פנייה מטופלת אישית
                </Typography>
              </Box>

              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:-translate-y-2 transition-all border-2 hover:border-[#3b82f6]"
                  sx={{ 
                    borderColor: '#e2e8f0',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(59, 130, 246, 0.15)'
                    }
                  }}
                >
                  <CardContent className="p-0">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Avatar 
                        sx={{ 
                          width: 70,
                          height: 70,
                          background: info.color,
                          boxShadow: info.color === '#3b82f6' ? '0 8px 24px rgba(59, 130, 246, 0.3)' : '0 8px 24px rgba(15, 23, 42, 0.2)'
                        }}
                      >
                        <Box sx={{ fontSize: 34 }}>
                          {info.icon}
                        </Box>
                      </Avatar>
                      
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            mb: 0.5,
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: '#64748b',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          {info.title}
                        </Typography>
                        {info.link ? (
                          <Typography 
                            component="a" 
                            href={info.link}
                            variant="h6"
                            sx={{ 
                              color: '#0f172a',
                              textDecoration: 'none',
                              fontWeight: 700,
                              fontSize: '1.2rem',
                              transition: 'all 0.2s',
                              '&:hover': { 
                                color: '#3b82f6',
                                transform: 'translateX(-3px)',
                                display: 'inline-block'
                              }
                            }}
                          >
                            {info.value}
                          </Typography>
                        ) : (
                          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.2rem', color: '#0f172a' }}>
                            {info.value}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact
