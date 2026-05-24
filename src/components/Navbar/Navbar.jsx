import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Features', href: '/features' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 2C16 2 4 11 4 18C4 24.627 9.373 30 16 30C22.627 30 28 24.627 28 18C28 11 16 2 16 2Z" fill="url(#navDrop)" />
              <path d="M16 12C16 12 11 16 11 19C11 21.761 13.239 24 16 24C18.761 24 21 21.761 21 19C21 16 16 12 16 12Z" fill="rgba(255,255,255,0.25)" />
              <defs>
                <linearGradient id="navDrop" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span>G<span className="navbar__logo-plus">+</span> Series</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                  <span className={`navbar__link-indicator ${isActive ? 'navbar__link-indicator--active' : ''}`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <Link to="/contact" className="btn-primary navbar__cta">
            Book Free Test
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className="navbar__mobile-menu"
        initial={false}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <ul className="navbar__mobile-links">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href;
            return (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link 
                  to={link.href} 
                  className={`navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
          >
            <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
              Book Free Test
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
