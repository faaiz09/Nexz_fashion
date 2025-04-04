import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, ShoppingBag, Truck, RefreshCw, CreditCard, User } from 'lucide-react';

// FAQ item type
interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

// FAQ category type
interface FAQCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>('orders');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Define FAQ categories and questions
  const faqCategories: FAQCategory[] = [
    {
      id: 'orders',
      name: 'Orders & Shipping',
      icon: <ShoppingBag className="h-5 w-5" />,
      items: [
        {
          question: 'How do I track my order?',
          answer: (
            <div>
              <p>You can track your order in two ways:</p>
              <ol className="list-decimal ml-5 mt-2 space-y-1">
                <li>Log into your account and view your order history</li>
                <li>Use the tracking number provided in your shipping confirmation email</li>
              </ol>
              <p className="mt-2">
                Tracking information typically becomes available within 24 hours after your order has been shipped.
              </p>
            </div>
          ),
        },
        {
          question: 'How long will it take to receive my order?',
          answer: (
            <p>
              Delivery times depend on your location and chosen shipping method. Standard shipping typically takes 5-7 business days. Express shipping takes 2-3 business days. Next day delivery is available for orders placed before 12pm. International shipping can take 7-21 business days depending on your location.
            </p>
          ),
        },
        {
          question: "Can I modify or cancel my order after it's placed?",
          answer: (
            <p>
              You can modify or cancel an order within 1 hour of placing it by contacting our customer service team. Once an order enters the processing stage, we cannot guarantee changes can be made, but we'll do our best to accommodate your request.
            </p>
          ),
        },
        {
          question: 'Do you ship internationally?',
          answer: (
            <p>
              Yes, we ship to most countries worldwide. International shipping costs and delivery times vary based on location. Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.
            </p>
          ),
        },
      ],
    },
    {
      id: 'returns',
      name: 'Returns & Exchanges',
      icon: <RefreshCw className="h-5 w-5" />,
      items: [
        {
          question: 'What is your return policy?',
          answer: (
            <p>
              We offer a 30-day return policy for unworn items in their original condition with tags attached. Domestic returns are free of charge—we'll provide a prepaid shipping label for your convenience. Refunds will be processed within 7-10 business days of receiving your returned items.
            </p>
          ),
        },
        {
          question: 'How do I exchange an item for a different size or color?',
          answer: (
            <div>
              <p>To exchange an item:</p>
              <ol className="list-decimal ml-5 mt-2 space-y-1">
                <li>Contact our customer service or initiate an exchange through your account</li>
                <li>Return your original purchase using our prepaid shipping label</li>
                <li>Once we receive your return, we'll process your exchange and ship the new item</li>
              </ol>
              <p className="mt-2">
                Please note that exchanges are subject to product availability. If the exchanged item has a different price, you will be charged or refunded the difference.
              </p>
            </div>
          ),
        },
        {
          question: 'Are there any items that cannot be returned?',
          answer: (
            <div>
              <p>For hygiene and safety reasons, the following items cannot be returned or exchanged:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Intimate apparel and swimwear once packaging has been opened</li>
                <li>Products personalized or customized to your specifications</li>
                <li>Items marked as "Final Sale" or purchased at discounts greater than 50%</li>
              </ul>
            </div>
          ),
        },
        {
          question: 'How long does it take to process my refund?',
          answer: (
            <p>
              Refunds are processed within 7-10 business days after we receive your returned items. The refund will be issued to the original payment method used for the purchase. Please note that it may take additional time for the funds to appear in your account, depending on your financial institution.
            </p>
          ),
        },
      ],
    },
    {
      id: 'products',
      name: 'Products & Sizing',
      icon: <User className="h-5 w-5" />,
      items: [
        {
          question: 'How do I find my size?',
          answer: (
            <p>
              We recommend referring to our detailed size guide available on our website. Each product page includes a "Size Guide" link with specific measurements for that item. If you're between sizes, we generally recommend sizing up for a more comfortable fit.
            </p>
          ),
        },
        {
          question: 'Are your materials sustainable?',
          answer: (
            <p>
              We're committed to using sustainable materials wherever possible. Many of our products feature organic cotton, recycled polyester, and other eco-friendly fabrics. Each product description includes information about the materials used, so you can make informed decisions about your purchases.
            </p>
          ),
        },
        {
          question: 'How should I care for my items?',
          answer: (
            <div>
              <p>Each item includes specific care instructions on its tag, which we recommend following for best results. Generally:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Machine wash cold with like colors</li>
                <li>Use mild detergent</li>
                <li>Hang or lay flat to dry</li>
                <li>Iron on low heat if needed</li>
                <li>For delicate items, hand washing is recommended</li>
              </ul>
            </div>
          ),
        },
        {
          question: 'Do you restock sold out items?',
          answer: (
            <p>
              Popular items are often restocked. You can sign up for notifications on product pages to be alerted when an item comes back in stock. Limited edition items may not be restocked. If you're looking for a specific sold-out item, please contact our customer service team to inquire about potential restocking dates.
            </p>
          ),
        },
      ],
    },
    {
      id: 'payment',
      name: 'Payment & Promotions',
      icon: <CreditCard className="h-5 w-5" />,
      items: [
        {
          question: 'What payment methods do you accept?',
          answer: (
            <div>
              <p>We accept the following payment methods:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Credit/Debit cards (Visa, Mastercard, American Express, Discover)</li>
                <li>PayPal</li>
                <li>Apple Pay</li>
                <li>Google Pay</li>
                <li>Shop Pay</li>
                <li>Afterpay (for orders between $35 and $1000)</li>
              </ul>
            </div>
          ),
        },
        {
          question: 'Is my payment information secure?',
          answer: (
            <p>
              Yes, we use industry-standard encryption and security measures to protect your payment information. We are PCI compliant and never store your full credit card details on our servers. All transactions are processed through secure and trusted payment processors.
            </p>
          ),
        },
        {
          question: 'How do I apply a discount code?',
          answer: (
            <p>
              You can apply a discount code during the checkout process. On the cart page, you'll find a field labeled "Promo Code" where you can enter your code and click "Apply" to receive your discount. Please note that most discount codes cannot be combined with other offers or promotions.
            </p>
          ),
        },
        {
          question: 'Do you offer a loyalty program?',
          answer: (
            <p>
              Yes, we offer a rewards program that allows you to earn points on every purchase. These points can be redeemed for discounts on future orders. You'll also receive exclusive offers, early access to sales, and birthday rewards. Sign up for an account on our website to join our loyalty program.
            </p>
          ),
        },
      ],
    },
    {
      id: 'account',
      name: 'Account & Privacy',
      icon: <User className="h-5 w-5" />,
      items: [
        {
          question: 'How do I create an account?',
          answer: (
            <p>
              You can create an account by clicking on the "Account" icon in the top right corner of our website and selecting "Sign Up." You'll need to provide your email address and create a password. You can also create an account during the checkout process.
            </p>
          ),
        },
        {
          question: 'How do you use my personal information?',
          answer: (
            <p>
              We respect your privacy and only use your personal information to process orders, improve your shopping experience, and communicate with you. We never sell your data to third parties. For full details, please refer to our Privacy Policy, available in the footer of our website.
            </p>
          ),
        },
        {
          question: 'How can I unsubscribe from emails?',
          answer: (
            <p>
              You can unsubscribe from our marketing emails by clicking the "Unsubscribe" link at the bottom of any email we send. You can also manage your communication preferences in your account settings. Please note that even if you unsubscribe from marketing emails, you'll still receive transactional emails related to your orders.
            </p>
          ),
        },
        {
          question: 'Can I delete my account?',
          answer: (
            <p>
              Yes, you can request to delete your account and associated data by contacting our customer service team. We'll process your request within 30 days. Please note that we may need to retain certain information for legal or administrative purposes, such as order history for tax records.
            </p>
          ),
        },
      ],
    },
  ];

  // Function to toggle a question's expanded state
  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions({
      ...expandedQuestions,
      [questionId]: !expandedQuestions[questionId],
    });
  };

  // Filter FAQs based on search query
  const getFilteredFAQs = () => {
    if (!searchQuery.trim()) {
      return faqCategories.find(cat => cat.id === activeCategory)?.items || [];
    }
    
    const query = searchQuery.toLowerCase();
    
    // Search across all categories
    const results: FAQItem[] = [];
    
    faqCategories.forEach(category => {
      category.items.forEach(item => {
        if (
          item.question.toLowerCase().includes(query) ||
          (typeof item.answer === 'string' && item.answer.toLowerCase().includes(query))
        ) {
          results.push(item);
        }
      });
    });
    
    return results;
  };

  const filteredFAQs = getFilteredFAQs();

  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cinzel text-4xl mb-2">Frequently Asked Questions</h1>
        <p className="text-gothic-300 mb-8">Find answers to common questions about our products and services</p>
        
        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gothic-900 text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gothic-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gothic-300 h-5 w-5" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gothic-900 rounded-lg p-4">
              <h2 className="font-cinzel text-xl mb-4">Categories</h2>
              <nav className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSearchQuery('');
                    }}
                    className={`w-full flex items-center rounded-md px-4 py-2 text-left transition ${
                      activeCategory === category.id
                        ? 'bg-gothic-800 text-white'
                        : 'text-gothic-300 hover:bg-gothic-800 hover:text-white'
                    }`}
                  >
                    <span className="mr-3">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Need More Help Box */}
            <div className="mt-6 bg-gothic-900 rounded-lg p-6">
              <h3 className="font-cinzel text-lg mb-3">Need More Help?</h3>
              <p className="text-gothic-300 text-sm mb-4">
                Can't find what you're looking for? Our customer service team is here to help.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:support@nexzfashion.com"
                  className="block w-full bg-gothic-800 text-center py-2 rounded hover:bg-gothic-700 transition"
                >
                  Email Us
                </a>
                <a
                  href="tel:+1234567890"
                  className="block w-full bg-gothic-800 text-center py-2 rounded hover:bg-gothic-700 transition"
                >
                  Call: (123) 456-7890
                </a>
                <a
                  href="#"
                  className="block w-full bg-gothic-800 text-center py-2 rounded hover:bg-gothic-700 transition"
                >
                  Live Chat
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {searchQuery ? (
              <div>
                <h2 className="font-cinzel text-2xl mb-6">Search Results</h2>
                {filteredFAQs.length === 0 ? (
                  <div className="bg-gothic-900 rounded-lg p-8 text-center">
                    <p className="text-gothic-300 mb-4">No results found for "{searchQuery}"</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="bg-white text-gothic-950 px-6 py-2 rounded hover:bg-gothic-300 transition"
                    >
                      Clear Search
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((item, index) => {
                      const questionId = `search-${index}`;
                      return (
                        <div key={questionId} className="bg-gothic-900 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleQuestion(questionId)}
                            className="w-full flex justify-between items-center p-4 text-left"
                          >
                            <span className="font-cinzel">{item.question}</span>
                            {expandedQuestions[questionId] ? (
                              <ChevronUp className="h-5 w-5 text-gothic-300" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gothic-300" />
                            )}
                          </button>
                          {expandedQuestions[questionId] && (
                            <div className="p-4 pt-0 text-gothic-300 border-t border-gothic-800">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="font-cinzel text-2xl mb-6">
                  {faqCategories.find(cat => cat.id === activeCategory)?.name}
                </h2>
                <div className="space-y-4">
                  {filteredFAQs.map((item, index) => {
                    const questionId = `${activeCategory}-${index}`;
                    return (
                      <div key={questionId} className="bg-gothic-900 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(questionId)}
                          className="w-full flex justify-between items-center p-4 text-left"
                        >
                          <span className="font-cinzel">{item.question}</span>
                          {expandedQuestions[questionId] ? (
                            <ChevronUp className="h-5 w-5 text-gothic-300" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gothic-300" />
                          )}
                        </button>
                        {expandedQuestions[questionId] && (
                          <div className="p-4 pt-0 text-gothic-300 border-t border-gothic-800">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Additional Help Section */}
        <div className="mt-16 bg-gothic-900 rounded-lg p-8 text-center">
          <h2 className="font-cinzel text-2xl mb-4">Still Have Questions?</h2>
          <p className="text-gothic-300 mb-6 max-w-2xl mx-auto">
            Our customer service team is available Monday through Friday, 9AM-6PM EST to assist you with any questions or concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-white text-gothic-950 px-6 py-3 rounded hover:bg-gothic-300 transition"
            >
              Contact Us
            </a>
            <a
              href="/shipping-returns"
              className="inline-block border border-white px-6 py-3 rounded hover:bg-gothic-800 transition"
            >
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 