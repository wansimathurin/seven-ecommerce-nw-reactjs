import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Search from "./pages/search";
import Cart from "./pages/cart";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import './App.css'
import ProductDetail from './pages/productDetail';

export default function App() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "dark"
  );

  useEffect(() => {
    // Update localStorage whenever themeMode state changes
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  // Function to toggle the theme
  const toggleMode = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    // initialize routing
    <Router>
      <div className={themeMode === "dark" ? "dark" : "light"}>
        <NavBar themeToggle={toggleMode} themeMode={themeMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
