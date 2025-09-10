import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-red-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Brain className="h-8 w-8 text-red-500 group-hover:text-red-400 transition-colors" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg group-hover:bg-red-400/30 transition-all"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-white">The Brainy Agency</span>
              <div className="text-xs text-red-400 font-medium">Smart AI. Seamless Automation.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-red-400 bg-red-500/20 shadow-lg shadow-red-500/25'
                    : 'text-white hover:text-red-400 hover:bg-red-500/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-red-400"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-500/20">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'text-red-400 bg-red-500/20'
                      : 'text-white hover:text-red-400 hover:bg-red-500/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;