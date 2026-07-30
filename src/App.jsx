import React, { useState } from 'react';
import Home from './pages/Home';
import { X, ShoppingBag, Trash2, Plus, Minus, CheckCircle, Search, Coffee, ArrowRight } from 'lucide-react';
import { COFFEE_MENU, FEATURED_COFFEES, NON_COFFEE_MENU } from './assets/data/coffeeData';
import './App.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [globalSearch, setGlobalSearch] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Cart operations
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prevCart, { ...item, qty: 1 }];
    });

    showToast(`Added "${item.name}" to cart`);
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((i) => {
          if (i.id === id) {
            const newQty = i.qty + delta;
            return newQty > 0 ? { ...i, qty: newQty } : null;
          }
          return i;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  // All searchable menu items
  const allMenuItems = [...FEATURED_COFFEES, ...COFFEE_MENU, ...NON_COFFEE_MENU];
  const searchResults = globalSearch.trim()
    ? allMenuItems.filter(
        (item) =>
          item.name.toLowerCase().includes(globalSearch.toLowerCase()) ||
          item.description.toLowerCase().includes(globalSearch.toLowerCase())
      )
    : [];

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCart([]);
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 3500);
  };

  return (
    <div className="app-container">
      <Home 
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onAddToCart={handleAddToCart}
        onQuickView={(item) => setQuickViewItem(item)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification animate-float">
          <CheckCircle size={18} className="toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Shopping Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="drawer-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="drawer-title">
                <ShoppingBag size={20} className="text-gold" />
                <h3 className="font-serif">Your Order ({cartCount})</h3>
              </div>
              <button className="close-btn" onClick={() => setIsCartOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="drawer-body">
              {checkoutSuccess ? (
                <div className="checkout-success-view">
                  <CheckCircle size={50} className="success-icon" />
                  <h4 className="font-serif">Order Confirmed!</h4>
                  <p>Our master baristas are preparing your freshly roasted order now.</p>
                </div>
              ) : cart.length === 0 ? (
                <div className="empty-cart-view">
                  <Coffee size={48} className="empty-icon" />
                  <p>Your coffee basket is empty.</p>
                  <button className="btn btn-primary btn-sm mt-3" onClick={() => setIsCartOpen(false)}>
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item-row">
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-info">
                        <h4 className="cart-item-name font-serif">{item.name}</h4>
                        <span className="cart-item-price">${item.price.toFixed(2)}</span>
                      </div>
                      <div className="cart-qty-controls">
                        <button onClick={() => handleUpdateQty(item.id, -1)} className="qty-btn">
                          <Minus size={13} />
                        </button>
                        <span className="qty-num">{item.qty}</span>
                        <button onClick={() => handleUpdateQty(item.id, 1)} className="qty-btn">
                          <Plus size={13} />
                        </button>
                      </div>
                      <button 
                        className="remove-btn" 
                        onClick={() => handleRemoveItem(item.id)}
                        title="Remove"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && !checkoutSuccess && (
              <div className="drawer-footer">
                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <span className="summary-val font-serif">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="cart-summary-row">
                  <span>Taxes & Eco Cup</span>
                  <span className="summary-val font-serif">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="cart-summary-row total-row">
                  <span>Total Amount</span>
                  <span className="total-val font-serif">${(cartTotal * 1.08).toFixed(2)}</span>
                </div>
                <button className="btn btn-primary btn-full mt-3" onClick={handleCheckout}>
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick View Item Modal */}
      {quickViewItem && (
        <div className="modal-backdrop" onClick={() => setQuickViewItem(null)}>
          <div className="quickview-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn modal-close" onClick={() => setQuickViewItem(null)}>
              <X size={20} />
            </button>
            <div className="quickview-grid">
              <img src={quickViewItem.image} alt={quickViewItem.name} className="qv-img" />
              <div className="qv-details">
                <span className="badge">{quickViewItem.badge || quickViewItem.roast}</span>
                <h3 className="font-serif qv-title mt-2">{quickViewItem.name}</h3>
                <p className="qv-tagline text-gold">{quickViewItem.tagline}</p>
                <p className="qv-desc">{quickViewItem.description}</p>
                {quickViewItem.origin && (
                  <p className="qv-origin">Single Origin: <strong>{quickViewItem.origin}</strong></p>
                )}
                {quickViewItem.notes && (
                  <div className="qv-notes">
                    {quickViewItem.notes.map((note, idx) => (
                      <span key={idx} className="note-pill">{note}</span>
                    ))}
                  </div>
                )}
                <div className="qv-action-bar">
                  <span className="qv-price font-serif">${quickViewItem.price.toFixed(2)}</span>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      handleAddToCart(quickViewItem);
                      setQuickViewItem(null);
                    }}
                  >
                    Add to Cart <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Overlay */}
      {isSearchOpen && (
        <div className="modal-backdrop" onClick={() => setIsSearchOpen(false)}>
          <div className="search-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-header">
              <Search size={22} className="text-gold" />
              <input 
                type="text" 
                placeholder="Search coffee beans, macchiato, cold brew, bakery..." 
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                autoFocus
                className="modal-search-input"
              />
              <button className="close-btn" onClick={() => setIsSearchOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="search-modal-results">
              {globalSearch.trim() === '' ? (
                <p className="search-hint">Type above to search our menu instantly...</p>
              ) : searchResults.length === 0 ? (
                <p className="search-hint">No coffee match found for "{globalSearch}".</p>
              ) : (
                searchResults.map((item) => (
                  <div key={item.id} className="search-res-row">
                    <img src={item.image} alt={item.name} className="search-res-img" />
                    <div className="search-res-info">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                    <span className="search-res-price font-serif">${item.price.toFixed(2)}</span>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        handleAddToCart(item);
                        setIsSearchOpen(false);
                      }}
                    >
                      <Plus size={14} /> Add
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
