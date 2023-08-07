import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../dev-data/resources";
import Error from "./Error";
import { Button, RatingStar } from "../components";
import {
  AiOutlineUserAdd,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { CartContext } from "../context/CartContext";

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

  const cart = useContext(CartContext); // Access the cart context
  const productQuantity = cart.getProductQuantity(dokter.id);

  // Calculate the total price based on the quantity
  const totalPrice = dokter.harga * (productQuantity > 0 ? productQuantity : 1);

  // Function to add the doctor to the cart
  const handleAddToCart = () => {
    cart.addOneToCart(dokter.id);
  };

  // Function to increase the quantity in the cart
  const handleIncreaseQuantity = () => {
    cart.addOneToCart(dokter.id);
  };

  // Function to decrease the quantity in the cart
  const handleDecreaseQuantity = () => {
    cart.removeOneFromCart(dokter.id);
  };

  // Function to remove all quantities of the product from the cart
  const handleRemoveAllFromCart = () => {
    cart.handleRemoveAllFromCart(dokter.id);
  };

  console.log(cart.cartProducts);

  return (
    <div className="w-full bg-primary-gray-bg py-36">
      <div className="xl:max-w-6xl m-auto max-w-[600px] px-4 md:px-0 grid md:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col" data-aos="fade-up">
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
        <div className="flex flex-col" data-aos="fade-up">
          <p className="text-primary-green text-[40px] font-bold mb-5">
            $ {totalPrice}
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
          <div className="flex items-center gap-8">
            {productQuantity === 0 && (
              <button
                onClick={handleAddToCart}
                className="text-white w-max text-center p-3 bg-primary-blue rounded-lg mb-3 mt-2 md:mt-0 font-semibold"
                style={{
                  background:
                    "linear-gradient(141deg, #3a8ef6 0%, #6f3afa 100%)",
                  boxShadow: "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
                }}
              >
                Add to Cart
              </button>
            )}
            {productQuantity > 0 && (
              <div className="flex items-center gap-8">
                <button
                  onClick={handleRemoveAllFromCart}
                  className="text-white w-max text-center p-3 bg-primary-blue rounded-lg mb-3 mt-2 md:mt-0 font-semibold"
                  style={{
                    background:
                      "linear-gradient(141deg, #3a8ef6 0%, #6f3afa 100%)",
                    boxShadow: "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
                  }}
                >
                  Remove All
                </button>
                <button onClick={handleDecreaseQuantity}>
                  <AiOutlineMinus />
                </button>
                <span>{productQuantity}</span>
                <button onClick={handleIncreaseQuantity}>
                  <AiOutlinePlus />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DokterDetail;
