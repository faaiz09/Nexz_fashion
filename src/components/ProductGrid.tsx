import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Separator } from "./ui/separator";
import { ChevronDown, Filter, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  colors: string[];
  sizes: string[];
  isFavorite?: boolean;
}

interface ProductGridProps {
  products?: Product[];
  title?: string;
  showFilters?: boolean;
  columns?: number;
}

const ProductGrid = ({
  products = defaultProducts,
  title = "Featured Products",
  showFilters = false,
  columns = 4,
}: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  // Filter and sort products (placeholder implementation)
  const handleFilterChange = () => {
    // This would be implemented with actual filtering logic
    console.log("Filtering with:", { priceRange, selectedCategory, sortBy });
    // For now, just return the original products
    setFilteredProducts(products);
  };

  // Calculate grid columns class based on prop
  const gridColumnsClass =
    {
      2: "grid-cols-1 xs:grid-cols-2",
      3: "grid-cols-1 xs:grid-cols-2 md:grid-cols-3",
      4: "grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    }[columns] || "grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <div className="w-full bg-background py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>

          {showFilters && (
            <div className="flex items-center gap-4">
              {/* Mobile filter button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 lg:hidden"
                  >
                    <Filter size={16} />
                    <span>Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                    <SheetDescription>
                      Adjust the filters to find exactly what you're looking
                      for.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Price Range</h3>
                      <Slider
                        defaultValue={[0, 200]}
                        max={200}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="text-sm font-medium mb-3">Category</h3>
                      <Select
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="tops">Tops</SelectItem>
                          <SelectItem value="bottoms">Bottoms</SelectItem>
                          <SelectItem value="accessories">
                            Accessories
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator />
                    <Button onClick={handleFilterChange} className="w-full">
                      Apply Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Desktop filters */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Price:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    ${priceRange[0]} - ${priceRange[1]}
                    <ChevronDown size={14} />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm">Category:</span>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="h-8 w-[140px]">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="tops">Tops</SelectItem>
                      <SelectItem value="bottoms">Bottoms</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Sort dropdown (both mobile and desktop) */}
              <div className="flex items-center gap-2">
                <span className="text-sm hidden sm:inline">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-8 w-[140px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        <div className={`grid ${gridColumnsClass} gap-3 sm:gap-4 md:gap-6`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Default products for when none are provided
const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Gothic Lace Corset Top",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80",
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80",
    ],
    category: "tops",
    colors: ["black", "red"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "2",
    name: "Distressed Cargo Pants",
    price: 75.5,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    ],
    category: "bottoms",
    colors: ["black", "gray"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "3",
    name: "Spiked Leather Choker",
    price: 35.0,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    category: "accessories",
    colors: ["black"],
    sizes: ["One Size"],
  },
  {
    id: "4",
    name: "Platform Combat Boots",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80",
    ],
    category: "footwear",
    colors: ["black"],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "5",
    name: "Mesh Long Sleeve Top",
    price: 45.0,
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80",
    ],
    category: "tops",
    colors: ["black", "purple"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "6",
    name: "Chain Detail Belt",
    price: 42.5,
    images: [
      "https://images.unsplash.com/photo-1624623278313-a930126a11c3?w=800&q=80",
      "https://images.unsplash.com/photo-1624623278313-a930126a11c3?w=800&q=80",
    ],
    category: "accessories",
    colors: ["silver", "black"],
    sizes: ["One Size"],
  },
  {
    id: "7",
    name: "Ripped Skinny Jeans",
    price: 65.0,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
    ],
    category: "bottoms",
    colors: ["black", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "8",
    name: "Oversized Graphic Hoodie",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    ],
    category: "tops",
    colors: ["black", "gray"],
    sizes: ["S", "M", "L", "XL"],
  },
];

export default ProductGrid;
