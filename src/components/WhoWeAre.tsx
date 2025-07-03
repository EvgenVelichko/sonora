import React from 'react';
import { Award, Users, Globe, Shield, Target, Zap } from 'lucide-react';

const WhoWeAre = () => {
  const features = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized globally for innovation and quality',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Dedicated to providing exceptional customer service',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers worldwide with premium audio',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous testing ensures lasting performance',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Target className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white tracking-wide">OUR MISSION</span>
          </div>
          <h2 className="text-5xl font-black mb-6 tracking-tight">
            WHO WE ARE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of audio technology with passion, innovation, and unwavering commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">10+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">1M+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">50+</div>
                <div className="text-gray-400">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;