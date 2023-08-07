import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import {
  LandingPage,
  Login,
  Register,
  Error,
  AboutUs,
  Layanan,
  Dokter,
  DokterDetail,
  Cart,
  Success,
} from "./pages";
import { Footer, Navbar } from "./components";
import ScrollToTop from "./helpers/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="tentang-kami" element={<AboutUs />} />
          <Route path="pelayanan" element={<Layanan />} />
          <Route path="dokter" element={<Dokter />} />
          <Route path="dokter/:id" element={<DokterDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
