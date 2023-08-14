import React from "react";
import { hospital10, hospital11, hospital12, hospital9 } from "../assets";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full bg-primary-gray-bg py-36">
      <div className="xl:max-w-6xl m-auto max-w-[600px] px-4 md:px-0">
        <div className="flex-flex-row" data-aos="fade-down">
          <h1 className="heading__big text-[40px]">Tentang Klinik 24</h1>
          <p className="text-primary-dark font-semibold mt-2 mb-10">
            Kami bertujuan untuk memberikan pengalaman pengguna yang
            menyenangkan dan bermanfaat
          </p>
        </div>
        <div
          className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center"
          data-aos="fade-up"
        >
          <div
            className="grid grid-cols-2 overflow-hidden gap-2"
            data-aos="fade-up"
          >
            <img
              src={hospital9}
              alt=""
              className="w-full object-cover rounded-md"
            />
            <img
              src={hospital10}
              alt=""
              className="w-full object-cover rounded-md"
            />
            <img
              src={hospital11}
              alt=""
              className="w-full object-cover rounded-md"
            />
            <img
              src={hospital12}
              alt=""
              className="w-full object-cover rounded-md"
            />
          </div>
          <div data-aos="fade-up">
            <p className="text-primary-text-gray text-justify font-normal">
              Kami dengan bangga mempersembahkan proyek web kami yang inovatif
              dan menarik, bertemakan e-health, sebagai hasil kerja keras kami
              dalam lomba di bidang web design. Kami tim yang terdiri dari
              individu-individu kreatif dan bersemangat yang bertujuan untuk
              menyediakan akses mudah dan cepat ke layanan kesehatan berkualitas
              bagi masyarakat.
            </p>
            <p className="text-primary-text-gray text-justify font-normal my-10">
              Visi kami adalah menciptakan sebuah platform digital yang
              menghadirkan solusi kesehatan yang terjangkau dan terpercaya,
              sehingga setiap individu dapat dengan mudah mengakses informasi,
              konsultasi medis, dan layanan kesehatan dari kenyamanan rumah
              mereka sendiri.
            </p>
            <p className="text-primary-text-gray text-justify font-normal my-10">
              Misi kami adalah menghadirkan pengalaman online yang menarik dan
              mudah digunakan bagi pengguna
            </p>
            <Link
              to="https://github.com/zidanindratama/Mition_Website_Klinik24_1IA09"
              className="underline text-primary-blue font-normal"
            >
              Tim E-Health Web Project.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
