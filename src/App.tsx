import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedCategories from './components/FeaturedCategories';
import PopularProducts from './components/PopularProducts';
import ArticlesSection from './components/ArticlesSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState(1);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItems={cartItems} />
      <HeroSection />
      <FeaturedCategories />
      <PopularProducts onAddToCart={addToCart} />
      <ArticlesSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;