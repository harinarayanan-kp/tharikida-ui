"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
// Define animations using keyframes
const slideInLeft = keyframes `
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOutLeft = keyframes `
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;
const slideInRight = keyframes `
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOutRight = keyframes `
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const slideUp = keyframes `
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
const slideDown = keyframes `
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;
const slideOutUp = keyframes `
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;
const slideOutDown = keyframes `
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;
// Define styled components
const CarouselContainer = styled.div `
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  overflow: hidden;
  position: relative;
`;
const CarouselImage = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${(props) => {
    if (props.entering === "true") {
        switch (props.animationtype) {
            case "slide-in-left":
                return css `${slideInLeft} 0.5s ease-out forwards`;
            case "slide-in-right":
                return css `${slideInRight} 0.5s ease-out forwards`;
            case "slide-up":
                return css `${slideUp} 0.5s ease-out forwards`;
            case "slide-down":
                return css `${slideDown} 0.5s ease-out forwards`;
            default:
                return "none";
        }
    }
    else {
        switch (props.animationtype) {
            case "slide-in-left":
                return css `${slideOutRight} ease-out forwards`;
            case "slide-in-right":
                return css `${slideOutLeft} ease-out forwards`;
            case "slide-up":
                return css `${slideOutDown} ease-out forwards`;
            case "slide-down":
                return css `${slideOutUp} ease-out forwards`;
            default:
                return "none";
        }
    }
}};
`;
const ImageCarousel = ({ images, height, width, containerStyle, delay = 2000, animationtype = "slide-up", // Default animation type
 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [entering, setEntering] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setEntering(false);
            setTimeout(() => {
                setCurrentIndex(nextIndex);
                setNextIndex((nextIndex + 1) % images.length);
                setEntering(true);
            }, 500); // Match this duration with the animation duration
        }, delay); // Change every `delay` milliseconds
        return () => clearInterval(interval);
    }, [images.length, delay, nextIndex]);
    return (_jsxs(CarouselContainer, { style: containerStyle, width: width, height: height, children: [_jsx(CarouselImage, { src: images[currentIndex], alt: `carousel-image-${currentIndex}`, animationtype: animationtype, entering: "false" }), _jsx(CarouselImage, { src: images[nextIndex], alt: `carousel-image-${nextIndex}`, animationtype: animationtype, entering: entering.toString() })] }));
};
export default ImageCarousel;
