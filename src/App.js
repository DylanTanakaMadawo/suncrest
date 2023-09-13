import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { UIProvider } from "./drawerContext";
import theme from "./theme";
import { NavbarDrawer } from "./components/Navbar/NavbarDrawer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { MainServices } from "./components/MainServices/MainServices";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UIProvider>
          <BrowserRouter>
            <Navbar />
            <NavbarDrawer />
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<MainServices />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UIProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
