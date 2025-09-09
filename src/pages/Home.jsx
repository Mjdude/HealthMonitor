import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  padding: 6rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary.dark};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.colors.primary.main}, 
      ${({ theme }) => theme.colors.secondary.main}
    );
    border-radius: 2px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      
      <Section id="features">
        <SectionTitle>Key Features</SectionTitle>
        <Features />
      </Section>
      
      <Section id="how-it-works" style={{ backgroundColor: '#f8fafc' }}>
        <SectionTitle>How It Works</SectionTitle>
        <HowItWorks />
      </Section>
      
      <Section id="testimonials">
        <SectionTitle>What Our Users Say</SectionTitle>
        <Testimonials />
      </Section>
      
      <Section id="cta" style={{ padding: '4rem 0' }}>
        <CtaSection />
      </Section>
    </HomeContainer>
  );
};

export default Home;
