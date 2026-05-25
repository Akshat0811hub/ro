import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './preloader.css';

export default function Preloader({ setLoading }) {
  const progressRef = useRef(null);

  useEffect(() => {
    let start = null;
    const duration = 2200;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min((elapsed / duration) * 100, 100);

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }

      if (progress < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setLoading(false), 400);
      }
    };

    requestAnimationFrame(animate);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Background orbs */}
        <div className="preloader__orb preloader__orb--1" />
        <div className="preloader__orb preloader__orb--2" />

        <div className="preloader__content">
          {/* Logo */}
          <motion.div
            className="preloader__logo"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}
          >
            <img src="/assets/logo.png" alt="CCK Logo" className="preloader__logo-image" style={{ height: '76px', width: 'auto', objectFit: 'contain', display: 'block', mixBlendMode: 'multiply' }} />
            <span className="preloader__tagline">Ultra-Pure Luxury Water</span>
          </motion.div>

          {/* Animated water ring */}
          <motion.div
            className="preloader__ring-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ margin: '1rem 0' }}
          >
            <div className="preloader__ring preloader__ring--1" />
            <div className="preloader__ring preloader__ring--2" />
            <div className="preloader__ring preloader__ring--3" />
            <div className="preloader__drop-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <img src="/assets/logo.png" alt="CCK Logo Purity" className="preloader__center-logo" style={{ width: '90px', height: 'auto', objectFit: 'contain', display: 'block', mixBlendMode: 'multiply' }} />
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="preloader__progress-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="preloader__progress-track">
              <div ref={progressRef} className="preloader__progress-fill" />
            </div>
            <p className="preloader__status">Initializing Pure Experience...</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
