import React, { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

// PopupAlert component
const PopupAlert: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control popup visibility
  const theme = useTheme(); // Call hook inside the component

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Arial', sans-serif",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    popup: {
      position: "fixed" as "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    popupContent: {
      fontFamily: "Montserrat, sans-serif",
      backgroundColor: "#fff",
      padding: "20px",
      border: "2px solid black",
      textAlign: "center" as "center",
      width: "300px",
    },
    closeButton: {
      marginTop: "10px",
      padding: "10px 20px",
      backgroundColor: theme.primaryColor, // Use theme here
      color: "#fff",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <button onClick={togglePopup} style={styles.button}>
        Show Alert
      </button>

      {isOpen && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <h2>Alert</h2>
            <p>This is a simple popup alert box.</p>
            <button onClick={togglePopup} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupAlert;
