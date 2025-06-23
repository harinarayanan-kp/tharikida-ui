"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Tooltip` is a hover/focus popup for displaying contextual information, supporting theming, position, and custom styles.
 *
 * @param {object} props - The properties to customize the `Tooltip` component.
 * @param {React.ReactNode} props.content - The content to display inside the tooltip.
 * @param {React.ReactNode} props.children - The element that triggers the tooltip on hover/focus.
 * @param {"top" | "bottom" | "left" | "right"} [props.position="top"] - Position of the tooltip relative to the trigger.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the tooltip popup.
 * @param {string} [props.className] - Additional className for the tooltip container.
 * @param {number} [props.transitionDuration=180] - Duration of the tooltip fade/slide animation in ms.
 *
 * @returns {JSX.Element} A styled tooltip component.
 */
export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  styles?: React.CSSProperties;
  className?: string;
  transitionDuration?: number;
}

const Tooltip = ({
  content,
  children,
  position = "top",
  styles = {},
  className = "",
  transitionDuration = 180,
}: TooltipProps) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      setTimeout(() => setShouldAnimate(true), 10);
    } else {
      setShouldAnimate(false);
      const timeout = setTimeout(() => setShow(false), transitionDuration);
      return () => clearTimeout(timeout);
    }
  }, [visible, transitionDuration]);

  const getPositionStyle = (): React.CSSProperties => {
    switch (position) {
      case "bottom":
        return { top: "100%", left: "50%", marginTop: 8 };
      case "left":
        return { right: "100%", top: "50%", marginRight: 8 };
      case "right":
        return { left: "100%", top: "50%", marginLeft: 8 };
      case "top":
      default:
        return { bottom: "100%", left: "50%", marginBottom: 8 };
    }
  };

  const getTransform = (): string => {
    switch (position) {
      case "top":
      case "bottom":
        return "translate(-50%, 0)";
      case "left":
      case "right":
        return "translate(0, -50%)";
      default:
        return "translate(-50%, 0)";
    }
  };

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      className={className}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
    >
      {children}
      {show && (
        <span
          style={{
            position: "absolute",
            zIndex: 999,
            background: theme.backgroundColor,
            color: theme.textColor,
            border: `1px solid ${theme.borderColor}`,
            borderRadius: theme.spacingfactor,
            padding: `${theme.spacingfactor}px ${theme.spacingfactor * 2}px`,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSize * 0.8,
            minWidth: 0,
            maxWidth: 220,
            boxShadow: `1px 1px 0px ${theme.shadowColor}`,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            opacity: shouldAnimate ? 1 : 0,
            transform: getTransform(),
            transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
            ...getPositionStyle(),
            ...styles,
          }}
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
