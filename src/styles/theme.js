export const theme = {
  colors: {
    primary: {
      main: '#2D8BBA',
      light: '#5DABD3',
      dark: '#1A5F8B',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#4A90E2',
      light: '#7AB3F0',
      dark: '#2E5C9E',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#2ECC71',
      light: '#5CDE8C',
      dark: '#1F9D55',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
      light: '#F1F5F9'
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
      disabled: '#94A3B8'
    }
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    button: {
      fontWeight: 600,
      textTransform: 'none'
    }
  },
  spacing: (value) => `${value * 8}px`,
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  ],
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px'
  }
}
