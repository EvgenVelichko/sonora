import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-black text-white transition-all duration-300 ${
      isScrolled ? 'shadow-lg backdrop-blur-sm bg-black/95' : ''
    } sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 animate-fade-in">
              <span className="text-xl font-bold transition-all duration-300 hover:scale-105">SONORA</span>
            </div>
            <nav className="hidden md:ml-12 md:flex space-x-8">
              {['HEADPHONES', 'EARBUDS', 'SPEAKERS', 'ACCESSORIES', 'SUPPORT'].map((item, index) => (
                <a 
                  key={item}
                  href="#" 
                  className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            {[Search, User, ShoppingCart].map((Icon, index) => (
              <Icon 
                key={index}
                className={`h-5 w-5 text-white hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-110 animate-fade-in`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              />
            ))}
            <button className="md:hidden animate-fade-in animate-delay-500">
              <Menu className="h-5 w-5 text-white transition-all duration-300 hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;