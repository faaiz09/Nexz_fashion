import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { Separator } from "./ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const ShoppingCart = ({
  isOpen,
  onClose,
  items = [],
  onUpdateQuantity,
  onRemoveItem,
}: ShoppingCartProps) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 10.00;
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-gothic-950 border-gothic-800 p-0 overflow-hidden">
        <div className="h-full flex flex-col">
          <SheetHeader className="p-6 border-b border-gothic-800">
            <SheetTitle className="flex items-center gap-2 text-white font-cinzel">
              <ShoppingBag className="h-5 w-5" />
              Your Shopping Bag ({items.length})
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 flex flex-col h-[calc(100vh-10rem)]">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <ShoppingBag className="h-12 w-12 text-gothic-500 mb-4" />
                <h3 className="font-cinzel text-lg mb-2">
                  Your shopping bag is empty
                </h3>
                <p className="text-gothic-300 mb-6">
                  Add some items to your bag to continue shopping
                </p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="inline-flex items-center bg-white text-gothic-950 px-6 py-2 rounded hover:bg-gothic-300 transition"
                >
                  Continue Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex gap-4 border-b border-gothic-800 pb-4"
                      >
                        <Link 
                          to={`/product/${item.id}`}
                          onClick={onClose}
                          className="shrink-0"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-24 object-cover rounded"
                          />
                        </Link>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <Link
                              to={`/product/${item.id}`}
                              onClick={onClose}
                              className="font-cinzel hover:text-gothic-300 transition"
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-gothic-300 hover:text-white transition"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="text-gothic-300 text-sm my-1">
                            {item.size && <span>Size: {item.size}</span>}
                            {item.size && item.color && <span> • </span>}
                            {item.color && <span>Color: {item.color}</span>}
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() =>
                                  onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                                }
                                className="w-6 h-6 border border-gothic-700 rounded flex items-center justify-center hover:border-white transition"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-6 text-center">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  onUpdateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-6 h-6 border border-gothic-700 rounded flex items-center justify-center hover:border-white transition"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <span className="text-sm font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-gothic-800 p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gothic-300">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gothic-300">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <Separator className="bg-gothic-800 my-2" />
                    <div className="flex justify-between text-lg font-cinzel">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      to="/checkout"
                      onClick={onClose}
                      className="block w-full bg-white text-gothic-950 py-3 rounded text-center hover:bg-gothic-300 transition"
                    >
                      Checkout
                    </Link>
                    <Link
                      to="/cart"
                      onClick={onClose}
                      className="block w-full border border-gothic-700 text-white py-3 rounded text-center hover:bg-gothic-800 transition"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
