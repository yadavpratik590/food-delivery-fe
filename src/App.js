import { CssBaseline, ThemeProvider } from "@mui/material";
import HomePage from "./customer/pages/HomePage/HomePage";
import { darkTheme } from "./theme/DarkTheme";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}
