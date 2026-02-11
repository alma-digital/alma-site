import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  alpha,
  Divider
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import TimelineIcon from '@mui/icons-material/Timeline'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  })

  const menuItems = [
    { label: 'בית', to: 'home', icon: <HomeIcon sx={{ fontSize: 20 }} /> },
    { label: 'קצת עליי', to: 'about', icon: <AutoAwesomeIcon sx={{ fontSize: 20 }} /> },
    { label: 'מה אני מציע', to: 'services', icon: <RocketLaunchIcon sx={{ fontSize: 20 }} /> },
    { label: 'איך זה עובד', to: 'process', icon: <TimelineIcon sx={{ fontSize: 20 }} /> },
  ]

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={trigger ? 4 : 0}
        sx={{ 
          bgcolor: trigger ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: trigger ? '1px solid rgba(59, 130, 246, 0.15)' : '1px solid rgba(59, 130, 246, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.5, minHeight: { xs: 64, md: 70 } }}>
              {/* Logo - Removed */}
              <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Link key={item.to} to={item.to} spy={true} smooth={true} offset={-70} duration={500}>
                  <Button 
                    startIcon={item.icon}
                    sx={{ 
                      color: 'text.primary',
                      px: 2.5,
                      py: 1.2,
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      fontFamily: '"Rubik", sans-serif',
                      borderRadius: 3,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '& .MuiButton-startIcon': {
                        marginLeft: 10,
                        marginRight: 0
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 3,
                        background: '#3b82f6',
                        borderRadius: '3px 3px 0 0',
                        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      },
                      '&:hover': {
                        bgcolor: alpha('#3b82f6', 0.08),
                        color: '#3b82f6',
                        transform: 'translateY(-2px)',
                        '&::before': {
                          width: '80%',
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              
              <Box sx={{ ml: 2 }}>
                <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                  <Button 
                    variant="contained" 
                    startIcon={<ChatBubbleIcon />}
                    sx={{
                      background: '#0f172a',
                      color: 'white',
                      px: 3.5,
                      py: 1.3,
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      fontFamily: '"Rubik", sans-serif',
                      borderRadius: 4,
                      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.35)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '& .MuiButton-startIcon': {
                        marginLeft: 10,
                        marginRight: 0
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'left 0.5s',
                      },
                      '&:hover': {
                        background: '#1e293b',
                        boxShadow: '0 12px 32px rgba(15, 23, 42, 0.5)',
                        transform: 'translateY(-3px) scale(1.02)',
                        '&::before': {
                          left: '100%',
                        }
                      }
                    }}
                  >
                    בואו נדבר
                  </Button>
                </Link>
              </Box>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                bgcolor: alpha('#3b82f6', 0.1),
                width: 48,
                height: 48,
                transition: 'all 0.3s',
                '&:hover': {
                  bgcolor: alpha('#3b82f6', 0.2),
                  transform: 'rotate(90deg)'
                }
              }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon sx={{ color: '#3b82f6', fontSize: 28 }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 300,
            background: '#0f172a',
            color: 'white',
            boxShadow: '0 0 50px rgba(0,0,0,0.3)'
          }
        }}
      >
          <Box sx={{ p: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {/* Logo - Removed */}
          <IconButton 
            onClick={() => setDrawerOpen(false)} 
            sx={{ 
              color: 'white',
              bgcolor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.2)',
                transform: 'rotate(90deg)'
              },
              transition: 'all 0.3s'
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mx: 2 }} />
        
        <List sx={{ px: 2, mt: 2 }}>
          {menuItems.map((item, index) => (
            <ListItem key={item.to} disablePadding sx={{ mb: 1.5 }}>
              <Link 
                to={item.to} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                style={{ width: '100%' }}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemButton 
                  sx={{ 
                    borderRadius: 3,
                    py: 1.5,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s',
                    animation: `slideInRight 0.4s ease-out ${index * 0.1}s both`,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateX(-8px)'
                    }
                  }}
                >
                  <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', fontSize: 26 }}>
                    {item.icon}
                  </Box>
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: '1.15rem',
                      fontFamily: '"Rubik", sans-serif'
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>

        <Box sx={{ p: 3, mt: 'auto' }}>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<ChatBubbleIcon />}
              onClick={() => setDrawerOpen(false)}
              sx={{
                bgcolor: 'white',
                color: '#0f172a',
                py: 1.8,
                fontWeight: 700,
                fontSize: '1.15rem',
                fontFamily: '"Rubik", sans-serif',
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                transition: 'all 0.3s',
                '& .MuiButton-startIcon': {
                  marginLeft: 12,
                  marginRight: 0
                },
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.95)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)'
                }
              }}
            >
              בואו נדבר
            </Button>
          </Link>
        </Box>
      </Drawer>

      <Toolbar sx={{ minHeight: { xs: 64, md: 70 } }} />
    </>
  )
}

export default Navbar
