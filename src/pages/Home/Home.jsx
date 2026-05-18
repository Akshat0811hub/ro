import React from 'react';
import { motion } from 'framer-motion';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Pure Water, <br /> Pure <span className="text-highlight">Life</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Experience the next generation of water purification. Crystal clear, mineral-rich, and perfectly balanced for your health.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-actions"
          >
            <button className="btn btn-primary magnetic">Explore Products</button>
            <button className="btn btn-secondary magnetic">Watch Video</button>
          </motion.div>
        </div>
        
        <div className="hero-image-container">
          {/* Placeholder for floating purifier image */}
          <motion.div 
            className="hero-image-placeholder glass"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="placeholder-text">Floating Purifier Image</span>
          </motion.div>
          {/* Blob background */}
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Why Choose AquaPura?</h2>
          <p>Uncompromising quality for your family's health.</p>
        </motion.div>
        
        <div className="features-grid">
          {[
            { title: "7-Stage Purification", desc: "Advanced RO + UV + UF + TDS control ensures every drop is pure and safe." },
            { title: "Alkaline Boost", desc: "Balances pH levels and adds essential minerals for better immunity." },
            { title: "Smart Touch Display", desc: "Monitor filter life, water quality, and dispense water with a tap." },
            { title: "Zero Water Wastage", desc: "Innovative technology that recycles reject water back to the tank." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              className="feature-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Premium RO Systems</h2>
          <p>Designed to fit perfectly in your modern kitchen.</p>
        </motion.div>

        <div className="products-grid">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              className="product-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="product-image-container">
                 {/* Placeholder for product image */}
                 <div className="product-image-placeholder">Product {item}</div>
              </div>
              <div className="product-info">
                <h3>AquaPro Series {item}</h3>
                <p className="price">$399</p>
                <button className="btn btn-primary magnetic" style={{ width: '100%', marginTop: '1rem', padding: '0.8rem' }}>View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Purification Process Timeline */}
      <section className="timeline-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>The AquaPura Process</h2>
          <p>How we turn tap water into the purest form of hydration.</p>
        </motion.div>
        
        <div className="timeline">
          {["Pre-Filtration", "Activated Carbon", "RO Membrane", "UV Treatment", "Alkaline Mineralization"].map((step, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <h3>Step {idx + 1}: {step}</h3>
                <p>Removes impurities and balances water to perfection.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="statistics glass">
        <div className="stats-grid">
          {[
            { value: "50K+", label: "Happy Families" },
            { value: "99.9%", label: "Purity Guarantee" },
            { value: "10M+", label: "Liters Purified" },
            { value: "5 Yrs", label: "Warranty" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-content glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to upgrade your drinking water?</h2>
          <p>Book a free water testing at your home today.</p>
          <button className="btn btn-primary magnetic" style={{ marginTop: '2rem' }}>Book Free Test</button>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
