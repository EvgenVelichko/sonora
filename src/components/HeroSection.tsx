import React from 'react';
import { ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-lg mb-4 tracking-wide">Headphones of the Year</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
            SONORA PRO MAX
          </h1>
        </div>
        
        {/* Large Headphones Image */}
        <div className="relative mx-auto w-96 h-96 md:w-[500px] md:h-[500px]">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-xl">Headphones</span>
            </div>
          </div>
        </div>
        
        {/* Bottom notification */}
        <div className="absolute bottom-8 left-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-xs">
            <p className="text-sm text-white">Premium Wireless Headphones</p>
            <p className="text-xs text-gray-300">Active Noise Cancellation</p>
          </div>
        </div>
        
        {/* Cart icon bottom right */}
        <div className="absolute bottom-8 right-8">
          <div className="bg-white text-black rounded-full p-3">
            <ShoppingCart className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;