import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { products } from '../data/mockData';
import { Button } from '../components/ui/button';
import { useTheme } from '../contexts/ThemeContext';

const ProductDetails = () => {
  const { isDark } = useTheme();
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Product Not Found</h2>
          <Link to="/shop">
            <Button className="btn-primary">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Breadcrumb */}
      <section className={`py-6 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-300 ${
        isDark ? 'bg-zinc-900/30 border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className={`transition-colors duration-300 ${
              isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}>
              Home
            </Link>
            <span className={isDark ? 'text-white/50' : 'text-gray-400'}>/</span>
            <Link to="/shop" className={`transition-colors duration-300 ${
              isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}>
              Shop
            </Link>
            <span className={isDark ? 'text-white/50' : 'text-gray-400'}>/</span>
            <span className="text-cyan-400">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to="/shop" className="inline-flex items-center space-x-2 mb-8 group">
            <ArrowLeft className={`h-5 w-5 transition-colors duration-300 ${
              isDark ? 'text-white/70 group-hover:text-white' : 'text-gray-600 group-hover:text-black'
            }`} />
            <span className={`transition-colors duration-300 ${
              isDark ? 'text-white/70 group-hover:text-white' : 'text-gray-600 group-hover:text-black'
            }`}>
              Back to Shop
            </span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className={`aspect-square rounded-2xl overflow-hidden border transition-colors duration-300 ${
                isDark ? 'bg-zinc-800 border-white/10' : 'bg-gray-100 border-gray-200'
              }`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    (4.8) 124 reviews
                  </span>
                </div>

                <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-white/80' : 'text-gray-700'
                }`}>
                  {product.description}
                </p>
              </div>

              {/* Price Section */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-cyan-400">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className={`text-2xl line-through transition-colors duration-300 ${
                    isDark ? 'text-white/50' : 'text-gray-500'
                  }`}>
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-green-500 font-semibold text-lg">
                  You save ₹{(product.originalPrice - product.price).toLocaleString()} ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary flex-1 text-lg py-4">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button className={`btn-secondary px-6 py-4 transition-colors duration-300 ${
                  isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                  <Heart className="h-5 w-5" />
                </Button>
                <Button className={`btn-secondary px-6 py-4 transition-colors duration-300 ${
                  isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Specifications */}
              <div className="space-y-6">
                <h3 className={`text-2xl font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  Specifications
                </h3>
                <div className={`rounded-xl p-6 border transition-colors duration-300 ${
                  isDark ? 'bg-zinc-800/50 border-white/10' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          isDark ? 'text-white/70' : 'text-gray-600'
                        }`}>
                          {key}
                        </span>
                        <p className={`font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-black'
                        }`}>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <h3 className={`text-2xl font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  Key Features
                </h3>
                <div className={`rounded-xl p-6 border transition-colors duration-300 ${
                  isDark ? 'bg-zinc-800/50 border-white/10' : 'bg-gray-50 border-gray-200'
                }`}>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-white/80' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Warranty Info */}
      <section className={`py-8 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark ? 'bg-zinc-900/30 border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="space-y-2">
              <h4 className={`font-semibold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Warranty
              </h4>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}>
                1 Year Manufacturer Warranty
              </p>
            </div>
            <div className="space-y-2">
              <h4 className={`font-semibold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Delivery
              </h4>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}>
                Free shipping across India
              </p>
            </div>
            <div className="space-y-2">
              <h4 className={`font-semibold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Returns
              </h4>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-white/70' : 'text-gray-600'  
              }`}>
                7 Day return policy
              </p>
            </div>
            <div className="space-y-2">
              <h4 className={`font-semibold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Support
              </h4>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}>
                24/7 Customer support
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-white/50' : 'text-gray-500'
            }`}>
              ©2024 Factory Price. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;