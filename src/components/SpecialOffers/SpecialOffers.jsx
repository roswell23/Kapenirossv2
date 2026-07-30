import React, { useState } from 'react';
import { Tag, Sparkles, Copy, Check, Clock } from 'lucide-react';
import { SPECIAL_OFFERS } from '../../assets/data/coffeeData';
import './SpecialOffers.css';

export default function SpecialOffers() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="offers" className="offers-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag badge-terracotta">
            <Tag size={13} /> Exclusive Promotions
          </div>
          <h2 className="font-serif">
            Special Deals & <span className="gradient-gold-text">Bundles</span>
          </h2>
          <p>
            Treat yourself to our curated morning combos, tasting flights, and monthly roastery subscriptions.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="offers-grid">
          {SPECIAL_OFFERS.map((offer) => (
            <div key={offer.id} className="offer-card glass-card">
              <div className="offer-img-box">
                <img src={offer.image} alt={offer.title} className="offer-img" />
                <span className="offer-badge-tag">{offer.badge}</span>
                <span className="discount-pill font-serif">{offer.discount}</span>
              </div>

              <div className="offer-content">
                <div className="offer-subtitle">
                  <Clock size={13} /> {offer.subtitle}
                </div>
                <h3 className="offer-title font-serif">{offer.title}</h3>
                <p className="offer-desc">{offer.description}</p>

                {/* Promo Code Box */}
                <div className="promo-code-box">
                  <div className="code-info">
                    <span className="code-label">PROMO CODE:</span>
                    <strong className="code-value">{offer.code}</strong>
                  </div>
                  <button 
                    className="copy-btn"
                    onClick={() => handleCopy(offer.code)}
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <Check size={14} className="text-gold" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Copy
                      </>
                    )}
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
