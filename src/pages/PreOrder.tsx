import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Bell } from 'lucide-react';

// Sample pre-order data
const preOrderItems = [
  {
    id: 'po-001',
    name: 'Limited Edition Leather Jacket',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 299.99,
    releaseDate: '2024-07-15',
    description: 'Hand-crafted leather jacket featuring unique detailing and premium materials. Limited quantities available.',
    availableColors: ['Black', 'Brown', 'Navy'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    discount: 15
  },
  {
    id: 'po-002',
    name: 'Avant-Garde Asymmetric Dress',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 189.99,
    releaseDate: '2024-06-20',
    description: 'Bold asymmetric design with flowing fabrics and modern silhouette. Pre-order now for early summer release.',
    availableColors: ['Red', 'Black', 'White'],
    availableSizes: ['XS', 'S', 'M', 'L'],
    discount: 10
  },
  {
    id: 'po-003',
    name: 'Signature Designer Boots',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 249.99,
    releaseDate: '2024-08-05',
    description: 'Premium leather boots with distinctive design elements. Perfect for transitioning into the fall season.',
    availableColors: ['Black', 'Tan', 'Grey'],
    availableSizes: ['36', '37', '38', '39', '40', '41', '42'],
    discount: 0
  },
  {
    id: 'po-004',
    name: 'Embroidered Silk Blouse',
    image: 'https://images.unsplash.com/photo-1551163943-3f7fffb07efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 159.99,
    releaseDate: '2024-06-10',
    description: 'Luxurious silk blouse with intricate hand embroidery. Limited production run available for pre-order.',
    availableColors: ['Ivory', 'Blush', 'Sage'],
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    discount: 5
  }
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const PreOrder = () => {
  const [notificationEmail, setNotificationEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call for subscribing
    if (notificationEmail) {
      setSubscribed(true);
      setNotificationEmail('');
      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cinzel text-4xl mb-4">Exclusive Pre-Orders</h1>
        <p className="text-gothic-300 mb-12 max-w-3xl">
          Get exclusive access to our upcoming collections before they're officially released. 
          Pre-order now to secure limited edition pieces and enjoy special pre-launch discounts.
        </p>
        
        {/* Notification Sign-up */}
        <div className="bg-gothic-900 rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cinzel text-2xl mb-4 flex items-center justify-center">
              <Bell className="h-5 w-5 mr-2" />
              Get Pre-Order Notifications
            </h2>
            <p className="text-gothic-300 mb-6">
              Subscribe to receive alerts when new pre-order items become available. 
              Be the first to know about upcoming releases and exclusive offers.
            </p>
            
            {subscribed ? (
              <div className="bg-gothic-800 p-4 rounded text-center">
                <p className="text-gothic-300">Thank you for subscribing! You'll receive notifications for new pre-order items.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-lg mx-auto">
                <input
                  type="email"
                  value={notificationEmail}
                  onChange={(e) => setNotificationEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-3 bg-gothic-800 text-white rounded-t sm:rounded-l sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-gothic-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-gothic-950 rounded-b sm:rounded-r sm:rounded-l-none hover:bg-gothic-300 transition"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Available Pre-Orders */}
        <div>
          <h2 className="font-cinzel text-2xl mb-8">Available Pre-Orders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {preOrderItems.map(item => (
              <div key={item.id} className="bg-gothic-900 rounded-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-80 object-cover"
                  />
                  {item.discount > 0 && (
                    <div className="absolute top-4 right-4 bg-gothic-500 text-white px-3 py-1 rounded-full">
                      {item.discount}% Pre-Order Discount
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-cinzel text-xl mb-2">{item.name}</h3>
                  <div className="flex items-center text-gothic-300 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Releasing: {formatDate(item.releaseDate)}</span>
                  </div>
                  <p className="text-gothic-300 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gothic-300 mb-1">Available Colors:</div>
                    <div className="flex space-x-2">
                      {item.availableColors.map(color => (
                        <span key={color} className="px-2 py-1 bg-gothic-800 rounded text-sm">{color}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gothic-300 mb-1">Available Sizes:</div>
                    <div className="flex flex-wrap gap-2">
                      {item.availableSizes.map(size => (
                        <span key={size} className="px-2 py-1 bg-gothic-800 rounded text-sm">{size}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      {item.discount > 0 ? (
                        <div>
                          <span className="text-gothic-300 line-through mr-2">${item.price.toFixed(2)}</span>
                          <span className="text-xl">${(item.price * (1 - item.discount/100)).toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="text-xl">${item.price.toFixed(2)}</span>
                      )}
                    </div>
                    <div className="flex items-center text-gothic-300">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">Limited Time Offer</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/product/${item.id}?pre_order=true`}
                    className="flex items-center justify-center w-full bg-white text-gothic-950 py-3 rounded hover:bg-gothic-300 transition"
                  >
                    Pre-Order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pre-Order Information */}
        <div className="mt-16 bg-gothic-900 rounded-lg p-8">
          <h2 className="font-cinzel text-2xl mb-6 text-center">Pre-Order Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gothic-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-cinzel">1</span>
              </div>
              <h3 className="font-cinzel text-lg mb-2">Secure Your Item</h3>
              <p className="text-gothic-300">
                Place your pre-order with a 20% deposit to secure your piece from our upcoming collection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gothic-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-cinzel">2</span>
              </div>
              <h3 className="font-cinzel text-lg mb-2">Production Process</h3>
              <p className="text-gothic-300">
                We'll keep you updated on the production process and estimated delivery timeline.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gothic-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-cinzel">3</span>
              </div>
              <h3 className="font-cinzel text-lg mb-2">Priority Shipping</h3>
              <p className="text-gothic-300">
                Pre-order customers receive priority shipping as soon as items are available for release.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gothic-300 mb-4">
              Have questions about our pre-order process? Feel free to contact our customer service team.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-white px-6 py-2 rounded hover:bg-white hover:text-gothic-950 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrder; 