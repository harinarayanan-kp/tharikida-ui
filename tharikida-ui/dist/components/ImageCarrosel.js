import React, { useEffect, useState } from "react";
const ImageCarousel = ({ images, height, width, containerStyle, delay = 2000, animationType = "slide-in-left", // Default animation type
 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, delay); // Change every `delay` milliseconds
        return () => clearInterval(interval);
    }, [images.length, delay]);
    const getAnimationClass = (animationType) => {
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
    return (React.createElement("div", { style: Object.assign({ width: width ? `${width}` : "100%", height: height ? `${height}` : "100vh", overflow: "hidden", position: "relative" }, containerStyle) },
        React.createElement("img", { key: currentIndex, src: images[currentIndex], alt: `carousel-image-${currentIndex}`, className: getAnimationClass(animationType), style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
            } })));
};
export default ImageCarousel;
