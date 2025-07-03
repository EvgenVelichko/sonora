import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is the battery life of Sonora Sound?",
      answer: "The Sonora Pro Max offers up to 30 hours of continuous playback on a single charge with ANC off, and up to 25 hours with ANC on."
    },
    {
      question: "Can I use the Sonora Pro Max with other devices?",
      answer: "Yes, the headphones are compatible with all Bluetooth-enabled devices including smartphones, tablets, computers, and gaming consoles."
    },
    {
      question: "Is there a warranty on the headphones?",
      answer: "Yes, we offer a comprehensive 2-year international warranty covering manufacturing defects and normal wear."
    },
    {
      question: "How do I connect the headphones to my device?",
      answer: "Simply turn on Bluetooth on your device, put the headphones in pairing mode, and select 'Sonora Pro Max' from available devices."
    },
    {
      question: "Can I use the headphones for phone calls?",
      answer: "Absolutely! The built-in dual microphone system provides crystal-clear call quality with advanced noise cancellation."
    },
    {
      question: "How do I set up the Sonora Pro Max for first time?",
      answer: "Unbox your headphones, charge them fully, download our companion app, and follow the quick start guide for personalization."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">FAQs</h2>
          <p className="text-gray-400">Everything you need to know about Sonora Pro Max</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-900 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;