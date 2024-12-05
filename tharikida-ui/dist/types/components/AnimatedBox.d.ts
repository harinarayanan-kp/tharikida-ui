import React from "react";
interface RandomDivsProps {
    height?: number;
    width?: number;
    frequency?: number;
    maxDivs?: number;
    animationSpeed?: number;
    starSize?: number;
    color?: string;
}
declare const RandomDivs: React.FC<RandomDivsProps>;
export default RandomDivs;
