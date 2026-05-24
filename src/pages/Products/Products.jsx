import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, SlidersHorizontal, Eye, ShieldAlert, Cpu, Check, Columns, X } from 'lucide-react';
import './products.css';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [comparedIds, setComparedIds] = useState([]);

  const productsList = [
    { 
      id: 'blue', 
      name: "G+ Series Royal Blue", 
      price: "$449", 
      tag: "Best Seller", 
      category: 'classic',
      desc: "Classic deep royal blue finish featuring advanced copper-zinc bio-mineralization. Perfect for standard family sizes.", 
      img: "/assets/blue.jpg.jpeg",
      colorCode: "#0ea5e9",
      specs: {
        filtration: "7-Stage RO + UV + UF",
        flowRate: "12 Litres / Hour",
        tdsLimit: "Up to 2200 ppm",
        capacity: "9.5 Litres Storage",
        warranty: "5 Years Comprehensive",
        efficiency: "Eco Recovery (75% Recovery)"
      }
    },
    { 
      id: 'black', 
      name: "G+ Series Carbon Black", 
      price: "$499", 
      tag: "Pro Flagship", 
      category: 'pro',
      desc: "Futuristic double-anodized deep space black finish. Features active digital water volume controls and ambient night cup light.", 
      img: "/assets/black.jpg.jpeg",
      colorCode: "#1e293b",
      specs: {
        filtration: "8-Stage Intelligent RO+UV+UF",
        flowRate: "15 Litres / Hour",
        tdsLimit: "Up to 2500 ppm",
        capacity: "10.5 Litres Storage",
        warranty: "5 Years Complete Premium",
        efficiency: "Ultra Recovery (85% Recovery)"
      }
    },
    { 
      id: 'desert-brown', 
      name: "G+ Series Desert Brown", 
      price: "$479", 
      tag: "Limited Luxury", 
      category: 'classic',
      desc: "An earthy, luxurious dark bronze finish crafted to blend seamlessly into premium solid-wood designer kitchen spaces.", 
      img: "/assets/desert brown.jpg.jpeg",
      colorCode: "#b45309",
      specs: {
        filtration: "7-Stage Classic RO+UV+UF",
        flowRate: "12 Litres / Hour",
        tdsLimit: "Up to 2000 ppm",
        capacity: "9.5 Litres Storage",
        warranty: "5 Years Comprehensive",
        efficiency: "Eco Recovery (75% Recovery)"
      }
    },
    { 
      id: 'sea-green', 
      name: "G+ Series Sea Green", 
      price: "$459", 
      tag: "Eco Friendly", 
      category: 'eco',
      desc: "Refreshing sea green mineralizing casing. Equipped with our premium dual loop recovery achieving near-zero wastewater.", 
      img: "/assets/sea green.jpg.jpeg",
      colorCode: "#10b981",
      specs: {
        filtration: "7-Stage Eco RO + UV + UF",
        flowRate: "13 Litres / Hour",
        tdsLimit: "Up to 2200 ppm",
        capacity: "9.5 Litres Storage",
        warranty: "5 Years Comprehensive",
        efficiency: "Zero Waste (90% Recovery)"
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Models' },
    { id: 'pro', label: 'Pro Flagships' },
    { id: 'classic', label: 'Classic Luxury' },
    { id: 'eco', label: 'Eco Save Series' }
  ];

  const toggleCompare = (id) => {
    setComparedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 3) {
        alert("You can compare up to 3 G+ models simultaneously.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const clearCompare = () => setComparedIds([]);

  const filteredProducts = activeFilter === 'all' 
    ? productsList 
    : productsList.filter(p => p.category === activeFilter);

  return (
    <div className="catalog-page light-luxury">
      {/* Immersive Header */}
      <section className="catalog-hero">
        <div className="catalog-hero__bg">
          <div className="catalog-orb catalog-orb--1" />
          <div className="catalog-orb catalog-orb--2" />
        </div>

        <div className="container">
          <motion.div
            className="catalog-hero__content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">G+ Masterpieces</span>
            <h1 className="catalog-hero__title">The Premium Pure Collection</h1>
            <p className="catalog-hero__subtitle">
              Sleek profiles, flawless water chemistry, and Apple-grade finishes. Select the model built for your lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="catalog-grid section">
        <div className="container">
          {/* Filters Bar */}
          <div className="catalog-filters glass">
            <div className="filter-title-row">
              <SlidersHorizontal size={16} className="text-aqua" />
              <span>Filter Collection</span>
            </div>
            <div className="filter-buttons">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeFilter === cat.id ? 'filter-btn--active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid display */}
          <motion.div 
            className="catalog-products-grid"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="catalog-card glass"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Image wrapper */}
                  <div className="catalog-card__img-container">
                    <span className="catalog-card__badge glass">
                      <Sparkles size={12} className="text-aqua" />
                      {product.tag}
                    </span>
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="catalog-card__img"
                    />
                    <div className="catalog-card__img-shadow" style={{ background: `radial-gradient(ellipse, ${product.colorCode}22 0%, transparent 70%)` }} />
                    
                    {/* Select Compare Checkbox overlay */}
                    <button 
                      className={`catalog-card__compare-btn glass ${comparedIds.includes(product.id) ? 'catalog-card__compare-btn--active' : ''}`}
                      onClick={() => toggleCompare(product.id)}
                    >
                      <Check size={12} style={{ opacity: comparedIds.includes(product.id) ? 1 : 0 }} />
                      <span>{comparedIds.includes(product.id) ? 'Added' : 'Compare'}</span>
                    </button>
                  </div>

                  {/* Content details */}
                  <div className="catalog-card__info" style={{ borderTop: `2px solid ${product.colorCode}1a` }}>
                    <h3 className="catalog-card__title">{product.name}</h3>
                    <p className="catalog-card__desc">{product.desc}</p>
                    
                    <div className="catalog-card__footer">
                      <div className="price-col">
                        <span className="price-lbl">Retail Price</span>
                        <span className="price-amount">{product.price}</span>
                      </div>
                      <Link to={`/product/${product.id}`} className="btn-secondary view-details-btn">
                        <span>Details</span>
                        <Eye size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Side-by-Side Comparison Widget Box */}
          <AnimatePresence>
            {comparedIds.length > 1 && (
              <motion.div 
                className="comparison-widget glass"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="comparison-widget__header">
                  <div className="comparison-widget__title-col">
                    <Columns size={20} className="text-aqua" />
                    <div>
                      <h3>Comparison Dashboard</h3>
                      <p>Active side-by-side analysis of selected G+ models.</p>
                    </div>
                  </div>
                  <button className="clear-comparison-btn glass" onClick={clearCompare}>
                    <X size={14} />
                    <span>Clear All</span>
                  </button>
                </div>

                <div className="comparison-widget__table-container">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Specifications</th>
                        {comparedIds.map(id => {
                          const p = productsList.find(item => item.id === id);
                          return (
                            <th key={id} style={{ color: p.colorCode }}>
                              {p.name}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Retail Value</strong></td>
                        {comparedIds.map(id => (
                          <td key={id} className="text-aqua font-bold">
                            {productsList.find(item => item.id === id).price}
                          </td>
                        ))}
                      </tr>
                      {Object.keys(productsList[0].specs).map(specKey => (
                        <tr key={specKey}>
                          <td className="spec-name-label">{specKey.replace(/([A-Z])/g, ' $1')}</td>
                          {comparedIds.map(id => (
                            <td key={id}>
                              {productsList.find(item => item.id === id).specs[specKey]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Guarantee Box */}
          <div className="catalog-guarantee glass">
            <div className="guarantee-icon-wrapper">
              <Cpu size={24} className="text-aqua" />
            </div>
            <div>
              <h3>All G+ Series Models Feature:</h3>
              <p>
                7-Stage intelligent purification, natural alkaline bio-restoration, double copper defense, 5-year warranty, and free lifetime professional service checks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
