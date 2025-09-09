import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaHeartbeat, FaChartLine, FaMobileAlt, FaCloud, FaUserMd } from 'react-icons/fa';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 6rem 0 4rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-right: 0;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary.dark};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: ${({ theme }) => theme.colors.primary.main};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
    margin: 0 auto 2.5rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &.primary {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: white;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.dark};
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    
    &:hover {
      background-color: ${({ theme }) => `${theme.colors.primary.light}20`};
      transform: translateY(-2px);
    }
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary.main};
    margin-right: 1rem;
  }
`;

const StatContent = styled.div``;

const StatNumber = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.dark};
  line-height: 1.2;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const HeroImage = styled.div`
  flex: 1;
  position: relative;
  
  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const FloatingIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`;

const FloatingIcon = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary.light};
  opacity: 0.3;
  font-size: 5rem;
  
  &:nth-child(1) {
    top: 10%;
    left: 5%;
    animation: float 15s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 10%;
    animation: float 20s ease-in-out infinite reverse;
  }
  
  &:nth-child(3) {
    bottom: 15%;
    left: 15%;
    animation: float 18s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(10deg);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <FloatingIcons>
        <FloatingIcon><FaHeartbeat /></FloatingIcon>
        <FloatingIcon><FaChartLine /></FloatingIcon>
        <FloatingIcon><FaMobileAlt /></FloatingIcon>
        <FloatingIcon><FaCloud /></FloatingIcon>
      </FloatingIcons>
      
      <Container>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title>
              Revolutionizing <span>Healthcare</span> with IoT Technology
            </Title>
            <Subtitle>
              Monitor vital signs in real-time, predict health issues before they occur, 
              and provide better care with our advanced health monitoring platform.
            </Subtitle>
            
            <ButtonsContainer>
              <Button 
                href="#demo" 
                className="primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChartLine /> View Demo
              </Button>
              <Button 
                href="#contact" 
                className="secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUserMd /> Contact Us
              </Button>
            </ButtonsContainer>
            
            <StatsContainer>
              <StatItem>
                <FaHeartbeat />
                <StatContent>
                  <StatNumber>24/7</StatNumber>
                  <StatLabel>Real-time Monitoring</StatLabel>
                </StatContent>
              </StatItem>
              <StatItem>
                <FaChartLine />
                <StatContent>
                  <StatNumber>99.9%</StatNumber>
                  <StatLabel>System Uptime</StatLabel>
                </StatContent>
              </StatItem>
              <StatItem>
                <FaMobileAlt />
                <StatContent>
                  <StatNumber>10K+</StatNumber>
                  <StatLabel>Active Users</StatLabel>
                </StatContent>
              </StatItem>
            </StatsContainer>
          </motion.div>
        </Content>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroImage>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Healthcare Monitoring Dashboard"
            />
          </HeroImage>
        </motion.div>
      </Container>
    </HeroSection>
  );
};

export default Hero;
