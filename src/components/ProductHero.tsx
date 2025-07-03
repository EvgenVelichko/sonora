import React, { useState } from 'react';
import { Star, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductHero = () => {
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const colors = [
    { name: 'white', color: 'bg-gray-100', label: 'Arctic White' },
    { name: 'black', color: 'bg-gray-900', label: 'Midnight Black' },
    { name: 'green', color: 'bg-emerald-500', label: 'Forest Green' },
    { name: 'blue', color: 'bg-blue-500', label: 'Ocean Blue' }
  ];

  const thumbnails = [
    { id: 0, alt: 'Main view' },
    { id: 1, alt: 'Side view' },
    { id: 2, alt: 'Detail view' },
    { id: 3, alt: 'Back view' }
  ];

  const features = [
    { icon: Truck, text: 'Free shipping worldwide' },
    { icon: Shield, text: '2-year warranty' },
    { icon: RotateCcw, text: '30-day returns' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Product Images */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
                <div className="text-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center shadow-inner">
                    <span className="text-gray-500 text-xl font-medium">Headphones Image</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
              </button>
              <button className="absolute top-4 left-4 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((thumb) => (
                <button
                  key={thumb.id}
                  onClick={() => setSelectedImage(thumb.id)}
                  className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-3 transition-all duration-300 hover:scale-105 ${
                    selectedImage === thumb.id 
                      ? 'border-black shadow-lg' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <span className="text-gray-500 text-xs font-medium">IMG</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">(4.8) • 2,847 reviews</span>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                  BESTSELLER
                </span>
              </div>
              <h1 className="text-5xl font-black text-gray-900 mb-2 tracking-tight">
                Sonora Pro Max
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Experience premium audio with advanced noise cancellation and studio-quality sound.
              </p>
              <div className="flex items-baseline space-x-3 mb-8">
                <span className="text-4xl font-black text-gray-900">€149.99</span>
                <span className="text-xl text-gray-500 line-through">€199.99</span>
                <span className="bg-red-100 text-red-800 text-sm font-bold px-2 py-1 rounded-full">
                  25% OFF
                </span>
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Choose Color</h3>
              <div className="flex space-x-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative group`}
                  >
                    <div className={`w-12 h-12 rounded-full ${color.color} border-3 transition-all duration-200 ${
                      selectedColor === color.name 
                        ? 'border-black shadow-lg scale-110' 
                        : 'border-gray-300 hover:border-gray-400 hover:scale-105'
                    }`} />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {color.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-black hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                ADD TO CART
              </button>
              
              <button className="w-full border-2 border-gray-900 text-gray-900 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                BUY NOW - PAY LATER
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-600">
                  <feature.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm text-gray-600 font-medium">Secure payments:</span>
                <div className="flex space-x-2">
                  <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold shadow-md">VISA</div>
                  <div className="w-10 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded text-white text-xs flex items-center justify-center font-bold shadow-md">MC</div>
                  <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded text-white text-xs flex items-center justify-center font-bold shadow-md">AMEX</div>
                  <div className="w-10 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded text-black text-xs flex items-center justify-center font-bold shadow-md">PP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;