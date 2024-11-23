// src/components/Button/Button.js
import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type }) => {
  return (
    <button className={`tharikida-btn tharikida-btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
