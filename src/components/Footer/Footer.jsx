import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './footer.css';

const footerLinks = {
  Products: ['G+ Classic', 'G+ Pro', 'G+ Elite', 'G+ Ultra'],
  Technology: ['7-Stage Filter', 'Alkaline Boost', 'UV Sterilization', 'Smart Display'],
  Support: ['Installation', 'AMC Plans', 'Service Centers', 'FAQs'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Contact'],
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer ref={ref} className="footer">
      {/* Top wave */}
      <div className="footer__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C480,0 960,80 1440,40 L1440,0 L0,0 Z" fill="#080c12"/>
        </svg>
      </div>

      <div className="footer__bg">
        <div className="footer__orb footer__orb--1" />
        <div className="footer__orb footer__orb--2" />
      </div>

      <div className="container footer__inner">
        {/* Brand */}
        <motion.div
          className="footer__brand"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M16 2C16 2 4 11 4 18C4 24.627 9.373 30 16 30C22.627 30 28 24.627 28 18C28 11 16 2 16 2Z" fill="url(#footDrop)"/>
                <path d="M16 12C16 12 11 16 11 19C11 21.761 13.239 24 16 24C18.761 24 21 21.761 21 19C21 16 16 12 16 12Z" fill="rgba(255,255,255,0.2)"/>
                <defs>
                  <linearGradient id="footDrop" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00d4ff"/>
                    <stop offset="100%" stopColor="#06f7e8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>G<span className="footer__logo-plus">+</span> Series</span>
          </div>
          <p className="footer__tagline">
            Engineering water perfection since 2010. 
            Trusted by 50,000+ households across India.
          </p>
          <div className="footer__socials">
            {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((s) => (
              <a key={s} href="#" className="footer__social" aria-label={s} data-cursor-hover>
                <span>{s[0]}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        {Object.entries(footerLinks).map(([cat, links], i) => (
          <motion.div
            key={cat}
            className="footer__col"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 * (i + 1), ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="footer__col-title">{cat}</h4>
            <ul className="footer__col-links">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">© 2025 G+ Series. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
            <a href="#" className="footer__legal-link">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
