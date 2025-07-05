import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DiscountBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 6,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`bg-red-600 text-white py-3 px-4 text-center relative overflow-hidden ${isLoaded ? 'animate-slide-in-left' : ''}`}>
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-pulse"></div>
      
      <div className="relative z-10 flex items-center justify-center space-x-4 text-sm font-medium">
        <span className="flex items-center space-x-2 animate-bounce-in">
          <span className="animate-bounce">🔥</span>
          <span className="animate-fade-in-up animate-delay-200">HOT SALE ENDS IN</span>
        </span>
        
        <div className="flex items-center space-x-1">
          {[
            { value: timeLeft.days, label: 'D' },
            { value: timeLeft.hours, label: 'H' },
            { value: timeLeft.minutes, label: 'M' },
            { value: timeLeft.seconds, label: 'S' }
          ].map((time, index) => (
            <React.Fragment key={time.label}>
              <div className={`flex items-center space-x-1 animate-bounce-in`} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <span className="bg-black text-white px-2 py-1 rounded text-xs font-bold min-w-[24px] transition-all duration-300 hover:scale-110 animate-pulse-glow">
                  {String(time.value).padStart(2, '0')}
                </span>
                <span className="text-xs animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>{time.label}</span>
              </div>
              {index < 3 && <span className="mx-1 animate-pulse">:</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-red-700 rounded-full p-1 transition-all duration-300 hover:scale-110 animate-fade-in animate-delay-500"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default DiscountBanner;