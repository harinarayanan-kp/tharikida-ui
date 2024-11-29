import React, { useEffect, useState } from "react";

// Define the props type
interface ImageCarouselProps {
  images: string[]; // A list of image URLs
  height?: string;
  width?: string;
  containerStyle?: React.CSSProperties;
  delay?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  height,
  width,
  containerStyle,
  delay = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay); // Change every `delay` milliseconds

    return () => clearInterval(interval);
  }, [images.length, delay]);

  return (
    <div
      style={{
        width: width ? `${width}` : "100%",
        height: height ? `${height}` : "100vh",
        objectFit: "cover",
        overflow: "hidden",
        position: "relative",
        ...containerStyle,
      }}
    >
      {/* Render the image using the URL */}
      <img
        src={images[currentIndex]}
        alt={`carousel-image-${currentIndex}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default ImageCarousel;
