import React from 'react';
import styled from 'styled-components';
import { FaMicrochip, FaMobileAlt, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const TechnologyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 1.5rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const TechSection = styled.section`
  margin: 4rem 0;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TechCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    width: 60px;
    height: 60px;
    background: ${({ theme }) => `${theme.colors.primary.light}20`};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 1.5rem;
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  
  li {
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: flex;
    align-items: flex-start;
    
    &::before {
      content: '✓';
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      margin-right: 0.75rem;
    }
  }
`;

const techData = [
  {
    icon: <FaMicrochip />,
    title: 'Wearable Sensors',
    description: 'Advanced IoT sensors that continuously monitor vital signs with medical-grade accuracy.',
    features: [
      'Heart rate monitoring',
      'Blood oxygen levels',
      'Body temperature',
      'Activity tracking',
      'Sleep analysis'
    ]
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Application',
    description: 'User-friendly mobile app for real-time health data visualization and alerts.',
    features: [
      'Real-time monitoring',
      'Health insights',
      'Medication reminders',
      'Emergency alerts',
      'Health reports'
    ]
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Platform',
    description: 'Secure cloud infrastructure for data storage and processing.',
    features: [
      'HIPAA compliant',
      'Unlimited data storage',
      'Data encryption',
      'Automatic backups',
      'Scalable infrastructure'
    ]
  },
  {
    icon: <FaShieldAlt />,
    title: 'Security',
    description: 'Enterprise-grade security to protect sensitive health data.',
    features: [
      'End-to-end encryption',
      'Two-factor authentication',
      'Regular security audits',
      'Data anonymization',
      'Compliance with regulations'
    ]
  },
  {
    icon: <FaChartLine />,
    title: 'Analytics',
    description: 'AI-powered analytics for predictive healthcare insights.',
    features: [
      'Health trend analysis',
      'Anomaly detection',
      'Predictive modeling',
      'Custom reports',
      'Health score'
    ]
  }
];

const Technology = () => {
  return (
    <TechnologyContainer>
      <Header>
        <h1>Our Technology</h1>
        <p>
          We combine cutting-edge IoT technology with advanced data analytics to deliver 
          comprehensive health monitoring solutions that are both powerful and easy to use.
        </p>
      </Header>
      
      <TechSection>
        <TechGrid>
          {techData.map((tech, index) => (
            <TechCard key={index}>
              <div className="icon">
                {tech.icon}
              </div>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
              <FeatureList>
                {tech.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </FeatureList>
            </TechCard>
          ))}
        </TechGrid>
      </TechSection>
    </TechnologyContainer>
  );
};

export default Technology;
