import React from "react";
import { Link } from "react-router-dom";
import { CiStethoscope } from "react-icons/ci";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BiLogoGithub } from "react-icons/bi";
import { Button } from "../components";
import { hospital6 } from "../assets";

const Login = () => {
  return (
    <div className="w-full bg-primary-gray-bg py-28">
      <div className="xl:max-w-6xl max-w-[600px] px-4 md:px-0 m-auto grid md:grid-cols-2 grid-cols-1 items-center gap-12">
        <div className="col-span-1 md:col-span-2 mt-10 md:block hidden">
          <div className="flex flex-col">
            <h1 className="font-semibold text-[40px]">Login Untuk</h1>
            <h1 className="font-semibold text-[40px]">Mereservasi Ke Dokter</h1>
            <p className="text-[18px] mt-3">
              Belum mempunyai akun?{" "}
              <Link to="/register" className="text-primary-blue">
                Register di sini!
              </Link>
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex flex-col">
            <img src={hospital6} alt="" className="rounded-lg" />
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="flex flex-col mb-10 md:hidden">
            <h1 className="font-semibold text-[40px]">Login Untuk</h1>
            <h1 className="font-semibold text-[40px]">Mereservasi Ke Dokter</h1>
            <p className="text-[18px] mt-3">
              Belum mempunyai akun?{" "}
              <Link to="/register" className="text-primary-blue">
                Register di sini!
              </Link>
            </p>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="mb-2 text-primary-text-gray font-light md:block hidden">
                Email
              </p>
              <input
                type="email"
                placeholder="Email"
                className="outline-none py-3 w-full px-9 card_shadow rounded-lg bg-[#EAF0F7] mb-8"
              />
            </div>
            <div>
              <p className="mb-2 text-primary-text-gray font-light md:block hidden">
                Password
              </p>
              <input
                type="password"
                placeholder="*********"
                className="outline-none py-3 w-full px-9 card_shadow rounded-lg bg-[#EAF0F7]"
              />
            </div>
            <Link
              to="/"
              className="text-primary-text-gray font-light text-[15px] my-8"
            >
              Lupa Password?
            </Link>
            <Button
              icon={<CiStethoscope size={30} />}
              style={"flex items-center w-full justify-center blue-button"}
              text={"Login"}
            />
          </div>
          <div className="flex flex-col mt-10">
            <p className="text-primary-text-gray font-light text-center">
              Atau login dengan
            </p>
            <div className="flex flex-row flex-wrap flex-cols-3 items-center justify-evenly mt-8">
              <div className="p-6 bg-[#F6F6F6] rounded-md border border-[#DDDFDD]">
                <AiOutlineGooglePlus size={30} />
              </div>
              <div className="p-6 bg-[#F6F6F6] rounded-md border border-[#DDDFDD]">
                <CiTwitter size={30} />
              </div>
              <div className="p-6 bg-[#F6F6F6] rounded-md border border-[#DDDFDD]">
                <BiLogoGithub size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
