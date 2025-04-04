import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

// Sample catalog data
const catalogItems = [
  {
    id: 'catalog-1',
    name: 'Spring Collection 2024',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience the vibrant colors and lightweight fabrics of our Spring 2024 collection.',
    items: 32,
  },
  {
    id: 'catalog-2',
    name: 'Summer Essentials',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Stay cool and stylish with our curated collection of summer essentials.',
    items: 24,
  },
  {
    id: 'catalog-3',
    name: 'Autumn Transition',
    image: 'https://images.unsplash.com/photo-1612215327300-53bdd4ca0444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Transition into the cooler months with our layered autumn styles.',
    items: 28,
  },
  {
    id: 'catalog-4',
    name: 'Winter Collection',
    image: 'https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Stay warm without compromising on style with our winter collection.',
    items: 36,
  },
  {
    id: 'catalog-5',
    name: 'Minimalist Essentials',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Timeless pieces that form the foundation of any wardrobe.',
    items: 20,
  },
  {
    id: 'catalog-6',
    name: 'Evening Wear',
    image: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Elegant pieces for special occasions and evening events.',
    items: 18,
  }
];

// Filter categories
const categories = ['All Collections', 'Seasonal', 'Essentials', 'Special Occasions', 'Limited Edition'];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredItems = catalogItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cinzel text-4xl mb-8">Fashion Catalogs</h1>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search catalogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gothic-900 text-white px-4 py-3 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-gothic-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gothic-300 h-5 w-5" />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center justify-between bg-gothic-900 px-4 py-3 rounded md:w-64"
            >
              <span>Filter by: {selectedCategory}</span>
              {filtersOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>

          {/* Filter options */}
          {filtersOpen && (
            <div className="bg-gothic-900 p-4 rounded mb-6 md:w-64 md:ml-auto">
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setFiltersOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded ${
                      selectedCategory === category ? 'bg-gothic-800' : 'hover:bg-gothic-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item.id} className="bg-gothic-900 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gothic-950 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-cinzel text-2xl mb-2">{item.name}</h3>
                    <p className="text-gothic-300">{item.items} items</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gothic-300 mb-4">{item.description}</p>
                  <Link
                    to={`/shop?catalog=${item.id}`}
                    className="inline-block border border-white px-6 py-2 rounded hover:bg-white hover:text-gothic-950 transition"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gothic-300 mb-4">No catalogs found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="bg-white text-gothic-950 px-6 py-2 rounded hover:bg-gothic-300 transition"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Subscribe to Catalogs */}
        <div className="mt-16 bg-gothic-900 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cinzel text-3xl mb-4">Stay Updated</h2>
            <p className="text-gothic-300 mb-8">
              Subscribe to our newsletter to receive our latest catalogs and exclusive offers directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gothic-800 text-white rounded-t sm:rounded-l sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-gothic-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-gothic-950 rounded-b sm:rounded-r sm:rounded-l-none hover:bg-gothic-300 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog; 