import React from 'react';
import { Coffee, Flame, Star, Award, ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Glow Background Shapes */}
      <div className="hero-ambient-glow"></div>
      <div className="hero-ambient-glow glow-2"></div>

      <div className="container hero-grid">
        {/* Left Column - Headline & CTAs */}
        <div className="hero-content">
          <div className="badge hero-badge">
            <Flame size={14} /> Micro-Batch Specialty Roastery
          </div>

          <h1 className="hero-title font-serif">
            Crafted Beans, <br />
            <span className="gradient-gold-text">Unforgettable Aromas</span>
          </h1>

          <p className="hero-description">
            Welcome to <strong>Kapeniross</strong>. We source ethically farmed 100% Arabica cherries, 
            micro-roast them in German cast-iron drums, and hand-craft every cup to perfection.
          </p>

          {/* CTA Group */}
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary">
              Explore Full Menu <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-secondary">
              Our Craft Story
            </a>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Organic Arabica</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">18+</div>
              <div className="stat-label">Roast Profiles</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">4.9 ★</div>
              <div className="stat-label">1,200+ Reviews</div>
            </div>
          </div>
        </div>

        {/* Right Column - Hero Visual Card */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=900" 
              alt="Kapeniross Signature Espresso" 
              className="hero-main-img"
            />
            <div className="hero-img-overlay"></div>

            {/* Floating Card 1: Daily Roast */}
            <div className="floating-card float-top-right glass-card animate-float">
              <div className="float-icon">
                <Coffee size={20} />
              </div>
              <div>
                <div className="float-title">Single Origin Batch</div>
                <div className="float-sub">Ethiopian Yirgacheffe</div>
              </div>
            </div>

            {/* Floating Card 2: Award Badge */}
            <div className="floating-card float-bottom-left glass-card">
              <div className="float-icon gold">
                <Award size={20} />
              </div>
              <div>
                <div className="float-title">Master Roaster 2026</div>
                <div className="float-sub">Certified Gold Standard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
