import React from 'react';
import { Star, Plus, Flame, Leaf } from 'lucide-react';
import './Menu.css';

export default function CoffeeCard({ item, onAddToCart, onQuickView }) {
  return (
    <div className="menu-card glass-card">
      <div className="menu-card-img-wrap">
        <img src={item.image} alt={item.name} className="menu-card-img" />
        {item.dietary && item.dietary.length > 0 && (
          <div className="menu-diet-tags">
            {item.dietary.map((d, i) => (
              <span key={i} className="diet-tag"><Leaf size={10} /> {d}</span>
            ))}
          </div>
        )}
      </div>

      <div className="menu-card-content">
        <div className="menu-card-meta">
          <span className="roast-badge"><Flame size={12} /> {item.roast}</span>
          <div className="rating">
            <Star size={12} className="star-icon" />
            <span>{item.rating}</span>
          </div>
        </div>

        <h4 className="menu-card-title font-serif">{item.name}</h4>
        <p className="menu-card-desc">{item.description}</p>

        {/* Flavor Notes */}
        {item.notes && (
          <div className="menu-notes">
            {item.notes.map((note, idx) => (
              <span key={idx} className="note-chip">{note}</span>
            ))}
          </div>
        )}

        <div className="menu-card-action">
          <span className="menu-price font-serif">${item.price.toFixed(2)}</span>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => onAddToCart && onAddToCart(item)}
          >
            <Plus size={15} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}
