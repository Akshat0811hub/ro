import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet } from 'lucide-react';
import './preloader.css';

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Wait 2.5 seconds before hiding preloader

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="preloader-container"
        initial={{ y: 0 }}
        exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      >
        <div className="water-wave"></div>
        
        <motion.div
          className="brand-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Droplet className="preloader-icon" size={48} strokeWidth={1.5} />
          </motion.div>
          <motion.h1 
            className="preloader-title"
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            AquaPura
          </motion.h1>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
