import React from "react";
import { hospital8 } from "../assets";
import { Button } from "../components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full bg-primary-gray-bg py-48">
      <div className="xl:max-w-6xl max-w-[600px] px-4 md:px-0 m-auto grid md:grid-cols-2 grid-cols-1 items-center gap-12">
        <div className="" data-aos="fade-down">
          <h1 className="heading__big md:text-[60px] text-[40px]">ERROR 404</h1>
          <h1 className="text-[30px] font-medium mt-8 mb-11">
            URL yang anda request tidak ditemukan di dalam server kami
          </h1>
          <Link to="/">
            <Button
              icon={<AiOutlineArrowLeft size={30} />}
              style={
                "flex items-center w-full md:w-max justify-center blue-button"
              }
              text={"Kembali"}
            />
          </Link>
        </div>
        <div className="mx-auto md:order-last order-first" data-aos="fade-down">
          <img src={hospital8} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Error;
