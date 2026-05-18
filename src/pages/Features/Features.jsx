import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Features = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      title: "7-Stage Advanced RO Filtration",
      desc: "Our multi-stage filtration process removes dissolved impurities, heavy metals, and harmful chemicals, ensuring your water is 100% safe.",
      img: "https://images.unsplash.com/photo-1579294218608-8e68444a1eb4?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Alkaline & Mineral Boost",
      desc: "Unlike standard ROs that strip water of essential nutrients, G+ Series restores Calcium, Magnesium, and Potassium to perfectly balance the pH level.",
      img: "https://images.unsplash.com/photo-1544868032-4d1ccbb107d3?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Zero Water Wastage Technology",
      desc: "Our eco-friendly systems recirculate rejected water back to the overhead tank, saving thousands of liters of water annually.",
      img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Smart Filter Replacement Alerts",
      desc: "Never guess when to change your filters again. Our smart app and display panel give you real-time updates on your filter's lifespan.",
      img: "https://images.unsplash.com/photo-1585728748176-455ac5eed962?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const faqs = [
    { q: "How often do I need to replace the filters?", a: "Typically, filters should be replaced every 6 to 12 months depending on the water quality in your area." },
    { q: "Does the G+ Series require professional installation?", a: "Yes, we provide free professional installation by certified technicians with every purchase." },
    { q: "Is it suitable for high TDS water?", a: "Absolutely! The G+ Series handles TDS levels up to 2500 ppm effortlessly." }
  ];

  return (
    <div className="inner-page" style={{ paddingBottom: '6rem' }}>
      <section style={{ padding: '8rem 2rem 4rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: '3.5rem', margin: '1rem 0' }}>Technology & Features</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Discover the cutting-edge engineering that makes G+ Series the ultimate choice for your home.
          </p>
        </motion.div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            style={{ 
              display: 'flex', 
              flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: '4rem',
              marginBottom: '6rem'
            }}
          >
            <motion.div 
              style={{ flex: 1 }}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-blue-dark)' }}>{feature.title}</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>{feature.desc}</p>
            </motion.div>
            
            <motion.div 
              style={{ flex: 1, height: '400px', borderRadius: '30px', overflow: 'hidden' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img src={feature.img} alt={feature.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section style={{ maxWidth: '800px', margin: '6rem auto 0', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="glass"
                style={{ 
                  marginBottom: '1rem', 
                  borderRadius: '15px',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{faq.q}</h3>
                  {openFaq === idx ? <ChevronUp /> : <ChevronDown />}
                </div>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{ padding: '0 2rem 1.5rem', color: 'var(--color-text-muted)', margin: 0 }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Features;
