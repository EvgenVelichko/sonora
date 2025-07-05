import React, { useState, useEffect } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
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

    const element = document.getElementById('faq-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What's included in the box?",
      answer: "Your Sonora Pro Max comes with the headphones, a premium carrying case, USB-C charging cable, 3.5mm audio cable, airplane adapter, and quick start guide. Everything you need to get started right away."
    },
    {
      question: "How long does the battery last?",
      answer: "The Sonora Pro Max offers up to 30 hours of continuous playback with ANC off, and up to 20 hours with active noise cancellation enabled. Quick charge gives you 3 hours of playback with just 10 minutes of charging."
    },
    {
      question: "Are they compatible with all devices?",
      answer: "Yes! The headphones work with any Bluetooth-enabled device including smartphones, tablets, computers, and gaming consoles. They also include a 3.5mm cable for wired connections to any device with a headphone jack."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 60-day money-back guarantee. If you're not completely satisfied, return your headphones in original condition for a full refund. We also provide a 2-year warranty covering manufacturing defects."
    },
    {
      question: "How do I pair them with my device?",
      answer: "Simply turn on Bluetooth on your device, press and hold the power button on the headphones for 3 seconds until you hear 'pairing mode', then select 'Sonora Pro Max' from your device's Bluetooth menu."
    },
    {
      question: "Can I use them for phone calls?",
      answer: "Absolutely! The built-in microphone with advanced noise cancellation ensures crystal-clear call quality. The headphones automatically switch between music and calls, and you can answer/end calls using the built-in controls."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq-section" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'sonora-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-blue-500 mr-4" />
            <h2 className="text-4xl font-bold text-black">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Everything you need to know about the Sonora Pro Max
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 sonora-hover-lift ${
                isVisible ? 'sonora-fade-in-up' : 'opacity-0'
              } ${openFAQ === index ? 'ring-2 ring-blue-500' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-8 text-left transition-all duration-300 hover:bg-gray-50 group"
              >
                <span className="text-lg font-semibold text-black pr-4 group-hover:text-blue-600 transition-colors duration-300">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 transition-all duration-300 ${
                  openFAQ === index ? 'rotate-180 text-blue-500' : 'text-gray-400 group-hover:text-blue-500'
                }`}>
                  {openFAQ === index ? (
                    <Minus className="h-6 w-6" />
                  ) : (
                    <Plus className="h-6 w-6" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-8">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className={`mt-16 text-center ${isVisible ? 'sonora-fade-in-up sonora-delay-800' : 'opacity-0'}`}>
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-black mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is here to help you 24/7
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 sonora-btn sonora-hover-lift">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;