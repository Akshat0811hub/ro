import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './FloatingDroplets.css';

export default function FloatingDroplets({ count = 12 }) {
  // Generate random stable coordinates and sizes for droplets so they don't shift on re-renders
  const droplets = useMemo(() => {
    return Array.from({ length: count }).map((_, index) => {
      const size = Math.floor(Math.random() * 40) + 15; // 15px to 55px
      const left = Math.floor(Math.random() * 90) + 5; // 5% to 95%
      const top = Math.floor(Math.random() * 85) + 5; // 5% to 90%
      const duration = Math.floor(Math.random() * 15) + 15; // 15s to 30s
      const delay = Math.random() * -20; // negative delay to start immediately in middle of float
      
      // Floating animation drift values
      const xDrift = Math.floor(Math.random() * 60) - 30; // -30px to 30px
      const yDrift = Math.floor(Math.random() * 60) - 30; // -30px to 30px
      
      return {
        id: index,
        size,
        left: `${left}%`,
        top: `${top}%`,
        duration,
        delay,
        xDrift,
        yDrift,
      };
    });
  }, [count]);

  return (
    <div className="floating-droplets-container" aria-hidden="true">
      {droplets.map((drop) => (
        <motion.div
          key={drop.id}
          className="glass-droplet"
          style={{
            width: drop.size,
            height: drop.size,
            left: drop.left,
            top: drop.top,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            scale: [0.8, 1, 1, 0.8],
            x: [0, drop.xDrift, -drop.xDrift, 0],
            y: [0, drop.yDrift, -drop.yDrift, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.3,
            y: drop.yDrift - 20,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <div className="droplet-glare" />
          <div className="droplet-inner-glow" />
        </motion.div>
      ))}
    </div>
  );
}
