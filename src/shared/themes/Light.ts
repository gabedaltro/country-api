import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      dark: "#000000",
      light: "#000000",
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
  typography: {
    allVariants: {
      color: grey[900],
    },
  },
});

export { LightTheme };
