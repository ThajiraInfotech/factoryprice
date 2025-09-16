import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Battery, Zap, Smartphone, Plug, Sparkles, Cable, Wallet } from 'lucide-react';
import { categories } from '../data/mockData';
import { Button } from '../components/ui/button';

const Home = () => {
  const categoryIcons = {
    "Powerbanks": Battery,
    "Wireless Chargers": Zap,
    "Mobile Holder": Smartphone,
    "Chargers": Plug,
    "Gadget Cleaner": Sparkles,
    "Cables": Cable,
    "Phone Wallet": Wallet
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Large Product Display */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-left lg:text-left">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white">India's Favourite</span>
                  <span className="block text-cyan-400">Mobile Accessories</span>
                  <span className="block text-white text-4xl lg:text-5xl mt-4">starting from ₹749!</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                  Premium quality neckbands, power banks, and TWS earbuds at factory prices. 
                  Experience superior quality without the premium markup.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/shop">
                  <Button className="btn-primary text-xl px-10 py-5 h-auto text-black font-semibold">
                    Shop Now
                    <ChevronRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button className="btn-secondary text-xl px-10 py-5 h-auto">
                    View Products
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-12 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">50K+</div>
                  <div className="text-white/70 text-lg">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">100+</div>
                  <div className="text-white/70 text-lg">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">99%</div>
                  <div className="text-white/70 text-lg">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Product Showcase */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden border border-white/10">
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-500/10"></div>
                <div className="absolute top-4 left-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 right-4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                
                {/* Product Images Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center space-y-8">
                    <div className="relative">
                      <div className="w-64 h-64 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl flex items-center justify-center border border-cyan-400/30">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 bg-cyan-400/20 rounded-xl mx-auto flex items-center justify-center">
                            <Battery className="h-8 w-8 text-cyan-400" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-white">Premium Accessories</h3>
                            <p className="text-sm text-white/70">Neckbands • Power Banks • TWS Earbuds</p>
                          </div>
                        </div>
                      </div>
                      {/* Glow Ring Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50 animate-pulse"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="w-16 h-16 bg-zinc-700 rounded-lg flex items-center justify-center border border-white/10">
                        <Zap className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div className="w-16 h-16 bg-zinc-700 rounded-lg flex items-center justify-center border border-white/10">
                        <Smartphone className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div className="w-16 h-16 bg-zinc-700 rounded-lg flex items-center justify-center border border-white/10">
                        <Battery className="h-6 w-6 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="display-large">Browse Categories</h2>
            <p className="body-medium text-white/70 max-w-2xl mx-auto">
              Discover our complete range of premium mobile accessories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.name] || Battery;
              return (
                <Link
                  key={category.id}
                  to={category.path}
                  className="group text-center p-6 rounded-xl border border-white/10 bg-zinc-800/30 hover:border-cyan-400/50 hover:bg-zinc-700/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-zinc-700 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
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

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="display-medium">Stay Updated with Latest Products</h2>
              <p className="body-medium text-white/70">
                Be the first to know about new arrivals, special offers, and exclusive deals.
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