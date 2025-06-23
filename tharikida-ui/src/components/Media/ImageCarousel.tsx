"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

/**
 * `ImageCarousel` is a slideshow component for displaying images with animation, custom styles, and timing control.
 *
 * @param {object} props - The properties to customize the `ImageCarousel` component.
 * @param {string[]} props.images - A list of image URLs to display in the carousel.
 * @param {string} [props.height] - Height of the carousel container.
 * @param {string} [props.width] - Width of the carousel container.
 * @param {React.CSSProperties} [props.containerStyle] - Custom styles for the carousel container.
 * @param {number} [props.delay=2000] - Delay in milliseconds between image transitions.
 * @param {"slide-in-left" | "slide-in-right" | "slide-up" | "slide-down"} [props.animationtype="slide-up"] - Animation type for image transitions.
 *
 * @returns {JSX.Element} A styled image carousel component.
 */
export interface ImageCarouselProps {
  images: string[]; // A list of image URLs
  height?: string;
  width?: string;
  containerStyle?: React.CSSProperties;
  delay?: number;
  animationtype?:
    | "slide-in-left"
    | "slide-in-right"
    | "slide-up"
    | "slide-down"; // Animation types
}

// Define animations using keyframes
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOutUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slideOutDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

// Define styled components
const CarouselContainer = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  overflow: hidden;
  position: relative;
`;

const CarouselImage = styled.img<{ animationtype: string; entering: string }>`
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
          return css`
            ${slideInLeft} 0.5s ease-out forwards
          `;
        case "slide-in-right":
          return css`
            ${slideInRight} 0.5s ease-out forwards
          `;
        case "slide-up":
          return css`
            ${slideUp} 0.5s ease-out forwards
          `;
        case "slide-down":
          return css`
            ${slideDown} 0.5s ease-out forwards
          `;
        default:
          return "none";
      }
    } else {
      switch (props.animationtype) {
        case "slide-in-left":
          return css`
            ${slideOutRight} ease-out forwards
          `;
        case "slide-in-right":
          return css`
            ${slideOutLeft} ease-out forwards
          `;
        case "slide-up":
          return css`
            ${slideOutDown} ease-out forwards
          `;
        case "slide-down":
          return css`
            ${slideOutUp} ease-out forwards
          `;
        default:
          return "none";
      }
    }
  }};
`;

const ImageCarousel = ({
  images,
  height,
  width,
  containerStyle,
  delay = 2000,
  animationtype = "slide-up", // Default animation type
}: ImageCarouselProps) => {
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

  return (
    <CarouselContainer style={containerStyle} width={width} height={height}>
      <CarouselImage
        src={images[currentIndex]}
        alt={`carousel-image-${currentIndex}`}
        animationtype={animationtype}
        entering={"false"}
      />
      <CarouselImage
        src={images[nextIndex]}
        alt={`carousel-image-${nextIndex}`}
        animationtype={animationtype}
        entering={entering.toString()}
      />
    </CarouselContainer>
  );
};

export default ImageCarousel;
