import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-pink-500 rounded-full opacity-80"></div>
      <div className="absolute top-40 left-10 w-6 h-6 bg-green-500 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-yellow-400 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Upgrade Wardrobe
                <br />
                By Our New Collection
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Explore our vast selection of high-quality products, ranging from fashion
                and electronics to home essentials and beyond
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium">
                Eye Products
              </Button>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50 px-8 py-3 rounded-lg font-medium">
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Content - Image with Floating Elements */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Shopping couple"
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Floating Badges */}
            <div className="absolute -top-4 -left-4 bg-pink-500 text-white px-4 py-3 rounded-xl shadow-lg">
              <div className="text-xs font-medium">Offer</div>
              <div className="text-xl font-bold">30% OFF</div>
              <div className="text-xs">15 Amazing Products</div>
            </div>
            
            <div className="absolute top-20 -right-4 bg-green-500 text-white p-3 rounded-xl shadow-lg">
              <ShoppingCart className="w-6 h-6" />
            </div>
            
            <div className="absolute bottom-10 -left-4 bg-yellow-400 text-black p-3 rounded-xl shadow-lg">
              <span className="text-2xl">😊</span>
            </div>
            
            <div className="absolute bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border">
              <div className="text-xs text-gray-600 font-medium">Best Signup</div>
              <div className="text-sm font-semibold text-gray-900">Offers</div>
              <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 pb-8">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;