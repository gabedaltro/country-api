import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
  palette: {
    divider: "#ffffff",
    background: {
      default: "#111f30",
    },
    text: {
      primary: "#fffff",
      secondary: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      color: "#ffffff",
    },
  },
});

export { DarkTheme };
