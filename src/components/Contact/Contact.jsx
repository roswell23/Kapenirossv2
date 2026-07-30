import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '09:00',
    guests: '2',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '09:00',
        guests: '2',
        notes: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Calendar size={13} /> Table & Event Booking
          </div>
          <h2 className="font-serif">
            Visit Us or <span className="gradient-gold-text">Reserve a Table</span>
          </h2>
          <p>
            Secure your favorite corner booth for deep work, book a private coffee tasting flight, or get in touch.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact & Location Info */}
          <div className="contact-info-card glass-card">
            <h3 className="info-title font-serif text-gold">Roastery Location & Hours</h3>

            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div>
                <h4>Address</h4>
                <p>742 Artisanal Way, Roastery Quarter, NY 10012</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Clock size={20} /></div>
              <div>
                <h4>Operating Hours</h4>
                <p>Mon - Fri: 7:00 AM - 10:00 PM</p>
                <p>Sat - Sun: 8:00 AM - 11:00 PM</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone size={20} /></div>
              <div>
                <h4>Phone Reservations</h4>
                <p>+1 (555) 892-3488</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div>
                <h4>Email Contact</h4>
                <p>hello@kapeniross-coffee.com</p>
              </div>
            </div>

            {/* Embedded Visual Map Card */}
            <div className="map-visual-card">
              <div className="map-placeholder">
                <MapPin size={32} className="map-marker animate-float" />
                <span className="map-text">Kapeniross Artisanal Roastery</span>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="contact-form-card glass-card">
            <h3 className="form-title font-serif">Table Reservation / Inquiry</h3>

            {submitted ? (
              <div className="reservation-success">
                <CheckCircle size={48} className="success-icon" />
                <h4 className="font-serif">Reservation Received!</h4>
                <p>
                  Thank you, <strong>{formData.name || 'Coffee Lover'}</strong>. We have saved your table request for {formData.date || 'today'}. A confirmation email has been sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reservation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="elena@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Reservation Date</label>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Time Slot</label>
                    <select 
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="08:00">08:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="15:30">03:30 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Guests</label>
                    <select 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="6">6+ Group</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Special Requests or Dietary Notes</label>
                  <textarea 
                    rows="3" 
                    placeholder="Corner booth, high-chair, dairy-free milk preference..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Confirm Table Reservation <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
