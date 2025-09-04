import React from 'react';
import { Smartphone, Shirt, Plane, Gamepad2, Zap, BookOpen, ArrowRight } from 'lucide-react';

const categories = [
  { 
    icon: Smartphone, 
    name: 'Devices', 
    count: '82k products',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  { 
    icon: Shirt, 
    name: 'Fashions', 
    count: '82k products',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  { 
    icon: Plane, 
    name: 'Action Figure', 
    count: '82k products',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  { 
    icon: Gamepad2, 
    name: 'Gaming', 
    count: '82k products',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  { 
    icon: Zap, 
    name: 'Electronics', 
    count: '82k products',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  { 
    icon: BookOpen, 
    name: 'E-Books', 
    count: '82k products',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Featured Category</h2>
          <button className="text-green-500 hover:text-green-600 font-medium flex items-center gap-2 text-sm">
            View All Categories
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-6 text-center border border-gray-100">
                <div className={`w-16 h-16 mx-auto mb-4 ${category.bgColor} rounded-2xl flex items-center justify-center`}>
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;