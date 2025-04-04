import React from "react";
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";

interface WhatsAppOrderButtonProps {
  productName?: string;
  productId?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  phoneNumber?: string;
}

const WhatsAppOrderButton = ({
  productName = "",
  productId = "",
  variant = "default",
  size = "default",
  className = "",
  phoneNumber = "1234567890", // Replace with your actual WhatsApp business number
}: WhatsAppOrderButtonProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering the following product:\n\nProduct: ${productName}\nProduct ID: ${productId}\n\nPlease provide more information about availability and shipping.`,
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`flex items-center gap-2 ${className}`}
      onClick={handleWhatsAppClick}
    >
      <MessageSquare className="h-4 w-4" />
      Order via WhatsApp
    </Button>
  );
};

export default WhatsAppOrderButton;
