import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence,  } from 'framer-motion';
import { 
  Sparkles, 
  Shield, 
  Droplet, 
  Smartphone, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Layers,
  Check,
  Send,
  Zap,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import FloatingDroplets from '../../components/FloatingDroplets/FloatingDroplets';
import './home.css';

export default function Home() {
  const [activeProductIndex, setActiveProductIndex] = useState(1); // 'blue'
  const [slideDirection, setSlideDirection] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Stats numbers incrementing effect
  const [stats, setStats] = useState({ families: 0, purity: 0, warranty: 0 });
  const statsSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!statsSectionRef.current) return;
      const rect = statsSectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible && stats.families === 0) {
        // Trigger incrementing
        let startFamilies = 0;
        let startPurity = 0.0;
        let startWarranty = 0;
        const interval = setInterval(() => {
          let updated = false;
          if (startFamilies < 50) {
            startFamilies += 2;
            setStats(prev => ({ ...prev, families: startFamilies }));
            updated = true;
          }
          if (startPurity < 99.9) {
            startPurity = parseFloat((startPurity + 4.5).toFixed(1));
            if (startPurity > 99.9) startPurity = 99.9;
            setStats(prev => ({ ...prev, purity: startPurity }));
            updated = true;
          }
          if (startWarranty < 5) {
            startWarranty += 1;
            setStats(prev => ({ ...prev, warranty: startWarranty }));
            updated = true;
          }
          if (!updated) clearInterval(interval);
        }, 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stats]);

  // Product show config list
  const productsList = [
    {
      id: 'ro1',
      name: 'CCK Pearl White',
      price: '$449',
      img: '/assets/ro1.png',
      colorCode: '#9fbcab',
      tag: 'Ultra Flagship',
      desc: 'Sleek, stunning white porcelain glaze housing with micro-gold anodized nozzle lines. Built with high-purity mineral balance.',
      bullets: [
        'Ultra-slick 12.8cm thin chassis profile',
        'Interactive Glass Touch Panel UI',
        'Bio-Mineral pH balancer loop'
      ],
      specs: {
        filtration: '8-Stage Premium RO + UV + UF',
        flowRate: '15 Litres / Hour',
        tdsLimit: 'Up to 2500 ppm',
        capacity: '10.5 Litres Storage'
      }
    },
    {
      id: 'ro2',
      name: 'CCK Emerald Mint',
      price: '$459',
      img: '/assets/ro2.png',
      colorCode: '#829e8d',
      tag: 'Eco Premium',
      desc: 'Beautiful sage-mint casing equipped with our trademarked double eco-recovery loop, reclaiming municipal brine water for ultimate sustainability.',
      bullets: [
        'Zero-waste waste water recovery loop',
        'Interactive copper flow nozzle accents',
        'Natural bio-alkaline pH booster'
      ],
      specs: {
        filtration: '7-Stage Eco RO + UV + UF',
        flowRate: '13 Litres / Hour',
        tdsLimit: 'Up to 2200 ppm',
        capacity: '9.5 Litres Storage'
      }
    },
    {
      id: 'ro3',
      name: 'CCK Sapphire Blue',
      price: '$479',
      img: '/assets/ro3.png',
      colorCode: '#0b4c8c',
      tag: 'Best Seller',
      desc: 'Deep royal sapphire casing featuring double copper-zinc bio-mineralization. Perfect for standard family sizes and luxury modern layouts.',
      bullets: [
        'Advanced bio-mineral alkaline restorer',
        'Stunning light-luxury sapphire glass casing',
        'Double copper-zinc active defense'
      ],
      specs: {
        filtration: '7-Stage RO + UV + UF',
        flowRate: '12 Litres / Hour',
        tdsLimit: 'Up to 2200 ppm',
        capacity: '9.5 Litres Storage'
      }
    },
    {
      id: 'ro4',
      name: 'CCK Platinum Slate',
      price: '$499',
      img: '/assets/ro4.png',
      colorCode: '#1e293b',
      tag: 'Pro Minimalist',
      desc: 'Futuristic double-anodized deep slate black casing. Features ambient cup lighting and active smartphone app control.',
      bullets: [
        'Customized dark slate anodized profile',
        'Ambient nighttime cup lighting',
        'Full smart-app WiFi diagnostics integration'
      ],
      specs: {
        filtration: '8-Stage Premium RO + UV + UF',
        flowRate: '15 Litres / Hour',
        tdsLimit: 'Up to 2500 ppm',
        capacity: '10.5 Litres Storage'
      }
    },
    {
      id: 'ro5',
      name: 'CCK Amber Gold',
      price: '$529',
      img: '/assets/ro5.png',
      colorCode: '#b45309',
      tag: 'Limited Luxury',
      desc: 'An elegant, limited-edition gold-anodized profile crafted to blend seamlessly into luxury designer solid-wood kitchen layouts.',
      bullets: [
        'Prestige 24k gold-brushed metal accents',
        'Bio-Mineral pH balancer column',
        'Extra wide 12L storage capacity'
      ],
      specs: {
        filtration: '7-Stage Classic RO + UV + UF',
        flowRate: '14 Litres / Hour',
        tdsLimit: 'Up to 2400 ppm',
        capacity: '12.0 Litres Storage'
      }
    }
  ];

  // Derive backwards-compatible helpers
  const activeColor = productsList[activeProductIndex]?.id || 'ro1';
  const setActiveColor = (colorId) => {
    const idx = productsList.findIndex(p => p.id === colorId);
    if (idx !== -1) {
      setSlideDirection(idx > activeProductIndex ? 1 : -1);
      setActiveProductIndex(idx);
    }
  };

  const products = {
    ro1: productsList[0],
    ro2: productsList[1],
    ro3: productsList[2],
    ro4: productsList[3],
    ro5: productsList[4]
  };

  const handlePrev = () => {
    setSlideDirection(-1);
    setActiveProductIndex((prev) => (prev === 0 ? productsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideDirection(1);
    setActiveProductIndex((prev) => (prev === productsList.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const stages = [
    { name: 'Pre-Filter Mesh', detail: 'Eliminates large sediment particles, rust, dirt, and sand.' },
    { name: 'Activated Carbon Filter', detail: 'Adsorbs chlorine, organic compounds, bad odor, and improves taste.' },
    { name: 'Sediment Cartridge', detail: 'Filters out micro-fine suspended impurities down to 5 microns.' },
    { name: 'Hyper-Performance RO', detail: 'Removes dissolved salts, heavy metals, arsenic, lead, and fluoride.' },
    { name: 'Ultra-Filtration (UF)', detail: 'Bypasses minerals but blocks bacteria, cysts, and microscopic viruses.' },
    { name: 'UV Sterilization Chamber', detail: 'Continuous UV irradiation destroys 99.99% of pathogenous DNA.' },
    { name: 'Alkaline Mineral Boost', detail: 'Restores calcium, magnesium, potassium, and adjusts water pH to 8.5+.' }
  ];

  const whyChooseUs = [
    { icon: <Layers size={24} />, title: '7-Stage Purification', desc: 'Saves zero shortcuts. Complete RO + UV + UF with added copper & zinc.' },
    { icon: <Sparkles size={24} />, title: 'Alkaline pH Restore', desc: 'Balances harsh acidity, mineralizing pure water for daily active hydration.' },
    { icon: <Smartphone size={24} />, title: 'Smart App Control', desc: 'Track real-time TDS levels, filter lifespan, and request one-click services.' },
    { icon: <Shield size={24} />, title: 'Smart Touch Display', desc: 'Cinematic glass display on water dispense with real-time temperature.' }
  ];

  const FAQs = [
    { q: 'How does the CCK restore natural minerals?', a: 'Standard RO purifiers strip water of good minerals. Our Alkaline Boost filter introduces calculated bio-available amounts of Calcium, Magnesium, and Zinc back into the post-purified water, raising pH naturally to an alkaline 8.5.' },
    { q: 'Does the purifier waste water?', a: 'No! The CCK features our Eco-Recovery loop which redirects high-solute reject water back to your overhead storage or utility tap, achieving near-zero wastage.' },
    { q: 'What TDS levels can CCK handle?', a: 'CCK is engineered for complex raw water profiles. It handles input TDS up to 2500 ppm effortlessly, outputting highly sweet, balanced water below 80 TDS.' },
    { q: 'How long does the filter last?', a: 'Typically, CCK filters last between 10,000 to 12,000 liters. The smart display and mobile app will alert you well in advance when the filter drops below 10% capacity.' }
  ];

  const handleForm = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setName('');
        setEmail('');
        setPhone('');
      }, 5000);
    }
  };

  return (
    <div className="home-page light-luxury">
      {/* Background Floating Droplets layer */}
      <FloatingDroplets count={14} />

      {/* Immersive futuristic Hero section */}
      <Hero />

      {/* Why Choose Us */}
      <section className="why-us section" id="features">
        <div className="why-us__decor container-decor">
          <div className="decor-orb decor-orb--1" />
          <div className="decor-orb decor-orb--2" />
        </div>

        <div className="container">
          <div className="section-header">
            <span className="section-label">Pure Perfection</span>
            <h2 className="section-title">Why Choose CCK?</h2>
            <p className="section-subtitle">
              Engineered like a sports car, purified like a scientific lab. The ultimate union of health and elegance.
            </p>
          </div>

          <div className="why-us__layout">
            <div className="why-us__grid">
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="why-us__card glass"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="why-us__icon-container">
                    {item.icon}
                  </div>
                  <h3 className="why-us__card-title">{item.title}</h3>
                  <p className="why-us__card-desc">{item.desc}</p>
                  <div className="why-us__card-glow" />
                </motion.div>
              ))}
            </div>

            {/* Lifestyle Image Placeholder Panel */}
            <motion.div
              className="why-us__image-placeholder glass"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', filter: 'grayscale(0.3)' }}>🏡</div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.6rem', color: 'var(--color-text-primary)' }}>Luxury Kitchen Integration</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', maxWidth: '260px', lineHeight: '1.6' }}>
                [Premium Lifestyle Assembly Image Space]<br/>
                Replace this placeholder with a photo of your G+ installation in a designer master-kitchen space.
              </p>
              <div className="why-us__image-placeholder-inner" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase Slider */}
      <section className="product-showcase section" id="products">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Luxury Collection</span>
            <h2 className="section-title">Designed for Your Master Space</h2>
            <p className="section-subtitle">
              Choose from four stunning metal finishes, crafted with double-anodized glass armor to blend in with your luxury kitchen.
            </p>
          </div>

          <div className="product-showcase__slider-layout">
            <div className="product-showcase__content-carousel">
              
              {/* Product Card Sliding Wrapper */}
              <div className="product-showcase__slide-viewport">
                <AnimatePresence custom={slideDirection} mode="wait">
                  <motion.div
                    key={activeProductIndex}
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="product-showcase__slide-card"
                  >
                    {/* Left: Dynamic 3D interactive preview */}
                    <div className="product-showcase__preview">
                      <div className="product-showcase__ring-decor">
                        <div className="showcase-ring ring-1" style={{ borderColor: productsList[activeProductIndex].colorCode }} />
                        <div className="showcase-ring ring-2" style={{ borderColor: productsList[activeProductIndex].colorCode }} />
                      </div>

                      <div className="product-showcase__image-wrapper">
                        <img
                          src={productsList[activeProductIndex].img}
                          alt={productsList[activeProductIndex].name}
                          className="product-showcase__img"
                        />
                        <div className="product-showcase__img-shadow" style={{ background: `radial-gradient(ellipse, ${productsList[activeProductIndex].colorCode}22 0%, transparent 70%)` }} />
                      </div>

                      {/* Float spec badge */}
                      <div className="product-showcase__floating-badge glass">
                        <Award size={16} className="text-aqua" />
                        <span>Premium Quality Warranty Included</span>
                      </div>
                    </div>

                    {/* Right: Premium specifications details */}
                    <div className="product-showcase__details glass">
                      <span className="product-showcase__tag">{productsList[activeProductIndex].tag}</span>
                      <h3 className="product-showcase__name">{productsList[activeProductIndex].name}</h3>
                      <div className="product-showcase__price-row">
                        <span className="price-label">Retail Value</span>
                        <span className="price-val">{productsList[activeProductIndex].price}</span>
                      </div>

                      <p className="product-showcase__desc">
                        {productsList[activeProductIndex].desc}
                      </p>

                      {/* Specs details */}
                      <div className="product-showcase__specs-box">
                        {Object.entries(productsList[activeProductIndex].specs).map(([key, val]) => (
                          <div key={key} className="showcase-spec-row">
                            <span className="spec-label-lbl">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <strong className="spec-val-val">{val}</strong>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="product-showcase__bullets">
                        {productsList[activeProductIndex].bullets.map((bullet, idx) => (
                          <div key={idx} className="bullet-item">
                            <Check size={16} className="bullet-icon" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <div className="product-showcase__actions">
                        <a href="#contact" className="btn-primary magnetic">
                          Reserve Yours Now
                          <Zap size={14} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Interactive Multi-Image Gallery Grid ("use more image") */}
              <div className="product-showcase__gallery">
                {productsList.map((prod, idx) => (
                  <button
                    key={prod.id}
                    className={`product-showcase__gallery-item glass ${activeProductIndex === idx ? 'product-showcase__gallery-item--active' : ''}`}
                    onClick={() => {
                      setSlideDirection(idx > activeProductIndex ? 1 : -1);
                      setActiveProductIndex(idx);
                    }}
                  >
                    <img 
                      src={prod.img} 
                      alt={prod.name} 
                      className="product-showcase__gallery-img" 
                    />
                    <span className="product-showcase__gallery-name">{prod.name.replace('CCK ', '')}</span>
                  </button>
                ))}
              </div>

              {/* Slider Controls */}
              <div className="product-slider-controls">
                <button className="slider-arrow prev-arrow glass magnetic" onClick={handlePrev} aria-label="Previous product">
                  <ArrowLeft size={18} />
                </button>
                <div className="slider-dots">
                  {productsList.map((_, idx) => (
                    <button
                      key={idx}
                      className={`slider-dot ${activeProductIndex === idx ? 'slider-dot--active' : ''}`}
                      onClick={() => {
                        setSlideDirection(idx > activeProductIndex ? 1 : -1);
                        setActiveProductIndex(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{ backgroundColor: activeProductIndex === idx ? productsList[idx].colorCode : 'rgba(0, 0, 0, 0.15)' }}
                    />
                  ))}
                </div>
                <button className="slider-arrow next-arrow glass magnetic" onClick={handleNext} aria-label="Next product">
                  <ArrowRight size={18} />
                </button>
              </div>

            </div>

            {/* Spill Glass Hydro Physics Interactive Widget next to it! */}
            

          </div>

        </div>
      </section>

      {/* Technology & Science Section (7 Stages) */}
      <section className="tech-section section" id="technology">
        <div className="tech-section__bg">
          <div className="tech-orb" />
        </div>

        <div className="container">
          <div className="section-header">
            <span className="section-label">Advanced Bio-Physics</span>
            <h2 className="section-title">The 7-Stage Purification Engine</h2>
            <p className="section-subtitle">
              Take a journey through the intelligent fluid columns. Every step removes targeted molecules to reconstruct premium, mineral-balanced spring water.
            </p>
          </div>

          <div className="tech-section__content">
            {/* Interactive Timeline */}
            <div className="tech-section__nav">
              {stages.map((stage, idx) => (
                <button
                  key={idx}
                  className={`tech-stage-btn ${activeStage === idx ? 'tech-stage-btn--active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                >
                  <span className="stage-num">{idx + 1}</span>
                  <span className="stage-name">{stage.name}</span>
                </button>
              ))}
            </div>

            {/* Stage Detail display */}
            <div className="tech-stage-detail glass">
              <div className="tech-stage-detail__header">
                <div className="tech-icon-wrapper">
                  <Droplet size={28} className="text-aqua" />
                </div>
                <div>
                  <span className="stage-eyebrow">Purification Step {activeStage + 1} of 7</span>
                  <h3 className="stage-title">{stages[activeStage].name}</h3>
                </div>
              </div>

              <p className="stage-detail-desc">{stages[activeStage].detail}</p>

              {/* Futuristic progress indicator bar */}
              <div className="stage-purification-status">
                <div className="status-label">Purity Index</div>
                <div className="status-progress-bar">
                  <motion.div 
                    className="status-progress-fill"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((activeStage + 1) / 7) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <div className="status-numbers">
                  <span>Input: Tap water</span>
                  <span>{Math.round(((activeStage + 1) / 7) * 99)}% Safe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blueprint Diagram Placeholder panel */}
          <motion.div 
            className="tech-blueprint-placeholder glass"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              marginTop: '4rem',
              border: '1px solid var(--color-glass-border)',
              minHeight: '260px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(11, 76, 140, 0.03) 0%, rgba(159, 188, 171, 0.03) 100%)',
              position: 'relative',
              overflow: 'hidden',
              width: '100%'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1.2rem', filter: 'grayscale(0.5)' }}>📐</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--color-text-primary)' }}>Purifier Molecular Filtration Blueprint</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: '420px', margin: '0 auto', lineHeight: '1.6' }}>
                [Filtration Cartridges Blueprint / Diagram Space]<br/>
                Replace this placeholder with a technical blueprint drawing or rendering of G+ internal filter loops.
              </p>
            </div>
            <div className="why-us__image-placeholder-inner" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Endorsement</span>
            <h2 className="section-title">Trusted by Taste Connoisseurs</h2>
            <p className="section-subtitle">
              See how CCK is transforming wellness, skin-hydration, and taste profiles across premium homes.
            </p>
          </div>

          <div className="testimonials__grid">
            {[
              { text: 'Water has a sweet, spring-like taste now. Our tea and coffee flavors are immensely deep. The chassis looks like a piece of high-tech art on our kitchen wall.', author: 'Aishwarya Sen', role: 'Culinary Designer, Bangalore' },
              { text: 'My daughters skin and hair quality improved dramatically after we got G+ with copper-alkaline restoration. Highly recommend for city households.', author: 'Dr. Vivek Malhotra', role: 'Chief Pediatrician, Mumbai' },
              { text: 'The smart display showing exactly the filter capacity is amazing. Zero guessing. The water is crisp, light and incredibly pure.', author: 'Rohan Deshmukh', role: 'Tech Enthusiast, Pune' }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                className="testimonial-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-details">
                    <strong className="author-name">{t.author}</strong>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section ref={statsSectionRef} className="stats-section section">
        <div className="container">
          <div className="stats-grid glass">
            <div className="stat-card">
              <h3 className="stat-value">{stats.families}K+</h3>
              <p className="stat-label">Luxury Homes Served</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-value">{stats.purity}%</h3>
              <p className="stat-label">Purity Index Rate</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-value">{stats.warranty} Yrs</h3>
              <p className="stat-label">Complete Comprehensive Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="faq-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Knowledge Desk</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about biological health balance, TDS parameters, and installation support.
            </p>
          </div>

          <div className="faq-list">
            {FAQs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item glass ${openFaq === idx ? 'faq-item--open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <button className="faq-toggle-btn" aria-label="Toggle FAQ">
                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Booking Form */}
      <section className="contact-cta section" id="contact">
        <div className="container">
          <div className="contact-cta__wrapper glass">
            <div className="contact-cta__decor">
              <div className="cta-orb orb-1" />
              <div className="cta-orb orb-2" />
            </div>

            <div className="contact-cta__content">
              <div className="cta-left">
                <span className="section-label section-label--white">Get Free Testing</span>
                <h2>Experience the Purity Test at Home</h2>
                <p>
                  Book a free, professional high-fidelity water purity assessment at your home. 
                  Our certified biochemist will measure your water TDS, active chlorine, and hardness for free.
                </p>
                <div className="cta-support-badge">
                  <div className="support-dot" />
                  <span>Guaranteed installation inside 24 hours of booking</span>
                </div>
              </div>

              <div className="cta-right">
                {formSubmitted ? (
                  <motion.div 
                    className="cta-success-msg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="success-icon">✓</div>
                    <h3>Booking Confirmed!</h3>
                    <p>Our executive will contact you in next 3 hours to schedule your free water test.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleForm} className="cta-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="e.g. Akshat Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        placeholder="e.g. +91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="e.g. akshat@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn-primary form-submit-btn magnetic">
                      <span>Schedule My Free Test</span>
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}