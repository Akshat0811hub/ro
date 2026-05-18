import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="inner-page">
      {/* About Hero */}
      <section className="about-hero" style={{ padding: '8rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: 'var(--color-blue-main)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Our Story</span>
          <h1 style={{ fontSize: '3.5rem', margin: '1rem 0' }}>Purity in Every Drop.</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            G+ Series was founded with a simple mission: to provide every home with access to safe, mineral-rich, and great-tasting water through innovative purification technology.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          <motion.div 
            className="glass" 
            style={{ padding: '3rem', borderRadius: '20px' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-blue-dark)' }}>Our Mission</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              To engineer the world's most advanced water purification systems that not only remove 99.9% of impurities but also restore essential minerals, promoting better health and well-being for families everywhere.
            </p>
          </motion.div>

          <motion.div 
            className="glass" 
            style={{ padding: '3rem', borderRadius: '20px' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-blue-dark)' }}>Our Vision</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              A world where clean drinking water is a fundamental right, not a luxury. We strive to innovate sustainably, reducing plastic waste while delivering unparalleled hydration solutions.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Core Values */}
      <section className="values-section" style={{ padding: '4rem 2rem 8rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { title: "Innovation", desc: "Pushing the boundaries of RO technology." },
              { title: "Quality", desc: "Premium materials for lasting durability." },
              { title: "Health", desc: "Mineral-balanced water for vitality." },
              { title: "Sustainability", desc: "Eco-friendly, zero water wastage designs." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ padding: '2rem', border: '1px solid var(--color-glass-border)', borderRadius: '15px' }}
              >
                <h3 style={{ color: 'var(--color-blue-main)', marginBottom: '0.5rem' }}>{value.title}</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
