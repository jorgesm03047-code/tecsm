import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(var(--bg-primary-rgb), 0)', 'var(--bg-glass)']
  );
  
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ['1px solid transparent', 'var(--border-glass)']
  );

  const navShadow = useTransform(
    scrollY,
    [0, 50],
    ['none', 'var(--shadow-soft)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '/servicios' },
    { name: 'Productos', href: '/productos' },
    { name: 'Portafolio', href: '/portafolio' },
  ];

  return (
    <motion.header
      className="navbar-wrapper"
      style={{
        background: navBackground,
        borderBottom: navBorder,
        boxShadow: navShadow,
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Logo size={32} />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-links-desktop">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <div className="hidden-mobile">
            <Button to="/contacto" variant="primary">
              Cotizar Proyecto
            </Button>
          </div>
          <button 
            className="mobile-menu-toggle hidden-desktop"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contacto" 
            className="btn btn-primary mobile-cta"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ marginTop: '1rem', textAlign: 'center' }}
          >
            Cotizar Proyecto
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
