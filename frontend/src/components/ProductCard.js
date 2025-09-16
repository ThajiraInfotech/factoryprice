import React, { useState } from 'react';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Button } from './ui/button';

const ProductCard = ({ product, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div 
      className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden bg-zinc-800">
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
              : 'text-white/70 bg-black/20 hover:text-red-500 hover:bg-white/20'
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
            <Button
              size="sm"
              className="btn-primary"
              onClick={() => onViewDetails && onViewDetails(product)}
            >
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
            <Button
              size="sm"
              className="btn-secondary"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-white/70 text-sm line-clamp-2">
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
          <span className="text-white/70 text-sm">(4.8)</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-cyan-400">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-lg text-white/50 line-through">
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
          <Button 
            className="btn-primary flex-1"
            onClick={() => onViewDetails && onViewDetails(product)}
          >
            View Details
          </Button>
          <Button className="btn-secondary px-6">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;