import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold tracking-wider">SONORA</span>
            </div>
            <nav className="hidden md:ml-8 md:flex space-x-8">
              <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">HEADPHONES</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">EARBUDS</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">SPEAKERS</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">ACCESSORIES</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">SUPPORT</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-white cursor-pointer" />
            <User className="h-5 w-5 text-white cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="h-5 w-5 text-white cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="px-4 py-4 space-y-2">
            <a href="#" className="block text-white py-2">HEADPHONES</a>
            <a href="#" className="block text-white py-2">EARBUDS</a>
            <a href="#" className="block text-white py-2">SPEAKERS</a>
            <a href="#" className="block text-white py-2">ACCESSORIES</a>
            <a href="#" className="block text-white py-2">SUPPORT</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;