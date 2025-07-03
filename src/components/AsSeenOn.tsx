import React from 'react';

const AsSeenOn = () => {
  const logos = [
    { name: 'BBC', gradient: 'from-red-600 to-red-700' },
    { name: 'Forbes', gradient: 'from-blue-600 to-blue-700' },
    { name: 'CNET', gradient: 'from-green-600 to-green-700' },
    { name: 'TechCrunch', gradient: 'from-purple-600 to-purple-700' },
    { name: 'Engadget', gradient: 'from-orange-600 to-orange-700' },
    { name: 'The Verge', gradient: 'from-pink-600 to-pink-700' }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-white tracking-wide">MEDIA COVERAGE</span>
          </div>
          <h2 className="text-4xl font-black mb-8 tracking-tight">
            AS SEEN ON
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="text-center group">
              <div className="h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <div className={`bg-gradient-to-r ${logo.gradient} text-white font-black text-lg px-4 py-2 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {logo.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;