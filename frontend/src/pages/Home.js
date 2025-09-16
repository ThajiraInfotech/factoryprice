import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Battery, Zap, Smartphone, Plug, Sparkles, Cable, Wallet } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { Button } from '../components/ui/button';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1590658165737-15a047b7de3c?w=1200&h=600&fit=crop",
      title: "Premium Wireless Neckbands",
      subtitle: "Starting from ₹2,499"
    },
    {
      id: 2, 
      image: "https://images.unsplash.com/photo-1609592842909-b4113c0e3fa4?w=1200&h=600&fit=crop",
      title: "Fast Charging Power Banks",
      subtitle: "20000mAh from ₹1,899"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=1200&h=600&fit=crop", 
      title: "True Wireless Earbuds",
      subtitle: "Premium TWS from ₹3,299"
    }
  ];

  const categoryIcons = {
    "Powerbanks": Battery,
    "Wireless Chargers": Zap,
    "Mobile Holder": Smartphone,
    "Chargers": Plug,
    "Gadget Cleaner": Sparkles,
    "Cables": Cable,
    "Phone Wallet": Wallet
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Offers Banner */}
      <section className="bg-red-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-center font-semibold">
              🎉 India's Favourite Power banks, starting from ₹749! 🎉
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel - Half Height */}
      <section className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0">
          {carouselImages.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-cyan-400 font-semibold drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                    <Link to="/shop">
                      <Button className="btn-primary mt-6 text-lg px-8 py-3">
                        Shop Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Browse Categories</h2>
            <p className="text-lg text-white/70">
              Discover our complete range of premium mobile accessories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.name] || Battery;
              return (
                <Link
                  key={category.id}
                  to={category.path}
                  className="group text-center p-6 rounded-xl border border-white/10 bg-zinc-800/50 hover:border-cyan-400/50 hover:bg-zinc-700/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-zinc-700/50 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Products</h2>
            <p className="text-lg text-white/70">
              Top-selling mobile accessories with premium quality at factory prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button className="btn-primary text-lg px-8 py-4 h-auto">
                View All Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Updated</h2>
              <p className="text-lg text-white/70">
                Subscribe for latest products, deals, and exclusive offers
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-zinc-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
              />
              <Button className="btn-primary px-8 py-4 h-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;