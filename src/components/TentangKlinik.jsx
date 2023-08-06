import React from "react";
import { CiStethoscope } from "react-icons/ci";
import { LiaUserNurseSolid } from "react-icons/lia";
import { GiSyringe, GiMedicalDrip } from "react-icons/gi";
import { hospital13 } from "../assets";

const TentangKlinik = () => {
  return (
    <div className="w-full bg-primary-gray-bg py-36">
      <div className="xl:max-w-[1280px] m-auto max-w-[600px] px-4 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center gap-8">
        <div className="flex flex-col">
          <h1 className="heading__big text-[40px] mt-10 md:mt-0">
            Layanan Klinik 24
          </h1>
          <p className="text__heading-small mt-2 mb-10">
            Kami bertujuan untuk memberikan pengalaman pengguna yang
            menyenangkan dan bermanfaat
          </p>
          <div className="grid md:grid-cols-2 justify-center">
            <div className="py-6 flex">
              <div className="p-4 bg-[#E9F8F3] rounded-xl">
                <CiStethoscope size={30} style={{ color: `#1A906B` }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">300+</h1>
                <p className="text-[#6D737A]">Dokter Umum</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFFAF5] rounded-xl">
                <LiaUserNurseSolid size={30} style={{ color: `#FFC27A` }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">500+</h1>
                <p className="text-[#6D737A]">Perawat</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFEEF0] rounded-xl">
                <GiSyringe size={30} style={{ color: `#ED4459` }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">150+</h1>
                <p className="text-[#6D737A]">Dokter Spesialis</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#F0F7FF] rounded-xl">
                <GiMedicalDrip size={30} style={{ color: `#0075FD` }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">1.000+</h1>
                <p className="text-[#6D737A]">Kamar</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end md:order-last order-first">
          <img src={hospital13} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default TentangKlinik;
