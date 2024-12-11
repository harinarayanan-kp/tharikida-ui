import React from "react";
interface ImageCarouselProps {
    images: string[];
    height?: string;
    width?: string;
    containerStyle?: React.CSSProperties;
    delay?: number;
    animationType?: "slide-in-left" | "slide-in-right" | "slide-up" | "slide-down";
}
declare const ImageCarousel: React.FC<ImageCarouselProps>;
export default ImageCarousel;
