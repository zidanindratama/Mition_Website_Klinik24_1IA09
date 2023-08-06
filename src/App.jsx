import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  Login,
  Register,
  Error,
  AboutUs,
  Layanan,
  Dokter,
  DokterDetail,
} from "./pages";
import { Footer, Navbar } from "./components";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
  return (
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
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
