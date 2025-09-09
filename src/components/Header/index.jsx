import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHeartbeat, FaUserMd } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: ${({ theme, scrolled }) => 
    scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${({ scrolled }) => 
    scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.8rem;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1001;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary.main : theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
    padding: 0.8rem 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/technology', label: 'Technology' },
    { to: '/team', label: 'Our Team' },
  ];

  return (
    <>
      <Navbar scrolled={scrolled || isMenuOpen}>
        <NavContainer>
          <Logo to="/">
            <FaHeartbeat /> HealthMonitor
          </Logo>
          
          <MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
          
          <NavMenu isOpen={isMenuOpen}>
            {navLinks.map((link) => (
              <NavItem key={link.to}>
                <NavLink
                  to={link.to}
                  $isActive={location.pathname === link.to}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </NavItem>
            ))}
            <NavItem>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="btn btn-primary"
                  style={{
                    padding: '0.5rem 1.5rem',
                    borderRadius: '6px',
                    backgroundColor: '#2D8BBA',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'inline-block',
                    marginLeft: '1rem'
                  }}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </motion.div>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Navbar>
      
      <Overlay 
        isOpen={isMenuOpen} 
        onClick={closeMenu} 
      />
    </>
  );
};

export default Header;
