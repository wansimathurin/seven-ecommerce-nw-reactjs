import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Search from "./pages/search";
import Cart from "./pages/cart";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import './App.css'
import ProductDetail from './pages/productDetail';

export default function App() {
  return (
    // initialize routing
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}
