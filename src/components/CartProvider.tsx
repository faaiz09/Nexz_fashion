import React from "react";
import ShoppingCart from "./ShoppingCart";
import { useCartStore } from "../store/cartStore";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity } =
    useCartStore();

  return (
    <>
      {children}
      <ShoppingCart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        onRemoveItem={removeItem}
        onUpdateQuantity={updateQuantity}
      />
    </>
  );
};
