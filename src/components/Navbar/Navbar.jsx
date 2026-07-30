import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Search, Menu as MenuIcon, X, Phone, Clock } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ cartCount = 0, onOpenCart, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Featured', href: '#featured' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Notification Bar */}
      <div className="navbar-topbar">
        <div className="container topbar-content">
          <div className="topbar-info">
            <span><Clock size={13} /> Open Daily: 7:00 AM - 10:00 PM</span>
            <span className="divider">•</span>
            <span><Phone size={13} /> +1 (555) 892-3488</span>
          </div>
          <div className="topbar-badge">
            ☕ Fresh Roast Batch: <span>Ethiopia Yirgacheffe Single Origin</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-logo">
          <div className="logo-icon-wrap">
            <Coffee size={24} className="logo-icon" />
          </div>
          <div className="logo-text">
            <span className="brand-name font-serif">Kapeniross</span>
            <span className="brand-sub">Artisanal Roastery</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button 
            className="action-icon-btn" 
            onClick={onOpenSearch} 
            title="Search Coffee Menu"
          >
            <Search size={19} />
          </button>

          <button 
            className="action-icon-btn cart-btn" 
            onClick={onOpenCart}
            title="View Cart"
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <a href="#contact" className="btn btn-primary btn-sm desktop-order-btn">
            Order Online
          </a>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary btn-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Online / Reserve Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
