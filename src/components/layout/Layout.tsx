import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items, setIsOpen } = useCartStore();

  return (
    <header className="bg-gothic-950 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Nexz Fashion" className="h-12" />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/shop" className="hover:text-gothic-300 transition">Shop</Link>
            <Link to="/catalog" className="hover:text-gothic-300 transition">Catalog</Link>
            <Link to="/contact" className="hover:text-gothic-300 transition">Contact</Link>
            <Link to="/lookbook" className="hover:text-gothic-300 transition">Lookbook</Link>
            <Link to="/pre-order" className="hover:text-gothic-300 transition">Pre Order</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsOpen(true)}
              className="hover:text-gothic-300 transition relative"
            >
              <ShoppingBag className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gothic-500 text-[10px] text-white">
                  {items.length}
                </span>
              )}
            </button>
            <Link to="/account" className="hover:text-gothic-300 transition">
              <User className="h-6 w-6" />
            </Link>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gothic-900 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/shop" className="hover:text-gothic-300 transition">Shop</Link>
              <Link to="/catalog" className="hover:text-gothic-300 transition">Catalog</Link>
              <Link to="/contact" className="hover:text-gothic-300 transition">Contact</Link>
              <Link to="/lookbook" className="hover:text-gothic-300 transition">Lookbook</Link>
              <Link to="/pre-order" className="hover:text-gothic-300 transition">Pre Order</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gothic-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-cinzel text-xl mb-4">About Nexz</h3>
            <p className="text-gothic-300">Modern fashion for the bold and unique. Express yourself through our carefully curated collections.</p>
          </div>
          <div>
            <h3 className="font-cinzel text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gothic-300 hover:text-white transition">Shop</Link></li>
              <li><Link to="/catalog" className="text-gothic-300 hover:text-white transition">Catalog</Link></li>
              <li><Link to="/contact" className="text-gothic-300 hover:text-white transition">Contact</Link></li>
              <li><Link to="/lookbook" className="text-gothic-300 hover:text-white transition">Lookbook</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-cinzel text-xl mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping-returns" className="text-gothic-300 hover:text-white transition">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-gothic-300 hover:text-white transition">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-gothic-300 hover:text-white transition">Size Guide</Link></li>
              <li><Link to="/contact" className="text-gothic-300 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-cinzel text-xl mb-4">Newsletter</h3>
            <p className="text-gothic-300 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gothic-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-gothic-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gothic-500 text-white rounded-r hover:bg-gothic-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gothic-800 text-center text-gothic-300">
          <p>&copy; {new Date().getFullYear()} Nexz Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 