import React, { useState } from 'react';
import { Coffee, Send, Heart, Check, Globe, Share2, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Newsletter Banner */}
        <div className="newsletter-banner glass-card">
          <div className="newsletter-text">
            <h3 className="font-serif">Join the Kapeniross Coffee Club</h3>
            <p>Receive weekly bean roast releases, barista brew guides, and 15% off your first order.</p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            {subscribed ? (
              <div className="sub-success font-serif text-gold">
                <Check size={18} /> Welcome to the Club! Check your inbox.
              </div>
            ) : (
              <>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe <Send size={15} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Main Footer Links Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="logo-icon-wrap">
                <Coffee size={22} className="logo-icon" />
              </div>
              <span className="brand-name font-serif">Kapeniross</span>
            </div>
            <p className="footer-bio">
              Artisanal coffee roastery dedicated to micro-batch single origins, direct-trade ethical farming, and unforgettable sensory coffee experiences.
            </p>
            <div className="social-links">
              <a href="#website" aria-label="Website" className="social-btn"><Globe size={18} /></a>
              <a href="#share" aria-label="Share" className="social-btn"><Share2 size={18} /></a>
              <a href="#contact" aria-label="Email Us" className="social-btn"><Mail size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title font-serif">Explore Menu</h4>
            <ul className="footer-list">
              <li><a href="#featured">Signature Espressos</a></li>
              <li><a href="#menu">Single Origin Pour-Overs</a></li>
              <li><a href="#menu">Nitro Cold Brews</a></li>
              <li><a href="#menu">Ceremonial Matcha</a></li>
              <li><a href="#menu">Fresh French Pastries</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-col">
            <h4 className="footer-col-title font-serif">Kapeniross Craft</h4>
            <ul className="footer-list">
              <li><a href="#about">Our Sourcing Ethos</a></li>
              <li><a href="#why-us">German Roasting Process</a></li>
              <li><a href="#offers">Reserve Subscription</a></li>
              <li><a href="#gallery">Roastery Gallery</a></li>
              <li><a href="#testimonials">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title font-serif">Visit Our Cafe</h4>
            <p className="footer-info-text">
              742 Artisanal Way, Roastery Quarter, NY 10012
            </p>
            <p className="footer-info-text text-gold mt-2">
              Mon - Fri: 7am - 10pm <br />
              Sat - Sun: 8am - 11pm
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kapeniross Artisanal Coffee Roastery. All rights reserved.</p>
          <p className="crafted-with">
            Crafted with <Heart size={14} className="heart-icon" /> for Coffee Enthusiasts worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
