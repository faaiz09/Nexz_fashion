import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

interface CarouselSlide {
  id: number;
  image: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroCarouselProps {
  slides?: CarouselSlide[];
  autoPlayInterval?: number;
}

const HeroCarousel = ({
  slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?w=1400&q=80",
      heading: "AUTUMN SHADOWS COLLECTION",
      description: "Embrace the darkness with our new seasonal styles",
      ctaText: "Shop Collection",
      ctaLink: "/collections/autumn-shadows",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1400&q=80",
      heading: "MIDNIGHT ESSENCE",
      description: "Elevate your style with our premium gothic accessories",
      ctaText: "Discover Now",
      ctaLink: "/collections/accessories",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=1400&q=80",
      heading: "DARK ELEGANCE",
      description: "Limited edition pieces for the bold and fearless",
      ctaText: "Shop Limited Edition",
      ctaLink: "/collections/limited-edition",
    },
  ],
  autoPlayInterval = 5000,
}: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: number | undefined;

    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    goToSlide(newIndex);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-black">
      {/* Carousel Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          >
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 text-white z-10">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider"
            >
              {slides[currentIndex].heading}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200"
            >
              {slides[currentIndex].description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 hover:text-black font-medium px-8 py-6 text-base"
              >
                {slides[currentIndex].ctaText}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
