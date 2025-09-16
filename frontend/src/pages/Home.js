import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Zap, Shield, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';
import { Button } from '../components/ui/button';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const featuredProducts = products.slice(0, 3);

  const features = [
    {
      icon: Zap,
      title: "Factory Direct Pricing",
      description: "Get the best prices directly from manufacturers"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed", 
      description: "All products come with warranty and quality assurance"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick delivery across India with tracking"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="display-huge animate-fade-in">
                Premium Mobile Accessories
                <span className="block text-cyan-400">at Factory Prices</span>
              </h1>
              <p className="body-large max-w-3xl mx-auto text-white/80 animate-fade-in-delayed">
                Discover high-quality neckbands, power banks, and TWS earbuds directly from manufacturers. 
                Experience superior quality without the premium markup.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-delayed-2">
              <Link to="/shop">
                <Button className="btn-primary text-lg px-8 py-4 h-auto">
                  Shop Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button className="btn-secondary text-lg px-8 py-4 h-auto">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50K+</div>
                <div className="text-white/70">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100+</div>
                <div className="text-white/70">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">99%</div>
                <div className="text-white/70">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="display-large">Featured Products</h2>
            <p className="body-medium text-white/70 max-w-2xl mx-auto">
              Explore our top-selling mobile accessories, carefully selected for their 
              quality, performance, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProductCard 
                  product={product} 
                  onViewDetails={setSelectedProduct}
                />
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="display-large">Why Choose Factory Price?</h2>
            <p className="body-medium text-white/70 max-w-2xl mx-auto">
              We're committed to providing you with the best mobile accessories 
              at unbeatable prices with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center space-y-6 p-8 rounded-lg border border-white/10 bg-zinc-800/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="heading-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="display-medium">Stay Updated</h2>
            <p className="body-medium text-white/70">
              Subscribe to our newsletter for the latest products, deals, and tech updates.
            </p>
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