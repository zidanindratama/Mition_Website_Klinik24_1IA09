import React from "react";
import { hospital14 } from "../assets";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CiStethoscope } from "react-icons/ci";

const CTA = () => {
  return (
    <div className="w-full bg-secondary-gray-bg py-24">
      <div className="xl:max-w-6xl m-auto max-w-[600px] px-4 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center gap-16">
        <div className="flex justify-end" data-aos="fade-up">
          <img src={hospital14} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col" data-aos="fade-up">
          <h1 className="heading__small">
            Gabunglah dengan Platform Klinik Premium di Indonesia Hari Ini
          </h1>
          <p className="text__heading-small text-justify mt-[20px] mb-[30px]">
            Mulailah konsultasi dengan mendaftar secara gratis.
          </p>
          <Link to="/dokter">
            <Button
              icon={<CiStethoscope size={30} />}
              style={
                "flex items-center w-full md:w-max justify-center blue-button"
              }
              text={"Reservasi"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
