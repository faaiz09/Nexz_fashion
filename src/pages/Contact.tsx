import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    { 
      icon: <Phone className="h-6 w-6" />, 
      title: 'Phone', 
      details: ['+91 (555) 123-4567', '+91 (555) 987-6543'] 
    },
    { 
      icon: <Mail className="h-6 w-6" />, 
      title: 'Email', 
      details: ['contact@nexzfashion.com', 'support@nexzfashion.com'] 
    },
    { 
      icon: <MapPin className="h-6 w-6" />, 
      title: 'Location', 
      details: ['Sector 10, Kharghar', 'Navi Mumbai, 410210'] 
    },
    { 
      icon: <Clock className="h-6 w-6" />, 
      title: 'Business Hours', 
      details: ['Monday-Friday: 9AM-7PM', 'Saturday-Sunday: 10AM-5PM'] 
    }
  ];

  const inquiryTypes = [
    'General Inquiry',
    'Product Question',
    'Order Status',
    'Returns & Exchanges',
    'Partnership',
    'Press & Media',
    'Careers'
  ];

  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cinzel text-4xl mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gothic-900 rounded-lg p-8">
            <h2 className="font-cinzel text-2xl mb-6">Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-gothic-800 text-white p-4 rounded mb-6 flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-gothic-800 text-white p-4 rounded mb-6 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                <span>There was an error sending your message. Please try again.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gothic-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gothic-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gothic-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gothic-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gothic-300 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gothic-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                >
                  <option value="">Select a subject</option>
                  {inquiryTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gothic-300 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gothic-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full bg-white text-gothic-950 py-3 rounded hover:bg-gothic-300 transition disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-gothic-900 rounded-lg p-8 mb-8">
              <h2 className="font-cinzel text-2xl mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="text-gothic-500 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-cinzel text-lg mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gothic-300">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gothic-900 rounded-lg p-8">
              <h2 className="font-cinzel text-2xl mb-6">Visit Our Store</h2>
              <div className="rounded overflow-hidden h-80 bg-gothic-800 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-gothic-500" />
                  <p className="text-gothic-300">
                    Interactive map loading...
                    <br />
                    <span className="text-sm">
                      (A real implementation would include an embedded map here)
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gothic-300">
                Our flagship store is located in the heart of the fashion district. Visit us to experience our collections in person.
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="font-cinzel text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gothic-900 p-6 rounded-lg">
              <h3 className="font-cinzel text-xl mb-3">How can I track my order?</h3>
              <p className="text-gothic-300">
                You can track your order by logging into your account and viewing your order history. Alternatively, use the tracking number provided in your shipping confirmation email.
              </p>
            </div>
            <div className="bg-gothic-900 p-6 rounded-lg">
              <h3 className="font-cinzel text-xl mb-3">What is your return policy?</h3>
              <p className="text-gothic-300">
                We offer a 30-day return policy for unworn items in original condition with tags attached. Please visit our Returns page for detailed instructions.
              </p>
            </div>
            <div className="bg-gothic-900 p-6 rounded-lg">
              <h3 className="font-cinzel text-xl mb-3">Do you ship internationally?</h3>
              <p className="text-gothic-300">
                Yes, we ship to most countries worldwide. Shipping fees and delivery times vary based on location. International orders may be subject to customs duties.
              </p>
            </div>
            <div className="bg-gothic-900 p-6 rounded-lg">
              <h3 className="font-cinzel text-xl mb-3">How do I find my size?</h3>
              <p className="text-gothic-300">
                Please refer to our detailed size guide available on our website. If you're between sizes, we generally recommend sizing up for a more comfortable fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 