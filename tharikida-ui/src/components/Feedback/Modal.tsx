"use client";

import { useTheme } from "../../theme/ThemeProvider";

/**
 * `Modal` is a popup dialog component for displaying content in an overlay, supporting theming and custom styles.
 *
 * @param {object} props - The properties to customize the `Modal` component.
 * @param {boolean} props.open - Whether the modal is open (visible).
 * @param {() => void} props.onClose - Function to call when closing the modal.
 * @param {string} [props.title] - Optional title for the modal.
 * @param {React.ReactNode} [props.children] - Content to display inside the modal.
 * @param {React.CSSProperties} [props.styles] - Custom styles for the modal container.
 * @param {string} [props.className] - Additional className for the modal container.
 * @param {boolean} [props.showCloseButton] - Whether to show the close (×) button. Defaults to true.
 * @param {number} [props.cornerRadius] - Border radius for the modal. Overrides theme.cornerRadius if provided.
 *
 * @returns {JSX.Element | null} A styled modal dialog, or null if not open.
 */
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
  showCloseButton?: boolean;
  /** Border radius for the modal. Overrides theme.cornerRadius if provided. */
  cornerRadius?: number;
}

const Modal = ({
  open,
  onClose,
  title,
  children,
  styles = {},
  className = "",
  showCloseButton = true,
  cornerRadius,
}: ModalProps) => {
  const theme = useTheme();
  if (!open) return null;
  const radius = cornerRadius !== undefined ? cornerRadius : theme.cornerRadius;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        className={className}
        style={{
          background: theme.backgroundColor,
          border: `2px solid ${theme.borderColor}`,
          borderRadius: radius,
          boxShadow: `2px 2px 0px ${theme.shadowColor}`,
          minWidth: 320,
          maxWidth: 480,
          padding: theme.spacingfactor * 5,
          fontFamily: theme.fontFamily,
          position: "relative",
          ...styles,
        }}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 24,
              right: 32,
              background: "transparent",
              border: "none",
              fontSize: 24,
              cursor: "pointer",
              color: theme.textColor,
            }}
            aria-label="Close"
          >
            ×
          </button>
        )}
        {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
