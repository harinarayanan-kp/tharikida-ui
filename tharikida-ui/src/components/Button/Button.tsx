import React from 'react';
import './Button.css';

/**
 * Button component that allows for flexible and customizable buttons.
 * 
 * @component
 * @example
 * <Button type="primary" style={{ borderRadius: '30px' }}>Click Me</Button>
 * 
 * @param {Object} props - The props for the button component.
 * @param {React.ReactNode} props.children - The content of the button (text, icons, etc.).
 * @param {Function} [props.onClick] - Optional callback function to handle click events.
 * @param {'primary' | 'secondary'} [props.type='primary'] - The type of button, determines the color/style.
 * @param {React.CSSProperties} [props.style] - Inline styles to customize the button (e.g., borderRadius, backgroundColor).
 * 
 * @returns {JSX.Element} The Button component.
 */
interface ButtonProps {
  /** The content to be displayed inside the button (usually text or icon) */
  children: React.ReactNode;
  
  /** Optional function to handle click events */
  onClick?: () => void;
  
  /** 
   * Defines the style of the button. 
   * - 'primary': Blue button (default).
   * - 'secondary': Gray button.
   */
  type?: 'primary' | 'secondary';
  
  /** Optional inline styles to apply to the button */
  style?: React.CSSProperties;  
}

/**
 * A customizable button component that can accept different styles and actions.
 */
const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'primary', style }) => {
  return (
    <button
      className={`tharikida-btn tharikida-btn-${type}`}
      onClick={onClick}
      style={style}  // Apply the inline style here
    >
      {children}
    </button>
  );
};

export default Button;
