import React from 'react';
import { Search, Filter, Coffee, CupSoda, Cookie } from 'lucide-react';
import './Menu.css';

export default function MenuFilter({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery,
  dietFilter,
  setDietFilter
}) {
  const tabs = [
    { id: 'all', label: 'All Offerings', icon: <Filter size={14} /> },
    { id: 'coffee', label: 'Coffee List', icon: <Coffee size={14} /> },
    { id: 'non-coffee', label: 'Non-Coffee List', icon: <CupSoda size={14} /> },
    { id: 'pastry', label: 'Artisan Pastries', icon: <Cookie size={14} /> }
  ];

  return (
    <div className="menu-filter-wrapper">
      {/* Top Search & Dietary Filter */}
      <div className="filter-top-bar">
        <div className="search-input-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search espresso, mocha, matcha, croissants..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-field"
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        {/* Dietary Filters */}
        <div className="dietary-filter-group">
          <button 
            className={`diet-btn ${dietFilter === 'all' ? 'active' : ''}`}
            onClick={() => setDietFilter('all')}
          >
            All Diets
          </button>
          <button 
            className={`diet-btn ${dietFilter === 'vegan' ? 'active' : ''}`}
            onClick={() => setDietFilter('vegan')}
          >
            🌱 Vegan
          </button>
          <button 
            className={`diet-btn ${dietFilter === 'gluten-free' ? 'active' : ''}`}
            onClick={() => setDietFilter('gluten-free')}
          >
            🌾 Gluten-Free
          </button>
        </div>
      </div>

      {/* Main Category Tabs */}
      <div className="filter-tabs-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`filter-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
