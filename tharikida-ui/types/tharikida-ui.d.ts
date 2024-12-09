declare module "tharikida-ui" {
    import React from "react";
  
    // Button Props Type Definition
    export interface ButtonProps {
      children?: React.ReactNode;
      type?: "primary" | "secondary";
      styles?: React.CSSProperties;
      onClick?: () => void;
      className?: string;
    }
  
    // ArrowButton Props Type Definition
    export interface ArrowButtonProps {
      type?: "box" | "rounded" | "hybrid";
      initialDirection?:
        | "topleft"
        | "topright"
        | "bottomleft"
        | "bottomright"
        | "left"
        | "right"
        | "top"
        | "bottom";
      finalDirection?:
        | "topleft"
        | "topright"
        | "bottomleft"
        | "bottomright"
        | "left"
        | "right"
        | "top"
        | "bottom";
      backgroundColor?: string;
      arrowFillColor?: string;
      arrowStrokeColor?: string;
      borderColor?: string;
      shadowColor?: string;
      size?: number;
      borderRadiusPercentage?: number;
      onClick?: () => void;
    }
  
    // MusicCard Props Type Definition
    export interface MusicCardProps {
      musicName?: string;
      artist?: string;
      onPlay?: () => void;
      musicUrl?: string;
      images: string[];
      currentPosition?: number;
    }
  
    // AnimatedBox Props Type Definition
    export interface AnimatedBoxProps {
      height?: number;
      width?: number;
      frequency?: number;
      maxDivs?: number;
      animationSpeed?: number;
      starSize?: number;
      color?: string;
    }
  
    // ThemeProvider Props Type Definition
    export interface ThemeProviderProps {
      children: React.ReactNode;
      primaryColor?: string;
      secondaryColor?: string;
      tertiaryColor?: string;
      textColor?: string;
      backgroundColor?: string;
      fontSize?: number;
      fontFamily?: string;
      spacingfactor?: number;
    }
  
    // Theme Type Definition (used in ThemeProvider)
    export interface Theme {
      primaryColor: string;
      secondaryColor: string;
      tertiaryColor: string;
      textColor: string;
      backgroundColor: string;
      fontSize: number;
      fontFamily: string;
      spacingfactor: number;
    }
  
    // Exporting components as React components with the above props
    export const Button: React.ComponentType<ButtonProps>;
    export const ArrowButton: React.ComponentType<ArrowButtonProps>;
    export const MusicCard: React.ComponentType<MusicCardProps>;
    export const AnimatedBox: React.ComponentType<AnimatedBoxProps>;
    export const ThemeProvider: React.ComponentType<ThemeProviderProps>;
  
    // Exporting the useTheme hook
    export const useTheme: () => Theme;
  }
  