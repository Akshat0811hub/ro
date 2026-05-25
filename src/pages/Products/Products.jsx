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
      id: 'ro1', 
      name: "CCK Pearl White", 
      price: "$449", 
      tag: "Ultra Flagship", 
      category: 'classic',
      desc: "Sleek, stunning white porcelain glaze housing with micro-gold anodized nozzle lines. Built with high-purity mineral balance.", 
      img: "/assets/ro1.png",
      colorCode: "#9fbcab",
      specs: {
        filtration: "8-Stage Premium RO + UV + UF",
        flowRate: "15 Litres / Hour",
        tdsLimit: "Up to 2500 ppm",
        capacity: "10.5 Litres Storage",
        warranty: "5 Years Comprehensive",
        efficiency: "Eco Recovery (75% Recovery)"
      }
    },
    { 
      id: 'ro2', 
      name: "CCK Emerald Mint", 
      price: "$459", 
      tag: "Eco Premium", 
      category: 'eco',
      desc: "Beautiful sage-mint casing equipped with our trademarked double eco-recovery loop, reclaiming municipal brine water for ultimate sustainability.", 
      img: "/assets/ro2.png",
      colorCode: "#829e8d",
      specs: {
        filtration: "7-Stage Eco RO + UV + UF",
        flowRate: "13 Litres / Hour",
        tdsLimit: "Up to 2200 ppm",
        capacity: "9.5 Litres Storage",
        warranty: "5 Years Comprehensive",
        efficiency: "Zero Waste (90% Recovery)"
      }
    },
    { 
      id: 'ro3', 
      name: "CCK Obsidian Black", 
      price: "$479", 
      tag: "Best Seller", 
      category: 'classic',
      desc: "Deep obsidian black casing featuring double copper-zinc bio-mineralization. Perfect for standard family sizes.", 
      img: "/assets/ro3.png",
      colorCode: "#121212",
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
      id: 'ro4', 
      name: "CCK Platinum Slate", 
      price: "$499", 
      tag: "Pro Minimalist", 
      category: 'pro',
      desc: "Futuristic double-anodized deep slate black casing. Features ambient cup lighting and active smartphone app control.", 
      img: "/assets/ro4.png",
      colorCode: "#1e293b",
      specs: {
        filtration: "8-Stage Premium RO + UV + UF",
        flowRate: "15 Litres / Hour",
        tdsLimit: "Up to 2500 ppm",
        capacity: "10.5 Litres Storage",
        warranty: "5 Years Complete Premium",
        efficiency: "Ultra Recovery (85% Recovery)"
      }
    },
    { 
      id: 'ro5', 
      name: "CCK Amber Gold", 
      price: "$529", 
      tag: "Limited Luxury", 
      category: 'pro',
      desc: "An elegant, limited-edition gold-anodized profile crafted to blend seamlessly into luxury designer solid-wood kitchen layouts.", 
      img: "/assets/ro5.png",
      colorCode: "#b45309",
      specs: {
        filtration: "7-Stage Classic RO + UV + UF",
        flowRate: "14 Litres / Hour",
        tdsLimit: "Up to 2400 ppm",
        capacity: "12.0 Litres Storage",
        warranty: "5 Years Comprehensive",
        efficiency: "Eco Recovery (75% Recovery)"
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
            <h1 className="catalog-hero__title">
              The Premium <span className="text-white">Pure Collection</span>
            </h1>
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
              <h3>All CCK Models Feature:</h3>
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
