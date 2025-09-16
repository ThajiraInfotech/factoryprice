import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

const ProductCard = ({ product }) => {
  const { isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div 
      className={`group relative rounded-lg overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
        isDark 
          ? 'bg-zinc-900/50 border-white/10 hover:border-cyan-400/50 hover:shadow-cyan-400/10' 
          : 'bg-white border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-zinc-800' : 'bg-gray-100'
      }`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          -{discountPercentage}%
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 transition-all duration-300 ${
            isFavorite 
              ? 'text-red-500 bg-white/20' 
              : isDark
                ? 'text-white/70 bg-black/20 hover:text-red-500 hover:bg-white/20'
                : 'text-gray-600 bg-white/20 hover:text-red-500 hover:bg-white/30'
          }`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-3">
            <Link to={`/product/${product.id}`}>
              <Button size="sm" className="btn-primary">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </Link>
            <Button size="sm" className="btn-secondary">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className={`text-xl font-semibold group-hover:text-cyan-400 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            {product.name}
          </h3>
          <p className={`text-sm line-clamp-2 transition-colors duration-300 ${
            isDark ? 'text-white/70' : 'text-gray-600'
          }`}>
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-4 w-4 text-yellow-400 fill-current" 
              />
            ))}
          </div>
          <span className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-white/70' : 'text-gray-600'
          }`}>
            (4.8)
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-cyan-400">
                ₹{product.price.toLocaleString()}
              </span>
              <span className={`text-lg line-through transition-colors duration-300 ${
                isDark ? 'text-white/50' : 'text-gray-500'
              }`}>
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-green-400 text-sm font-medium">
              You save ₹{(product.originalPrice - product.price).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <Link to={`/product/${product.id}`} className="flex-1">
            <Button className="btn-primary w-full">
              View Details
            </Button>
          </Link>
          <Button className="btn-secondary px-6">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;