import React, { useState } from 'react';
import { Headphones, Truck, Shield, RotateCcw } from 'lucide-react';
import Input from '../../controls/input/Input';
import Button from '../../controls/button/Button';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <>
      {/* Benefits Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Headphones className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg">24/7 Support</h3>
                <p className="text-gray-400 text-sm">After-Sale Service</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Free Delivery</h3>
                <p className="text-gray-400 text-sm">International shipping</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Warranty</h3>
                <p className="text-gray-400 text-sm">2-Year warranty policy</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <RotateCcw className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Worry-Free Trial</h3>
                <p className="text-gray-400 text-sm">60-Day easy returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Subscribe Section */}
            <div>
              <h3 className="text-xl font-bold mb-6">SUBSCRIBE</h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-gray-600 text-white placeholder-gray-400 focus:border-white"
                />
                <Button variant="secondary" className="w-full">
                  SUBSCRIBE
                </Button>
              </form>
            </div>

            {/* Menu Section */}
            <div>
              <h3 className="text-xl font-bold mb-6">MENU</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sonora Pro Max</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sonora Ultra Watch</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Policies Section */}
            <div>
              <h3 className="text-xl font-bold mb-6">POLICIES</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Legal Notice</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Sonora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;