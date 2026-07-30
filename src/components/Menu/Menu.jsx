import React, { useState } from 'react';
import { Coffee, CupSoda, Sparkles } from 'lucide-react';
import { COFFEE_MENU, NON_COFFEE_MENU } from '../../assets/data/coffeeData';
import MenuFilter from './MenuFilter';
import CoffeeCard from './CoffeeCard';
import './Menu.css';

export default function Menu({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all');

  // Filter helper logic
  const filterItems = (itemList) => {
    return itemList.filter(item => {
      // Search match
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.notes && item.notes.some(n => n.toLowerCase().includes(searchQuery.toLowerCase())));

      // Diet match
      const matchesDiet = 
        dietFilter === 'all' || 
        (item.dietary && item.dietary.some(d => d.toLowerCase().includes(dietFilter.toLowerCase())));

      return matchesSearch && matchesDiet;
    });
  };

  const filteredCoffee = filterItems(COFFEE_MENU);
  const filteredNonCoffee = filterItems(NON_COFFEE_MENU);

  const showCoffee = activeTab === 'all' || activeTab === 'coffee';
  const showNonCoffee = activeTab === 'all' || activeTab === 'non-coffee' || activeTab === 'pastry';

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Sparkles size={13} /> Artisanal Offerings
          </div>
          <h2 className="font-serif">
            Our Handcrafted <span className="gradient-gold-text">Menu</span>
          </h2>
          <p>
            Explore our curated menu of micro-roasted specialty coffees, ceremonial teas, 
            botanical infusions, and fresh-baked French morning pastries.
          </p>
        </div>

        {/* Filter Bar */}
        <MenuFilter 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dietFilter={dietFilter}
          setDietFilter={setDietFilter}
        />

        {/* Coffee List Sub-Section */}
        {showCoffee && filteredCoffee.length > 0 && (
          <div className="menu-category-group">
            <div className="category-header">
              <Coffee size={22} className="category-icon" />
              <h3 className="category-title font-serif">Coffee List</h3>
              <span className="category-count">{filteredCoffee.length} Items</span>
            </div>

            <div className="menu-grid">
              {filteredCoffee.map(item => (
                <CoffeeCard key={item.id} item={item} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        )}

        {/* Non-Coffee List Sub-Section */}
        {showNonCoffee && filteredNonCoffee.length > 0 && (
          <div className="menu-category-group">
            <div className="category-header">
              <CupSoda size={22} className="category-icon" />
              <h3 className="category-title font-serif">Non-Coffee & Bakery List</h3>
              <span className="category-count">{filteredNonCoffee.length} Items</span>
            </div>

            <div className="menu-grid">
              {filteredNonCoffee.map(item => (
                <CoffeeCard key={item.id} item={item} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        )}

        {/* Empty Search Result State */}
        {((showCoffee && filteredCoffee.length === 0) && (showNonCoffee && filteredNonCoffee.length === 0)) && (
          <div className="no-results glass-card">
            <Coffee size={40} className="no-res-icon" />
            <h4 className="font-serif">No delicious items match your search</h4>
            <p>Try searching for "espresso", "latte", "croissant", or resetting diet filters.</p>
            <button 
              className="btn btn-secondary btn-sm mt-3"
              onClick={() => { setSearchQuery(''); setDietFilter('all'); setActiveTab('all'); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
