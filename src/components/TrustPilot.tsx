import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

const TrustPilot = () => {
  const reviews = [
    { rating: 5, title: 'Excellent', text: 'Amazing sound quality and comfort. Highly recommended!', author: 'John D.', date: '2 days ago' },
    { rating: 5, title: 'Perfect', text: 'Best headphones I\'ve ever owned. Worth every penny.', author: 'Sarah M.', date: '1 week ago' },
    { rating: 5, title: 'Outstanding', text: 'Incredible noise cancellation and battery life.', author: 'Mike R.', date: '3 days ago' },
    { rating: 5, title: 'Superb', text: 'Professional quality at an affordable price point.', author: 'Lisa K.', date: '5 days ago' },
    { rating: 5, title: 'Excellent', text: 'Fast shipping and excellent customer service.', author: 'David L.', date: '1 week ago' },
    { rating: 5, title: 'Amazing', text: 'These headphones exceeded all my expectations.', author: 'Emma W.', date: '4 days ago' },
    { rating: 5, title: 'Great', text: 'Perfect for both music and work calls.', author: 'Tom H.', date: '6 days ago' },
    { rating: 5, title: 'Fantastic', text: 'Comfortable for long listening sessions.', author: 'Anna S.', date: '2 days ago' }
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-semibold text-green-800 tracking-wide">TRUSTPILOT REVIEWS</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">
            More than 3,291+ Happy Customers on TrustPilot!
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-green-500 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-green-600">4.9/5</span>
            <span className="text-gray-600">Excellent</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-green-500 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
              <h4 className="font-bold text-green-700 mb-3 text-lg group-hover:text-green-800 transition-colors">
                {review.title}
              </h4>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">{review.text}</p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">{review.author.charAt(0)}</span>
                </div>
                <span className="text-gray-600 text-sm font-medium">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            View All Reviews on TrustPilot
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustPilot;