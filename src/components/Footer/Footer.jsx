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
            <img src="/assets/blacklogo.png" alt="CCK Logo" className="footer__logo-image" style={{ height: '54px', width: 'auto', objectFit: 'contain', display: 'block' }} />
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
          <p className="footer__copy">© 2025 CCK. All rights reserved.</p>
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
