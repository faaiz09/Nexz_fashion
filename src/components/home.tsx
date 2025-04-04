import React from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import ProductGrid from "./ProductGrid";
import Newsletter from "./Newsletter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
      colors: ["black"],
      sizes: ["36", "37", "38", "39", "40", "41"],
    },
    {
      id: "4",
      name: "Mesh Overlay Top",
      price: 49.99,
      images: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
      ],
      colors: ["black", "purple"],
      sizes: ["XS", "S", "M", "L"],
    },
    {
      id: "5",
      name: "Chain Detail Pants",
      price: 79.99,
      images: [
        "https://images.unsplash.com/photo-1551854638-3c5e37b89952?w=800&q=80",
        "https://images.unsplash.com/photo-1551854638-3c5e37b89952?w=800&q=80",
      ],
      colors: ["black", "gray"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: "6",
      name: "Spiked Choker Necklace",
      price: 29.99,
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      ],
      colors: ["silver", "black"],
      sizes: ["One Size"],
    },
  ];

  // Mock carousel slides
  const carouselSlides = [
    {
      id: "1",
      title: "Dark Elegance Collection",
      description: "Embrace the shadows with our new seasonal styles",
      image:
        "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=1200&q=80",
      ctaText: "Shop Collection",
      ctaLink: "#dark-elegance",
    },
    {
      id: "2",
      title: "Urban Gothic",
      description: "Street style meets dark fashion",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
      ctaText: "Explore Now",
      ctaLink: "#urban-gothic",
    },
    {
      id: "3",
      title: "Midnight Accessories",
      description: "Complete your look with our statement pieces",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&q=80",
      ctaText: "View Collection",
      ctaLink: "#accessories",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="flex-1 md:flex-none text-center md:text-left">
              <a href="/" className="text-2xl font-bold tracking-wider">
                NEXZ
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 flex-1 justify-center">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.path}
                  className="text-sm uppercase tracking-wider hover:text-purple-400 transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-purple-400 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:text-purple-400 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 hover:text-purple-400 transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Carousel */}
        <section className="w-full">
          <HeroCarousel slides={carouselSlides} />
        </section>

        {/* Featured Products */}
        <section className="py-16 container mx-auto px-4">
          <div className="mb-10 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Products
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-purple-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
            >
              View All Products
            </Button>
          </div>
        </section>

        {/* Categories Showcase */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Shop By Category
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-purple-600 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Cards */}
              <motion.div
                className="relative h-80 overflow-hidden rounded-lg group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
                  alt="Women's Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Women's Collection
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative h-80 overflow-hidden rounded-lg group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80"
                  alt="Men's Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Men's Collection</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative h-80 overflow-hidden rounded-lg group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
                  alt="Accessories"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Accessories</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NEXZ</h3>
              <p className="text-gray-400 mb-4">
                Modern gothic fashion for the bold and daring.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Shop
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Women
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Men
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Sale
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Help
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Customer Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Track Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                About
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2023 Nexz Fashion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
