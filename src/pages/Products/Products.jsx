import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh', textAlign: 'center' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Our Products
      </motion.h1>
      <p style={{ marginTop: '2rem' }}>Explore our range of premium RO water purifiers.</p>
    </div>
  );
};

export default Products;
