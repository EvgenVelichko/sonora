import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Play, Pause, Volume2, Headphones, Wifi, Battery } from 'lucide-react';

const ProductHero = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const colors = [
    { name: 'black', color: 'bg-gray-900', label: 'Midnight Black' },
    { name: 'white', color: 'bg-gray-100', label: 'Pearl White' },
    { name: 'blue', color: 'bg-blue-500', label: 'Ocean Blue' },
    { name: 'green', color: 'bg-green-500', label: 'Forest Green' }
  ];

  const productImages = [
    'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const features = [
    {
      icon: Headphones,
      title: 'Premium Comfort',
      description: 'Memory foam ear cushions for all-day comfort'
    },
    {
      icon: Volume2,
      title: 'Hi-Fi Audio',
      description: 'Studio-quality sound with deep bass'
    },
    {
      icon: Wifi,
      title: 'Wireless Freedom',
      description: 'Bluetooth 5.0 for seamless connectivity'
    },
    {
      icon: Battery,
      title: '30H Battery',
      description: 'Extended playback on single charge'
    }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <>
      {/* Main Hero Section */}
      <section className="bg-white relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full sonora-float"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          ></div>
          <div 
            className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-green-100/30 to-teal-100/30 rounded-full sonora-float sonora-delay-500"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Product Images */}
            <div className={`space-y-6 ${isVisible ? 'sonora-fade-in-left' : 'opacity-0'}`}>
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden group sonora-hover-lift">
                <img 
                  src={productImages[selectedImage]}
                  alt="Sonora Pro Max"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  style={{
                    transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
                  }}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 sonora-btn"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 sonora-btn"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>

                {/* Play Button */}
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute bottom-6 right-6 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 sonora-btn flex items-center space-x-2"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  <span>360° View</span>
                </button>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-xl overflow-hidden border-3 transition-all duration-500 sonora-hover-lift ${
                      selectedImage === index 
                        ? 'border-black sonora-glow transform scale-105' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Product Info */}
            <div className={`space-y-8 ${isVisible ? 'sonora-fade-in-right' : 'opacity-0'}`}>
              
              {/* Reviews */}
              <div className="flex items-center space-x-3 sonora-fade-in-up">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current sonora-scale-in"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.8) • 2,847 reviews</span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                  ✓ Verified
                </span>
              </div>
              
              {/* Product Title */}
              <div>
                <h1 className="text-6xl font-bold text-black mb-4 sonora-fade-in-up sonora-delay-200">
                  Sonora Pro Max
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed sonora-fade-in-up sonora-delay-300">
                  Experience premium audio with advanced noise cancellation and all-day comfort
                </p>
              </div>
              
              {/* Pricing */}
              <div className="flex items-center space-x-4 sonora-fade-in-up sonora-delay-400">
                <span className="text-4xl font-bold text-black">€149.99</span>
                <span className="text-2xl text-gray-500 line-through">€199.99</span>
                <span className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-bold animate-pulse">
                  25% OFF
                </span>
              </div>

              {/* Color Selection */}
              <div className="space-y-4 sonora-fade-in-up sonora-delay-500">
                <h3 className="text-lg font-semibold text-gray-900">Choose Color</h3>
                <div className="flex space-x-4">
                  {colors.map((color, index) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`group flex flex-col items-center space-y-2 p-3 rounded-xl transition-all duration-300 sonora-hover-lift ${
                        selectedColor === color.name ? 'bg-gray-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full ${color.color} border-3 transition-all duration-300 ${
                        selectedColor === color.name 
                          ? 'border-black scale-110 sonora-glow' 
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`}></div>
                      <span className="text-xs text-gray-600">{color.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4 sonora-fade-in-up sonora-delay-600">
                <button className="w-full bg-black text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-500 sonora-btn sonora-hover-lift relative overflow-hidden group">
                  <span className="relative z-10">ADD TO CART - €149.99</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>

                <button className="w-full border-2 border-black text-black py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 sonora-btn hover:bg-black hover:text-white">
                  BUY NOW - Fast Checkout
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 sonora-fade-in-up sonora-delay-700">
                {[
                  { icon: '🚚', text: 'Free Shipping', subtext: 'Worldwide' },
                  { icon: '🔒', text: 'Secure Payment', subtext: '256-bit SSL' },
                  { icon: '↩️', text: '60-Day Returns', subtext: 'No questions' }
                ].map((badge, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-xl sonora-hover-lift"
                  >
                    <div className="text-2xl mb-2">{badge.icon}</div>
                    <div className="text-xs font-semibold text-gray-900">{badge.text}</div>
                    <div className="text-xs text-gray-600">{badge.subtext}</div>
                  </div>
                ))}
              </div>

              {/* Stock Indicator */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 sonora-fade-in-up sonora-delay-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-orange-800">
                    Only 7 left in stock - Order soon!
                  </span>
                </div>
                <div className="mt-2 bg-orange-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 sonora-fade-in-up">
              Why Choose Sonora Pro Max?
            </h2>
            <p className="text-xl text-gray-600 sonora-fade-in-up sonora-delay-200">
              Premium features designed for the ultimate audio experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`text-center p-8 bg-white rounded-2xl shadow-lg sonora-hover-lift sonora-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sonora-hover-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="sonora-fade-in-left">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Immersive Sound Experience
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Advanced 40mm drivers deliver crystal-clear highs, rich mids, and deep bass. 
                Experience your music like never before with studio-quality sound.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Frequency Response', value: '20Hz - 20kHz' },
                  { label: 'Driver Size', value: '40mm Neodymium' },
                  { label: 'Impedance', value: '32Ω' },
                  { label: 'Sensitivity', value: '105dB/mW' }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                    <span className="text-gray-300">{spec.label}</span>
                    <span className="font-bold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sonora-fade-in-right">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mx-auto flex items-center justify-center sonora-hover-glow sonora-float relative overflow-hidden group">
                  <img 
                    src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Sonora Pro Max"
                    className="w-80 h-80 object-cover rounded-full transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-white rounded-full opacity-60"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-${220 + i * 15}px)`,
                        animation: `sonoraFloat ${3 + i * 0.2}s ease-in-out infinite ${i * 0.3}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHero;