import React from "react";
import { testimonials } from "./../dev-data/resources";
import CardTestimonial from "./CardTestimonial";

const Testimonials = () => {
  return (
    <>
      <div className="w-full bg-primary-gray-bg py-24">
        <div className="xl:max-w-[1280px] m-auto max-w-[600px] px-4 md:px-0">
          <div className="text-center">
            <h1 className="heading__small">Testimonial Dari Beberapa Pasien</h1>
            <p className="text__heading-small max-w-2xl mx-auto mt-6">
              Melalui testimoni ini, para calon pasien dapat membaca dan
              memahami bagaimana pengalaman orang lain dengan perawatan yang
              diberikan
            </p>
          </div>
          {/* <div className="grid md:grid-cols-2 gap-8 place-content-center"> */}
          <div className="flex md:flex-cols-3 flex-wrap pt-11">
            {testimonials.map((testimonial) => {
              const { id, nama, penyakit, deskripsi, foto } = testimonial;
              return (
                <CardTestimonial
                  id={id}
                  nama={nama}
                  penyakit={penyakit}
                  deskripsi={deskripsi}
                  foto={foto}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
