import React from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../../assets/data/coffeeData';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <MessageSquareQuote size={13} /> Verified Reviews
          </div>
          <h2 className="font-serif">
            Loved By Coffee <span className="gradient-gold-text">Connoisseurs</span>
          </h2>
          <p>
            Read what regulars, visiting critics, and daily coffee enthusiasts say about Kapeniross.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card glass-card">
              <Quote className="quote-watermark" size={70} />

              <div className="testimonial-header">
                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} className="star-fill" />
                  ))}
                </div>
              </div>

              <p className="testimonial-text font-serif">
                "{item.text}"
              </p>

              <div className="testimonial-user">
                <img src={item.avatar} alt={item.name} className="user-avatar" />
                <div className="user-info">
                  <h4 className="user-name">{item.name}</h4>
                  <span className="user-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
