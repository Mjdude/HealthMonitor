import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaChartLine, FaBell, FaMobileAlt, FaShieldAlt, FaDatabase } from 'react-icons/fa';

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${({ theme, color }) => `${color}15`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${({ color }) => color};
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary.dark};
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
    text-decoration: underline;
  }
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const features = [
  {
    icon: <FaHeartbeat />,
    title: 'Real-time Monitoring',
    description: 'Continuously track vital signs including heart rate, blood pressure, oxygen levels, and more with our advanced IoT sensors.',
    color: '#E53E3E',
    link: '#',
    linkText: 'Learn more'
  },
  {
    icon: <FaChartLine />,
    title: 'Advanced Analytics',
    description: 'Get detailed insights and trends with our AI-powered analytics dashboard that helps identify potential health issues early.',
    color: '#3182CE',
    link: '#',
    linkText: 'View analytics'
  },
  {
    icon: <FaBell />,
    title: 'Smart Alerts',
    description: 'Receive instant notifications for any abnormal readings or potential health concerns, ensuring timely intervention.',
    color: '#D69E2E',
    link: '#',
    linkText: 'Configure alerts'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Access',
    description: 'Monitor your health data anytime, anywhere with our user-friendly mobile application for iOS and Android.',
    color: '#805AD5',
    link: '#',
    linkText: 'Download app'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Private',
    description: 'Your health data is encrypted and protected with enterprise-grade security measures and HIPAA compliance.',
    color: '#38A169',
    link: '#',
    linkText: 'Security details'
  },
  {
    icon: <FaDatabase />,
    title: 'Data History',
    description: 'Access your complete health history with detailed reports and export options for sharing with healthcare providers.',
    color: '#4C51BF',
    link: '#',
    linkText: 'View history'
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <FeaturesContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          as={motion.div}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <IconWrapper color={feature.color}>
            {feature.icon}
          </IconWrapper>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
          <FeatureLink href={feature.link}>
            {feature.linkText} <span>→</span>
          </FeatureLink>
        </FeatureCard>
      ))}
    </FeaturesContainer>
  );
};

export default Features;
