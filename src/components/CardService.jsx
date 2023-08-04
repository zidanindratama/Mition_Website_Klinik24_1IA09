import React from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardService = ({ title, description, icon, background }) => {
  return (
    <div className="flex flex-col bg-white card__services p-10 rounded-lg w-max m-auto my-[30px]">
      <div className={`p-6 ${background} rounded-full w-max`}>{icon}</div>
      <h1 className="text-[24px] text-primary-dark font-medium leading-[21px] py-6">
        {title}
      </h1>
      <p className="text-[14px] text-primary-text-gray max-w-[280px] pb-6">
        {description}
      </p>
      <Link to="dokter">
        <Button
          icon={<FaWhatsapp size={30} />}
          style={"flex items-center w-full justify-center blue-button"}
          text={"Reservasi"}
        />
      </Link>
    </div>
  );
};

export default CardService;
