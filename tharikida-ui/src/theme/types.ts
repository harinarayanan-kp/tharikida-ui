// types.ts
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    text: string;
  };
  font: {
    family: string;
    size: string;
  };
  spacing: (factor: number) => string; // You can scale spacing with a factor
}
