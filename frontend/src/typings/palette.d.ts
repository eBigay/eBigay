declare module "@mui/material/styles/" {
  interface Palette {
    button: {
      primary?: string;
    };
    border: {
      primary?: string;
    };
  }
  interface PaletteOptions {
    button: {
      primary?: string;
    };
    border?: {
      primary?: string;
    };
  }
}

export default function createPalette(palette: PaletteOptions): Palette;
