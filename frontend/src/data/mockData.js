export const products = [
  {
    id: 1,
    name: "Premium Wireless Neckband",
    price: 2499,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1590658165737-15a047b7de3c?w=500&h=500&fit=crop",
    category: "Audio",
    description: "Experience superior sound quality with our premium wireless neckband featuring 24-hour battery life and magnetic earbuds.",
    specifications: {
      "Battery Life": "24 Hours",
      "Bluetooth Version": "5.2",
      "Charging Time": "1.5 Hours",
      "Driver Size": "10mm",
      "Water Resistance": "IPX4"
    },
    features: [
      "Magnetic Earbuds",
      "Quick Charge Support",
      "Voice Assistant Compatible",
      "Noise Cancellation"
    ]
  },
  {
    id: 2,
    name: "Fast Charging Power Bank 20000mAh",
    price: 1899,
    originalPrice: 2599,
    image: "https://images.unsplash.com/photo-1609592842909-b4113c0e3fa4?w=500&h=500&fit=crop",
    category: "Power",
    description: "High capacity 20000mAh power bank with fast charging technology and multiple device support.",
    specifications: {
      "Capacity": "20000mAh",
      "Input": "Type-C, Micro USB",
      "Output": "USB-A, Type-C",
      "Fast Charging": "22.5W",
      "Display": "LED Digital Display"
    },
    features: [
      "Digital Display",
      "Multiple Device Charging",
      "Safe Charging Protection",
      "Compact Design"
    ]
  },
  {
    id: 3,
    name: "True Wireless Stereo Earbuds",
    price: 3299,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=500&h=500&fit=crop",
    category: "Audio",
    description: "Premium TWS earbuds with active noise cancellation and premium sound quality for an immersive audio experience.",
    specifications: {
      "Battery Life": "32 Hours (with case)",
      "Bluetooth Version": "5.3",
      "Charging Case": "Wireless Charging",
      "Driver Size": "12mm",
      "Water Resistance": "IPX7"
    },
    features: [
      "Active Noise Cancellation",
      "Wireless Charging Case",
      "Touch Controls",
      "Premium Sound Quality"
    ]
  }
];

export const categories = [
  { id: 1, name: "Powerbanks", icon: "Battery", path: "/products?category=power" },
  { id: 2, name: "Wireless Chargers", icon: "Zap", path: "/products?category=charging" },
  { id: 3, name: "Mobile Holder", icon: "Smartphone", path: "/products?category=accessories" },
  { id: 4, name: "Chargers", icon: "Plug", path: "/products?category=chargers" },
  { id: 5, name: "Gadget Cleaner", icon: "Sparkles", path: "/products?category=cleaning" },
  { id: 6, name: "Cables", icon: "Cable", path: "/products?category=cables" },
  { id: 7, name: "Phone Wallet", icon: "Wallet", path: "/products?category=wallet" }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    review: "Amazing quality products at factory prices! My neckband has been working perfectly for 6 months.",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    review: "Fast delivery and excellent customer service. The power bank quality exceeded my expectations.",
    location: "Delhi, India"
  },
  {
    id: 3,
    name: "Amit Singh",
    rating: 4,
    review: "Great value for money. The TWS earbuds sound quality is comparable to premium brands.",
    location: "Bangalore, Karnataka"
  }
];