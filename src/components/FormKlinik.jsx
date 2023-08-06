import React from "react";
import { CiStethoscope } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "./Button";

const FormKlinik = () => {
  return (
    <div className="w-full bg-primary-gray-bg py-36">
      <div className="md:max-w-5xl m-auto max-w-[600px] px-4 md:px-0">
        <div className="flex flex-col" data-aos="fade-down">
          <h1 className="heading__small text-center max-w-2xl mx-auto">
            Kami Senang Mendengarkan Kabar Darimu, Hubungi Kami Sekarang
          </h1>
        </div>
        <div className="flex flex-row mt-8 gap-8">
          <input
            type="text"
            placeholder="Nama"
            className="outline-none py-3 w-full px-9 card_shadow rounded-lg bg-[#EAF0F7]"
            data-aos="fade-up"
          />
          <input
            type="email"
            placeholder="Email"
            className="outline-none py-3 w-full px-9 card_shadow rounded-lg bg-[#EAF0F7]"
            data-aos="fade-up"
          />
        </div>
        <textarea
          cols="30"
          rows="10"
          placeholder="Pesan..."
          className="outline-none py-3 w-full px-9 card_shadow rounded-lg bg-[#EAF0F7] mt-12"
          data-aos="fade-up"
        ></textarea>
        <Button
          icon={<CiStethoscope size={30} />}
          style={
            "flex items-center w-full md:w-max justify-center blue-button mt-8"
          }
          text={"Submit"}
        />
      </div>
    </div>
  );
};

export default FormKlinik;
