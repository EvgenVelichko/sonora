import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      rating: 5,
      title: "Best headphones!",
      text: "I've been using these headphones for months now and they're absolutely amazing. The sound quality is incredible and they're so comfortable I can wear them all day. Definitely worth every penny!",
      author: "Sarah Johnson",
      location: "New York, USA",
      verified: true
    },
    {
      rating: 5,
      title: "Outstanding quality",
      text: "The noise cancellation is phenomenal and the battery life exceeds expectations. Perfect for my daily commute and work from home setup.",
      author: "Michael Chen",
      location: "London, UK",
      verified: true
    },
    {
      rating: 5,
      title: "Exceeded expectations",
      text: "As an audio engineer, I'm very picky about sound quality. These headphones deliver professional-grade audio at an incredible price point.",
      author: "David Rodriguez",
      location: "Los Angeles, USA",
      verified: true
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-800 tracking-wide">CUSTOMER REVIEWS</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
            WHAT OUR CUSTOMERS ARE SAYING
          </h2>
          <p className="text-xl text-gray-600">Over 2,847 five-star reviews</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <Quote className="h-12 w-12 text-gray-200" />
            </div>
            
            <div className="text-center relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                "{reviews[currentReview].title}"
              </h3>
              
              <p className="text-gray-600 text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
                {reviews[currentReview].text}
              </p>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">{reviews[currentReview].author}</div>
                  <div className="text-gray-500 text-sm">{reviews[currentReview].location}</div>
                </div>
                {reviews[currentReview].verified && (
                  <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                    ✓ Verified Purchase
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-center space-x-6">
                <button 
                  onClick={prevReview}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentReview ? 'bg-gray-900 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextReview}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;