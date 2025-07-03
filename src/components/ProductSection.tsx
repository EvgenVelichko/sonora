import React, { useState } from "react";
import { Star, Heart, Share2 } from "lucide-react";

const ProductSection = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  const colors = [
    { name: "white", bg: "bg-gray-200", selected: "ring-gray-400" },
    { name: "black", bg: "bg-gray-900", selected: "ring-gray-600" },
    { name: "green", bg: "bg-green-500", selected: "ring-green-400" },
    { name: "blue", bg: "bg-blue-500", selected: "ring-blue-400" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center relative">
              <div className="w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xl">Headphones</span>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[
                "../assets/product1.webp",
                "../assets/product1.webp",
                "../assets/product1.webp",
                "../assets/product1.webp",
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 border-transparent hover:border-gray-300"
                >
                  <img
                    src={src}
                    alt={`Product preview ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  (4.8) • 2,847 reviews
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Sonora Pro Max
              </h1>
              <p className="text-gray-600 mb-4">
                Premium wireless headphones with active noise cancellation
              </p>

              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  €149.99
                </span>
                <span className="text-lg text-gray-500 line-through">
                  €199.99
                </span>
                <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                  25% OFF
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.bg} ring-2 ${
                      selectedColor === color.name
                        ? color.selected
                        : "ring-transparent"
                    } hover:ring-gray-300`}
                  />
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              ADD TO CART
            </button>

            <div className="flex items-center justify-center space-x-2 pt-4">
              <span className="text-sm text-gray-600">Secure payments:</span>
              <div className="flex space-x-1">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
                <div className="w-8 h-5 bg-yellow-400 rounded text-black text-xs flex items-center justify-center font-bold">
                  PP
                </div>
              </div>
            </div>

            {/* Product details */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">
                  Free worldwide shipping
                </span>
                <span className="text-sm text-gray-600">✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">2-year warranty</span>
                <span className="text-sm text-gray-600">✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">30-day returns</span>
                <span className="text-sm text-gray-600">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
