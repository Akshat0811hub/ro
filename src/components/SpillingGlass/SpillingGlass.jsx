import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './SpillingGlass.css';

export default function SpillingGlass() {
  const [fillLevel, setFillLevel] = useState(70);
  const [isSpilling, setIsSpilling] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  // Trigger extra splash on user interaction
  const triggerOverflowSplash = () => {
    setClickCount((prev) => prev + 1);
    setFillLevel(100);
    setIsSpilling(true);
    setTimeout(() => {
      setFillLevel(85);
    }, 1500);
  };

  return (
    <div className="spilling-glass-widget glass" onClick={triggerOverflowSplash}>
      <span className="widget-label">Dynamic Hydro Dynamics</span>
      <h4 className="widget-title">Pouring Physics</h4>
      
      <div className="glass-scene-container">
        {/* Overflow Water Stream from the top */}
        <div className="water-inflow-stream" />

        {/* The Glass itself */}
        <div className="glass-cup">
          {/* Water content inside the glass */}
          <motion.div 
            className="glass-water-fill"
            animate={{
              height: `${fillLevel}%`,
            }}
            transition={{ type: 'spring', stiffness: 40, damping: 12 }}
          >
            {/* Water Wave Ripple Top */}
            <svg className="water-wave-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
              <motion.path
                d="M0,10 C30,20 70,0 100,10 L100,20 L0,20 Z"
                animate={{
                  d: [
                    "M0,10 C30,18 70,2 100,10 L100,20 L0,20 Z",
                    "M0,10 C30,2 70,18 100,10 L100,20 L0,20 Z",
                    "M0,10 C30,18 70,2 100,10 L100,20 L0,20 Z"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                fill="#0ea5e9"
              />
            </svg>

            {/* Sparkles / Bubbles rising */}
            <div className="water-bubbles">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`bubble bubble--${i + 1}`} />
              ))}
            </div>
          </motion.div>

          {/* Glass Rim highlight */}
          <div className="glass-rim" />
        </div>

        {/* Spilling Stream overflow loop */}
        {isSpilling && (
          <div className="glass-spill-over" aria-hidden="true">
            <div className="spill-column" />
            <div className="spill-splash-pool">
              <div className="splash-ring splash-ring--1" />
              <div className="splash-ring splash-ring--2" />
              <div className="splash-droplet splash-droplet--1" />
              <div className="splash-droplet splash-droplet--2" />
              <div className="splash-droplet splash-droplet--3" />
            </div>
          </div>
        )}
      </div>

      <div className="glass-widget-details">
        <div className="flow-tds-badge">
          <span>Active Flow</span>
          <strong>99.9% Safe</strong>
        </div>
        <p className="widget-desc">Click glass to trigger bio-mineral overflow stream.</p>
      </div>
    </div>
  );
}
