import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    white: "#fff",
    white80: "#ffffffcc",
    white60: "#ffffff99",
    vibrantGreen: "#00c300",
    azure: "#18a0fb",
    black80: "rgba(0, 0, 0, 0.8)",
    invalid: "#ff6633",
  },
  fonts: {
    montserrat: "Montserrat",
    exo2: "Exo2",
  },
  fontSizes: {
    exSmall: "14px",
    small: "16px",
    medium: "18px",
    large: "24px",
    exLarge: "48px",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    small: "22px",
    normal: "30px",
    medium: "36px",
    large: "72px",
  },
  letterSpacings: {
    exTight: "-0.21px",
    tight: "-0.24px",
    medium: "-0.27px",
    wide: "-0.36px",
    exWide: "-0.72px",
  },
  textAligns: {
    left: "left",
    center: "center",
  },
};
