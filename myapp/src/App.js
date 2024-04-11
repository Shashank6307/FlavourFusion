import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Cart2 from "./components/Cart2/Cart2";
import Pizza from "./components/AllMenu/Pizza";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart2 />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
