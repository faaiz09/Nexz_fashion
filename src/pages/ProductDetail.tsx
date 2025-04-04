import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, ShoppingBag, ChevronDown, Star, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

// Mock product database (In real app this would come from an API)
const MOCK_PRODUCTS = {
  '1': {
    id: '1',
    name: 'Gothic Dream Dress',
    price: 199.99,
    description: `Embrace the darkness with our signature Gothic Dream Dress. This stunning piece features:
    - Intricate black lace detailing
    - High collar with Victorian-inspired design
    - Long bell sleeves with lace trim
    - Floor-length flowing skirt
    - Back zipper closure
    - Made from premium quality materials`,
    images: [
      '/images/product-1.jpg',
      '/images/instagram-1.jpg',
      '/images/instagram-2.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Red', 'Purple'],
    category: 'Dresses',
    inStock: true,
    reviews: [
      {
        id: '1',
        author: 'Emily',
        rating: 5,
        comment: 'Absolutely stunning dress! The quality is amazing and it fits perfectly.',
        date: '2024-03-15',
      },
      {
        id: '2',
        author: 'Samantha',
        rating: 4,
        comment: 'Beautiful dress, the fabric is high quality. Runs a bit small though.',
        date: '2024-02-20',
      },
    ],
  },
  '2': {
    id: '2',
    name: 'Mystical Lace Top',
    price: 89.99,
    description: `Our Mystical Lace Top is a versatile addition to any gothic wardrobe:
    - Delicate lace overlay
    - Form-fitting silhouette
    - High neckline with scalloped edges
    - Long sleeves with thumb holes
    - Semi-sheer with strategic opacity
    - Perfect for layering or wearing alone`,
    images: [
      '/images/product-2.jpg',
      '/images/instagram-3.jpg',
      '/images/instagram-4.jpg',
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'White'],
    category: 'Tops',
    inStock: true,
    reviews: [
      {
        id: '1',
        author: 'Raven',
        rating: 5,
        comment: 'This top is amazing! So comfortable and the lace detail is beautiful.',
        date: '2024-03-10',
      },
    ],
  },
  '3': {
    id: '3',
    name: 'Dark Realm Pants',
    price: 129.99,
    description: `Step into the Dark Realm with our signature gothic pants:
    - High-waisted design with corset-inspired lacing
    - Tapered leg with zippered ankles
    - Multiple functional pockets with chain details
    - Stretch fabric for comfort and movement
    - Matte black hardware
    - Durable yet comfortable fabric blend`,
    images: [
      '/images/product-3.jpg',
      '/images/instagram-5.jpg',
      '/images/instagram-6.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    category: 'Bottoms',
    inStock: true,
    reviews: [
      {
        id: '1',
        author: 'Morgan',
        rating: 4,
        comment: 'These pants are so comfortable and the details are amazing. Great for everyday wear!',
        date: '2024-02-28',
      },
    ],
  },
  '4': {
    id: '4',
    name: 'Shadow Leather Jacket',
    price: 249.99,
    description: `Our Shadow Leather Jacket is a statement piece for any gothic ensemble:
    - Genuine premium leather construction
    - Asymmetrical zipper front
    - Multiple pocket designs with custom hardware
    - Quilted shoulder details
    - Adjustable side buckles for perfect fit
    - Fully lined interior with inside pocket
    - Worn-in finish for authentic look`,
    images: [
      '/images/product-4.jpg',
      '/images/instagram-3.jpg',
      '/images/instagram-5.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
    category: 'Outerwear',
    inStock: true,
    reviews: [
      {
        id: '1',
        author: 'Damien',
        rating: 5,
        comment: 'Best jacket I\'ve ever owned. Worth every penny - the quality is exceptional.',
        date: '2024-01-15',
      },
      {
        id: '2',
        author: 'Victoria',
        rating: 5,
        comment: 'This jacket is absolutely perfect. The details are beautiful and it fits like a dream.',
        date: '2024-02-03',
      },
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'size-guide' | 'reviews'>('description');
  const { addItem } = useCartStore();

  // Find the product from our mock database
  const product = id ? MOCK_PRODUCTS[id as keyof typeof MOCK_PRODUCTS] : null;
  const [mainImage, setMainImage] = useState(product?.images[0] || '');

  // Set main image when product changes
  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
      setSelectedSize('');
      setSelectedColor('');
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="bg-gothic-950 text-white min-h-screen py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cinzel text-4xl mb-6">Product Not Found</h1>
          <p className="text-gothic-300 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/shop" 
            className="inline-flex items-center bg-white text-gothic-950 px-6 py-3 rounded hover:bg-gothic-300 transition"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      size: selectedSize,
      color: selectedColor,
    });

    alert('Item added to cart!');
  };

  // Color mapping for display
  const colorMap: Record<string, string> = {
    'Black': '#000000',
    'White': '#ffffff',
    'Red': '#ff0000',
    'Purple': '#800080',
    'Gray': '#808080',
    'Silver': '#c0c0c0',
  };

  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center text-gothic-300">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-white">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop/${product.category.toLowerCase()}`} className="hover:text-white">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    mainImage === image ? 'border-white' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-cinzel text-4xl mb-4">{product.name}</h1>
            <p className="text-2xl text-gothic-300 mb-6">${product.price.toFixed(2)}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-cinzel text-lg mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? 'border-white' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: colorMap[color] || color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
              {selectedColor && <p className="mt-2 text-gothic-300">{selectedColor}</p>}
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-cinzel text-lg mb-3">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? 'bg-white text-gothic-950 border-white'
                        : 'border-gothic-700 hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-cinzel text-lg mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-10 border border-gothic-700 rounded flex items-center justify-center hover:border-white"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-10 border border-gothic-700 rounded flex items-center justify-center hover:border-white"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-white text-gothic-950 py-3 rounded flex items-center justify-center space-x-2 hover:bg-gothic-300 transition"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button className="w-12 h-12 border border-gothic-700 rounded flex items-center justify-center hover:border-white">
                <Heart className="h-5 w-5" />
              </button>
              <button className="w-12 h-12 border border-gothic-700 rounded flex items-center justify-center hover:border-white">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="border-t border-gothic-800">
              <div className="flex space-x-8 -mb-px">
                {(['description', 'size-guide', 'reviews'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 border-b-2 transition ${
                      activeTab === tab
                        ? 'border-white text-white'
                        : 'border-transparent text-gothic-300 hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                  </button>
                ))}
              </div>

              <div className="py-6">
                {activeTab === 'description' && (
                  <div className="prose prose-invert">
                    <p className="text-gothic-300 whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>
                )}

                {activeTab === 'size-guide' && (
                  <div>
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gothic-800">
                          <th className="py-2">Size</th>
                          <th className="py-2">Bust</th>
                          <th className="py-2">Waist</th>
                          <th className="py-2">Hips</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gothic-800">
                          <td className="py-2">XS</td>
                          <td className="py-2">32"</td>
                          <td className="py-2">24"</td>
                          <td className="py-2">34"</td>
                        </tr>
                        <tr className="border-b border-gothic-800">
                          <td className="py-2">S</td>
                          <td className="py-2">34"</td>
                          <td className="py-2">26"</td>
                          <td className="py-2">36"</td>
                        </tr>
                        <tr className="border-b border-gothic-800">
                          <td className="py-2">M</td>
                          <td className="py-2">36"</td>
                          <td className="py-2">28"</td>
                          <td className="py-2">38"</td>
                        </tr>
                        <tr className="border-b border-gothic-800">
                          <td className="py-2">L</td>
                          <td className="py-2">38"</td>
                          <td className="py-2">30"</td>
                          <td className="py-2">40"</td>
                        </tr>
                        <tr className="border-b border-gothic-800">
                          <td className="py-2">XL</td>
                          <td className="py-2">40"</td>
                          <td className="py-2">32"</td>
                          <td className="py-2">42"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {product.reviews.map(review => (
                      <div key={review.id} className="border-b border-gothic-800 pb-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-500' : 'text-gothic-700'
                                }`}
                                fill={i < review.rating ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                          <span className="text-gothic-300">|</span>
                          <span className="text-gothic-300">{review.author}</span>
                        </div>
                        <p className="text-gothic-200 mb-1">{review.comment}</p>
                        <p className="text-sm text-gothic-400">{review.date}</p>
                      </div>
                    ))}

                    {product.reviews.length === 0 && (
                      <p className="text-gothic-300">No reviews yet. Be the first to review this product!</p>
                    )}

                    <button className="mt-4 bg-gothic-800 hover:bg-gothic-700 px-6 py-2 rounded transition">
                      Write a Review
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 