// Central product catalogue. Every page renders from this array,
// so the whole store is data-driven (add an object here -> it appears everywhere).

export const CATEGORIES = [
  { slug: 'equipment',   label: 'Equipment',   tagline: 'Professional gear to power your training.', image: '/images/equipment1.jpeg' },
  { slug: 'supplements', label: 'Supplements', tagline: 'Boost your performance with premium nutrition.', image: '/images/supplements1.jpeg' },
  { slug: 'men',         label: 'Men Clothes', tagline: 'Premium sportswear designed for performance.', image: '/images/mens1.jpeg' },
  { slug: 'bags',        label: 'Bags',        tagline: 'Durable, stylish, and ready for every workout.', image: '/images/bags1.jpeg' },
]

export const products = [
  // ---------- Equipment ----------
  {
    id: 'home-gym-machine', category: 'equipment', brand: 'GOLD Pro',
    name: 'Multi-Functional Home Gym Machine', price: 499.99, image: '/images/equipment1.jpeg',
    description: 'Complete workout system for full-body training.',
    longDescription: 'A complete home gym in one footprint. Multiple stations let you train chest, back, legs and arms with a single, sturdy steel frame built to last.',
    rating: 4.8,
  },
  {
    id: 'weight-plates-set', category: 'equipment', brand: 'IronForge',
    name: 'Weight Plates Set', price: 89.99, image: '/images/equipment2.jpeg',
    description: 'Durable iron plates for strength and endurance.',
    longDescription: 'Precision-cast iron plates with a smooth finish and accurate weighting. Perfect for progressive overload on barbells and machines.',
    rating: 4.6,
  },
  {
    id: 'hex-dumbbells', category: 'equipment', brand: 'IronForge',
    name: 'Hex Dumbbells', price: 39.99, image: '/images/equipment3.jpeg',
    description: 'Rubber-coated dumbbells for daily workouts.',
    longDescription: 'Hexagonal heads stop them rolling, the rubber coat protects your floor, and the contoured handle keeps your grip secure rep after rep.',
    rating: 4.9,
  },
  {
    id: 'adjustable-bench', category: 'equipment', brand: 'GOLD Pro',
    name: 'Adjustable Bench', price: 129.99, image: '/images/equipment4.jpeg',
    description: 'Perfect for chest, shoulders, and core exercises.',
    longDescription: 'Seven backrest positions from decline to full incline, thick high-density padding, and a stable wide base for heavy pressing.',
    rating: 4.7,
  },
  {
    id: 'olympic-barbell', category: 'equipment', brand: 'IronForge',
    name: 'Olympic Barbell', price: 149.99, image: '/images/equipment5.jpeg',
    description: 'High-quality bar for heavy lifting and power training.',
    longDescription: 'A 20kg Olympic bar with a 1500lb load rating, dual knurl marks and smooth-spinning sleeves for cleans, snatches and big lifts.',
    rating: 4.9,
  },

  // ---------- Supplements ----------
  {
    id: 'creatine-monohydrate', category: 'supplements', brand: 'BioTechUSA',
    name: 'BioTechUSA Creatine Monohydrate', price: 24.99, image: '/images/creatine.jpeg',
    description: '100% pure creatine for strength and muscle growth.',
    longDescription: 'Micronised, 100% pure creatine monohydrate that dissolves cleanly and supports strength, power output and lean muscle gains.',
    nutrition: 'Serving: 5g • 0 calories',
    usage: 'Use: 1 scoop daily with water.',
    rating: 4.8,
  },
  {
    id: 'pure-whey', category: 'supplements', brand: 'BioTechUSA',
    name: 'BioTechUSA 100% Pure Whey', price: 39.99, image: '/images/whey.jpeg',
    description: 'High-quality whey protein for lean muscle building.',
    longDescription: 'A fast-absorbing whey blend delivering 22g of protein per serving to support recovery and lean muscle growth, with a smooth taste.',
    nutrition: 'Serving: 22g protein • 120 calories',
    usage: 'Use: 1 scoop after workout.',
    rating: 4.7,
  },
  {
    id: 'c4-preworkout', category: 'supplements', brand: 'Cellucor',
    name: 'Cellucor C4 Pre-Workout', price: 29.99, image: '/images/c4.jpeg',
    description: 'Explosive energy and focus for intense training.',
    longDescription: 'The classic C4 formula pairs caffeine with beta-alanine for explosive energy, sharper focus and serious pumps during tough sessions.',
    nutrition: 'Serving: 150mg caffeine',
    usage: 'Use: 1 scoop 20 minutes before training.',
    rating: 4.6,
  },
  {
    id: 'nitro-tech-whey', category: 'supplements', brand: 'MuscleTech',
    name: 'MuscleTech Nitro-Tech Whey', price: 44.99, image: '/images/nitrotech.jpeg',
    description: 'Advanced protein formula with creatine blend.',
    longDescription: 'An advanced whey formula reinforced with creatine and amino acids, engineered for maximum strength and recovery between sessions.',
    nutrition: 'Serving: 30g protein • 160 calories',
    usage: 'Use: 1 scoop post-workout.',
    rating: 4.8,
  },

  // ---------- Men Clothes ----------
  {
    id: 'long-sleeve-shirt', category: 'men', brand: 'GOLD Wear',
    name: 'Black Long-Sleeve Athletic Shirt', price: 29.99, image: '/images/mens1.jpeg',
    description: 'Breathable, flexible, and perfect for training.',
    longDescription: 'Moisture-wicking long-sleeve top with four-way stretch and flat seams that move with you through every set.',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.5,
  },
  {
    id: 'performance-hoodie', category: 'men', brand: 'GOLD Wear',
    name: 'Sport Performance Hoodie', price: 49.99, image: '/images/mens2.jpeg',
    description: 'Warm, lightweight, and ideal for outdoor workouts.',
    longDescription: 'A lightweight brushed-fleece hoodie that keeps you warm on cold mornings without weighing you down.',
    sizes: ['M', 'L', 'XL'],
    rating: 4.7,
  },
  {
    id: 'training-shorts', category: 'men', brand: 'GOLD Wear',
    name: 'Training Shorts', price: 19.99, image: '/images/mens3.jpeg',
    description: 'Comfortable fit with sweat-resistant fabric.',
    longDescription: 'Quick-dry training shorts with a secure zip pocket and an elastic drawcord waist for an all-day comfortable fit.',
    sizes: ['S', 'M', 'L'],
    rating: 4.4,
  },
  {
    id: 'compression-shirt', category: 'men', brand: 'GOLD Wear',
    name: 'Compression Shirt', price: 34.99, image: '/images/mens4.jpeg',
    description: 'Enhances blood flow and supports muscle recovery.',
    longDescription: 'A second-skin compression fit that supports your muscles, improves circulation and speeds up recovery between workouts.',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.6,
  },

  // ---------- Bags ----------
  {
    id: 'adidas-duffel', category: 'bags', brand: 'Adidas',
    name: 'Adidas Duffel Bag', price: 59.99, image: '/images/bags1.jpeg',
    description: 'Spacious and durable design for daily training.',
    longDescription: 'A roomy duffel with a separate shoe compartment, padded shoulder strap and tough water-repellent fabric.',
    rating: 4.7,
  },
  {
    id: 'nike-training-bag', category: 'bags', brand: 'Nike',
    name: 'Nike Training Bag', price: 49.99, image: '/images/bags2.jpeg',
    description: 'Lightweight and strong with multiple compartments.',
    longDescription: 'Lightweight build with multiple zip compartments to keep your gear organised from the locker room to the gym floor.',
    rating: 4.6,
  },
  {
    id: 'ua-duffel', category: 'bags', brand: 'Under Armour',
    name: 'Under Armour Duffel Bag', price: 69.99, image: '/images/bags3.jpeg',
    description: 'Water-resistant material with reinforced straps.',
    longDescription: 'Built tough with a water-resistant base, abrasion-resistant panels and reinforced straps that handle a fully loaded bag.',
    rating: 4.8,
  },
  {
    id: 'nike-mauve-bag', category: 'bags', brand: 'Nike',
    name: 'Nike Mauve Sports Bag', price: 54.99, image: '/images/bags4.jpeg',
    description: 'Stylish design with premium build quality.',
    longDescription: 'A clean, stylish silhouette in a premium finish that looks as good off-duty as it does on the way to training.',
    rating: 4.5,
  },
]

// Helpers
export const getProductById = (id) => products.find((p) => p.id === id)
export const getByCategory = (slug) => products.filter((p) => p.category === slug)
export const featured = () =>
  ['hex-dumbbells', 'pure-whey', 'long-sleeve-shirt', 'adidas-duffel']
    .map(getProductById)
