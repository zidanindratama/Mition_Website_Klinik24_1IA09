import React from "react";
import { hospital8 } from "../assets";
import { Button } from "../components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="w-full bg-primary-gray-bg py-24">
      <div className="xl:max-w-6xl max-w-[600px] px-4 md:px-0 m-auto grid md:grid-cols-2 grid-cols-1 items-center gap-12">
        <div className="" data-aos="fade-down">
          <h1 className="heading__big md:text-[60px] text-[40px]">
            Cart Kosong
          </h1>
          <h1 className="text-[30px] font-medium mt-8 mb-11">
            Reservasi dokter terbaik pilihan kami
          </h1>
          <Link to="/dokter">
            <Button
              icon={<AiOutlineArrowLeft size={30} />}
              style={
                "flex items-center w-full md:w-max justify-center blue-button"
              }
              text={"Reservasi"}
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

export default EmptyCart;
