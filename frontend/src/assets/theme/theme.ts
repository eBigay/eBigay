import { createTheme } from "@mui/material/styles";

const MuiTheme = createTheme({
  palette: {
    button: {
      primary: "linear-gradient(85.17deg, #fbb527 0%, #fcdd6a 100%)",
    },
    text: {
      primary: "rgba(0, 0, 0, 1)",
      secondary: "rgba(144, 135, 170, 1)",
    },
    background: {
      default: "#F5F5F5;",
      paper: "#ebecf0", //footer
    },
    border: {
      primary: "rgba(144, 135, 170, 0.5)",
    },
    divider: "rgba(215, 215, 215, 1)",
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  fontSizes: {
    fsLogo: "1.75rem",
    fsXs: "0.75rem",
    fsSm: "0.875rem",
    fsS: "1rem",
    fsM: "1.125rem",
    fsL: "1.25rem",
    fsXL: "1.5rem",
    fsXxl: "3.125rem",
  },
});

const theme = {
  colors: {
    clr1: "linear-gradient(85.17deg, #fbb527 0%, #fcdd6a 100%)", // primary-color
    clr2: "black", // black-color
    clr3: "rgba(144, 135, 170, 1)", // sub-color
    clr3light: "rgba(144, 135, 170, 0.5)", // sub-color
    clr4: "#ffffff", // white-color
    clr5: "linear-gradient(#00000000 0%, #000000 100%)", // main-nav home-user
    clr6: "#ebecf0", // list-color
    clr7: "#172b4d",
    clr8: "#b04632",
    footer: "rgba(253, 241, 225, 0.4)",
  },
  fontSizes: {
    fsLogo: "1.75rem",
    fsXs: "0.75rem",
    fsSm: "0.875rem",
    fsS: "1rem",
    fsM: "1.125rem",
    fsL: "1.25rem",
    fsXL: "1.5rem",
    fsXxl: "3.125rem",
  },
  borders: {
    borderRad1: "6px",
    borderRad2: "5px",
    borderRad3: "10px",
  },
  breakpoints: {
    mobileBreakpoint: "590px",
    tabletBreakpoint: "640px",
    laptopBreakpoint: "850px",
    wideBreakpoint: "1250px",
  },
};
export default theme;
