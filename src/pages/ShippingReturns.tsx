import React, { useState } from 'react';
import { Truck, Package, RefreshCw, MapPin, Info } from 'lucide-react';

const ShippingReturns = () => {
  const [activeTab, setActiveTab] = useState<'shipping' | 'returns'>('shipping');

  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cinzel text-4xl mb-2">Shipping & Returns</h1>
        <p className="text-gothic-300 mb-8">Everything you need to know about our shipping policies and return process</p>
        
        {/* Tab Selector */}
        <div className="flex border-b border-gothic-800 mb-8">
          <button
            onClick={() => setActiveTab('shipping')}
            className={`py-3 px-6 font-cinzel ${
              activeTab === 'shipping' 
                ? 'border-b-2 border-white text-white' 
                : 'text-gothic-300 hover:text-white'
            }`}
          >
            Shipping Information
          </button>
          <button
            onClick={() => setActiveTab('returns')}
            className={`py-3 px-6 font-cinzel ${
              activeTab === 'returns' 
                ? 'border-b-2 border-white text-white' 
                : 'text-gothic-300 hover:text-white'
            }`}
          >
            Returns & Exchanges
          </button>
        </div>
        
        {/* Shipping Content */}
        {activeTab === 'shipping' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-cinzel text-2xl mb-4">Delivery Options</h2>
                <p className="text-gothic-300 mb-4">
                  We offer various shipping methods to ensure your order reaches you in a timeframe that suits your needs.
                  All orders are processed within 1-2 business days before shipping.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Truck className="h-6 w-6 text-gothic-500 shrink-0" />
                    <div>
                      <h3 className="font-cinzel mb-1">Standard Shipping</h3>
                      <p className="text-gothic-300 text-sm">5-7 business days - $10.00 (Free for orders over $100)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Truck className="h-6 w-6 text-gothic-500 shrink-0" />
                    <div>
                      <h3 className="font-cinzel mb-1">Express Shipping</h3>
                      <p className="text-gothic-300 text-sm">2-3 business days - $15.00</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Truck className="h-6 w-6 text-gothic-500 shrink-0" />
                    <div>
                      <h3 className="font-cinzel mb-1">Next Day Delivery</h3>
                      <p className="text-gothic-300 text-sm">Next business day - $25.00 (Order before 12pm)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Package being prepared for shipping" 
                  className="rounded-lg w-full h-72 object-cover"
                />
              </div>
            </div>
            
            <div className="bg-gothic-900 rounded-lg p-8">
              <h2 className="font-cinzel text-2xl mb-6">International Shipping</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gothic-300 mb-4">
                    We ship to most countries worldwide. International shipping costs and delivery times vary based on location and chosen shipping method.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-gothic-500 shrink-0" />
                      <div>
                        <h3 className="font-cinzel text-sm mb-1">Europe</h3>
                        <p className="text-gothic-300 text-sm">7-10 business days - $20.00</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-gothic-500 shrink-0" />
                      <div>
                        <h3 className="font-cinzel text-sm mb-1">Asia</h3>
                        <p className="text-gothic-300 text-sm">10-14 business days - $25.00</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-gothic-500 shrink-0" />
                      <div>
                        <h3 className="font-cinzel text-sm mb-1">Australia & New Zealand</h3>
                        <p className="text-gothic-300 text-sm">10-14 business days - $25.00</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-gothic-500 shrink-0" />
                      <div>
                        <h3 className="font-cinzel text-sm mb-1">Rest of World</h3>
                        <p className="text-gothic-300 text-sm">14-21 business days - $30.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gothic-800 p-4 rounded-lg">
                    <h3 className="font-cinzel flex items-center gap-2 mb-3">
                      <Info className="h-5 w-5 text-gothic-500" />
                      Important Information
                    </h3>
                    <ul className="text-gothic-300 text-sm space-y-2">
                      <li>• International orders may be subject to customs duties and taxes.</li>
                      <li>• These charges are the responsibility of the recipient.</li>
                      <li>• Delivery times may be affected by customs processing.</li>
                      <li>• Tracking information will be provided for all international shipments.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-cinzel text-2xl mb-6">Order Tracking</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gothic-900 p-6 rounded-lg">
                  <Package className="h-8 w-8 text-gothic-500 mb-4" />
                  <h3 className="font-cinzel mb-2">Track Your Order</h3>
                  <p className="text-gothic-300 text-sm">
                    All orders include a tracking number sent via email once your package has been shipped.
                  </p>
                </div>
                <div className="bg-gothic-900 p-6 rounded-lg">
                  <Info className="h-8 w-8 text-gothic-500 mb-4" />
                  <h3 className="font-cinzel mb-2">Order Updates</h3>
                  <p className="text-gothic-300 text-sm">
                    Receive automatic updates at each stage of the shipping process to keep you informed.
                  </p>
                </div>
                <div className="bg-gothic-900 p-6 rounded-lg">
                  <MapPin className="h-8 w-8 text-gothic-500 mb-4" />
                  <h3 className="font-cinzel mb-2">Delivery Notifications</h3>
                  <p className="text-gothic-300 text-sm">
                    You'll receive a notification when your order is out for delivery and when it has been delivered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Returns Content */}
        {activeTab === 'returns' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-cinzel text-2xl mb-4">Our Return Policy</h2>
                <p className="text-gothic-300 mb-4">
                  We want you to be completely satisfied with your purchase. If you're not, we offer a hassle-free return process.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <RefreshCw className="h-6 w-6 text-gothic-500 shrink-0" />
                    <div>
                      <h3 className="font-cinzel mb-1">30-Day Returns</h3>
                      <p className="text-gothic-300 text-sm">
                        You have 30 days from the delivery date to return unworn items in their original condition with tags attached.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <RefreshCw className="h-6 w-6 text-gothic-500 shrink-0" />
                    <div>
                      <h3 className="font-cinzel mb-1">Free Returns</h3>
                      <p className="text-gothic-300 text-sm">
                        Domestic returns are free of charge. We'll provide a prepaid shipping label for your convenience.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <RefreshCw className="h-6 w-6 text-gothic-500 shrink-0" />
                    <div>
                      <h3 className="font-cinzel mb-1">Refund Process</h3>
                      <p className="text-gothic-300 text-sm">
                        Refunds will be processed within 7-10 business days of receiving your returned items.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1604176424472-17cd740f74e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Package being returned" 
                  className="rounded-lg w-full h-72 object-cover"
                />
              </div>
            </div>
            
            <div className="bg-gothic-900 rounded-lg p-8">
              <h2 className="font-cinzel text-2xl mb-6">Exchange Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-gothic-300 mb-4 md:col-span-2">
                  Need a different size or color? Our exchange process makes it easy to get the perfect item for you.
                </p>
                <div>
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="bg-gothic-800 h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-gothic-500 font-cinzel">1</div>
                      <div>
                        <h3 className="font-cinzel mb-1">Request an Exchange</h3>
                        <p className="text-gothic-300 text-sm">
                          Contact our customer service team or initiate an exchange through your account.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="bg-gothic-800 h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-gothic-500 font-cinzel">2</div>
                      <div>
                        <h3 className="font-cinzel mb-1">Return Your Item</h3>
                        <p className="text-gothic-300 text-sm">
                          Use our prepaid shipping label to return your original purchase.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="bg-gothic-800 h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-gothic-500 font-cinzel">3</div>
                      <div>
                        <h3 className="font-cinzel mb-1">Receive Your Exchange</h3>
                        <p className="text-gothic-300 text-sm">
                          Once we receive your return, we'll process your exchange and ship the new item to you.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="bg-gothic-800 p-6 rounded-lg">
                  <h3 className="font-cinzel mb-3">Exchange Policy Notes</h3>
                  <ul className="text-gothic-300 text-sm space-y-2">
                    <li>• Exchanges are subject to product availability.</li>
                    <li>• If the exchanged item has a different price, you will be charged or refunded the difference.</li>
                    <li>• International exchanges may incur additional shipping fees.</li>
                    <li>• All exchanged items must be unworn with tags attached.</li>
                    <li>• Limited edition or sale items may not be eligible for exchange.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-cinzel text-2xl mb-6">Non-Returnable Items</h2>
              <div className="bg-gothic-900 p-6 rounded-lg">
                <p className="text-gothic-300 mb-4">
                  For hygiene and safety reasons, certain items cannot be returned or exchanged. These include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gothic-800 p-4 rounded-lg text-center">
                    <h3 className="font-cinzel mb-2">Intimate Apparel</h3>
                    <p className="text-gothic-300 text-sm">
                      Undergarments and swimwear cannot be returned once packaging has been opened.
                    </p>
                  </div>
                  <div className="bg-gothic-800 p-4 rounded-lg text-center">
                    <h3 className="font-cinzel mb-2">Customized Items</h3>
                    <p className="text-gothic-300 text-sm">
                      Products personalized or customized to your specifications are non-returnable.
                    </p>
                  </div>
                  <div className="bg-gothic-800 p-4 rounded-lg text-center">
                    <h3 className="font-cinzel mb-2">Final Sale Items</h3>
                    <p className="text-gothic-300 text-sm">
                      Items marked as "Final Sale" or purchased at discounts greater than 50% are non-returnable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gothic-900 rounded-lg p-8 text-center">
              <h2 className="font-cinzel text-2xl mb-4">Need Help?</h2>
              <p className="text-gothic-300 mb-6 max-w-2xl mx-auto">
                If you have any questions about our shipping or return policies, our customer service team is here to assist you.
              </p>
              <a
                href="mailto:support@nexzfashion.com"
                className="inline-block bg-white text-gothic-950 px-6 py-3 rounded hover:bg-gothic-300 transition"
              >
                Contact Customer Service
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingReturns; 