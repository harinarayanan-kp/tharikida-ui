import React from "react";
export interface ImageCarouselProps {
    images: string[];
    height?: string;
    width?: string;
    containerStyle?: React.CSSProperties;
    delay?: number;
    animationtype?: "slide-in-left" | "slide-in-right" | "slide-up" | "slide-down";
}
declare const ImageCarousel: ({ images, height, width, containerStyle, delay, animationtype, }: ImageCarouselProps) => import("react/jsx-runtime").JSX.Element;
export default ImageCarousel;
