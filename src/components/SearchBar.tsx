import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  // Mock search results - replace with actual API call
  useEffect(() => {
    if (query.length > 2) {
      // Simulate API call
      const mockResults = [
        {
          id: "1",
          name: "Gothic Lace Dress",
          price: 89.99,
          image:
            "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=200&q=80",
          category: "Dresses",
        },
        {
          id: "2",
          name: "Black Platform Boots",
          price: 129.99,
          image:
            "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200&q=80",
          category: "Footwear",
        },
      ].filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
      setResults(mockResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    navigate(`/product/${result.id}`);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-400 hover:text-white"
        onClick={() => setIsOpen(true)}
      >
        <Search className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute right-0 top-full mt-2 w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden z-50"
            >
              <div className="p-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="gothic-input pr-10"
                    autoFocus
                  />
                  {query && (
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                      onClick={() => setQuery("")}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {results.length > 0 && (
                <div className="max-h-96 overflow-y-auto border-t border-gray-800">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      className="w-full p-4 flex items-center gap-4 hover:bg-gray-800 transition-colors text-left"
                      onClick={() => handleResultClick(result)}
                    >
                      <img
                        src={result.image}
                        alt={result.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <h4 className="text-white font-medium">
                          {result.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {result.category}
                        </p>
                        <p className="text-sm text-purple-400">
                          ${result.price.toFixed(2)}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {query.length > 2 && results.length === 0 && (
                <div className="p-4 text-center text-gray-400">
                  No results found for "{query}"
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
