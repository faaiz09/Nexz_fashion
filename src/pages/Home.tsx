import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import ExternalImage from '@/components/ExternalImage';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Gothic Dream Dress',
    price: 199.99,
    image: '/images/product-1.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Red', 'Purple'],
  },
  {
    id: '2',
    name: 'Mystical Lace Top',
    price: 89.99,
    image: '/images/product-2.jpg',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'White'],
  },
  {
    id: '3',
    name: 'Dark Realm Pants',
    price: 129.99,
    image: '/images/product-3.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
  },
  {
    id: '4',
    name: 'Shadow Leather Jacket',
    price: 249.99,
    image: '/images/product-4.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
  },
];

const Home = () => {
  const { addItem } = useCartStore();

  const handleAddToCart = (product: typeof MOCK_PRODUCTS[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: product.sizes[0], // Default to first available size
      color: product.colors[0], // Default to first available color
    });
    alert('Item added to cart!');
  };

  return (
    <div className="bg-gothic-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-gothic-950 to-transparent z-10" />
        <img
          src="/images/hero-image.jpg"
          alt="Season Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-cinzel text-5xl md:text-7xl mb-6">
              Embrace Your Dark Side
            </h1>
            <p className="text-xl mb-8 text-gothic-100">
              Discover our latest collection of gothic-inspired fashion pieces.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-white text-gothic-950 px-8 py-3 rounded hover:bg-gothic-300 transition"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-4xl mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dresses', image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { name: 'Accessories', image: '/images/category-accessories.jpg' },
              { name: 'Outerwear', image: '/images/category-outerwear.jpg' }
            ].map((category) => (
              <Link
                key={category.name}
                to={`/shop/${category.name.toLowerCase()}`}
                className="group relative h-96 overflow-hidden rounded-lg"
              >
                {category.name === 'Dresses' ? (
                  <ExternalImage
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition transform group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition transform group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gothic-950 to-transparent opacity-70" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="font-cinzel text-2xl mb-2">{category.name}</h3>
                  <span className="inline-flex items-center text-gothic-300 group-hover:text-white transition">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gothic-900">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-4xl mb-12 text-center">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {MOCK_PRODUCTS.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover transition transform group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-1 bg-white text-gothic-950 py-2 rounded text-center opacity-0 group-hover:opacity-100 transition"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-gothic-950 p-2 rounded opacity-0 group-hover:opacity-100 transition"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-cinzel text-lg mb-2 hover:text-gothic-300 transition">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gothic-300">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cinzel text-4xl mb-6">Our Story</h2>
              <p className="text-gothic-300 mb-6">
                Nexz Fashion was born from a passion for gothic aesthetics and modern fashion.
                We believe in creating pieces that empower individuals to express their unique style
                while maintaining the highest standards of quality and craftsmanship.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-white hover:text-gothic-300 transition"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[600px]">
              <img
                src="/images/brand-story.jpg"
                alt="Brand Story"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-gothic-900">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-4xl mb-12 text-center">Follow Our Style</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
              '/images/instagram-6.jpg'
            ].map((imgSrc, index) => (
              <a
                key={index}
                href="#"
                className="relative group aspect-square overflow-hidden"
              >
                {imgSrc.startsWith('http') ? (
                  <ExternalImage
                    src={imgSrc}
                    alt={`Instagram Post ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={imgSrc}
                    alt={`Instagram Post ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gothic-950 bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition">
                    @nexzfashion
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gothic-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cinzel text-4xl mb-6">Join Our Newsletter</h2>
          <p className="text-gothic-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates about new collections, special offers,
            and exclusive content.
          </p>
          <form 
            className="flex max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Newsletter subscription coming soon!');
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l bg-gothic-950 text-white border border-gothic-700 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="bg-white text-gothic-950 px-8 py-3 rounded-r hover:bg-gothic-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 