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
 * @param {string} [props.backgroundColor] - Modal background color. Overrides theme.backgroundColor if provided.
 * @param {string} [props.borderColor] - Modal border color. Overrides theme.borderColor if provided.
 * @param {string} [props.shadowColor] - Modal shadow color. Overrides theme.shadowColor if provided.
 * @param {string} [props.boxShadow] - Modal box-shadow. Overrides theme values if provided.
 * @param {string|number} [props.padding] - Modal padding. Overrides theme.padding if provided.
 * @param {string|number} [props.margin] - Modal margin. Overrides theme.margin if provided.
 * @param {string} [props.fontFamily] - Modal font family. Overrides theme.fontFamily if provided.
 * @param {string} [props.textColor] - Modal text color. Overrides theme.textColor if provided.
 * @param {string} [props.transitionDuration] - Modal transition duration. Overrides theme.transitionDuration if provided.
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
  /** Modal background color. Overrides theme.backgroundColor if provided. */
  backgroundColor?: string;
  /** Modal border color. Overrides theme.borderColor if provided. */
  borderColor?: string;
  /** Modal shadow color. Overrides theme.shadowColor if provided. */
  shadowColor?: string;
  /** Modal box-shadow. Overrides theme values if provided. */
  boxShadow?: string;
  /** Modal padding. Overrides theme.padding if provided. */
  padding?: string | number;
  /** Modal margin. Overrides theme.margin if provided. */
  margin?: string | number;
  /** Modal font family. Overrides theme.fontFamily if provided. */
  fontFamily?: string;
  /** Modal text color. Overrides theme.textColor if provided. */
  textColor?: string;
  /** Modal transition duration. Overrides theme.transitionDuration if provided. */
  transitionDuration?: string;
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
  backgroundColor,
  borderColor,
  shadowColor,
  boxShadow,
  padding,
  margin,
  fontFamily,
  textColor,
  transitionDuration,
}: ModalProps) => {
  const theme = useTheme();
  if (!open) return null;
  const radius = cornerRadius !== undefined ? cornerRadius : theme.cornerRadius;
  const bg = backgroundColor || theme.backgroundColor;
  const borderCol = borderColor || theme.borderColor;
  const shadowCol = shadowColor || theme.shadowColor;
  const boxSh = boxShadow || `2px 2px 0px ${shadowCol}`;
  const pad =
    padding !== undefined ? padding : theme.padding || theme.spacingfactor * 5;
  const marg = margin !== undefined ? margin : theme.margin;
  const fontFam = fontFamily || theme.fontFamily;
  const txtColor = textColor || theme.textColor;
  const transition = transitionDuration || theme.transitionDuration;

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
        transition: transition,
      }}
    >
      <div
        className={className}
        style={{
          background: bg,
          border: `2px solid ${borderCol}`,
          borderRadius: radius,
          boxShadow: boxSh,
          minWidth: 320,
          maxWidth: 480,
          padding: pad,
          margin: marg,
          fontFamily: fontFam,
          color: txtColor,
          position: "relative",
          transition: transition,
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
              color: txtColor,
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
