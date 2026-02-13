import { useRef, useEffect, useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  Stack,
  Divider,
  IconButton
} from '@mui/material'
import {
  Email,
  Phone,
  Facebook,
  Instagram,
  LinkedIn
} from '@mui/icons-material'
import { Link } from 'react-scroll'

const MOBILE_BREAKPOINT = 768

const Footer = () => {
  const footerRef = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const footerTopRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setRevealed(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          footerTopRef.current = footer.getBoundingClientRect().top + window.scrollY
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth > MOBILE_BREAKPOINT) return
    const footer = footerRef.current
    if (!footer) return
    let rafId = null
    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        const rect = footer.getBoundingClientRect()
        const viewportH = window.innerHeight
        if (rect.top > viewportH) {
          footer.style.setProperty('--parallax-y', '0')
        } else {
          const y = (viewportH - rect.top) * 0.04
          footer.style.setProperty('--parallax-y', `${Math.round(y)}`)
        }
        rafId = null
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const links = [
    { label: 'בית', to: 'home' },
    { label: 'קצת עליי', to: 'about' },
    { label: 'מה אני מציע', to: 'services' },
    { label: 'איך זה עובד', to: 'process' },
    { label: 'בואו נדבר', to: 'contact' }
  ]

  const socialLinks = [
    { icon: <Facebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <LinkedIn />, href: 'https://linkedin.com', label: 'LinkedIn' }
  ]

  return (
    <Box 
      ref={footerRef}
      component="footer" 
      sx={{ 
        background: '#0f172a',
        color: 'white',
        pt: 8,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: '#3b82f6',
        }
      }}
      className={`mobile-reveal-root mobile-footer-compact max-sm:pt-5 max-sm:pb-4 ${revealed ? 'footer-revealed' : ''}`}
    >
      <div className="footer-parallax-layer" aria-hidden="true" />
      <Container maxWidth="lg" className="mobile-container max-sm:px-4" style={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} className="footer-mobile-grid max-sm:gap-6 max-sm:flex-col max-sm:text-center">
          {/* Block 1: Brand + description + social */}
          <Grid item xs={12} md={4} className="footer-mobile-block footer-mobile-block-1 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center">
            <Box 
              sx={{ 
                height: 50,
                display: 'flex',
                alignItems: 'center',
                mb: 2
              }}
            >
              <img 
                src="/logo.png" 
                alt="Alma Digital" 
                className="max-w-full h-auto"
                style={{ 
                  height: '100%',
                  maxWidth: '100%',
                  filter: 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(255,255,255,0.3))',
                  cursor: 'pointer'
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                opacity: 0.8, 
                lineHeight: 1.8, 
                mb: 3,
                fontSize: '1.05rem'
              }}
              className="max-sm:!text-base max-sm:mb-4"
            >
              דפי נחיתה מקצועיים לעסקים קטנים.
              <br />
              בונים פתרונות דיגיטליים שמניבים תוצאות אמיתיות.
            </Typography>
            
            <Stack direction="row" spacing={1} className="footer-mobile-social max-sm:justify-center">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{ 
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-3px)'
                    },
                    transition: 'all 0.3s'
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Block 2: Quick links */}
          <Grid item xs={12} sm={6} md={4} className="footer-mobile-block footer-mobile-block-2 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center">
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: '1.3rem'
              }}
              className="footer-mobile-links-title max-sm:!text-lg"
            >
              קישורים מהירים
            </Typography>
            <Stack spacing={1.5} className="mobile-footer-links">
              {links.map((link, index) => (
                <Link 
                  key={index}
                  to={link.to} 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  style={{ cursor: 'pointer' }}
                >
                  <Typography
                    sx={{ 
                      color: 'white',
                      opacity: 0.8,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      display: 'block',
                      fontSize: '1.05rem',
                      '&:hover': { 
                        opacity: 1,
                        transform: 'translateX(-5px)',
                        color: '#3b82f6'
                      }
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Block 3: Contact */}
          <Grid item xs={12} sm={6} md={4} className="footer-mobile-block footer-mobile-block-3 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center">
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: '1.3rem'
              }}
              className="max-sm:!text-lg"
            >
              יצירת קשר
            </Typography>
            <Stack spacing={2.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ opacity: 0.8, fontSize: 22 }} />
                <MuiLink 
                  href="mailto:info@almadigitalil.com"
                  sx={{ 
                    color: 'white',
                    opacity: 0.8,
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    transition: 'all 0.2s',
                    '&:hover': { 
                      opacity: 1,
                      color: '#818cf8'
                    }
                  }}
                >
                  info@almadigitalil.com
                </MuiLink>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Phone sx={{ opacity: 0.8, fontSize: 22 }} />
                <MuiLink 
                  href="tel:+972525473560"
                  sx={{ 
                    color: 'white',
                    opacity: 0.8,
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    transition: 'all 0.2s',
                    '&:hover': { 
                      opacity: 1,
                      color: '#818cf8'
                    }
                  }}
                >
                  0525473560
                </MuiLink>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ textAlign: 'center' }} className="max-sm:px-2">
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.7,
              fontSize: '1rem'
            }}
            className="mobile-footer-copy max-sm:!text-sm"
          >
            © {new Date().getFullYear()} Alma Digital. כל הזכויות שמורות. | עוצב ונבנה באהבה ❤️
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
