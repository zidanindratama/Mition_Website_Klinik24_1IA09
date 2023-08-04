import React from "react";
import {
  Fasilitas,
  Hero,
  Hospital,
  Pelayanan,
  Reservasi,
  Services,
  Testimonials,
} from "../components";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Hospital />
      <Services />
      <Pelayanan />
      <Fasilitas />
      <Reservasi />
      <Testimonials />
    </>
  );
};

export default LandingPage;
