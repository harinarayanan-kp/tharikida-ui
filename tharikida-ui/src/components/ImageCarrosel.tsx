import React, { useEffect, useState } from "react";

// Define the props type
interface ImageCarouselProps {
  images: string[]; // A list of image URLs
  height?: string;
  width?: string;
  containerStyle?: React.CSSProperties;
  delay?: number;
  animationType?: "slide-in-left" | "slide-in-right" | "slide-up" | "slide-down"; // Animation types
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  height,
  width,
  containerStyle,
  delay = 2000,
  animationType = "slide-in-left", // Default animation type
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay); // Change every `delay` milliseconds

    return () => clearInterval(interval);
  }, [images.length, delay]);

  const getAnimationClass = (animationType: string) => {
    switch (animationType) {
      case "slide-in-left":
        return "slide-in-left";
      case "slide-in-right":
        return "slide-in-right";
      case "slide-up":
        return "slide-up";
      case "slide-down":
        return "slide-down";
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        width: width ? `${width}` : "100%",
        height: height ? `${height}` : "100vh",
        overflow: "hidden",
        position: "relative",
        ...containerStyle,
      }}
    >
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`carousel-image-${currentIndex}`}
        className={getAnimationClass(animationType)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ImageCarousel;
