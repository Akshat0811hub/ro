import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh', textAlign: 'center' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Features
      </motion.h1>
      <p style={{ marginTop: '2rem' }}>Discover the cutting-edge technology behind AquaPura.</p>
    </div>
  );
};

export default Features;
