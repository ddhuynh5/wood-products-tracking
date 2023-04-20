import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./components/registration/SignIn";
import SignUp from "./components/registration/SignUp";
import Dashboard from "./components/Dashboard";
import ContactUs from "./components/ContactUs";
import Reports from "./components/reports/Reports";
import Copyright from "./components/Copyright";
import QRCodeGen from "./components/QRCode";
import LandingPage from "./components/LandingPage";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/qrcode" element={<QRCodeGen />} />
        </Routes>
        <Copyright sx={{ pt: 4 }} />
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;