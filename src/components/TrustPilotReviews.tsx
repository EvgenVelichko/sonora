import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TrustPilotReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      rating: 5,
      title: "Excellent",
      text: "Outstanding sound quality and comfort. These headphones exceeded my expectations in every way.",
      author: "Sarah M.",
      date: "2 days ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "The noise cancellation is incredible. Perfect for my daily commute and work from home.",
      author: "John D.",
      date: "1 week ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "Amazing build quality and the battery life is exactly as advertised. Highly recommend!",
      author: "Mike R.",
      date: "3 days ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "Best headphones I've owned. The sound is crystal clear and they're incredibly comfortable.",
      author: "Lisa K.",
      date: "5 days ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "Fast shipping and excellent customer service. The product quality is outstanding.",
      author: "David L.",
      date: "1 week ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "These headphones are perfect for both music and calls. Great value for money.",
      author: "Emma W.",
      date: "4 days ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "Comfortable for long listening sessions. The design is sleek and modern.",
      author: "Tom H.",
      date: "6 days ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "Exceptional audio quality. These headphones deliver on every promise made.",
      author: "Anna S.",
      date: "2 days ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "Professional grade audio at an incredible price point. Worth every penny!",
      author: "Chris P.",
      date: "3 days ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "The wireless connectivity is flawless and the design is absolutely stunning.",
      author: "Maria G.",
      date: "1 day ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "These headphones have completely changed my music listening experience.",
      author: "Alex R.",
      date: "4 days ago"
    },
    {
      rating: 5,
      title: "Excellent",
      text: "Incredible value for money. The build quality feels premium and durable.",
      author: "Sophie L.",
      date: "2 days ago"
    }
  ];


  const reviewsPerSlide = 2;
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  // Автоматическое переключение слайдов
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const getCurrentReviews = () => {
    const startIndex = currentSlide * reviewsPerSlide;
    return reviews.slice(startIndex, startIndex + reviewsPerSlide);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More than 3,291+ Happy Customers!
          </h2>
          <p className="text-gray-600">See what our customers are saying about Sonora Pro Max</p>
          
          {/* TrustPilot Rating */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-green-500 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-green-600">4.9/5</span>
            <span className="text-gray-600">Excellent</span>
          </div>
        </div>
        
        {/* Slider Container */}
        <div className="relative">
          {/* Reviews Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {reviews
                      .slice(slideIndex * reviewsPerSlide, (slideIndex + 1) * reviewsPerSlide)
                      .map((review, reviewIndex) => (
                        <div key={`${slideIndex}-${reviewIndex}`} className="bg-white border-2 border-green-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-green-500 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          
                          <h4 className="font-bold text-green-600 mb-3 text-xl">{review.title}</h4>
                          <p className="text-gray-700 text-base mb-6 leading-relaxed">{review.text}</p>
                          
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 font-bold text-base">{review.author.charAt(0)}</span>
                            </div>
                            <span className="text-gray-600 text-base font-medium">{review.author}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-green-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isAutoPlaying ? '⏸️ Pause auto-play' : '▶️ Resume auto-play'}
          </button>
        </div>

        {/* View All Reviews Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            View All Reviews on TrustPilot
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustPilotReviews;