import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Hero.css';

const specCards = [
  { icon: '🔬', value: '7 Stage', label: 'Filtration' },
  { icon: '⚡', value: 'Alkaline', label: 'Boost' },
  { icon: '💧', value: '99.9%', label: 'Pure' },
  { icon: '📱', value: 'Smart', label: 'Touch Display' },
];

export default function Hero() {
  const heroRef = useRef(null);
  const purifierRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [8, -8]);
  const rotateY = useTransform(springX, [-300, 300], [-8, 8]);
  const translateX = useTransform(springX, [-300, 300], [-12, 12]);
  const translateY = useTransform(springY, [-300, 300], [-12, 12]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    hero.addEventListener('mousemove', onMove, { passive: true });
    return () => hero.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const handleAnchor = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="hero" id="home">
      {/* Animated background layers */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid-overlay" />
        <div className="hero__fog" />
      </div>

      {/* Animated water waves */}
      <div className="hero__waves" aria-hidden="true">
        <div className="hero__wave hero__wave--1" />
        <div className="hero__wave hero__wave--2" />
        <div className="hero__wave hero__wave--3" />
      </div>

      {/* Light streaks */}
      <div className="hero__streaks" aria-hidden="true">
        <div className="hero__streak hero__streak--1" />
        <div className="hero__streak hero__streak--2" />
        <div className="hero__streak hero__streak--3" />
      </div>

      <div className="container hero__inner">
        {/* Left content */}
        <div className="hero__content">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            New Generation Purification
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Water, <br />
            <span className="gradient-text">Reimagined.</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            CCK delivers <strong>99.9% pure</strong> water through 7-stage intelligent 
            filtration with alkaline boost — engineered for those who demand nothing but perfection.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#products" className="btn-primary" onClick={(e) => handleAnchor(e, '#products')}>
              Explore Collection
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M8 3L13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#features" className="btn-secondary" onClick={(e) => handleAnchor(e, '#features')}>
              View Features
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { num: '99.9%', label: 'Purity Rate' },
              { num: '10L/hr', label: 'Flow Rate' },
              { num: '50K+', label: 'Happy Homes' },
            ].map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Purifier Visual */}
        <div className="hero__visual">
          {/* Rotating glow ring */}
          <div className="hero__glow-ring hero__glow-ring--outer" />
          <div className="hero__glow-ring hero__glow-ring--inner" />
          <div className="hero__glow-pulse" />

          {/* Main purifier image with 3D tilt */}
          <motion.div
            ref={purifierRef}
            className="hero__purifier"
            style={{ rotateX, rotateY, x: translateX, y: translateY }}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/assets/ro3.png"
              alt="CCK RO Water Purifier"
              className="hero__purifier-img"
              loading="eager"
            />

            {/* Water flow animation */}
            <div className="hero__water-flow" aria-hidden="true">
              <div className="hero__water-stream" />
              <div className="hero__water-drops">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`hero__drop hero__drop--${i + 1}`} />
                ))}
              </div>
              {/* Ripple at bottom */}
              <div className="hero__ripple-container">
                <div className="hero__ripple hero__ripple--1" />
                <div className="hero__ripple hero__ripple--2" />
                <div className="hero__ripple hero__ripple--3" />
              </div>
            </div>
          </motion.div>

          {/* Floating Spec Cards */}
          {specCards.map((card, i) => (
            <motion.div
              key={card.label}
              className={`hero__spec-card hero__spec-card--${i + 1}`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hero__spec-icon">{card.icon}</span>
              <div className="hero__spec-text">
                <span className="hero__spec-value">{card.value}</span>
                <span className="hero__spec-label">{card.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="hero__scroll-line" />
        <span>Scroll to Explore</span>
      </motion.div>

      {/* Bottom wave separator */}
      <div className="hero__bottom-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#050508"/>
        </svg>
      </div>
    </section>
  );
}
