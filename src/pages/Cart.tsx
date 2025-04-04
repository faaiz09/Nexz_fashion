import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const Cart = () => {
  const { items, updateQuantity, removeItem } = useCartStore();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10.00;
  const total = subtotal + shipping;

  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cinzel text-4xl mb-2">Shopping Cart</h1>
        <p className="text-gothic-300 mb-8">Review and modify your items before checkout</p>

        {items.length === 0 ? (
          <div className="text-center py-12 bg-gothic-900 rounded-lg">
            <ShoppingBag className="h-16 w-16 mx-auto text-gothic-500 mb-4" />
            <h2 className="font-cinzel text-2xl mb-4">Your cart is empty</h2>
            <p className="text-gothic-300 mb-6 max-w-md mx-auto">Looks like you haven't added any items to your cart yet. Continue shopping to find the perfect pieces for your wardrobe.</p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-white text-gothic-950 px-8 py-3 rounded hover:bg-gothic-300 transition"
            >
              Continue Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex space-x-6 border-b border-gothic-800 pb-6"
                  >
                    <Link to={`/product/${item.id}`} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-32 object-cover rounded"
                      />
                    </Link>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <Link
                          to={`/product/${item.id}`}
                          className="font-cinzel text-lg hover:text-gothic-300 transition"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gothic-300 hover:text-white transition"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="text-gothic-300 mb-4">
                        {item.size && <p>Size: {item.size}</p>}
                        {item.color && <p>Color: {item.color}</p>}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 border border-gothic-700 rounded flex items-center justify-center hover:border-white transition"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gothic-700 rounded flex items-center justify-center hover:border-white transition"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-gothic-900 rounded-lg p-6 sticky top-24">
                <h2 className="font-cinzel text-2xl mb-6">Order Summary</h2>
                <div className="space-y-4 text-gothic-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gothic-800 pt-4 flex justify-between text-white text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="w-full bg-white text-gothic-950 py-3 rounded mt-6 hover:bg-gothic-300 transition flex items-center justify-center"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/shop"
                  className="block text-center text-gothic-300 hover:text-white mt-4 transition"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Promo Code */}
              <div className="mt-6 bg-gothic-900 rounded-lg p-6">
                <h3 className="font-cinzel text-lg mb-4">Promo Code</h3>
                <form 
                  className="flex"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Implement promo code logic
                    alert('Promo code functionality coming soon!');
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 bg-gothic-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-gothic-500"
                  />
                  <button
                    type="submit"
                    className="bg-white text-gothic-950 px-6 py-2 rounded-r hover:bg-gothic-300 transition"
                  >
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 