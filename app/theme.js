import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6233ca",
    },
    secondary: {
      main: "#001695",
    },
  },
  typography: {
    fontFamily: "'Ginto', var(--font-main), Arial, sans-serif",
  },
});

export default theme;
