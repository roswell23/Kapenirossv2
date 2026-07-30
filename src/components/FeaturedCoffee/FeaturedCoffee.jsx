import React from 'react';
import { Star, Plus, Flame, Sparkles, Eye } from 'lucide-react';
import { FEATURED_COFFEES } from '../../assets/data/coffeeData';
import './FeaturedCoffee.css';

export default function FeaturedCoffee({ onAddToCart, onQuickView }) {
  return (
    <section id="featured" className="featured-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Sparkles size={13} /> House Masterpieces
          </div>
          <h2 className="font-serif">
            Our Signature <span className="gradient-gold-text">Featured Roasts</span>
          </h2>
          <p>
            Handpicked single-origin micro-lots roasted daily by our master baristas. 
            Experience complex flavor notes and rich aromas crafted for discerning palates.
          </p>
        </div>

        {/* Featured Coffee Grid */}
        <div className="featured-grid">
          {FEATURED_COFFEES.map((item) => (
            <div key={item.id} className="featured-card glass-card">
              {/* Card Header Media */}
              <div className="card-media">
                <img src={item.image} alt={item.name} className="card-img" />
                <span className="card-badge">{item.badge}</span>
                
                <button 
                  className="quick-view-btn"
                  onClick={() => onQuickView && onQuickView(item)}
                  title="Quick View Details"
                >
                  <Eye size={16} /> Quick View
                </button>
              </div>

              {/* Card Body Details */}
              <div className="card-body">
                <div className="card-meta">
                  <span className="roast-type"><Flame size={13} /> {item.roast}</span>
                  <div className="rating">
                    <Star size={13} className="star-icon" />
                    <span>{item.rating}</span>
                    <span className="reviews">({item.reviews})</span>
                  </div>
                </div>

                <h3 className="card-title font-serif">{item.name}</h3>
                <p className="card-tagline">{item.tagline}</p>
                <p className="card-origin">Origin: <strong>{item.origin}</strong></p>

                {/* Roast Level Indicator */}
                <div className="roast-meter">
                  <div className="meter-label">
                    <span>Roast Intensity</span>
                    <span>{item.roastLevel}%</span>
                  </div>
                  <div className="meter-bar-track">
                    <div className="meter-bar-fill" style={{ width: `${item.roastLevel}%` }}></div>
                  </div>
                </div>

                {/* Flavor Notes */}
                <div className="flavor-notes">
                  {item.notes.map((note, idx) => (
                    <span key={idx} className="note-pill">{note}</span>
                  ))}
                </div>

                {/* Card Footer Price & Add */}
                <div className="card-footer">
                  <div className="card-price font-serif">
                    ${item.price.toFixed(2)}
                  </div>
                  <button 
                    className="btn btn-primary btn-sm add-btn"
                    onClick={() => onAddToCart && onAddToCart(item)}
                  >
                    <Plus size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
