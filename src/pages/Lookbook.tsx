import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Instagram, Share2 } from 'lucide-react';

// Sample lookbook data
const lookbooks = [
  {
    id: 'winter-2024',
    title: 'Winter Collection 2024',
    description: 'Explore our premium winter collection featuring luxurious fabrics and bold silhouettes designed for the modern individual.',
    coverImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    featured: true
  },
  {
    id: 'summer-vibes',
    title: 'Summer Vibes',
    description: 'Light fabrics and vibrant colors define our summer collection, designed for the hottest days and coolest nights.',
    coverImage: 'https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1583001809873-a128495da465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    featured: false
  },
  {
    id: 'urban-minimalist',
    title: 'Urban Minimalist',
    description: 'Clean lines and monochromatic tones create the perfect urban wardrobe for the modern minimalist.',
    coverImage: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1580651214613-f4692d6d138f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1485218126466-34e6392ec754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    featured: false
  }
];

const LookbookGallery = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="mt-8">
      {/* Main Image */}
      <div className="relative rounded-lg overflow-hidden">
        <img 
          src={images[currentIndex]} 
          alt={`Lookbook image ${currentIndex + 1}`} 
          className="w-full h-[600px] object-cover"
        />
        
        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={goToPrevious}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            aria-label="Next image"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 ${currentIndex === index ? 'ring-2 ring-gothic-500' : ''}`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-20 w-20 object-cover rounded-md"
            />
          </button>
        ))}
      </div>
      
      {/* Social Share */}
      <div className="mt-6 flex space-x-4">
        <button className="flex items-center text-gothic-300 hover:text-white transition">
          <Share2 className="h-5 w-5 mr-2" />
          Share
        </button>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-gothic-300 hover:text-white transition"
        >
          <Instagram className="h-5 w-5 mr-2" />
          View on Instagram
        </a>
      </div>
    </div>
  );
};

const Lookbook = () => {
  const [selectedLookbook, setSelectedLookbook] = useState<string | null>(null);
  
  const currentLookbook = lookbooks.find(lookbook => lookbook.id === selectedLookbook);
  const featuredLookbook = lookbooks.find(lookbook => lookbook.featured);
  
  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cinzel text-4xl mb-8">Lookbooks</h1>
        
        {selectedLookbook ? (
          <div>
            <button 
              onClick={() => setSelectedLookbook(null)}
              className="flex items-center text-gothic-300 hover:text-white mb-6 transition"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to all lookbooks
            </button>
            
            <div>
              <h2 className="font-cinzel text-3xl mb-2">{currentLookbook?.title}</h2>
              <p className="text-gothic-300 mb-4">{currentLookbook?.description}</p>
              
              {currentLookbook && <LookbookGallery images={currentLookbook.images} />}
            </div>
          </div>
        ) : (
          <>
            {/* Featured Lookbook */}
            {featuredLookbook && (
              <div className="mb-16">
                <h2 className="font-cinzel text-2xl mb-6">Featured Collection</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gothic-900 p-6 rounded-lg">
                  <div>
                    <img 
                      src={featuredLookbook.coverImage} 
                      alt={featuredLookbook.title}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-cinzel text-3xl mb-4">{featuredLookbook.title}</h3>
                    <p className="text-gothic-300 mb-8">{featuredLookbook.description}</p>
                    <button
                      onClick={() => setSelectedLookbook(featuredLookbook.id)}
                      className="bg-white text-gothic-950 px-6 py-3 rounded hover:bg-gothic-300 transition w-fit"
                    >
                      View Lookbook
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* All Lookbooks */}
            <div>
              <h2 className="font-cinzel text-2xl mb-6">All Lookbooks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lookbooks.map(lookbook => (
                  <div key={lookbook.id} className="bg-gothic-900 rounded-lg overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={lookbook.coverImage} 
                        alt={lookbook.title}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gothic-950 to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-cinzel text-xl mb-2">{lookbook.title}</h3>
                      <p className="text-gothic-300 mb-4 line-clamp-2">{lookbook.description}</p>
                      <button
                        onClick={() => setSelectedLookbook(lookbook.id)}
                        className="border border-white px-4 py-2 rounded hover:bg-white hover:text-gothic-950 transition"
                      >
                        View Collection
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Lookbook; 