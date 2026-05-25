import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Layers, Sparkles, Droplet, Smartphone, ShieldCheck, HelpCircle, Cpu } from 'lucide-react';
import './features.css';

export default function Features() {
  const [openFaq, setOpenFaq] = useState(null);
  const [rawTds, setRawTds] = useState(680);
  const [activeStage, setActiveStage] = useState(0);
  const [showBlueprintModal, setShowBlueprintModal] = useState(false);

  const stagesList = [
    { name: 'Pre-Filter Mesh', detail: 'Eliminates large sediment particles, rust, dirt, organic mud, and coarse sand.', target: 'Suspended Solids (>10µm)', efficiency: '98%' },
    { name: 'Activated Carbon Filter', detail: 'Adsorbs chlorine, organic volatile gases, bad odor, industrial compounds, and improves taste.', target: 'Chlorine & VOCs', efficiency: '99.5%' },
    { name: 'Sediment Cartridge', detail: 'Filters out micro-fine suspended impurities down to 5 microns.', target: 'Fine Silt & Rust (>5µm)', efficiency: '97.2%' },
    { name: 'Hyper-Performance RO', detail: 'Removes dissolved salts, heavy metals, arsenic, lead, fluoride, and complex chemicals.', target: 'Heavy Metals & Salts', efficiency: '99.9%' },
    { name: 'Ultra-Filtration (UF)', detail: 'Bypasses essential trace minerals but blocks bacteria, cysts, and microscopic pathogens.', target: 'Pathogens & Microbes', efficiency: '99.99%' },
    { name: 'UV Sterilization Chamber', detail: 'Continuous UV-C irradiation destroys 99.99% of pathogenous DNA in active water stream.', target: 'Viral/Bacterial DNA', efficiency: '99.999%' },
    { name: 'Alkaline Mineral Boost', detail: 'Restores calculated bio-available amounts of Calcium, Magnesium, and Zinc, raising water pH.', target: 'pH Restoration', efficiency: '100% Balanced' }
  ];

  const features = [
    {
      icon: <Layers size={32} />,
      title: "7-Stage Advanced RO Filtration",
      desc: "Our high-precision molecular separation layers isolate toxic solutes, industrial micro-plastics, biological pathogens, and chemical pesticides, leaving the water completely clean at a molecular level.",
      tag: "Biotech Standard"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Alkaline & Mineral Boost",
      desc: "Typical RO purifiers strip all healthy trace elements. CCK features a custom double mineralizing filter that deposits Calcium, Magnesium, and Zinc back into the flow, raising pH levels to an optimal alkaline 8.5.",
      tag: "Wellness Enrichment"
    },
    {
      icon: <Droplet size={32} />,
      title: "Zero Water Wastage Technology",
      desc: "Our trademarked dual loop recovery cycle recirculates high-solute brine output back into your home overhead line or external utility reservoir, achieving near absolute zero environmental wastage.",
      tag: "Sustainability Benchmark"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Smart App Diagnostics",
      desc: "Integrated WiFi chip updates you on real-time TDS levels, precise cartridge health metrics, and lets you schedule filter updates with a single tap in our luxury iOS and Android apps.",
      tag: "Smart Home Ready"
    }
  ];

  const faqs = [
    { q: "How often do I need to replace the G+ filter cartridges?", a: "Depending on your local water hardness profile, filters are generally rated for 10,000 to 12,000 liters (about 12 months of daily family use). The smart panel and app will send alerts when lifespan drops below 10%." },
    { q: "Does the installation support premium designer sinks?", a: "Yes. CCK installation includes options for premium flush-mount sink nozzles, undermount routing, and custom metal finisher adapters to preserve the premium aesthetics of your master kitchen." },
    { q: "Can it handle extremely high borewell TDS values?", a: "Absolutely. Our hyper-performance membrane handles input solute levels up to 2500 ppm, outputting perfectly sweet, light, mineral-balanced water below 80 TDS." }
  ];

  return (
    <div className="features-page light-luxury">
      {/* Immersive Hero */}
      <section className="features-hero">
        <div className="features-hero__bg">
          <div className="features-orb features-orb--1" />
          <div className="features-orb features-orb--2" />
        </div>

        <div className="container">
          <motion.div
            className="features-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Cutting-Edge Tech</span>
            <h1 className="features-hero__title">
              Engineering <span className="text-white">Water Chemistry</span>
            </h1>
            <p className="features-hero__subtitle">
              Explore the advanced biological physics, double copper infusion filters, and active smartphone controls that power the luxury G+ hydration series.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TDS Purity Level Calculator */}
      <section className="features-calculator section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Hydro Diagnosis</span>
            <h2 className="section-title">Project Your Water Quality</h2>
            <p className="section-subtitle">
              Slide to select your local raw tap water TDS (solute load) in ppm and see the immediate projected purification metrics of the G+ purification engine.
            </p>
          </div>

          <div className="calculator-widget-grid glass">
            {/* Input Slider Column */}
            <div className="calculator-widget__input">
              <div className="tds-input-header">
                <span>Input Raw Solutes</span>
                <strong className="tds-value-indicator">{rawTds} <span className="ppm-unit">ppm</span></strong>
              </div>
              <input 
                type="range" 
                min="100" 
                max="2500" 
                value={rawTds}
                onChange={(e) => setRawTds(Number(e.target.value))}
                className="tds-slider-range"
              />
              <div className="slider-labels">
                <span>100 (Spring)</span>
                <span>1200 (Borewell)</span>
                <span>2500 (Hard Raw)</span>
              </div>
              <p className="tds-note">Typically municipal ground water tds ranges from 500 to 1500 ppm.</p>
            </div>

            {/* Diagnostic Output Columns */}
            <div className="calculator-widget__output">
              <div className="diag-grid">
                <div className="diag-card glass">
                  <span className="diag-lbl">Projected Output TDS</span>
                  <strong className="diag-val">{Math.max(30, Math.round(rawTds * 0.05))} ppm</strong>
                  <span className="diag-sub">Ideal sweet drinking level</span>
                </div>
                <div className="diag-card glass">
                  <span className="diag-lbl">Safety Index</span>
                  <strong className="diag-val text-aqua">{rawTds > 2000 ? '99.8%' : '99.9%'}</strong>
                  <span className="diag-sub">Pathogen Destruction Rate</span>
                </div>
                <div className="diag-card glass">
                  <span className="diag-lbl">Active Alkaline pH</span>
                  <strong className="diag-val text-aqua">{(8.4 + (rawTds > 1200 ? 0.2 : 0.1)).toFixed(1)}</strong>
                  <span className="diag-sub">Perfect cellular hydration</span>
                </div>
                <div className="diag-card glass">
                  <span className="diag-lbl">Filter Lifespan</span>
                  <strong className="diag-val">{Math.max(8500, Math.round(14000 - (rawTds * 2.2)))} <span className="units">Litres</span></strong>
                  <span className="diag-sub">Lifespan estimation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Deep Dive */}
      <section className="features-deep section">
        <div className="container">
          <div className="features-deep__list">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                className="features-deep__item glass"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                style={{ flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}
              >
                {/* Visual side */}
                <div className="features-deep__visual">
                  <div className="features-deep__decor">
                    <div className="decor-ring" />
                  </div>
                  <div className="features-deep__icon-large">
                    {feat.icon}
                  </div>
                  <span className="features-deep__badge glass">{feat.tag}</span>
                </div>

                {/* Text content side */}
                <div className="features-deep__info">
                  <span className="features-deep__number">0{idx + 1}</span>
                  <h2>{feat.title}</h2>
                  <p>{feat.desc}</p>
                  <div className="features-deep__indicator">
                    <div className="indicator-dot" />
                    <span>Double copper infusion active</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed FAQ */}
      <section className="features-faq section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Support Guide</span>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">
              Learn more about high-density active sediments, installation processes, and raw water TDS values.
            </p>
          </div>

          <div className="features-faq__list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="features-faq__item glass"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="features-faq__question">
                  <div className="q-heading">
                    <HelpCircle size={18} className="text-aqua" />
                    <h3>{faq.q}</h3>
                  </div>
                  <button className="faq-toggle-btn" aria-label="Toggle FAQ panel">
                    {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
                
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      className="features-faq__answer"
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

      {/* Biotech 7-Stage Purification Engine Visual Column */}
      <section className="features-purifier-column section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Advanced Bio-Physics</span>
            <h2 className="section-title">The 7-Stage Purification Engine</h2>
            <p className="section-subtitle">
              Interact with the fluid columns. Click on a purification layer to analyze its micro-separation target and active safety efficiency.
            </p>
          </div>

          <div className="purifier-column__layout">
            {/* Left: The interactive stack representing filter column */}
            <div className="purifier-column__stack">
              {stagesList.map((stage, idx) => (
                <button
                  key={idx}
                  className={`purifier-column__layer layer-${idx} ${activeStage === idx ? 'purifier-column__layer--active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                >
                  <span className="layer-number">{idx + 1}</span>
                  <span className="layer-name">{stage.name}</span>
                  <span className="layer-indicator" />
                </button>
              ))}
            </div>

            {/* Right: Glass Details displaying active stage details */}
            <div className="purifier-column__details-pane glass">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="purifier-details-content"
                >
                  <div className="details-heading-row">
                    <span className="details-layer-badge">Filter Step {activeStage + 1} of 7</span>
                    <h3>{stagesList[activeStage].name}</h3>
                  </div>

                  <p className="details-desc">{stagesList[activeStage].detail}</p>

                  <div className="details-metrics-grid">
                    <div className="metric-card glass">
                      <Cpu size={16} className="text-aqua" />
                      <div>
                        <span>Molecular Target</span>
                        <strong>{stagesList[activeStage].target}</strong>
                      </div>
                    </div>
                    <div className="metric-card glass">
                      <ShieldCheck size={16} className="text-aqua" />
                      <div>
                        <span>Layer Efficiency</span>
                        <strong>{stagesList[activeStage].efficiency}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Progressive purity meter bar */}
                  <div className="column-purity-meter">
                    <div className="meter-label">Accumulated Purity Index</div>
                    <div className="meter-bar-container">
                      <motion.div 
                        className="meter-bar-fill"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((activeStage + 1) / 7) * 100}%` }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div className="meter-numbers">
                      <span>Tap water input</span>
                      <strong>{Math.round(((activeStage + 1) / 7) * 99)}% Safe Pure</strong>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Blueprint Diagram Panel */}
          <motion.div 
            className="tech-blueprint-placeholder glass magnetic"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: '3.5rem 2.5rem',
              marginTop: '4rem',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              background: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85)), url('/assets/7stages.jpg') no-repeat center center / cover",
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-glass)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => setShowBlueprintModal(true)}
            whileHover={{ scale: 1.01, border: '1px solid var(--color-aqua)', transition: { duration: 0.2 } }}
          >
            <div style={{ position: 'relative', zIndex: 3 }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 15px rgba(15, 23, 42, 0.4))' }}>🔍</div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.6rem', color: '#ffffff', fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.01em' }}>Explore 7-Stage Molecular Filtration Blueprint</h4>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', maxWidth: '520px', margin: '0 auto 1.5rem auto', lineHeight: '1.6', fontWeight: '500' }}>
                View the high-resolution engineering blueprint of internal filtration cartridge loops, active copper lines, and fluid mechanics.
              </p>
              <button 
                className="btn-primary magnetic" 
                style={{ 
                  margin: '0 auto',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  boxShadow: 'none'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBlueprintModal(true);
                }}
              >
                View High-Resolution Schematic
              </button>
            </div>
            <div style={{
              position: 'absolute',
              inset: '8px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 'calc(var(--radius-lg) - 8px)',
              pointerEvents: 'none'
            }} />
          </motion.div>
        </div>
      </section>

      {/* Lightbox / Modal for 7-Stage Blueprint */}
      <AnimatePresence>
        {showBlueprintModal && (
          <motion.div 
            className="blueprint-modal-overlay" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBlueprintModal(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(16px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out'
            }}
          >
            <motion.div 
              className="blueprint-modal-content glass"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '90%',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                background: 'rgba(15, 23, 42, 0.4)',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <button 
                onClick={() => setShowBlueprintModal(false)}
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '1.2rem',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  zIndex: 10,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ef4444';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(15, 23, 42, 0.75)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                ✕
              </button>
              <img 
                src="/assets/7stages.jpg" 
                alt="7-Stage Purification Engine Blueprint" 
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              <div 
                style={{
                  padding: '1.5rem 2.5rem',
                  background: 'rgba(15, 23, 42, 0.95)',
                  width: '100%',
                  textAlign: 'center',
                  color: '#f8fafc',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem'
                }}
              >
                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif', color: '#ffffff', letterSpacing: '-0.01em' }}>Technical 7-Stage Purification Blueprint</h4>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>Comprehensive molecular filtration breakdown and active fluid dynamics loops.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
