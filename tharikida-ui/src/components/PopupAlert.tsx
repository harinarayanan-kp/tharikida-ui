import React, { useState } from "react";

// PopupAlert component
const PopupAlert: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to control popup visibility

  const togglePopup = () => {
    setIsOpen(!isOpen);
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

// Styles for the PopupAlert component
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
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center" as "center",
    width: "300px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  closeButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#FF5733",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default PopupAlert;
