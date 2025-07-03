import React from 'react';
import { Headphones, Volume2, Wifi, Battery } from 'lucide-react';

const ExperienceSection = () => {
  const features = [
    {
      icon: Headphones,
      title: 'All-Day Comfort',
      description: 'Ergonomically designed with memory foam padding for extended listening sessions.'
    },
    {
      icon: Volume2,
      title: 'Enhanced Playback',
      description: 'Studio-quality sound with deep bass and crystal-clear highs.'
    },
    {
      icon: Wifi,
      title: 'Adaptive Noise',
      description: 'Advanced noise cancellation technology adapts to your environment.'
    },
    {
      icon: Battery,
      title: 'Acoustic Precision',
      description: 'Precision-tuned drivers deliver exceptional audio clarity.'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            EXPERIENCE THE SONORA STUDIO
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="w-80 h-80 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
            <span className="text-gray-500 text-xl">Product Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;