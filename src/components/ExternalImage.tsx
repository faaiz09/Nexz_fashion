import React, { useState } from 'react';

interface ExternalImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ExternalImage: React.FC<ExternalImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = '/images/placeholder.jpg'
}) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  };

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default ExternalImage; 