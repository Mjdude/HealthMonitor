import React from 'react';
import styled from 'styled-components';
import { FaHospital, FaUsers, FaChartLine } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const AboutHeader = styled.div`
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

const MissionSection = styled.section`
  margin: 5rem 0;
  
  h2 {
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 2rem;
    text-align: center;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <h1>About HealthMonitor</h1>
        <p>
          We are revolutionizing healthcare through innovative IoT technology, 
          providing real-time monitoring solutions that improve patient outcomes 
          and transform the way healthcare is delivered.
        </p>
      </AboutHeader>
      
      <MissionSection>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make healthcare more accessible, efficient, and effective 
          through cutting-edge technology. We believe in empowering both patients and 
          healthcare providers with the tools they need for better health management.
        </p>
      </MissionSection>
      
      <StatsContainer>
        <StatCard>
          <FaHospital />
          <h3>50+</h3>
          <p>Healthcare Partners</p>
        </StatCard>
        
        <StatCard>
          <FaUsers />
          <h3>10,000+</h3>
          <p>Active Users</p>
        </StatCard>
        
        <StatCard>
          <FaChartLine />
          <h3>99.9%</h3>
          <p>System Uptime</p>
        </StatCard>
      </StatsContainer>
    </AboutContainer>
  );
};

export default About;
