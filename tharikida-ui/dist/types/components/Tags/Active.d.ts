import * as React from "react";
export interface IAppProps {
    size?: number;
    hideCircle?: boolean;
    backGroundColor?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
}
export default function ActiveTag(props: IAppProps): React.JSX.Element;
