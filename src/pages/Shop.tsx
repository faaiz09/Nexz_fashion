import React, { useState, useMemo } from 'react';
import { Filter, SortDesc, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  sizes: string[];
  colors: string[];
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Gothic Dream Dress',
    price: 199.99,
    category: 'Dresses',
    image: '/images/product-1.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Red', 'Purple'],
  },
  {
    id: '2',
    name: 'Mystical Lace Top',
    price: 89.99,
    category: 'Tops',
    image: '/images/product-2.jpg',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'White'],
  },
  {
    id: '3',
    name: 'Dark Realm Pants',
    price: 129.99,
    category: 'Bottoms',
    image: '/images/product-3.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
  },
  {
    id: '4',
    name: 'Shadow Leather Jacket',
    price: 249.99,
    category: 'Outerwear',
    image: '/images/product-4.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black'],
  },
  {
    id: '5',
    name: 'Gothic Chain Necklace',
    price: 59.99,
    category: 'Accessories',
    image: '/images/instagram-1.jpg',
    sizes: ['One Size'],
    colors: ['Silver', 'Black'],
  },
  {
    id: '6',
    name: 'Raven Corset Top',
    price: 119.99,
    category: 'Tops',
    image: '/images/instagram-2.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Red'],
  },
  {
    id: '7',
    name: 'Eternal Night Boots',
    price: 179.99,
    category: 'Accessories',
    image: '/images/instagram-3.jpg',
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Black'],
  },
  {
    id: '8',
    name: 'Velvet Draped Skirt',
    price: 149.99,
    category: 'Bottoms',
    image: '/images/instagram-4.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Purple', 'Red'],
  },
];

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');
  const { addItem } = useCartStore();

  const categories = ['Dresses', 'Tops', 'Bottoms', 'Accessories', 'Outerwear'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size', '36', '37', '38', '39', '40', '41', '42'];
  const colors = ['Black', 'White', 'Red', 'Purple', 'Gray', 'Silver'];

  const toggleFilter = (type: 'category' | 'size' | 'color', value: string) => {
    switch (type) {
      case 'category':
        setSelectedCategories(prev =>
          prev.includes(value)
            ? prev.filter(c => c !== value)
            : [...prev, value]
        );
        break;
      case 'size':
        setSelectedSizes(prev =>
          prev.includes(value)
            ? prev.filter(s => s !== value)
            : [...prev, value]
        );
        break;
      case 'color':
        setSelectedColors(prev =>
          prev.includes(value)
            ? prev.filter(c => c !== value)
            : [...prev, value]
        );
        break;
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  const handleAddToCart = (product: Product) => {
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

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesSize = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size));
      const matchesColor = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
      return matchesCategory && matchesSize && matchesColor;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      // Default to newest (by id) for demonstration
      return parseInt(b.id) - parseInt(a.id);
    });
  }, [selectedCategories, selectedSizes, selectedColors, sortBy]);

  return (
    <div className="bg-gothic-950 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-cinzel text-4xl">Shop</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 bg-gothic-800 px-4 py-2 rounded hover:bg-gothic-700 transition"
            >
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-gothic-800 px-4 py-2 rounded hover:bg-gothic-700 transition"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategories.length > 0 || selectedSizes.length > 0 || selectedColors.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategories.map(category => (
              <button
                key={category}
                onClick={() => toggleFilter('category', category)}
                className="flex items-center space-x-2 bg-gothic-800 px-3 py-1 rounded text-sm"
              >
                <span>{category}</span>
                <X className="h-4 w-4" />
              </button>
            ))}
            {selectedSizes.map(size => (
              <button
                key={size}
                onClick={() => toggleFilter('size', size)}
                className="flex items-center space-x-2 bg-gothic-800 px-3 py-1 rounded text-sm"
              >
                <span>{size}</span>
                <X className="h-4 w-4" />
              </button>
            ))}
            {selectedColors.map(color => (
              <button
                key={color}
                onClick={() => toggleFilter('color', color)}
                className="flex items-center space-x-2 bg-gothic-800 px-3 py-1 rounded text-sm"
              >
                <span>{color}</span>
                <X className="h-4 w-4" />
              </button>
            ))}
            <button
              onClick={clearFilters}
              className="text-gothic-300 hover:text-white text-sm"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row">
          {/* Filter Sidebar */}
          <aside
            className={`fixed md:relative top-0 left-0 h-full md:h-auto w-64 bg-gothic-900 md:bg-transparent transform transition-transform duration-300 ease-in-out z-50 ${
              isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            } md:w-1/4`}
          >
            <div className="p-6">
              <div className="mb-8">
                <h3 className="font-cinzel text-xl mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleFilter('category', category)}
                        className="form-checkbox bg-gothic-800 border-gothic-700"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-cinzel text-xl mb-4">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleFilter('size', size)}
                      className={`px-3 py-1 border rounded ${
                        selectedSizes.includes(size)
                          ? 'bg-white text-gothic-950 border-white'
                          : 'border-gothic-700 hover:border-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-cinzel text-xl mb-4">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => {
                    // Map color names to CSS colors
                    const colorMap: Record<string, string> = {
                      'Black': '#000000',
                      'White': '#ffffff',
                      'Red': '#ff0000',
                      'Purple': '#800080',
                      'Gray': '#808080',
                      'Silver': '#c0c0c0',
                    };
                    
                    return (
                      <button
                        key={color}
                        onClick={() => toggleFilter('color', color)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColors.includes(color)
                            ? 'border-white'
                            : 'border-transparent'
                        }`}
                        style={{ backgroundColor: colorMap[color] || color.toLowerCase() }}
                        title={color}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 ml-0 md:ml-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
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
                  <p className="text-gothic-500 text-sm">{product.category}</p>
                </div>
              ))}
            </div>
            
            {/* No Results Message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl mb-4">No products match your filters</h3>
                <button 
                  onClick={clearFilters}
                  className="bg-white text-gothic-950 px-4 py-2 rounded hover:bg-gothic-300 transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop; 