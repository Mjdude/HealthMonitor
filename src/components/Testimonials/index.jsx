import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 4rem;
    color: ${({ theme }) => `${theme.colors.primary.light}30`};
    font-family: serif;
    line-height: 1;
  }
  
  .quote {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-style: italic;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }
  
  .author {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
  }
  
  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
    border: 3px solid ${({ theme }) => theme.colors.primary.light};
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .author-info {
    h4 {
      color: ${({ theme }) => theme.colors.primary.dark};
      margin: 0 0 0.25rem;
    }
    
    p {
      color: ${({ theme }) => theme.colors.text.secondary};
      margin: 0;
      font-size: 0.9rem;
    }
  }
`;

const testimonialData = [
  {
    id: 1,
    quote: "HealthMonitor has transformed how we monitor our patients with chronic conditions. The real-time alerts have helped us intervene early on multiple occasions.",
    author: "Dr. James Wilson",
    role: "Cardiologist, City Medical Center",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    quote: "As someone with diabetes, having my vitals monitored 24/7 gives me peace of mind. The app is intuitive and the support team is incredibly responsive.",
    author: "Maria Garcia",
    role: "Patient",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "The analytics dashboard provides insights we've never had before. It's helping us identify trends and improve patient outcomes across our network.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer, HealthPlus",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <TestimonialsGrid>
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FaQuoteLeft style={{ color: '#e2e8f0', fontSize: '2rem', marginBottom: '1rem' }} />
              <p className="quote">{testimonial.quote}</p>
              <div className="author">
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </motion.div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
