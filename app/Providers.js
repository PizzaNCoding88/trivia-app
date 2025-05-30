"use client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { QuizProvider } from "./context/QuizContext";
import theme from "./theme";

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuizProvider>{children}</QuizProvider>
    </ThemeProvider>
  );
}
