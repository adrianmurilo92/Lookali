import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Heart, Share2, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductDetailProps {
  onAddToCart: () => void;
}

const productImages = [
  'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const colorVariants = [
  { name: 'White', color: 'bg-white border-2 border-gray-300' },
  { name: 'Black', color: 'bg-black' },
  { name: 'Blue', color: 'bg-blue-500' },
  { name: 'Cyan', color: 'bg-cyan-400' },
  { name: 'Green', color: 'bg-green-500' },
  { name: 'Light Blue', color: 'bg-blue-300' },
];

const relatedProducts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Smartwatch screen',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Airpod Device',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Toilet bag',
    originalPrice: 380,
    currentPrice: 15,
    rating: 4.8,
    sold: '1,238 Sold'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=300',
    brand: 'North Purwokerto',
    title: 'Virtual reality headset',
    originalPrice: 380,
    currentPrice: 315,
    rating: 4.8,
    sold: '1,238 Sold'
  },
];

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('White');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <Link to="#" className="hover:text-gray-700">Electronic</Link>
          <span>/</span>
          <Link to="#" className="hover:text-gray-700">Headphones</Link>
          <span>/</span>
          <span className="text-gray-900">Virtual reality headset</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl p-8 aspect-square">
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              <img
                src={productImages[currentImageIndex]}
                alt="Virtual reality headset"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Virtual reality headset</h1>
              <p className="text-gray-600 leading-relaxed">
                Virtual reality headset is the latest addition to legendary G502 lineage. Featuring our first-ever 
                LIGHTFORCE hybrid optical-mechanical switches and updated LIGHTSPEED wireless protocol with 
                68% faster response rate.
              </p>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                <span className="font-semibold">4.8</span>
                <span className="text-gray-500">238 Reviews</span>
              </div>
              <div className="text-gray-500">1,238 Sold</div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">$139.99 <span className="text-lg text-gray-500">or 19.59/month</span></div>
              <p className="text-sm text-gray-500">Suggested payments with 6 months special financing</p>
            </div>

            {/* Product Options */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Type</label>
                  <Select defaultValue="wireless">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wireless">Wireless</SelectItem>
                      <SelectItem value="wired">Wired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="White">White</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Color Variants */}
              <div className="flex space-x-2">
                {colorVariants.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => setSelectedColor(variant.name)}
                    className={`w-8 h-8 rounded-full ${variant.color} ${
                      selectedColor === variant.name ? 'ring-2 ring-green-500 ring-offset-2' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium">
                Buy Now
              </Button>
              <Button
                onClick={onAddToCart}
                variant="outline"
                className="flex-1 border-green-500 text-green-500 hover:bg-green-50 py-3 rounded-lg font-medium"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center justify-center gap-6 pt-4">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="text-sm">Add to Wishlist</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="details">Detail Product</TabsTrigger>
              <TabsTrigger value="merchant">Merchant</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="related">Related Product</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual reality headset</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Virtual reality headset is the latest addition to legendary G502 lineage. Featuring our first-ever 
                  LIGHTFORCE hybrid optical-mechanical switches and updated LIGHTSPEED wireless protocol with 
                  68% faster response rate.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Specification</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brand</span>
                      <span className="font-medium">Logitech</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Model</span>
                      <span className="font-medium">VR-2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight</span>
                      <span className="font-medium">580g</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">In The Box</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>UG502 X LIGHTSPEED Wireless Gaming Mouse</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>DPI-Shift button cover</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">System Required</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• USB port</div>
                    <div>• Internet access for optional software download</div>
                    <div>• Windows 10</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="merchant">
              <div className="text-center py-8">
                <p className="text-gray-500">Merchant information will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="text-center py-8">
                <p className="text-gray-500">Customer reviews will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="related">
              <div className="text-center py-8">
                <p className="text-gray-500">Related products will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
            <Link to="/" className="text-green-500 hover:text-green-600 font-medium flex items-center gap-2 text-sm">
              View all products
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 group overflow-hidden p-4">
                <div className="relative bg-white rounded-xl p-4 mb-4">
                  <button className="absolute top-2 right-2 p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Heart className="w-4 h-4 text-gray-400" />
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </Link>
                </div>
                
                <div className="space-y-3">
                  <div className="text-xs text-gray-500 font-medium">{product.brand}</div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm line-through text-gray-400">${product.originalPrice}</span>
                    <span className="text-lg font-bold text-green-600">${product.currentPrice}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                    <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                    <span className="text-sm text-gray-400">| {product.sold}</span>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-600 hover:bg-gray-50 py-2 rounded-lg font-medium text-sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;