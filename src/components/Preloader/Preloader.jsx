import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './preloader.css';

const Preloader = ({ setLoading }) => {
  const [fillWater, setFillWater] = useState(false);

  useEffect(() => {
    // Start filling water after a brief delay
    const fillTimer = setTimeout(() => {
      setFillWater(true);
    }, 500);

    // End preloader after the animation sequence
    const endTimer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(endTimer);
    };
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="preloader-container"
        initial={{ y: 0 }}
        exit={{ y: '-100%', transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      >
        {/* The water fill container */}
        <motion.div 
          className="water-fill"
          initial={{ height: '0%' }}
          animate={{ height: fillWater ? '110%' : '0%' }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
        </motion.div>
        
        <motion.div
          className="brand-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: fillWater ? [30, 0, -20] : 30 // floats up as water rises
          }}
          transition={{ 
            opacity: { duration: 0.8 },
            y: { duration: 3, ease: "easeInOut" }
          }}
        >
          <img src="/assets/logo.png" alt="G+ Series Logo" className="preloader-logo" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
