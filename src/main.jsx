import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import './index.css'

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#0f172a',
      light: '#1e293b',
      dark: '#020617',
    },
    secondary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: '#0f172a'
    },
    h2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#0f172a'
    },
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      color: '#0f172a'
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      color: '#0f172a'
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      color: '#0f172a'
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      color: '#0f172a'
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      lineHeight: 1.75,
      color: '#0f172a'
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      lineHeight: 1.7,
      color: '#0f172a'
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    ...Array(19).fill('0 25px 50px -12px rgb(0 0 0 / 0.25)')
  ],
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
