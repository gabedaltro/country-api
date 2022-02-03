import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#fbc02d",
      dark: "#f9a825",
      light: "#ffeb3b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00bcd4",
      dark: "#26c6da",
      light: "#4dd0e1",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#ffffff",
      default: "#f7f6f3",
    },
  },
});

export { LightTheme };
