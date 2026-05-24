import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  ArrowLeft, 
  Check, 
  ShoppingBag,
  HelpCircle,
  Activity,
  Layers,
  Droplet,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './product-details.css';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Magnifier Lens states
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  const [activeSpec, setActiveSpec] = useState(null);

  const specDetails = {
    filtration: "Employs automated hyper-filtration membrane isolating heavy toxic solutes down to 0.0001 microns, followed by post-carbon polishing and double mineral enrichment.",
    flowRate: "Continuous bio-brine loop achieves rapid flow rates up to 15 liters per hour, ensuring your luxury decanter refills instantly.",
    tdsLimit: "Maintains optimal sweet, light-mineralized pH 8.5 balance even with input municipal borewell solutes up to 2500 ppm.",
    capacity: "Features dynamic double-walled food-grade stainless steel storage shielding purified water from biological pathogens.",
    warranty: "Includes 5 years comprehensive coverage on all biological membrane columns, electronic valves, display modules, and installation adapters.",
    efficiency: "Trademarked Eco Recovery Loop redirects solute streams back to utility basins, recycling 75%-90% of raw input brine water."
  };

  const productsData = {
    blue: {
      name: "G+ Series Royal Blue",
      price: "$449",
      tag: "Best Seller",
      img: "/assets/blue.jpg.jpeg",
      colorCode: "#0ea5e9",
      desc: "An stunning royal blue liquid finish equipped with advanced mineral protection modules. Rejuvenates water structure for standard home environments.",
      specs: {
        filtration: "7-Stage RO + UV + UF",
        flowRate: "12 Litres / Hour",
        tdsLimit: "Up to 2200 ppm",
        capacity: "9.5 Litres Storage",
        warranty: "5 Years Comprehensive",
        efficiency: "Eco-Recovery Loop (75% Recovery)"
      }
    },
    black: {
      name: "G+ Series Carbon Black",
      price: "$499",
      tag: "Pro Flagship",
      img: "/assets/black.jpg.jpeg",
      colorCode: "#1e293b",
      desc: "Our double-anodized space black luxury flagship. Equipped with our most advanced digital flow rate display, ambient glass cup lighting, and smart app integration.",
      specs: {
        filtration: "8-Stage Intelligent RO + UV + UF",
        flowRate: "15 Litres / Hour",
        tdsLimit: "Up to 2500 ppm",
        capacity: "10.5 Litres Storage",
        warranty: "5 Years Complete Premium",
        efficiency: "Ultra-Recovery Loop (85% Recovery)"
      }
    },
    'desert-brown': {
      name: "G+ Series Desert Brown",
      price: "$479",
      tag: "Limited Luxury",
      img: "/assets/desert brown.jpg.jpeg",
      colorCode: "#b45309",
      desc: "Crafted exclusively for solid-wood and earth-toned luxury interiors. Features an elegant metallic copper-bronze profile with customized flow nozzle accents.",
      specs: {
        filtration: "7-Stage Classic RO + UV + UF",
        flowRate: "12 Litres / Hour",
        tdsLimit: "Up to 2000 ppm",
        capacity: "9.5 Litres Storage",
        warranty: "5 Years Comprehensive",
        efficiency: "Eco-Recovery Loop (75% Recovery)"
      }
    },
    'sea-green': {
      name: "G+ Series Sea Green",
      price: "$459",
      tag: "Eco Friendly",
      img: "/assets/sea green.jpg.jpeg",
      colorCode: "#10b981",
      desc: "A refreshing marine finish that integrates our eco-reclaim purification engine, recycling input waste water to achieve near absolute zero wastage.",
      specs: {
        filtration: "7-Stage Eco RO + UV + UF",
        flowRate: "13 Litres / Hour",
        tdsLimit: "Up to 2200 ppm",
        capacity: "9.5 Litres Storage",
        warranty: "5 Years Comprehensive",
        efficiency: "Zero Waste Recovery (90% Recovery)"
      }
    }
  };

  // Safe fallback to 'blue'
  const activeId = productsData[id] ? id : 'blue';
  const product = productsData[activeId];

  // Swatch navigation helper
  const selectColor = (colorId) => {
    navigate(`/product/${colorId}`);
  };

  return (
    <div className="detail-page light-luxury">
      <div className="container">
        {/* Back Link */}
        <Link to="/products" className="detail-back-link">
          <ArrowLeft size={16} />
          <span>Back to Catalog</span>
        </Link>

        <div className="detail-grid">
          {/* Left: Product Media with Rotating Glow */}
          <div className="detail-media">
            <div className="detail-media__ring-decor">
              <div className="detail-decor-ring ring-1" />
              <div className="detail-decor-ring ring-2" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                className="detail-media__img-wrapper"
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.4 }}
                onMouseMove={(e) => {
                  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - left) / width) * 100;
                  const y = ((e.clientY - top) / height) * 100;
                  setZoomStyle({
                    display: 'block',
                    backgroundImage: `url(${product.img})`,
                    backgroundPosition: `${x}% ${y}%`,
                    left: `${e.clientX - left - 75}px`,
                    top: `${e.clientY - top - 75}px`
                  });
                }}
                onMouseLeave={() => setZoomStyle({ display: 'none' })}
              >
                <img src={product.img} alt={product.name} className="detail-media__img" />
                <div className="detail-media__shadow" />
                
                {/* Interactive Magnifying Glass Lens overlay */}
                <div className="detail-media__magnifier" style={zoomStyle} />
              </motion.div>
            </AnimatePresence>

            {/* Spec chips */}
            <div className="detail-media__badge glass">
              <Sparkles size={14} className="text-aqua" />
              <span>{product.tag}</span>
            </div>
          </div>

          {/* Right: Product Specifications */}
          <div className="detail-info glass">
            <span className="detail-info__tag">G+ Series Luxury</span>
            <h1 className="detail-info__name">{product.name}</h1>
            
            <div className="detail-info__price-row">
              <span className="price-lbl">concierge retail value</span>
              <span className="price-val">{product.price}</span>
            </div>

            <p className="detail-info__desc">{product.desc}</p>

            {/* Color Swatch Picker */}
            <div className="detail-info__swatches">
              <span className="swatch-title">Finish Finisher:</span>
              <div className="swatch-buttons">
                {Object.keys(productsData).map((colorKey) => (
                  <button
                    key={colorKey}
                    className={`detail-swatch ${activeId === colorKey ? 'detail-swatch--active' : ''}`}
                    onClick={() => selectColor(colorKey)}
                    aria-label={`Switch color to ${colorKey}`}
                  >
                    <span 
                      className="swatch-dot" 
                      style={{ backgroundColor: productsData[colorKey].colorCode }} 
                    />
                    <span className="swatch-lbl">{colorKey.replace('-', ' ')}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications Accordion Expander */}
            <div className="detail-info__specs">
              <h3>Technical Architecture</h3>
              <p className="specs-sub-hdr">Click a specification row to analyze its biophysics details.</p>
              
              <div className="specs-accordion-list">
                {Object.entries(product.specs).map(([key, value]) => {
                  const isOpen = activeSpec === key;
                  return (
                    <div 
                      key={key} 
                      className={`specs-accordion-item glass ${isOpen ? 'specs-accordion-item--open' : ''}`}
                      onClick={() => setActiveSpec(isOpen ? null : key)}
                    >
                      <div className="specs-accordion-header">
                        <span className="spec-key">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <div className="specs-val-row">
                          <span className="spec-value">{value}</span>
                          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            className="specs-accordion-body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p>{specDetails[key] || "Engineered to deliver high efficiency cellular hydration balance."}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Core features listing */}
            <div className="detail-info__highlights">
              <div className="highlight-bullet">
                <div className="bullet-bullet"><Check size={14} /></div>
                <span>Double copper-zinc bio-infusion cartridge</span>
              </div>
              <div className="highlight-bullet">
                <div className="bullet-bullet"><Check size={14} /></div>
                <span>Super-dense solid carbon pre-block</span>
              </div>
            </div>

            {/* Checkout / Booking Reserve */}
            <div className="detail-info__actions">
              <Link to="/contact" className="btn-primary detail-buy-btn magnetic">
                <ShoppingBag size={16} />
                <span>Reserve Professional Setup</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bio-Chemistry Restoration Details */}
        <section className="detail-restoration glass">
          <div className="restoration-grid">
            <div className="restoration-card">
              <Layers size={24} className="restoration-icon" />
              <h4>Double Mineral Restorer</h4>
              <p>Restores optimal nutritional ions of calcium and zinc back to pure RO-filtered water to support active cell structure.</p>
            </div>
            <div className="restoration-divider" />
            <div className="restoration-card">
              <Activity size={24} className="restoration-icon" />
              <h4>Active Alkaline Support</h4>
              <p>Steers post-RO acidic water levels back to a perfect bio-digestible pH profile between 8.2 and 8.6 automatically.</p>
            </div>
            <div className="restoration-divider" />
            <div className="restoration-card">
              <Droplet size={24} className="restoration-icon" />
              <h4>Eco Recovery loop</h4>
              <p>Utilizes dual recovery channels to recycle input brine waste water, minimizing water discard by up to 85%.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
