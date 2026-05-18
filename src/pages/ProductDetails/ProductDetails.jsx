import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh', textAlign: 'center' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Product Details {id}
      </motion.h1>
      <p style={{ marginTop: '2rem' }}>Detailed specifications and features for this product.</p>
    </div>
  );
};

export default ProductDetails;
