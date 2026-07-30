import React from 'react';
import { Flame, ShieldCheck, UserCheck, Coffee, Croissant, Leaf, Award } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Flame size={26} />,
      title: 'Micro-Batch Roasting',
      description: 'Roasting in small 5kg drum batches allows us to monitor bean thermal profiles second-by-second for peak sweetness.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Ethically Sourced Beans',
      description: 'We pay 35% above fair-trade market prices directly to smallholder farming cooperatives in Africa and South America.'
    },
    {
      icon: <UserCheck size={26} />,
      title: 'Master Class Baristas',
      description: 'Our team comprises certified Q-Graders and championship latte artists dedicated to consistent cup excellence.'
    },
    {
      icon: <Coffee size={26} />,
      title: 'Warm Roasted Atmosphere',
      description: 'Curated vinyl acoustics, warm ambient lighting, high-speed fiber Wi-Fi, and plush leather seating.'
    },
    {
      icon: <Croissant size={26} />,
      title: 'Fresh Daily Bakery',
      description: 'Handcrafted croissants, babka, and cookies baked fresh every single morning using Normandy French butter.'
    },
    {
      icon: <Leaf size={26} />,
      title: '100% Sustainable Ethos',
      description: 'Plant-based biodegradable cups, solar-powered roasting equipment, and repurposed coffee ground soil nutrients.'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Award size={13} /> The Kapeniross Advantage
          </div>
          <h2 className="font-serif">
            Why Coffee Lovers <span className="gradient-gold-text">Choose Us</span>
          </h2>
          <p>
            We go beyond standard coffee serving. Every aspect of our roastery is designed 
            around uncompromising quality, ethical passion, and sensory delight.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((item, index) => (
            <div key={index} className="pillar-card glass-card">
              <div className="pillar-icon-box">
                {item.icon}
              </div>
              <h3 className="pillar-title font-serif">{item.title}</h3>
              <p className="pillar-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
