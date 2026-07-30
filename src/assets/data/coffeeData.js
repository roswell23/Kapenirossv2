export const FEATURED_COFFEES = [
  {
    id: 'f1',
    name: 'Kapeniross Velvet Espresso',
    tagline: 'Signature House Roast',
    price: 5.80,
    rating: 4.9,
    reviews: 142,
    roast: 'Dark Roast',
    roastLevel: 85,
    origin: 'Yirgacheffe & Huila Blend',
    notes: ['Dark Cocoa', 'Toasted Hazelnut', 'Black Cherry'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    description: 'Our crowned signature espresso. Micro-roasted in small batches with velvety cremalayer and rich dark cocoa finish.',
    badge: 'House Special'
  },
  {
    id: 'f2',
    name: 'Smoked Caramel Macchiato',
    tagline: 'Artisanal Layered Brew',
    price: 6.40,
    rating: 4.8,
    reviews: 98,
    roast: 'Medium Roast',
    roastLevel: 65,
    origin: 'Antioquia Colombia',
    notes: ['Salted Butter', 'Smoked Caramel', 'Bourbon Vanilla'],
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=800',
    description: 'Silky steamed oat milk layered over double shot ristretto, drizzled with house-smoked caramel reduction.',
    badge: 'Popular'
  },
  {
    id: 'f3',
    name: 'Ethiopian Yirgacheffe Pour-Over',
    tagline: 'Single Origin Masterpiece',
    price: 6.90,
    rating: 4.95,
    reviews: 176,
    roast: 'Light-Medium Roast',
    roastLevel: 45,
    origin: 'Yirgacheffe, Ethiopia',
    notes: ['Jasmine Floral', 'Bergamot Citrus', 'Wild Honey'],
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800',
    description: 'Precision hand-poured single origin with vibrant citrus acidity, floral jasmine aromas and honeysuckle sweetness.',
    badge: 'Single Origin'
  },
  {
    id: 'f4',
    name: 'Nitro Cold Brew Supreme',
    tagline: '24-Hour Steeped Creaminess',
    price: 6.20,
    rating: 4.85,
    reviews: 112,
    roast: 'Medium-Dark Roast',
    roastLevel: 75,
    origin: 'Sumatra Mandheling',
    notes: ['Molasses', 'Walnut', 'Subtle Spice'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    description: 'Slow cold steeped for 24 hours and infused with pure nitrogen for a stout-like creamy head and naturally sweet body.',
    badge: 'Chilled'
  }
];

export const COFFEE_MENU = [
  {
    id: 'c1',
    category: 'coffee',
    subCategory: 'espresso',
    name: 'Classic Double Ristretto',
    price: 4.50,
    rating: 4.9,
    roast: 'Dark Roast',
    dietary: ['Vegan', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600',
    notes: ['Pure Espresso', 'Dark Chocolate', 'Nutty Cream'],
    description: 'Short double shot extraction for intense flavor concentration and thick amber crema.'
  },
  {
    id: 'c2',
    category: 'coffee',
    subCategory: 'hot',
    name: 'Golden Honey Cappuccino',
    price: 5.90,
    rating: 4.8,
    roast: 'Medium Roast',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600',
    notes: ['Wild Honey', 'Cinnamon Dust', 'Whole Milk Foam'],
    description: 'Espresso topped with dense micro-foam, raw organic mountain honey, and Ceylon cinnamon.'
  },
  {
    id: 'c3',
    category: 'coffee',
    subCategory: 'cold',
    name: 'Iced Spanish Latte',
    price: 6.50,
    rating: 4.95,
    roast: 'Medium-Dark Roast',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600',
    notes: ['Condensed Milk', 'Sweet Vanilla', 'Double Espresso'],
    description: 'Creamy cold espresso treat with sweetened condensed milk over crystal clear ice blocks.'
  },
  {
    id: 'c4',
    category: 'coffee',
    subCategory: 'hot',
    name: 'Flat White Kapeniross',
    price: 5.50,
    rating: 4.85,
    roast: 'Medium Roast',
    dietary: ['Vegan Option'],
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600',
    notes: ['Silky Microfoam', 'Toasted Almond', 'Balanced Espresso'],
    description: 'Australian style flat white crafted with double ristretto and velvety steamed milk.'
  },
  {
    id: 'c5',
    category: 'coffee',
    subCategory: 'cold',
    name: 'Affogato al Caffe',
    price: 6.80,
    rating: 4.9,
    roast: 'Dark Roast',
    dietary: ['Dessert Brew'],
    image: 'https://images.unsplash.com/photo-1592321675774-3de57f3ee84c?auto=format&fit=crop&q=80&w=600',
    notes: ['Madagascar Vanilla Bean', 'Hot Espresso Shot', 'Crisp Biscotti'],
    description: 'Scoop of artisanal vanilla bean gelato drowned in a piping hot double shot of Kapeniross espresso.'
  },
  {
    id: 'c6',
    category: 'coffee',
    subCategory: 'espresso',
    name: 'Cortado Velvet',
    price: 5.20,
    rating: 4.8,
    roast: 'Dark Roast',
    dietary: ['Vegan Option'],
    image: 'https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&q=80&w=600',
    notes: ['Equal Ratio Milk & Espresso', 'Hazelnut', 'Smooth Finish'],
    description: 'Equal parts rich espresso and warm steamed milk to cut acidity while preserving coffee intensity.'
  }
];

export const NON_COFFEE_MENU = [
  {
    id: 'nc1',
    category: 'non-coffee',
    subCategory: 'matcha',
    name: 'Kyoto Ceremony Grade Matcha Latte',
    price: 6.80,
    rating: 4.95,
    roast: 'Non-Coffee',
    dietary: ['Vegan', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
    notes: ['Uji Ceremonial Green Tea', 'Oat Milk', 'Umami Sweetness'],
    description: 'Stone-ground first harvest ceremonial matcha whisked to order with steamed oat milk.'
  },
  {
    id: 'nc2',
    category: 'non-coffee',
    subCategory: 'chai',
    name: 'Smoked Spiced Chai Latte',
    price: 6.20,
    rating: 4.85,
    roast: 'Non-Coffee',
    dietary: ['Vegan Option'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    notes: ['Cardamom', 'Ginger', 'Star Anise', 'Black Tea'],
    description: 'House-infused loose leaf Assam black tea steeped with freshly crushed spices and organic agave.'
  },
  {
    id: 'nc3',
    category: 'non-coffee',
    subCategory: 'pastry',
    name: 'Artisan Butter Croissant',
    price: 4.50,
    rating: 4.9,
    roast: 'Fresh Bakery',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    notes: ['French Butter', 'Flaky Layers', 'Golden Crust'],
    description: 'Baked fresh every morning using imported French Normandy butter and 72-hour slow ferment dough.'
  },
  {
    id: 'nc4',
    category: 'non-coffee',
    subCategory: 'pastry',
    name: 'Valrhona Dark Chocolate Babka',
    price: 5.20,
    rating: 4.88,
    roast: 'Fresh Bakery',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600',
    notes: ['70% Dark Chocolate', 'Cinnamon Swirl', 'Brioche Dough'],
    description: 'Twisted brioche loaf folded with 70% dark Valrhona chocolate fudge and roasted hazelnuts.'
  },
  {
    id: 'nc5',
    category: 'non-coffee',
    subCategory: 'botanical',
    name: 'Iced Hibiscus Berry Botanical Tea',
    price: 5.80,
    rating: 4.8,
    roast: 'Non-Coffee',
    dietary: ['Vegan', 'Caffeine-Free'],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600',
    notes: ['Wild Hibiscus', 'Elderberry', 'Fresh Mint', 'Lemon Twist'],
    description: 'Refreshing caffeine-free herbal infusion packed with antioxidants, berries, and fresh mint.'
  }
];

export const SPECIAL_OFFERS = [
  {
    id: 'so1',
    title: 'Morning Artisanal Combo',
    subtitle: 'Daily 7:00 AM - 11:00 AM',
    discount: '20% OFF',
    code: 'KAPENIMORNING',
    description: 'Any signature espresso brew paired with a freshly baked French butter croissant or babka twist.',
    validTill: 'Limited Daily Slots',
    badge: 'Popular Deal',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'so2',
    title: 'Kapeniross Reserve Subscription',
    subtitle: 'Delivered Fresh To Your Door',
    discount: 'FREE SHIPPING',
    code: 'ROASTCLUB15',
    description: 'Get two 250g bags of freshly roasted single-origin micro-lot beans monthly + 15% in-store discount.',
    validTill: 'Monthly Plan',
    badge: 'Best Value',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'so3',
    title: 'Weekend Coffee Tasting Flight',
    subtitle: 'Saturdays & Sundays Only',
    discount: '3 BEANS FOR $12',
    code: 'FLIGHTTASTE',
    description: 'Experience 3 distinct single-origin pour-overs served in artisanal ceramic glasses with flavor tasting notes.',
    validTill: 'Weekends',
    badge: 'Experience',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Ambiance',
    title: 'Cozy Roasted Aesthetic Interior',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    category: 'Craftsmanship',
    title: 'Latte Art Mastery by Senior Barista',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    category: 'Roastery',
    title: 'German Cast Iron Drum Roaster',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    category: 'Brewing',
    title: 'V60 Precision Hand Pour-over',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    category: 'Bakery',
    title: 'Fresh Morning French Croissants',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    category: 'Beans',
    title: 'Ethically Sourced Green Coffee Cherries',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'Coffee Connoisseur & Food Critic',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Kapeniross is hands down the best specialty roastery in town. The Ethiopian Yirgacheffe pour-over had notes so distinct it felt like a wine tasting experience.'
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'Architect & Daily Regular',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'The warm roasted ambiance, quiet corner lighting, and immaculate Nitro Cold Brew make this my ultimate sanctuary for deep work every morning.'
  },
  {
    id: 't3',
    name: 'Sophia Chen',
    role: 'Specialty Tea & Bakery Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Their Kyoto Ceremonial Matcha is velvety and smooth with zero bitterness, and the freshly baked butter croissant is pure bliss!'
  }
];
