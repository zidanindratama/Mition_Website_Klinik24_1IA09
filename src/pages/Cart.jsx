import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { doctors } from "../dev-data/resources";
import { EmptyCart } from "../components";

const Cart = () => {
  const cart = useContext(CartContext);

  // Function to remove one quantity of a product from the cart
  const handleRemoveOneFromCart = (productId) => {
    cart.removeOneFromCart(productId);

    // Check if the product quantity becomes 0 after removing one
    const productQuantity = cart.getProductQuantity(productId);
    if (productQuantity === 0) {
      cart.deleteFromCart(productId);
    }
  };

  // Function to remove all quantities of a product from the cart
  const handleRemoveAllFromCart = (productId) => {
    cart.deleteFromCart(productId);
  };

  // Calculate the total price of all products in the cart
  const totalPrice = cart.getTotalCost();

  const checkout = async () => {
    await fetch(
      "https://server-stripe-klinik.up.railway.app/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart.cartProducts }),
      },
      { mode: "cors" }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  return (
    <div className="w-full bg-primary-gray-bg py-24">
      <div className="xl:max-w-6xl m-auto max-w-[600px] px-4 md:px-0">
        {cart.cartProducts.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="hidden md:block">
              <table className="w-full mt-12">
                <thead>
                  <tr>
                    <th className="text-left text-primary-text-gray">Gambar</th>
                    <th className="text-left text-primary-text-gray">Nama</th>
                    <th className="text-left text-primary-text-gray">Jenis</th>
                    <th className="text-left text-primary-text-gray">Harga</th>
                    <th className="text-left text-primary-text-gray">Sesi</th>
                    <th className="text-left text-primary-text-gray">Total</th>
                    <th className="text-left text-primary-text-gray">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cartProducts.map((product) => {
                    const dokter = doctors.find((d) => d.id === product.id);

                    if (!dokter) return null;

                    const total = dokter.harga * product.quantity;

                    return (
                      <tr key={product.id}>
                        <td className="py-12">
                          <img
                            src={dokter.photo}
                            alt={dokter.nama}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </td>
                        <td className="text-primary-text-gray">
                          {dokter.nama}
                        </td>
                        <td className="text-primary-text-gray">
                          {dokter.jenisDokter}
                        </td>
                        <td className="text-primary-green">$ {dokter.harga}</td>
                        <td>
                          <div className="flex items-center">
                            <button
                              className="bg-primary-blue text-white p-2 rounded-full mr-2"
                              onClick={() =>
                                handleRemoveOneFromCart(product.id)
                              }
                              style={{
                                background:
                                  "linear-gradient(141deg, #3a8ef6 0%, #6f3afa 100%)",
                                boxShadow:
                                  "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
                              }}
                            >
                              <AiOutlineMinus />
                            </button>
                            <span className="text-primary-text-gray">
                              {product.quantity}
                            </span>
                            <button
                              className="bg-primary-blue text-white p-2 rounded-full ml-2"
                              onClick={() => cart.addOneToCart(dokter.id)}
                              style={{
                                background:
                                  "linear-gradient(141deg, #3a8ef6 0%, #6f3afa 100%)",
                                boxShadow:
                                  "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
                              }}
                            >
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </td>
                        <td className="text-primary-green">$ {total}</td>
                        <td>
                          <button
                            className="p-2 rounded-full"
                            onClick={() => handleRemoveAllFromCart(product.id)}
                            style={{ color: "#ED4459" }}
                          >
                            <AiOutlineDelete size={20} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="mt-4">
                <p className="text-primary-text-gray text-lg font-bold mr-2 mb-6">
                  Total Price:
                  <span className="text-primary-green ml-5">
                    $ {totalPrice}
                  </span>
                </p>
                <button
                  className="text-white w-max text-center p-3 bg-primary-blue rounded-lg mb-3 mt-2 md:mt-0 font-semibold"
                  style={{
                    background:
                      "linear-gradient(141deg, #3a8ef6 0%, #6f3afa 100%)",
                    boxShadow: "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
                  }}
                  onClick={checkout}
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <h1 className="text-primary-dark font-bold mb-8">Cart</h1>

              {cart.cartProducts.map((product) => {
                const dokter = doctors.find((d) => d.id === product.id);

                if (!dokter) return null;

                const total = dokter.harga * product.quantity;

                return (
                  <div className="mt-8">
                    <div className="flex flex-row items-center gap-6">
                      <img
                        src={dokter.photo}
                        alt=""
                        className="w-[100px] rounded-lg"
                      />
                      <div className="flex flex-col">
                        <h1 className="text-primary-dark font-semibold">
                          {dokter.nama}
                        </h1>
                        <h1 className="text-primary-text-gray font-semibold">
                          {dokter.jenisDokter}
                        </h1>
                      </div>
                      <p className="text-primary-green">$ {dokter.harga}</p>
                      <button
                        className="p-2 rounded-full"
                        onClick={() => handleRemoveAllFromCart(product.id)}
                        style={{ color: "#ED4459" }}
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-6">
                      <div className="flex items-center">
                        <button
                          className="bg-primary-blue text-white p-2 rounded-full mr-2"
                          onClick={() => handleRemoveOneFromCart(product.id)}
                          style={{
                            background:
                              "linear-gradient(141deg, #3a8ef6 0%, #6f3afa 100%)",
                            boxShadow:
                              "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
                          }}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="text-primary-text-gray">
                          {product.quantity}
                        </span>
                        <button
                          className="bg-primary-blue text-white p-2 rounded-full ml-2"
                          onClick={() => cart.addOneToCart(dokter.id)}
                          style={{
                            background:
                              "linear-gradient(141deg, #3a8ef6 0%, #6f3afa 100%)",
                            boxShadow:
                              "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
                          }}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                      <h1>
                        Sub total : <span>$ {total}</span>
                      </h1>
                    </div>
                    <hr className="my-8" />
                    <button
                      className="text-white w-max text-center p-3 bg-primary-blue rounded-lg mb-3 mt-2 md:mt-0 font-semibold"
                      style={{
                        background:
                          "linear-gradient(141deg, #3a8ef6 0%, #6f3afa 100%)",
                        boxShadow: "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
                      }}
                      onClick={checkout}
                    >
                      Bayar Sekarang
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
