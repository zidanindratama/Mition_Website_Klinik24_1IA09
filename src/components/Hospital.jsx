import React from "react";
import {
  hospital1,
  hospital2,
  hospital3,
  hospital4,
  hospital5,
} from "../assets";

const Hospital = () => {
  return (
    <>
      <div className="w-full bg-secondary-gray-bg py-24">
        <div className="xl:max-w-6xl m-auto max-w-[600px] px-4 md:px-0">
          <h1 className="heading__small text-center mb-[30px]">
            Partner & Friend
          </h1>
          <div className="flex flex-row flex-wrap items-center gap-32 justify-center">
            <img src={hospital1} alt="" />
            <img src={hospital2} alt="" />
            <img src={hospital3} alt="" />
            <img src={hospital4} alt="" />
            <img src={hospital5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hospital;
