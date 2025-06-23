"use client";

import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Alert` is a popup alert component with a customizable message, title, button text, theming, and custom styles.
 *
 * @param {object} props - The properties to customize the `Alert` component.
 * @param {string} [props.message] - The message to display in the alert popup.
 * @param {string} [props.title] - The title of the alert popup.
 * @param {string} [props.buttonText] - The text for the button that opens the alert.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the alert popup content.
 * @param {string} [props.className] - Additional className for the alert container.
 *
 * @returns {JSX.Element} A styled popup alert component.
 */
export interface AlertProps {
  message?: string;
  title?: string;
  buttonText?: string;
  styles?: React.CSSProperties;
  className?: string;
}

const Alert = ({
  message = "This is a simple popup alert box.",
  title = "Alert",
  buttonText = "Show Alert",
  styles = {},
  className = "",
}: AlertProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const alertButtonStyles: React.CSSProperties = {
    padding: `${theme.spacingfactor * 2}px ${theme.spacingfactor * 4}px`,
    fontSize: theme.fontSize,
    backgroundColor: theme.primaryColor,
    color: theme.textColor,
    border: `1px solid ${theme.borderColor}`,
    borderRadius: `${theme.spacingfactor}px`,
    cursor: "pointer",
    fontFamily: theme.fontFamily,
    fontWeight: 600,
    boxShadow: isActive ? "1px 1px 0px grey" : "2px 2px 0px black",
    transition: "background-color 0.3s, box-shadow 0.2s",
    margin: `${theme.spacingfactor * 2}px 0`,
  };

  const popupStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const popupContentStyles: React.CSSProperties = {
    fontFamily: theme.fontFamily,
    backgroundColor: theme.backgroundColor,
    padding: `${theme.spacingfactor * 5}px`,
    border: `2px solid ${theme.borderColor}`,
    textAlign: "center",
    width: 300,
    borderRadius: `${theme.spacingfactor * 2}px`,
    boxShadow: `2px 2px 0px ${theme.shadowColor}`,
    ...styles,
  };

  const closeButtonStyles: React.CSSProperties = {
    marginTop: `${theme.spacingfactor * 2}px`,
    padding: `${theme.spacingfactor * 2}px ${theme.spacingfactor * 4}px`,
    backgroundColor: theme.secondaryColor,
    color: theme.textColor,
    border: `1px solid ${theme.borderColor}`,
    borderRadius: `${theme.spacingfactor}px`,
    cursor: "pointer",
    fontFamily: theme.fontFamily,
    fontWeight: 600,
    boxShadow: "1px 1px 0px grey",
    transition: "background-color 0.3s, box-shadow 0.2s",
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={alertButtonStyles}
        onClick={handleOpen}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {buttonText}
      </button>
      {isOpen && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <h2>{title}</h2>
            <p>{message}</p>
            <button style={closeButtonStyles} onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
