import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    fontSizes: {
      fsLogo: string;
      fsXs: string;
      fsSm: string;
      fsS: string;
      fsM: string;
      fsL: string;
      fsXL: string;
      fsXxl: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    fontSizes: {
      fsLogo: string;
      fsXs: string;
      fsSm: string;
      fsS: string;
      fsM: string;
      fsL: string;
      fsXL: string;
      fsXxl: string;
    };
  }
}

export default function createTheme(
  options?: ThemeOptions,
  ...args: object[]
): Theme;
