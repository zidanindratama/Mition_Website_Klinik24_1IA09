import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../dev-data/resources";
import Error from "./Error";
import { Button, RatingStar } from "../components";
import { AiOutlineUserAdd } from "react-icons/ai";

const DokterDetail = () => {
  const { id } = useParams();

  const dokter = doctors.find((d) => d.id === parseInt(id));

  if (!dokter) {
    return <Error />;
  }

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="w-full bg-primary-gray-bg py-36">
      <div className="xl:max-w-6xl m-auto max-w-[600px] px-4 md:px-0 grid md:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col" data-aos="fade-right">
          <div>
            <img
              src={dokter.photos[currentPhotoIndex]}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 overflow-hidden mt-8">
            {dokter.photos.map((foto, indeks) => (
              <img
                key={indeks}
                src={foto}
                alt={`Foto ${indeks + 1}`}
                className={`border-primary-blue rounded-lg border-2 cursor-pointer ${
                  indeks === currentPhotoIndex ? "border-4" : ""
                }`}
                onClick={() => handleImageClick(indeks)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col" data-aos="fade-left">
          <p className="text-primary-green text-[40px] font-bold mb-5">
            $ {dokter.harga}{" "}
            <span className="text-primary-text-gray text-[20px]">/sesi</span>
          </p>
          <div className="flex flex-row items-center gap-4 mb-5">
            <h1 className="font-bold text-[20px]">{dokter.nama}</h1>
            <p className="text-primary-text-gray">({dokter.gender})</p>
          </div>
          <RatingStar rating={dokter.rating} />
          <p className="text-primary-blue font-semibold my-5">
            {dokter.jenisDokter}
          </p>
          <p className="text-primary-text-gray mb-2">
            <span className="font-semibold ">Email :</span> {dokter.email}
          </p>
          <p className="text-primary-text-gray mb-2">
            <span className="font-semibold ">Lulusan :</span>{" "}
            {dokter.universitas}
          </p>
          <p className="text-primary-text-gray mb-2">
            <span className="font-semibold ">Pengalaman :</span>{" "}
            {dokter.tahunPengalaman}
          </p>
          <div className="flex flex-col text-primary-text-gray mt-4 mb-6">
            <p className="font-semibold mb-1">Deskripsi : </p>
            <p>{dokter.deskripsi}</p>
          </div>
          <Button
            icon={<AiOutlineUserAdd size={30} />}
            style={"flex justify-center items-center blue-button w-max"}
            text={"Reservasi Dokter"}
          />
        </div>
      </div>
    </div>
  );
};

export default DokterDetail;
