import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Check } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const Checkout = () => {
  const navigate = useNavigate();
  const { items } = useCartStore();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10.00;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement order processing logic here
    alert('Order placed successfully!');
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="bg-gothic-950 text-white min-h-screen py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cinzel text-4xl mb-6">Checkout</h1>
          <p className="text-gothic-300 mb-6">Your cart is empty. Please add items to your cart before proceeding to checkout.</p>
          <Link to="/shop" className="inline-flex items-center bg-white text-gothic-950 px-8 py-3 rounded hover:bg-gothic-300 transition">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/cart" className="inline-flex items-center text-gothic-300 hover:text-white mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Cart
        </Link>

        <h1 className="font-cinzel text-4xl mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* Shipping Information */}
                <div>
                  <h2 className="font-cinzel text-2xl mb-4">Shipping Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gothic-300 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-gothic-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gothic-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-gothic-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gothic-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gothic-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gothic-300 mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full bg-gothic-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gothic-300 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full bg-gothic-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gothic-300 mb-2">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full bg-gothic-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gothic-300 mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full bg-gothic-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h2 className="font-cinzel text-2xl mb-4">Payment Information</h2>
                  <div className="bg-gothic-900 p-6 rounded-lg">
                    <div className="flex items-center mb-6">
                      <CreditCard className="h-6 w-6 mr-2" />
                      <span>Credit Card</span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gothic-300 mb-2">Name on Card</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                          className="w-full bg-gothic-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gothic-300 mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          placeholder="XXXX XXXX XXXX XXXX"
                          className="w-full bg-gothic-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gothic-300 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                            placeholder="MM/YY"
                            className="w-full bg-gothic-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gothic-300 mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                            placeholder="123"
                            className="w-full bg-gothic-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 bg-white text-gothic-950 py-3 px-8 rounded hover:bg-gothic-300 transition flex items-center"
              >
                <Check className="h-5 w-5 mr-2" />
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gothic-900 rounded-lg p-6 sticky top-24">
              <h2 className="font-cinzel text-2xl mb-6">Order Summary</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-cinzel">{item.name}</p>
                      <p className="text-gothic-300 text-sm">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gothic-800 mt-6 pt-6 space-y-4 text-gothic-300">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 