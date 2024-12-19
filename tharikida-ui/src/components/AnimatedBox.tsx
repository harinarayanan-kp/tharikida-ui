"use client";
import React, { useEffect, useState } from "react";
import Star from "./Shapes/Star";

export interface RandomDivsProps {
  children?: React.ReactNode;
  height?: number;
  width?: number;
  frequency?: number; // Frequency of new divs per second
  maxDivs?: number; // Maximum number of divs
  animationSpeed?: number; // Speed of the animation in seconds
  starSize?: number; // Size of the star and wrapper div (default: 40)
  color?: string;
}

const RandomDivs = ({
  height = 200,
  width = 200,
  frequency = 5, // Default frequency to 5 divs per second
  maxDivs = 5, // Default maximum number of divs
  animationSpeed = 2, // Default animation speed (1 second)
  starSize = 40, // Default size of the star and wrapper div
  color = "white",
}: RandomDivsProps) => {
  const [divs, setDivs] = useState<
    { id: number; x: number; y: number; delay: number; visible: boolean }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const newDiv = {
        id,
        x: Math.random() * (width - starSize), // Width minus the star size
        y: Math.random() * (height - starSize), // Height minus the star size
        delay: Math.random() * 1,
        visible: true,
      };

      setDivs((prev) => {
        if (prev.length >= maxDivs) {
          return prev.map((div, idx) =>
            idx === 0 ? { ...div, visible: false } : div
          );
        }
        return [...prev, newDiv];
      });
    }, 1000 / frequency); // Adjust interval based on frequency

    return () => clearInterval(interval);
  }, [width, height, frequency, maxDivs, starSize]);

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setDivs((prev) => prev.filter((div) => div.visible));
    }, 1500);

    return () => clearInterval(cleanupInterval);
  }, []);

  const handleAnimationEnd = (id: number) => {
    setDivs((prev) => prev.filter((div) => div.id !== id)); // Remove the div after animation
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {divs.map((div) => (
        <div
          key={div.id}
          style={{
            position: "absolute",
            top: `${div.y}px`,
            left: `${div.x}px`,
            width: `${starSize}px`, // Use starSize for the width
            height: `${starSize}px`, // Use starSize for the height
            animation: `scale-in-out ${animationSpeed}s forwards`, // Use 'forwards' to keep the final state
            animationDelay: `${div.delay}s`,
            transform: "scale(0)",
            opacity: 0,
          }}
          onAnimationEnd={() => handleAnimationEnd(div.id)} // Call handleAnimationEnd when the animation finishes
        >
          <Star size={starSize} color={color} />
        </div>
      ))}
      <style>
        {`
          @keyframes scale-in-out {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            10% {
              transform: scale(0.5);
              opacity: 0.5;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RandomDivs;
