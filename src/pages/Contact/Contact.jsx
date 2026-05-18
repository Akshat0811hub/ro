import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh', textAlign: 'center' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Contact Us
      </motion.h1>
      <p style={{ marginTop: '2rem' }}>Get in touch with the G+ Series team.</p>
    </div>
  );
};

export default Contact;
