import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserMd, FaMobileAlt, FaChartLine, FaBell } from 'react-icons/fa';

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(50% - 2px);
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, 
      ${({ theme }) => theme.colors.primary.main}, 
      ${({ theme }) => theme.colors.secondary.main}
    );
    border-radius: 2px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 40px;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.5rem 0 0;
  }
`;

const Step = styled(motion.div)`
  display: flex;
  margin-bottom: 4rem;
  position: relative;
  width: 100%;
  max-width: 1000px;
  
  &:nth-child(odd) {
    flex-direction: row;
    text-align: right;
    justify-content: flex-start;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
      text-align: left;
      justify-content: flex-start;
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: left;
    justify-content: flex-end;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
      justify-content: flex-start;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 3rem;
  }
`;

const StepContent = styled.div`
  flex: 0 1 50%;
  padding: 0 4rem;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    padding-left: 0;
  }
  
  &:nth-child(even) {
    padding-right: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
    padding: 0 0 0 6rem !important;
  }
  
  ${Step}:nth-child(odd) & {
    margin-left: auto;
  }
  
  ${Step}:nth-child(even) & {
    margin-right: auto;
  }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  border: 4px solid ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.main};
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 0 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
    margin-right: 1rem;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary.dark};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors.primary.main};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const StepConnector = styled.div`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 4px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => theme.colors.secondary.main}
  );
  transform: translateY(-50%);
  
  ${Step}:nth-child(odd) & {
    right: -20px;
    left: auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      right: auto;
      left: 105px;
      top: 100%;
      width: 4px;
      height: 30px;
      transform: none;
    }
  }
  
  ${Step}:nth-child(even) & {
    left: -20px;
    right: auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 35px;
      right: auto;
      top: 100%;
      width: 4px;
      height: 30px;
      transform: none;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const steps = [
  {
    number: 1,
    icon: <FaUserMd />,
    title: 'Consultation & Setup',
    description: 'Schedule a consultation with our healthcare professionals to assess your needs. We\'ll help you set up the monitoring devices and connect them to your account.'
  },
  {
    number: 2,
    icon: <FaMobileAlt />,
    title: 'Connect Devices',
    description: 'Pair your wearable devices with our mobile app. Our platform supports a wide range of health monitoring devices for comprehensive tracking.'
  },
  {
    number: 3,
    icon: <FaChartLine />,
    title: 'Real-time Monitoring',
    description: 'Your health data is continuously monitored and analyzed. Our AI system detects patterns and provides actionable insights about your health status.'
  },
  {
    number: 4,
    icon: <FaBell />,
    title: 'Get Alerts & Reports',
    description: 'Receive instant notifications for any concerning health metrics. Access detailed reports and share them with your healthcare provider.'
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <StepsContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {steps.map((step, index) => (
        <Step 
          key={index}
          as={motion.div}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <StepNumber>{step.number}</StepNumber>
          <StepContent>
            <StepTitle>
              {step.icon}
              {step.title}
            </StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </StepContent>
          <StepConnector />
        </Step>
      ))}
    </StepsContainer>
  );
};

export default HowItWorks;
