import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/components/CartProvider';

const App = () => {
  return (
    <CartProvider>
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Main Content */}
          <main className="container py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <Toaster />
        </div>
      </Layout>
    </CartProvider>
  );
};

export default App;
