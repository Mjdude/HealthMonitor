import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const TeamContainer = styled.div`
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const TeamMember = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 300px;
  background: ${({ theme }) => theme.colors.background.light};
  background-image: url(${props => props.imageUrl || 'https://via.placeholder.com/400x400?text=Team+Member'});
  background-size: cover;
  background-position: center;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
  
  h3 {
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  
  .position {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 500;
    margin-bottom: 1rem;
    display: block;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.text.secondary};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary.light};
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const teamMembers = [
  {
    name: 'Meghana Gs',
    position: 'Chief Medical Officer',
    bio: 'Board-certified physician with 15+ years of experience in cardiology and digital health solutions.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Swetha',
    position: 'Chief Technology Officer',
    bio: 'Technology leader with expertise in IoT and AI, previously led engineering teams at major tech companies.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    social: { 
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Prem Sai',
    position: 'Head of Product',
    bio: 'Product strategist with a passion for creating user-centered healthcare solutions.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

const Team = () => {
  return (
    <TeamContainer>
      <Header>
        <h1>Our Team</h1>
        <p>
          Meet the passionate team behind HealthMonitor, dedicated to transforming healthcare 
          through innovative technology and exceptional expertise.
        </p>
      </Header>
      
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <MemberImage imageUrl={member.image} />
            <MemberInfo>
              <h3>{member.name}</h3>
              <span className="position">{member.position}</span>
              <p>{member.bio}</p>
              <SocialLinks>
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
              </SocialLinks>
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default Team;
