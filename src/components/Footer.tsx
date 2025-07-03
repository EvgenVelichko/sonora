import React, { useState, useEffect } from 'react';
import { Headphones, Truck, Shield, RotateCcw, X } from 'lucide-react';

const Footer = () => {
  const [showNotification, setShowNotification] = useState(true);

  const benefits = [
    {
      icon: Headphones,
      title: '24/7 Support',
      subtitle: 'After-Sale Service'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      subtitle: 'International shipping'
    },
    {
      icon: Shield,
      title: 'Warranty',
      subtitle: '2-Year warranty policy'
    },
    {
      icon: RotateCcw,
      title: 'Worry-Free Trial',
      subtitle: '60-Day easy returns'
    }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Benefits Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Subscribe Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">SUBSCRIBE</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">MENU</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sonora Pro Max</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sonora Ultra Watch</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">POLICIES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Legal Notice</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Purchase Notification */}
      {showNotification && (
        <div className="fixed bottom-6 left-6 bg-white text-black rounded-lg p-4 shadow-2xl max-w-sm z-50">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Headphones className="h-6 w-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Ethan from USA</p>
              <p className="text-sm text-gray-600">purchased Sonora Ultra</p>
              <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;