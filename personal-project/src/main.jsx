import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4F7B5B", // Green
      light: "#4F7B5B", // Same green
      dark: "#E3995E", // Same green
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4F7B5B", // Light Orange
      light: "#E3995E", // Light Orange
      dark: "#DB5D38", // Dark Orange/Coral
      contrastText: "#000000",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#333333", // Dark Gray for main text
      secondary: "#4F7B5B", // Green for secondary text
      disabled: "#999999",
    },
    custom: {
      green: "#4F7B5B",
      lightOrange: "#E3995E",
      darkOrange: "#DB5D38",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#E3995E", // Orange for main heading
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#4F7B5B", // Green for secondary headings
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: "#4F7B5B",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
});

const darkTheme = createTheme({});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
