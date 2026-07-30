import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import FeaturedCoffee from '../components/FeaturedCoffee/FeaturedCoffee';
import About from '../components/About/About';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Menu from '../components/Menu/Menu';
import SpecialOffers from '../components/SpecialOffers/SpecialOffers';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home({ cartCount, onOpenCart, onOpenSearch, onAddToCart, onQuickView }) {
  return (
    <div className="home-page">
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={onOpenCart} 
        onOpenSearch={onOpenSearch} 
      />
      <main>
        <Hero />
        <FeaturedCoffee onAddToCart={onAddToCart} onQuickView={onQuickView} />
        <About />
        <WhyChooseUs />
        <Menu onAddToCart={onAddToCart} />
        <SpecialOffers />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
