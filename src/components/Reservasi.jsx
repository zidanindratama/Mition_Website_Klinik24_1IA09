import React from "react";
import Button from "./Button";
import { VscCalendar } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Reservasi = () => {
  return (
    <>
      <div className="w-full bg-primary-gray-bg py-24">
        <div className="xl:max-w-[1280px] m-auto max-w-[600px] px-4 md:px-0">
          <div className="text-center p-16 reservasi__box">
            <h1 className="heading__small text-white md:text-[32px] text-[25px]">
              Reservasi Pelayanan Kami Sekarang
            </h1>
            <p className="text__heading-small text-white md:max-w-2xl mx-auto py-10">
              Kami dengan bangga mengundang Anda untuk mereservasi layanan
              kesehatan terbaik yang telah dirancang dengan penuh perhatian dan
              cinta untuk kebahagiaan dan kesejahteraan Anda. Dalam perjalanan
              kesehatan yang penuh tantangan, kehadiran Anda adalah prioritas
              utama bagi kami.
            </p>
            <div className="md:flex md:flex-row flex-col justify-center gap-10">
              <Link to="dokter">
                <Button
                  icon={<VscCalendar size={30} />}
                  style={
                    "flex items-center w-full md:w-max justify-center outline-button text-white md:mb-0 mb-10"
                  }
                  text={"Cek Jadwal Dokter"}
                />
              </Link>
              <Link to="pelayanan">
                <Button
                  icon={<FaWhatsapp size={30} />}
                  style={
                    "flex items-center w-full md:w-max justify-center white-button text-primary-blue"
                  }
                  text={"Reservasi"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservasi;
