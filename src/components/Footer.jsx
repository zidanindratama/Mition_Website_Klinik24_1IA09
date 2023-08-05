import React from "react";
import { logoFooter } from "../assets";
import { FaWhatsapp } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BiLogoGithub } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-primary-dark pt-24 pb-12">
        <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0 grid md:grid-cols-4 grid-cols-2 items-center gap-20">
          <div className="flex flex-col col-span-2 md:col-span-1">
            <Link to="/">
              <img src={logoFooter} alt="" />
            </Link>
            <h1 className="text-white italic font-light py-8">
              Jl. Margonda Raya 100, Depok. Kota Depok, 16424, Jawa Barat
            </h1>
            <div className="flex flex-row gap-8">
              <FaWhatsapp size={30} style={{ color: "#fff" }} />
              <CiTwitter size={30} style={{ color: "#fff" }} />
              <BiLogoGithub size={30} style={{ color: "#fff" }} />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-semibold text-[20px]">
              Info Klinik24
            </h1>
            <ul className="mt-8">
              <li>
                <Link className="text-[16px] text-white font-light" to="/">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  className="text-[16px] text-white font-light"
                  to="/pelayanan"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  className="text-[16px] text-white font-light"
                  to="/tentang-kami"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  className="text-[16px] text-white font-light"
                  to="/dokter"
                >
                  Dokter
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-semibold text-[20px]">Cabang</h1>
            <ul className="mt-8">
              <li>
                <Link className="text-[16px] text-white font-light" to="/">
                  Tangerang
                </Link>
              </li>
              <li>
                <Link className="text-[16px] text-white font-light" to="/">
                  Depok
                </Link>
              </li>
              <li>
                <Link className="text-[16px] text-white font-light" to="/">
                  Bekasi
                </Link>
              </li>
              <li>
                <Link className="text-[16px] text-white font-light" to="/">
                  Jakarta
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <h1 className="text-white font-semibold text-[20px]">
              Kontak Kami
            </h1>
            <ul className="mt-8">
              <li>
                <p href="#" className="text-[16px] text-white font-light">
                  +62 1234-5678
                </p>
              </li>
              <li>
                <p href="#" className="text-[16px] text-white font-light">
                  info@klinik24.com
                </p>
              </li>
              <li>
                <p href="#" className="text-[16px] text-white font-light">
                  Telp: +5646544654
                </p>
              </li>
              <li>
                <p href="#" className="text-[16px] text-white font-light">
                  Credit
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-4">
            <hr className="border border-white" />
            <p className="text-white font-light text-center mt-8">
              Copyright © Klinik24 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
