import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Check, AlertCircle } from "lucide-react";

interface NewsletterProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

const Newsletter = ({
  title = "Join Our Dark Realm",
  description = "Subscribe to our newsletter for exclusive offers, new arrivals, and dark fashion inspiration.",
  buttonText = "Subscribe",
  className = "",
}: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <section className={`py-16 bg-black relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 gothic-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="gothic-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
            />
            <Button
              className="gothic-button"
              type="submit"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? "Subscribing..." : buttonText}
            </Button>
          </motion.form>

          {status === "success" && (
            <motion.div
              className="mt-4 flex items-center justify-center text-green-500 gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Check size={18} />
              <span>{message}</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              className="mt-4 flex items-center justify-center text-red-500 gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle size={18} />
              <span>{message}</span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
