import React from "react";
import { dokter1 } from "../assets";
import { Link } from "react-router-dom";
import { RatingStar } from "../components";

const CardDokter = (doctor) => {
  return (
    <div className="bg-white card_shadow overflow-hidden rounded-lg">
      <Link to={`/dokter/${doctor.id}`}>
        <img
          src={doctor.photo}
          alt="blog image"
          className="h-40 w-full object-cover"
        />
      </Link>
      <div className="flex flex-col p-5">
        <h1 className="font-bold text-[20px] mb-2">{doctor.nama}</h1>
        <p className="text-primary-green mb-2">${doctor.harga}</p>
        <div className="flex flex-col md:flex-row justify-between mb-3">
          <p className="font-light text-primary-text-gray md:mb-o mb-3">Umum</p>
          <RatingStar rating={doctor.rating} />
        </div>
        <Link
          to={`/dokter/${doctor.id}`}
          className="text-white w-full text-center p-2 bg-primary-blue rounded-lg mb-3 mt-2 md:mt-0"
          style={{
            background: "linear-gradient(141deg, #3a8ef6 0%, #6f3afa 100%)",
            boxShadow: "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
          }}
        >
          Konsultasi
        </Link>
      </div>
    </div>
  );
};

export default CardDokter;
