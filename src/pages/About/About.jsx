import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh', textAlign: 'center' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        About Us
      </motion.h1>
      <p style={{ marginTop: '2rem' }}>We are AquaPura, delivering premium water purification systems.</p>
    </div>
  );
};

export default About;
