import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Share2,
  ChevronDown,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import WhatsAppOrderButton from "@/components/WhatsAppOrderButton";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ProductGrid from "@/components/ProductGrid";

interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

interface ProductSize {
  value: string;
  label: string;
  available: boolean;
}

interface ProductColor {
  value: string;
  label: string;
  hex: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  images: ProductImage[];
  sizes: ProductSize[];
  colors: ProductColor[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app this would come from an API
  const product: Product = {
    id: id || "default-id",
    name: "Gothic Lace Trim Corset Top",
    price: 59.99,
    originalPrice: 79.99,
    description:
      "Elevate your dark aesthetic with our Gothic Lace Trim Corset Top. This piece features intricate lace detailing, adjustable lacing, and a flattering silhouette that complements any alternative style.",
    details: [
      "Material: 80% Cotton, 15% Polyester, 5% Elastane",
      "Adjustable lace-up back",
      "Front hook and eye closure",
      "Hand wash cold, line dry",
      "Imported",
    ],
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80",
        alt: "Gothic corset top front view",
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80",
        alt: "Gothic corset top back view",
      },
      {
        id: "3",
        url: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80",
        alt: "Gothic corset top side view",
      },
      {
        id: "4",
        url: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80",
        alt: "Gothic corset top detail view",
      },
    ],
    sizes: [
      { value: "xs", label: "XS", available: true },
      { value: "s", label: "S", available: true },
      { value: "m", label: "M", available: true },
      { value: "l", label: "L", available: false },
      { value: "xl", label: "XL", available: true },
    ],
    colors: [
      { value: "black", label: "Black", hex: "#000000" },
      { value: "burgundy", label: "Burgundy", hex: "#800020" },
      { value: "purple", label: "Purple", hex: "#800080" },
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
  };

  // Related products would come from an API in a real app
  const relatedProducts = Array(4)
    .fill(null)
    .map((_, index) => ({
      id: `related-${index}`,
      name: `Related Gothic Product ${index + 1}`,
      price: 49.99 + index * 10,
      image:
        "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80",
    }));

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    console.log("Adding to cart:", {
      product: product.id,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm mb-6">
          <span className="text-gray-400">Home</span>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-400">Women</span>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-400">Tops</span>
          <span className="mx-2 text-gray-500">/</span>
          <span>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-800">
              <img
                src={product.images[selectedImage].url}
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${selectedImage === index ? "border-purple-500" : "border-transparent"}`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.originalPrice && (
              <Badge variant="destructive" className="mb-2">
                SALE
              </Badge>
            )}
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <div className="flex items-center space-x-2">
              <div className="flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-600"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
              <span className="text-gray-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span className="text-green-500 font-semibold">
                  {Math.round(
                    (1 - product.price / product.originalPrice) * 100,
                  )}
                  % OFF
                </span>
              )}
            </div>

            <p className="text-gray-300">{product.description}</p>

            {/* Color Selection */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Color</span>
                <span className="text-gray-400">
                  {selectedColor
                    ? product.colors.find((c) => c.value === selectedColor)
                        ?.label
                    : "Select a color"}
                </span>
              </div>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorSelect(color.value)}
                    className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.value ? "border-purple-500" : "border-gray-700"}`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select ${color.label} color`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Size</span>
                <button className="text-purple-400 flex items-center">
                  Size Guide <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() =>
                      size.available && handleSizeSelect(size.value)
                    }
                    disabled={!size.available}
                    className={`py-2 rounded-md border ${selectedSize === size.value ? "border-purple-500 bg-purple-900/20" : "border-gray-700"} ${!size.available ? "opacity-50 cursor-not-allowed" : "hover:border-purple-400"}`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <span className="font-medium">Quantity</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 gothic-button py-3 rounded-md flex items-center justify-center"
                disabled={!selectedSize || !selectedColor}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="p-3 rounded-md border border-gray-700 hover:bg-gray-800"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="p-3 rounded-md border border-gray-700 hover:bg-gray-800"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* WhatsApp Order Button */}
            <div className="mt-4">
              <WhatsAppOrderButton
                productName={product.name}
                productId={product.id}
                variant="outline"
                className="w-full border-green-600 text-green-500 hover:bg-green-900/20"
              />
            </div>

            {/* Shipping Info */}
            <div className="space-y-3 border-t border-gray-800 pt-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-gray-400" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-gray-400" />
                <span>Free returns within 30 days</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-gray-400" />
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full flex justify-start border-b border-gray-800 mb-6">
              <TabsTrigger value="description" className="px-6 py-3">
                Description
              </TabsTrigger>
              <TabsTrigger value="details" className="px-6 py-3">
                Details
              </TabsTrigger>
              <TabsTrigger value="reviews" className="px-6 py-3">
                Reviews ({product.reviewCount})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="text-gray-300">
              <p>{product.description}</p>
              <p className="mt-4">
                Perfect for gothic events, concerts, or everyday alternative
                fashion. Pair with our high-waisted skirts or distressed jeans
                for a complete look.
              </p>
            </TabsContent>
            <TabsContent value="details">
              <ul className="space-y-2 text-gray-300">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Button variant="outline">Write a Review</Button>
                </div>
                <div className="space-y-4">
                  {/* Mock reviews */}
                  {Array(3)
                    .fill(null)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-800 pb-4"
                      >
                        <div className="flex justify-between mb-2">
                          <div>
                            <div className="flex">
                              {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < 5 - (index % 2) ? "text-yellow-400" : "text-gray-600"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                            </div>
                            <h4 className="font-medium">
                              Reviewer {index + 1}
                            </h4>
                          </div>
                          <span className="text-gray-500 text-sm">
                            2 weeks ago
                          </span>
                        </div>
                        <p className="text-gray-300">
                          This gothic corset top is absolutely stunning! The
                          quality is excellent, and it fits perfectly. I've
                          received so many compliments when wearing it.
                          Definitely worth the purchase!
                        </p>
                      </div>
                    ))}
                </div>
                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">You May Also Like</h2>
            <Button variant="link" className="text-purple-400">
              View All
            </Button>
          </div>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
