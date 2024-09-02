import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      white80: string;
      white60: string;
      vibrantGreen: string;
      azure: string;
      black80: string;
      invalid: string;
    };
    fonts: {
      montserrat: string;
      exo2: string;
    };
    fontSizes: {
      exSmall: string;
      small: string;
      medium: string;
      large: string;
      exLarge: string;
    };
    fontWeights: {
      normal: number;
      bold: number;
    };
    lineHeights: {
      small: string;
      normal: string;
      medium: string;
      large: string;
    };
    letterSpacings: {
      exTight: string;
      tight: string;
      medium: string;
      wide: string;
      exWide: string;
    };
    textAligns: {
      left: string;
      center: string;
    };
  }
}
