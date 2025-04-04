import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Lookbook from './pages/Lookbook';
import PreOrder from './pages/PreOrder';
import ShippingReturns from './pages/ShippingReturns';
import FAQ from './pages/FAQ';
import SizeGuide from './pages/SizeGuide';
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
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/lookbook" element={<Lookbook />} />
              <Route path="/pre-order" element={<PreOrder />} />
              <Route path="/shipping-returns" element={<ShippingReturns />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/size-guide" element={<SizeGuide />} />
            </Routes>
          </main>

          <Toaster />
        </div>
      </Layout>
    </CartProvider>
  );
};

export default App;
