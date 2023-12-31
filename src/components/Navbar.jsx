import React, { useState, useContext } from "react";
import { logoPNG, logoSVG, hamburgerMenu, close } from "../assets";
import { CiStethoscope } from "react-icons/ci";
import Button from "./Button";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  const cart = useContext(CartContext);

  // Get the total quantity of products in the cart
  const totalProductQuantity = cart.cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <>
      <div className="w-full h-[80px] fixed bg-primary-gray-bg/80 backdrop-blur-md z-50">
        <div className="xl:max-w-6xl max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
          <div>
            <Link to="/">
              <img src={logoSVG} alt="" />
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex gap-12">
              <Link className="text-primary-text-gray" to="/">
                Beranda
              </Link>
              <Link className="text-primary-text-gray" to="/tentang-kami">
                Tentang Kami
              </Link>
              <Link className="text-primary-text-gray" to="/pelayanan">
                Layanan
              </Link>
              <Link className="text-primary-text-gray" to="/dokter">
                Dokter
              </Link>
              {totalProductQuantity > 0 ? (
                <Link className="text-primary-text-gray" to="/cart">
                  Cart ({totalProductQuantity})
                </Link>
              ) : (
                <Link className="text-primary-text-gray" to="/cart">
                  Cart
                </Link>
              )}
            </ul>
          </div>
          <Link to="register">
            <Button
              icon={<CiStethoscope size={30} />}
              style={"hidden md:flex md:items-center blue-button"}
              text={"Register Pasien"}
            />
          </Link>
          <div className="md:hidden" onClick={handleClick}>
            <img src={toggle ? close : hamburgerMenu} />
          </div>
        </div>
        <div
          className={
            toggle
              ? "absolute z-10 p-4 bg-primary-gray-bg backdrop-blur-md w-full px-8 md:hidden"
              : "hidden"
          }
        >
          <ul>
            <li className="p-4">
              <Link className="text-primary-text-gray" to="/">
                Beranda
              </Link>
            </li>
            <li className="p-4">
              <Link className="text-primary-text-gray" to="/tentang-kami">
                Tentang Kami
              </Link>
            </li>
            <li className="p-4">
              <Link className="text-primary-text-gray" to="/pelayanan">
                Layanan
              </Link>
            </li>
            <li className="p-4">
              <Link className="text-primary-text-gray" to="/dokter">
                Dokter
              </Link>
            </li>
            <li className="p-4">
              {totalProductQuantity > 0 ? (
                <Link className="text-primary-text-gray" to="/cart">
                  Cart ({totalProductQuantity})
                </Link>
              ) : (
                <Link className="text-primary-text-gray" to="/cart">
                  Cart
                </Link>
              )}
            </li>

            <div className="flex flex-col my-4 gap-4">
              <Link to="register">
                <Button
                  icon={<CiStethoscope size={30} />}
                  style={"flex justify-center items-center blue-button w-full"}
                  text={"Register Pasien"}
                />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
