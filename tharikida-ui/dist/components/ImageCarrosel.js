import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
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
    return (_jsx("div", { style: {
            width: width ? `${width}` : "100%",
            height: height ? `${height}` : "100vh",
            overflow: "hidden",
            position: "relative",
            ...containerStyle,
        }, children: _jsx("img", { src: images[currentIndex], alt: `carousel-image-${currentIndex}`, className: getAnimationClass(animationType), style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
            } }, currentIndex) }));
};
export default ImageCarousel;
