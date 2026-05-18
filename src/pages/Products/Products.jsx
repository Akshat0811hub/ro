import React from 'react';
import { motion } from 'framer-motion';
import '../Home/home.css'; // Re-use products grid styles

const Products = () => {
  const products = [
    { name: "G+ Series Black", price: "$499", desc: "Sleek and modern dark edition. 7-stage RO.", img: "/assets/black.jpg.jpeg" },
    { name: "G+ Series Blue", price: "$449", desc: "Classic blue edition. Advanced mineral retention.", img: "/assets/blue.jpg.jpeg" },
    { name: "G+ Series Desert Brown", price: "$479", desc: "Earthy tones. Perfect for wooden interiors.", img: "/assets/desert brown.jpg.jpeg" },
    { name: "G+ Series Sea Green", price: "$459", desc: "Refreshing green tint. High-capacity tank.", img: "/assets/sea green.jpg.jpeg" }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh', paddingBottom: '4rem' }}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Products</h1>
        <p>Explore our premium range of RO water purifiers.</p>
      </motion.div>

      <div className="featured-products" style={{ paddingTop: '2rem' }}>
        <div className="products-grid">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              className="product-card glass"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="product-image-container" style={{ height: '300px', backgroundColor: '#ffffff', padding: '1rem' }}>
                 <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', flexGrow: 1 }}>{product.desc}</p>
                <p className="price" style={{ fontSize: '1.4rem' }}>{product.price}</p>
                <button className="btn btn-primary magnetic" style={{ width: '100%', marginTop: '1rem', padding: '0.8rem' }}>Buy Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
