import React from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  isNew?: boolean;
  isSale?: boolean;
  category?: string;
  onAddToCart?: (id: string) => void;
  onAddToFavorites?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Gothic Lace Trim Corset Top",
  price = 49.99,
  originalPrice = 69.99,
  images = [
    "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400&q=80",
    "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400&q=80",
  ],
  isNew = false,
  isSale = true,
  category = "Tops",
  onAddToCart = () => {},
  onAddToFavorites = () => {},
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-md transition-all duration-300 hover:shadow-xl w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product badges */}
      <div className="absolute left-2 top-2 z-10 flex flex-col gap-1">
        {isNew && (
          <Badge variant="secondary" className="bg-purple-600 text-white">
            New
          </Badge>
        )}
        {isSale && (
          <Badge variant="destructive" className="bg-red-600 text-white">
            Sale
          </Badge>
        )}
      </div>

      {/* Quick action buttons */}
      <div className="absolute right-2 top-2 z-10 flex flex-col gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full bg-gray-800/80 text-white backdrop-blur-sm hover:bg-gray-700"
                onClick={() => onAddToFavorites(id)}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to favorites</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Product image with hover effect */}
      <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden">
        <motion.img
          src={isHovered && images.length > 1 ? images[1] : images[0]}
          alt={name}
          className="h-full w-full object-cover transition-all duration-500"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Quick add to cart overlay on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-black/70 p-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
          <Button
            className="w-full bg-white text-black hover:bg-gray-200"
            onClick={() => onAddToCart(id)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product info */}
      <CardContent className="p-3 sm:p-4">
        <div className="mb-1 text-xs sm:text-sm text-gray-400">{category}</div>
        <h3 className="mb-2 text-base sm:text-lg font-medium text-white line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg font-bold text-white">
            ${price.toFixed(2)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          {originalPrice && originalPrice > price && (
            <span className="text-xs sm:text-sm text-green-500 font-medium ml-auto">
              {Math.round((1 - price / originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
