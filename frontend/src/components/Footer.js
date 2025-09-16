import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">FP</span>
              </div>
              <div>
                <div className="text-xl font-semibold">
                  <span className="text-white">factory</span>
                  <span className="text-cyan-400 ml-1">Price</span>
                </div>
                <div className="text-sm text-white/70 tracking-wider">Mobile Store</div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Your trusted destination for premium mobile accessories at factory prices. 
              Quality products, fast delivery, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Shop', path: '/shop' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <ul className="space-y-3">
              {[
                'Powerbanks',
                'Wireless Chargers',
                'Mobile Accessories',
                'Audio Devices',
                'Charging Cables',
                'Phone Cases'
              ].map((category) => (
                <li key={category}>
                  <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-white/70">
                  Factory Price Mobile Store<br />
                  123 Tech Street, Electronics Market<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <p className="text-white/70">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <p className="text-white/70">info@factoryprice.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2024 Factory Price Mobile Store. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;