import React from 'react';
import { motion } from 'framer-motion';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hero-badge"
          >
            <span>Next Generation Purification</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Water as <br /> <span className="text-highlight">Nature</span> Intended.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Transform your tap water into crystal-clear, mineral-rich hydration. Experience the pinnacle of RO technology designed for modern homes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-actions"
          >
            <button className="btn btn-primary magnetic" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>Explore Products</button>
            <button className="btn btn-secondary magnetic" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>Our Technology</button>
          </motion.div>
        </div>
        
        <div className="hero-image-container">
          <motion.div 
            className="hero-image-placeholder glass"
            style={{ padding: 0, overflow: 'hidden', height: '600px', width: '400px', borderRadius: '30px', position: 'relative' }}
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=800&auto=format&fit=crop" alt="Pure Water Splash" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="hero-image-overlay"></div>
          </motion.div>

          {/* Floating UI Elements */}
          <motion.div 
            className="floating-card float-left glass"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="float-icon">💧</span>
            <div className="float-text">
              <strong>100% Pure</strong>
              <span>RO + UV + UF</span>
            </div>
          </motion.div>

          <motion.div 
            className="floating-card float-right glass"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <span className="float-icon">⭐</span>
            <div className="float-text">
              <strong>4.9/5 Ratings</strong>
              <span>50k+ Happy Families</span>
            </div>
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
          <h2>Why Choose G+ Series?</h2>
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
          {[
            { name: "G+ Series Black", price: "$499", img: "/assets/black.jpg.jpeg" },
            { name: "G+ Series Blue", price: "$449", img: "/assets/blue.jpg.jpeg" },
            { name: "G+ Series Desert Brown", price: "$479", img: "/assets/desert brown.jpg.jpeg" },
            { name: "G+ Series Sea Green", price: "$459", img: "/assets/sea green.jpg.jpeg" }
          ].map((product, idx) => (
            <motion.div 
              key={idx}
              className="product-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="product-image-container" style={{ backgroundColor: '#ffffff', padding: '1rem' }}>
                 <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
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
          <h2>The G+ Series Process</h2>
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
