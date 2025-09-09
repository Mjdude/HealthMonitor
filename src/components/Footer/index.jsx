import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: white;
  padding: 3rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background: ${({ theme }) => theme.colors.primary.main};
      
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.75rem;
  }
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
    display: inline-block;
    
    &:hover {
      color: white;
      transform: translateX(5px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
  
  a {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  
  a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>HealthMonitor</h3>
          <p>
            Revolutionizing healthcare with IoT technology for better patient monitoring 
            and improved healthcare outcomes.
          </p>
          <SocialLinks>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/technology">Technology</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Us</h3>
          <p>
            123 Healthcare St.<br />
            Medical District, City 10001<br />
            Email: info@healthmonitor.com<br />
            Phone: (123) 456-7890
          </p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} HealthMonitor. All rights reserved. 
        Made with <FaHeart style={{ color: '#ff6b6b', margin: '0 4px' }} /> by HealthMonitor Team
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
