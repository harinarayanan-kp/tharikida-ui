import React from "react";
export interface RandomDivsProps {
    children?: React.ReactNode;
    height?: number;
    width?: number;
    frequency?: number;
    maxDivs?: number;
    animationSpeed?: number;
    starSize?: number;
    color?: string;
}
declare const RandomDivs: ({ height, width, frequency, maxDivs, animationSpeed, starSize, color, }: RandomDivsProps) => import("react/jsx-runtime").JSX.Element;
export default RandomDivs;
