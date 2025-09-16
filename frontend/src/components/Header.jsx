import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { Sun, Moon, Menu, X, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
        isDark 
          ? 'bg-black/95 border-white/10 text-white' 
          : 'bg-white/95 border-gray-200 text-black'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">FP</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-semibold">
                  <span className={isDark ? 'text-white' : 'text-black'}>factory</span>
                  <span className="text-cyan-400 ml-1">Price</span>
                </div>
                <div className={`text-sm tracking-wider ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                  Mobile Store
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-text transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                      : isDark 
                        ? 'text-white/70 hover:text-white' 
                        : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors duration-300 ${
                  isDark 
                    ? 'text-white/70 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors duration-300 ${
                  isDark 
                    ? 'text-white/70 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`transition-colors duration-300 ${
                  isDark 
                    ? 'text-white/70 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden transition-colors duration-300 ${
                  isDark 
                    ? 'text-white/70 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden backdrop-blur-sm border-t transition-colors duration-300 ${
            isDark 
              ? 'bg-black/95 border-white/10' 
              : 'bg-white/95 border-gray-200'
          }`}>
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-lg transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-400'
                      : isDark 
                        ? 'text-white/70 hover:text-white' 
                        : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;