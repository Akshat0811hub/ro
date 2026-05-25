import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Compass, Shield, Award, Sparkles, Cpu } from 'lucide-react';
import './about.css';

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const milestones = [
    { year: "2018", title: "Molecular Isolation Study", desc: "Our bio-physicists isolated specific solute structures in municipal ground tap water, discovering why standard RO filtration caused acidic taste profile degradation.", detail: "Through high-frequency mass spectrometry, we isolated 12 toxic chemical solutes and patented our first microscopic separation mesh framework." },
    { year: "2020", title: "Bio-Mineralization Loop", desc: "Invented and clinically certified the Bio-Mineral pH Balancer Loop, achieving natural mineral re-injection (Calcium, Zinc, Magnesium).", detail: "Rather than synthetic mineral filters, we modeled our mineralizer on raw Alpine limestone columns, restoring water to pH 8.5 naturally." },
    { year: "2022", title: "Double Copper Active Defense", desc: "Patented our active copper-zinc nano-deposition columns, incorporating automated UV-C purification loops.", detail: "This prevents water stagnation in storage tanks, maintaining absolute bio-purity for up to 14 days without standard filter decay." },
    { year: "2024", title: "CCK Masterpiece Release", desc: "Successfully integrated bio-physics purification tech into an ultra-slim 12.8cm double-anodized glass armor chassis.", detail: "Released G+ Classic, Pro, and Eco models worldwide, winning the Biotech Innovation Award for premium home health." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const values = [
    { icon: <Compass size={24} />, title: "Precision Engineering", desc: "Crafting fluid systems with micrometric precision for flawless filtration." },
    { icon: <Heart size={24} />, title: "Family Wellness", desc: "Prioritizing the health, longevity, and purity of every home we serve." },
    { icon: <Shield size={24} />, title: "Eco Stewardship", desc: "Reducing municipal water waste and plastic bottle pollution by 98%." },
    { icon: <Sparkles size={24} />, title: "Absolute Purity", desc: "Achieving 99.9% dissolution of toxic solutes for crisp wellness hydration." }
  ];

  return (
    <div className="about-page light-luxury">
      {/* Immersive Hero */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <video 
            className="about-hero__video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-water-splashing-in-slow-motion-41810-large.mp4" type="video/mp4" />
          </video>
          <div className="about-hero__video-overlay" />
          <div className="about-orb about-orb--1" />
          <div className="about-orb about-orb--2" />
        </div>

        <div className="container">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Our Philosophy</span>
            <h1 className="about-hero__title">
              Crafting the Future of <span className="gradient-text">Pure Hydration</span>
            </h1>
            <p className="about-hero__subtitle">
              We believe water is the base molecule of human potential. CCK was born to redefine how the modern home experiences pure, mineral-balanced health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story grid */}
      <section className="about-story section">
        <div className="container">
          <div className="about-story__grid">
            <motion.div 
              className="about-story__image-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/assets/ro1.png" 
                alt="RO filtration research" 
                className="about-story__img"
                style={{ objectFit: 'contain', background: 'radial-gradient(circle, rgba(159,188,171,0.06) 0%, transparent 70%)' }}
              />
              <div className="about-story__img-overlay" />
            </motion.div>

            <motion.div 
              className="about-story__content-panel"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="about-story__tag">The Genesis</span>
              <h2>Born from Science, Perfected for Design</h2>
              <p>
                In 2018, our team of bio-physicists set out to solve a massive design challenge: Standard RO purifiers stripped away all the good health qualities of natural water, leaving it acidic and flavorless.
              </p>
              <p>
                Through years of dynamic testing, we developed our trademarked Bio-Mineral pH balancer loop. We coupled this advanced hydration science with sleek double-anodized glass armor, ensuring CCK purifiers double as high-end interior art.
              </p>
              <div className="about-story__award glass">
                <Award size={20} className="text-aqua" />
                <div>
                  <strong>Biotech Innovation Winner 2024</strong>
                  <span>Awarded for natural mineral-restoration efficiency.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Image Grid Space for Future Photos */}
      <section className="about-gallery section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">State of the Art Facilities</span>
            <h2 className="section-title">Our Innovation Labs</h2>
            <p className="section-subtitle">
              Take a glance inside our molecular physics laboratory and automated glass-anodizing assembly lines (Images coming soon).
            </p>
          </div>

          <div className="about-gallery__grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginTop: '2rem' }}>
            {/* Laboratory Placeholder */}
            <motion.div 
              className="glass" 
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '3rem 2rem',
                textAlign: 'center',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-glass-border)',
                background: 'linear-gradient(135deg, rgba(159, 188, 171, 0.03) 0%, rgba(11, 76, 140, 0.03) 100%)',
                position: 'relative',
                overflow: 'hidden'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.2rem', filter: 'grayscale(0.3)' }}>🧪</div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>R&D Molecular Science Lab</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', maxWidth: '280px', lineHeight: '1.6' }}>
                [Factory & R&D Laboratory Image Space]<br/>
                Replace this placeholder with a photo of the chromatography testing suite.
              </p>
              <div className="why-us__image-placeholder-inner" />
            </motion.div>

            {/* Team/Specialists Placeholder */}
            <motion.div 
              className="glass" 
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '3rem 2rem',
                textAlign: 'center',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-glass-border)',
                background: 'linear-gradient(135deg, rgba(11, 76, 140, 0.03) 0%, rgba(159, 188, 171, 0.03) 100%)',
                position: 'relative',
                overflow: 'hidden'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.2rem', filter: 'grayscale(0.3)' }}>👥</div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>Our Biotech Specialists</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', maxWidth: '280px', lineHeight: '1.6' }}>
                [Our Biotech Specialists Image Space]<br/>
                Replace this placeholder with a photo of your chief hydrological engineering crew.
              </p>
              <div className="why-us__image-placeholder-inner" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biotech History Timeline */}
      <section className="about-timeline section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Bio-Physics Journey</span>
            <h2 className="section-title">Milestones in Pure Science</h2>
            <p className="section-subtitle">
              Tracing our breakthrough biotech inventions from molecular isolation in labs to luxury home purifiers.
            </p>
          </div>

          <div className="timeline-interactive-wrapper">
            {/* Timeline track */}
            <div className="timeline-nav-track">
              {milestones.map((m, idx) => (
                <button
                  key={idx}
                  className={`timeline-nav-btn ${activeTimeline === idx ? 'timeline-nav-btn--active' : ''}`}
                  onClick={() => setActiveTimeline(idx)}
                >
                  <span className="timeline-btn-year">{m.year}</span>
                  <span className="timeline-btn-dot" />
                  <span className="timeline-btn-title">{m.title}</span>
                </button>
              ))}
              <div className="timeline-progress-line">
                <div 
                  className="timeline-progress-fill" 
                  style={{ width: `${(activeTimeline / (milestones.length - 1)) * 100}%` }}
                />
              </div>
            </div>

            {/* Selected Milestone Detail Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTimeline}
                className="timeline-detail-card glass"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <div className="timeline-detail-header">
                  <div className="timeline-detail-badge">Biotech Break {milestones[activeTimeline].year}</div>
                  <h3>{milestones[activeTimeline].title}</h3>
                </div>
                <p className="timeline-detail-desc">{milestones[activeTimeline].desc}</p>
                <div className="timeline-detail-tech">
                  <Cpu size={16} className="text-aqua" />
                  <span>{milestones[activeTimeline].detail}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="about-mission section">
        <div className="container">
          <motion.div 
            className="about-mission__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="about-mission__card glass" variants={itemVariants}>
              <span className="mission-badge">01</span>
              <h3>Our Core Mission</h3>
              <p>
                To orchestrate advanced molecular filtration systems that completely eliminate biological and industrial pollutants while actively enhancing cellular hydration via vital bio-available minerals.
              </p>
            </motion.div>

            <motion.div className="about-mission__card glass" variants={itemVariants}>
              <span className="mission-badge">02</span>
              <h3>Our Vision</h3>
              <p>
                To eliminate single-use plastic water bottles in premium spaces worldwide by establishing the absolute benchmark in smart, beautiful, and sustainable point-of-use water purification.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values grid */}
      <section className="about-values section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Pillars</span>
            <h2 className="section-title">The Principles We Stand On</h2>
            <p className="section-subtitle">
              Uncompromising dedication to the molecular quality of water, engineering durability, and luxury lifestyle aesthetics.
            </p>
          </div>

          <div className="about-values__grid">
            {values.map((item, idx) => (
              <motion.div 
                key={idx}
                className="about-values__card glass"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="value-icon-container">
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
