import React from "react";
import { fasilitas } from "../assets";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

const Fasilitas = () => {
  return (
    <>
      <div className="w-full bg-primary-gray-bg py-24">
        <div className="xl:max-w-6xl m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0 gap-8">
          <div className="md:mt-32 mt-11">
            <h1 className="heading__small">
              Menghadirkan Kemewahan yang Tak Tertanding, Fasilitas Mewah untuk
              Kenyamanan Anda!
            </h1>
            <p className="text__heading-small text-justify pt-[15px] pb-[30px]">
              Kami dengan bangga menyajikan pelayanan terbaik dari para ahli
              medis, para dedikasi yang berbakat dan berpengalaman dalam
              bidangnya. Setiap langkah perawatan kami didukung oleh komitmen
              tinggi untuk memberikan kualitas pelayanan tak tertandingi,
              kepedulian tanpa batas, dan keahlian yang terus diperbarui sesuai
              dengan perkembangan ilmu medis.
            </p>
            <Link to="pelayanan">
              <Button
                icon={<FaWhatsapp size={30} />}
                style={
                  "flex items-center w-full md:w-max justify-center blue-button"
                }
                text={"Reservasi"}
              />
            </Link>
          </div>
          <div className="mx-auto md:order-last order-first">
            <img src={fasilitas} alt="" className="w-[300px] md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fasilitas;
