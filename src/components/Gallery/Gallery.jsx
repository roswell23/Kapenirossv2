import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../../assets/data/coffeeData';
import './Gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Ambiance', 'Craftsmanship', 'Roastery', 'Brewing', 'Bakery'];

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Camera size={13} /> Visual Storytelling
          </div>
          <h2 className="font-serif">
            Inside the <span className="gradient-gold-text">Kapeniross World</span>
          </h2>
          <p>
            A glimpse into our daily roastery life, barista craftsmanship, and warm interior aesthetic.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="gallery-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item glass-card"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.title} className="gallery-img" />
              <div className="gallery-hover-overlay">
                <div className="overlay-content">
                  <span className="gallery-cat">{item.category}</span>
                  <h4 className="gallery-title font-serif">{item.title}</h4>
                  <span className="expand-icon"><Maximize2 size={18} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup Modal */}
      {selectedImage && (
        <div className="lightbox-modal" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-lightbox" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <span className="badge">{selectedImage.category}</span>
              <h3 className="font-serif mt-2">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
