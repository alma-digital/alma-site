import { Box, Container, Typography } from '@mui/material'
import { HelpCircle } from 'lucide-react'
import { Badge } from './ui/badge'

const faqItems = [
  {
    q: 'כמה זמן לוקח לבנות דף נחיתה?',
    a: 'בדרך כלל בין שבוע לשבועיים מהאפיון ועד לאתר באוויר.'
  },
  {
    q: 'האם אפשר לעדכן תוכן בעצמי?',
    a: 'כן. אפשר להוסיף הדרכה או פאנל ניהול פשוט לעדכונים.'
  },
  {
    q: 'האתר יהיה מותאם למובייל?',
    a: 'כן. כל האתרים נבנים רספונסיביים ומאופטמים לנייד.'
  },
  {
    q: 'מה כולל המחיר?',
    a: 'עיצוב, פיתוח, חיבור טופס/וואטסאפ והעלאה לשרת. לפי הצורך גם אבטחה ותחזוקה.'
  },
  {
    q: 'איך מתחילים?',
    a: 'שולחים הודעה כאן או בוואטסאפ, ומתאמים שיחת היכרות קצרה.'
  }
]

const FAQ = () => {
  return (
    <Box id="faq" sx={{ py: 12, bgcolor: '#f8fafc' }} className="mobile-section-spacing-lg">
      <Container maxWidth="lg" className="mobile-container" sx={{ px: { xs: 2, md: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }} className="mobile-section-spacing">
          <Badge variant="secondary" className="mb-4 text-lg font-bold py-3 px-4 mobile-hero-badge">
            <HelpCircle className="ml-2 h-5 w-5" />
            שאלות נפוצות
          </Badge>
          <Typography variant="h2" className="mobile-h2" sx={{ fontWeight: 700, mb: 2, color: 'var(--color-heading)' }}>
            שאלות נפוצות
          </Typography>
        </Box>

        <Box className="desktop-only" sx={{ maxWidth: 640, mx: 'auto' }}>
          {faqItems.map((item, i) => (
            <Box key={i} sx={{ mb: 2, p: 2, borderRadius: 2, bgcolor: 'white', border: '1px solid #e2e8f0' }}>
              <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>{item.q}</Typography>
              <Typography variant="body2" color="text.secondary">{item.a}</Typography>
            </Box>
          ))}
        </Box>

        <Box className="mobile-only">
          {faqItems.map((item, i) => (
            <details key={i} className="mobile-faq-item">
              <summary>{item.q}</summary>
              <div className="mobile-faq-answer">{item.a}</div>
            </details>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default FAQ
