import React from "react";
import { heroDoctor } from "../assets";
import Button from "./Button";
import { CiStethoscope } from "react-icons/ci";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-primary-gray-bg py-24">
        <div className="xl:max-w-6xl m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0">
          <div
            className="my-auto"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <h1 className="heading__big md:text-[40px] xl:text-[50px] text-[30px] text-center md:text-left">
              Klinik 24 siap melayani keluhan masyarakat selama 24/7.
            </h1>
            <p className="text__heading text__heading-small text-justify pt-[10px] pb-[30px]">
              Kami berkomitmen untuk selalu menghadirkan inovasi dalam layanan
              kesehatan. Dengan teknologi terkini dan fasilitas modern, kami
              memastikan setiap langkah perawatan Anda di Klinik24 terjamin
              efisien, akurat, dan tepat sasaran.
            </p>
            <Link to="pelayanan">
              <Button
                icon={<CiStethoscope size={30} />}
                style={
                  "flex items-center w-full md:w-max justify-center blue-button"
                }
                text={"Lihat Layanan"}
              />
            </Link>
          </div>
          <div
            className="flex justify-end md:order-last order-first"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img src={heroDoctor} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
