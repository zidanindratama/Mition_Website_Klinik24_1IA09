import React from "react";
import { GiMedicines } from "react-icons/gi";
import { BsHeartPulse } from "react-icons/bs";
import { PiSyringe } from "react-icons/pi";
import CardService from "./CardService";

const Services = () => {
  return (
    <>
      <div className="w-full bg-primary-gray-bg py-24">
        <div className="xl:max-w-6xl m-auto max-w-[600px] px-4 md:px-0">
          <div className="grid md:grid-cols-2 mb-[30px]">
            <h1 className="heading__small pb-[30px] md:pb-0">Daftar Layanan</h1>
            <p className="text__heading-small text-justify">
              Kami bangga menyediakan beragam layanan kesehatan yang luar biasa
              untuk memenuhi segala kebutuhan Anda. Dengan tim medis
              berpengalaman yang penuh semangat, teknologi terkini, dan
              pendekatan berorientasi pada pasien, kami berkomitmen untuk
              memberikan standar perawatan dan kenyamanan tertinggi.
            </p>
          </div>
          <div className="flex md:flex-cols-3 flex-wrap">
            <CardService
              icon={<GiMedicines size={40} style={{ color: `#855FCE` }} />}
              title={"Apotek 24 Jam"}
              description={
                "Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis"
              }
              background={"bg-toska-purple"}
            />
            <CardService
              icon={<BsHeartPulse size={40} style={{ color: `#27AE60` }} />}
              title={"Medical Check Up"}
              description={
                "Ambil kendali atas kesejahteraan Anda dan raih hari esok yang lebih sehat dengan layanan Medical Check Up komprehensif kami."
              }
              background={"bg-toska-green"}
            />
            <CardService
              icon={<PiSyringe size={40} style={{ color: `#2F80ED` }} />}
              title={"Dokter Professional"}
              description={
                "Kami hadir dengan tim dokter professional untuk mengutamakan kesehatan Anda."
              }
              background={"bg-toska-blue"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
