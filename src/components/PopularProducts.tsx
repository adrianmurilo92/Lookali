import React, { useState } from 'react';
import { Heart, Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  image: string;
  brand: string;
  title: string;
  originalPrice: number;
  currentPrice: number;
  rating: number;
  sold: string;
  discount?: number;
  isFavorite?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Airpod Pro 2024',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Virtual reality headset',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold',
    discount: 20,
    isFavorite: true
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Graphic women T-shirt',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold',
    discount: 20
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'DJI Drone Mini 3 Pro',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold',
    discount: 20
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Virtual reality headset',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Winter jackets display',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold',
    discount: 20
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'iPhone 14 Pro Max dipo',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold',
    discount: 20
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Men summer T-shirt',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold',
    discount: 20
  },
];

const categories = [
  'All', 'Gadgets', 'Fashion', 'Beauty', 'Fitness', 'Furniture', 'Tech', 'Kids', 'Sports', 'Accessories'
];

interface PopularProductsProps {
  onAddToCart: () => void;
}

const PopularProducts: React.FC<PopularProductsProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([2]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Product on Lenny</h2>
            <p className="text-gray-600 text-sm">Start browsing now to discover the perfect items that suit your needs and preferences.</p>
          </div>
          <button className="text-green-500 hover:text-green-600 font-medium flex items-center gap-2 text-sm">
            View all products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <div className="relative">
                {product.discount && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                    {product.discount}% off
                  </Badge>
                )}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-4 space-y-3">
                <div className="text-xs text-gray-500 font-medium">{product.brand}</div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors">
                  {product.title}
                </h3>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-gray-400">${product.originalPrice}</span>
                  <span className="text-lg font-bold text-green-600">${product.currentPrice}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-400">| {product.sold}</span>
                </div>
                
                {product.id === 1 ? (
                  <Button
                    onClick={onAddToCart}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium text-sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to cart
                  </Button>
                ) : (
                  <Button
                    onClick={onAddToCart}
                    variant="outline"
                    className="w-full border-gray-200 text-gray-600 hover:bg-gray-50 py-2 rounded-lg font-medium text-sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to cart
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;