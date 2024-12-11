import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
const Star = ({ size, color }) => {
    const theme = useTheme(); // You can use useTheme here in a functional component
    return (_jsx("div", { children: _jsx("svg", { width: size, height: size, viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M17.5156 8.32592L18 4.24361L18.4844 8.32592C19.0561 13.1446 22.8554 16.9439 27.6741 17.5156L31.7564 18L27.6741 18.4844C22.8554 19.0561 19.0561 22.8554 18.4844 27.6741L18 31.7564L17.5156 27.6741C16.9439 22.8554 13.1446 19.0561 8.32592 18.4844L4.24361 18L8.32592 17.5156C13.1446 16.9439 16.9439 13.1446 17.5156 8.32592Z", fill: color || theme.primaryColor, stroke: "black" }) }) }));
};
export default Star;
//# sourceMappingURL=Star.js.map