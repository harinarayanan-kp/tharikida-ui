import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../theme/ThemeProvider";
export default function ActiveTag(props) {
    const theme = useTheme();
    const { size, hideCircle, backGroundColor, color, fontFamily, fontSize } = props;
    return (_jsxs("div", { style: {
            backgroundColor: backGroundColor ? backGroundColor : "#CCFFCC",
            padding: size ? size : theme.spacingfactor,
            borderRadius: size ? size * 10 : theme.spacingfactor * 10,
            border: "2px solid black",
            width: "fit-content",
            fontFamily: fontFamily ? fontFamily : theme.fontFamily,
            fontSize: fontSize ? fontSize : theme.fontSize,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            paddingRight: "10px",
        }, children: [hideCircle ? (_jsx(_Fragment, {})) : (_jsx("div", { style: {
                    height: size ? size * 5 : theme.spacingfactor * 5,
                    width: size ? size : theme.spacingfactor * 5,
                    backgroundColor: "#62FF00",
                    borderRadius: size ? size * 10 : theme.spacingfactor * 10,
                    border: "2px solid black",
                } })), "Active"] }));
}
//# sourceMappingURL=Active.js.map