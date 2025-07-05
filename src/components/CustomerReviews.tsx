import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('reviews-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      title: 'Absolutely Amazing!',
      text: 'These headphones have completely changed my music experience. The sound quality is incredible and they\'re so comfortable I can wear them all day. The noise cancellation is perfect for my daily commute.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      verified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Tokyo, Japan',
      rating: 5,
      title: 'Perfect for Work',
      text: 'As a music producer, I need headphones that deliver accurate sound. The Sonora Pro Max exceeds my expectations. The clarity and detail in every frequency range is outstanding.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      verified: true
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      title: 'Best Purchase Ever!',
      text: 'I\'ve tried many premium headphones, but nothing comes close to these. The battery life is incredible, and the wireless connection is always stable. Highly recommended!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
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
    <section id="reviews-section" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'sonora-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-black mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Over 2,847 five-star reviews from satisfied customers worldwide
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-3xl font-bold text-black">4.8</span>
            <span className="text-gray-600">out of 5</span>
          </div>
        </div>

        {/* Main Review Card */}
        <div className={`relative ${isVisible ? 'sonora-fade-in-up sonora-delay-300' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="h-16 w-16 text-gray-400" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-6 w-6 text-yellow-400 fill-current sonora-scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Review Title */}
              <h3 className="text-2xl font-bold text-black mb-6 text-center">
                "{reviews[currentReview].title}"
              </h3>

              {/* Review Text */}
              <p className="text-gray-700 text-lg leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                "{reviews[currentReview].text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={reviews[currentReview].image}
                  alt={reviews[currentReview].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-center">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-black">{reviews[currentReview].name}</h4>
                    {reviews[currentReview].verified && (
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{reviews[currentReview].location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 sonora-btn"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    currentReview === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 sonora-btn"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Review Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'sonora-fade-in-up sonora-delay-600' : 'opacity-0'}`}>
          {[
            { number: '2,847', label: 'Total Reviews', icon: '⭐' },
            { number: '4.8', label: 'Average Rating', icon: '📊' },
            { number: '98%', label: 'Recommend', icon: '👍' },
            { number: '24h', label: 'Response Time', icon: '⚡' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl sonora-hover-lift"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-black">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;