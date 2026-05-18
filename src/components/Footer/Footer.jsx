import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Globe, Phone, Mail, MapPin } from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <Droplet size={28} className="brand-icon" />
            <span className="brand-text">AquaPura</span>
          </Link>
          <p className="footer-desc">
            Bringing pure, refreshing, and mineral-rich water to your home. Experience the future of hydration.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon magnetic"><Globe size={20} /></a>
            <a href="#" className="social-icon magnetic"><Phone size={20} /></a>
            <a href="#" className="social-icon magnetic"><Mail size={20} /></a>
            <a href="#" className="social-icon magnetic"><MapPin size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Pure Water Lane</p>
          <p>Silicon Valley, CA 94025</p>
          <p>Email: hello@aquapura.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AquaPura. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
