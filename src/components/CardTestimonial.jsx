import React from "react";

const CardTestimonial = ({ id, nama, penyakit, deskripsi, foto }) => {
  return (
    <div
      className="flex flex-col bg-white card__testimonial p-10 rounded-lg w-max m-auto my-[30px]"
      key={id}
    >
      <h1 className="italic text-primary-dark max-w-md text-[20px] font-light">
        "{deskripsi}"
      </h1>
      <div className="flex flex-row flex-wrap items-center mt-10">
        <img src={foto} alt="" className="w-20 rounded-full" />
        <div className="flex flex-col ml-6">
          <h1 className="text-[20px] text-primary-blue font-medium">{nama}</h1>
          <p className="text__heading-small">{penyakit}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
