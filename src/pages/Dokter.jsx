import React, { useState } from "react";
import { doctors } from "../dev-data/resources";
import { CardDokter } from "../components";
import { AiOutlineSearch } from "react-icons/ai";
import { dokter1 } from "../assets";
import { Link } from "react-router-dom";

const Dokter = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="w-full bg-primary-gray-bg py-36">
      <div className="xl:max-w-6xl m-auto max-w-[600px] px-4 md:px-0">
        <div className="flex flex-row items-center bg-[#EAF0F7] py-3 md:w-max w-full px-9 rounded-lg card_shadow">
          <input
            type="text"
            placeholder="Cari..."
            className="outline-none bg-[#EAF0F7]"
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="hidden md:flex">
            <AiOutlineSearch size={30} style={{ color: "#6D737A" }} />
          </span>
        </div>
        <div className="mt-16 grid md:grid-cols-4 grid-cols-2 gap-12">
          {doctors
            .filter((doctor) => {
              return search.toLowerCase() === ""
                ? doctor
                : doctor.nama.toLowerCase().includes(search);
            })
            .map((doctor) => {
              return <CardDokter key={doctor.id} {...doctor} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Dokter;
