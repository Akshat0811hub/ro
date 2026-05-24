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
          >
            <div className="preloader__logo-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M20 4C20 4 8 14 8 22C8 28.627 13.373 34 20 34C26.627 34 32 28.627 32 22C32 14 20 4 20 4Z" fill="url(#dropGrad)" />
                <path d="M20 14C20 14 14 19 14 23C14 26.314 16.686 29 20 29C23.314 29 26 26.314 26 23C26 19 20 14 20 14Z" fill="rgba(255,255,255,0.3)" />
                <defs>
                  <linearGradient id="dropGrad" x1="20" y1="4" x2="20" y2="34" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#06f7e8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="preloader__logo-text">
              <span className="preloader__brand">G<span>+</span> Series</span>
              <span className="preloader__tagline">Ultra-Pure Luxury Water</span>
            </div>
          </motion.div>

          {/* Animated water ring */}
          <motion.div
            className="preloader__ring-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="preloader__ring preloader__ring--1" />
            <div className="preloader__ring preloader__ring--2" />
            <div className="preloader__ring preloader__ring--3" />
            <div className="preloader__drop-icon">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M30 6C30 6 10 22 10 34C10 44.493 19.507 54 30 54C40.493 54 50 44.493 50 34C50 22 30 6 30 6Z" fill="url(#mainDrop)" />
                <path d="M30 22C30 22 22 29 22 34C22 38.418 25.582 42 30 42C34.418 42 38 38.418 38 34C38 29 30 22 30 22Z" fill="rgba(255,255,255,0.25)" />
                <defs>
                  <linearGradient id="mainDrop" x1="30" y1="6" x2="30" y2="54" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#06f7e8" />
                  </linearGradient>
                </defs>
              </svg>
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
