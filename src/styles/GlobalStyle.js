import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.default};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
    font-weight: 600;
    line-height: 1.2;
  }
  
  h1 {
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
  
  button, .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  
  .btn-primary {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: white;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
  
  .btn-outline {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.light}20;
    }
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  section {
    padding: 5rem 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 3rem 0;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;
