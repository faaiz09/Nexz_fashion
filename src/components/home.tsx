import React from "react";
import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";
import ProductGrid from "./ProductGrid";
import Newsletter from "./Newsletter";

const HomePage = () => {
  // Mock categories for navigation
  const categories = [
    { name: "New Arrivals", path: "#new-arrivals" },
    { name: "Women", path: "#women" },
    { name: "Men", path: "#men" },
    { name: "Accessories", path: "#accessories" },
    { name: "Collections", path: "#collections" },
  ];

  // Mock featured products data
  const featuredProducts = [
    {
      id: "1",
      name: "Gothic Lace Dress",
      price: 89.99,
      images: [
        "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80",
        "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80",
      ],
      category: "women",
      colors: ["black", "red"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: "2",
      name: "Distressed Denim Jacket",
      price: 129.99,
      images: [
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
      ],
      category: "men",
      colors: ["black", "blue"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: "3",
      name: "Leather Platform Boots",
      price: 159.99,
      images: [
        "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80",
        "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80",
      ],
      category: "accessories",
      colors: ["black", "brown"],
      sizes: ["36", "37", "38", "39", "40"],
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* Categories Section */}
      <section className="container">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.a
              key={category.name}
              href={category.path}
              className="rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Newsletter */}
      <section className="container">
        <Newsletter />
      </section>
    </div>
  );
};

export default HomePage;
