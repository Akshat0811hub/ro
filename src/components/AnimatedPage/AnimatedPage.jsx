import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './AnimatedPage.css';

export default function AnimatedPage({ children }) {
  const location = useLocation();
  const path = location.pathname;

  // 1. Home Page Transition (scale up + fade + slide)
  const homeVariants = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.98 }
  };

  // 2. Catalog Products Page Transition (staggered container entry)
  const productsVariants = {
    initial: { opacity: 0, scale: 0.96, rotate: -0.5 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.96 }
  };

  // 3. Features Page Transition (Horizontal biotechnological slide in)
  const featuresVariants = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 }
  };

  // 4. Contact Page Transition (Splitscreen fold style)
  const contactVariants = {
    initial: { opacity: 0, rotateY: 10, perspective: 1000 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: -10 }
  };

  // 5. Product Details page (Cinematic zoom lens blur reveal)
  const detailsVariants = {
    initial: { opacity: 0, scale: 1.08, filter: 'blur(8px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 0.95, filter: 'blur(4px)' }
  };

  const getTransition = () => {
    return { duration: 0.65, ease: [0.16, 1, 0.3, 1] };
  };

  // Unique layout styling wrapper depending on route
  if (path === '/about') {
    // Elegant split glass panels sliding apart reveal
    return (
      <div className="animated-page-container">
        {/* Left sliding glass pane */}
        <motion.div 
          className="about-split-door door-left"
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          exit={{ x: '0%' }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        >
          <div className="door-glow" />
        </motion.div>
        {/* Right sliding glass pane */}
        <motion.div 
          className="about-split-door door-right"
          initial={{ x: '0%' }}
          animate={{ x: '100%' }}
          exit={{ x: '0%' }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        >
          <div className="door-glow" />
        </motion.div>
        
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0 }} 
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  if (path.startsWith('/product/')) {
    return (
      <motion.div
        variants={detailsVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={getTransition()}
      >
        {children}
      </motion.div>
    );
  }

  if (path === '/products') {
    return (
      <motion.div
        variants={productsVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={getTransition()}
      >
        {children}
      </motion.div>
    );
  }

  if (path === '/features') {
    return (
      <motion.div
        variants={featuresVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={getTransition()}
      >
        {children}
      </motion.div>
    );
  }

  if (path === '/contact') {
    return (
      <motion.div
        variants={contactVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={getTransition()}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    );
  }

  // Fallback to Home style
  return (
    <motion.div
      variants={homeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={getTransition()}
    >
      {children}
    </motion.div>
  );
}
