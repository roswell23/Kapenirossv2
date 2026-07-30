import React from 'react';
import { Sparkles, Heart, Compass, CheckCircle2 } from 'lucide-react';
import './About.css';

export default function About() {
  const steps = [
    {
      num: '01',
      title: 'Direct-Trade Sourcing',
      desc: 'We partner directly with high-altitude shade-grown micro-farms in Ethiopia, Colombia, and Sumatra.'
    },
    {
      num: '02',
      title: 'German Drum Roasting',
      desc: 'Small-batch roasting using custom thermal curves to unlock nuanced berry, floral, and cacao undertones.'
    },
    {
      num: '03',
      title: 'Cupping & Quality QA',
      desc: 'Every batch undergoes rigorous Q-Grader cupping to guarantee strict specialty grade standards (85+).'
    },
    {
      num: '04',
      title: 'Artisanal Extraction',
      desc: 'Brewed to order using water calibrated for mineral balance and precise temperature profiling.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Composite */}
          <div className="about-visual">
            <div className="about-img-box main-box">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800" 
                alt="Kapeniross Roastery Interior" 
                className="about-img"
              />
            </div>
            <div className="about-img-box sub-box">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600" 
                alt="Coffee Beans Roasting" 
                className="about-img"
              />
            </div>
            
            <div className="about-experience-badge glass-card">
              <span className="exp-years font-serif">12+</span>
              <span className="exp-text">Years of Coffee Craft Excellence</span>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="about-content">
            <div className="badge section-tag">
              <Compass size={13} /> Our Heritage & Ethos
            </div>
            <h2 className="about-title font-serif">
              Rooted in Passion, <br />
              <span className="gradient-gold-text">Brewed for Perfection</span>
            </h2>
            <p className="about-lead">
              Founded with a singular vision: to honor the journey of coffee from mountain slope to ceramic cup. 
              At <strong>Kapeniross</strong>, coffee isn’t just a morning routine—it’s an artisanal art form.
            </p>
            <p className="about-body">
              We reject mass-produced commercial coffee. Every single bean in our roastery is hand-selected, 
              ethically traded, and roasted in small batches to preserve its natural origin characteristics.
            </p>

            {/* Core Values Checklist */}
            <div className="about-values">
              <div className="value-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>100% Direct-Trade & Fair Pay Sourcing</span>
              </div>
              <div className="value-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Zero Carbon Offset Packaging</span>
              </div>
              <div className="value-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Q-Grader Certified Master Baristas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Roasting Journey Process */}
        <div className="process-container">
          <h3 className="process-header font-serif text-center">
            The <span className="text-gold">Kapeniross Four-Step</span> Craft Journey
          </h3>

          <div className="process-grid">
            {steps.map((step) => (
              <div key={step.num} className="process-card glass-card">
                <div className="process-num font-serif">{step.num}</div>
                <h4 className="process-card-title">{step.title}</h4>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
