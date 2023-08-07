import React, { useState, createContext } from "react";
import { doctors } from "../dev-data/resources";

// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductIndex = (id) => {
    return cartProducts.findIndex((product) => product.id === id);
  };

  const addOneToCart = (id) => {
    const productIndex = getProductIndex(id);

    if (productIndex !== -1) {
      // Product already exists in the cart, increase the quantity
      setCartProducts((prevCartProducts) =>
        prevCartProducts.map((product, index) =>
          index === productIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      // Product doesn't exist in the cart, add it to the cart
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    }
  };

  const removeOneFromCart = (id) => {
    const productIndex = getProductIndex(id);

    if (productIndex !== -1) {
      const updatedProducts = cartProducts.map((product, index) =>
        index === productIndex && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      setCartProducts(updatedProducts);
    }
  };

  const deleteFromCart = (id) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== id)
    );
  };

  const getTotalCost = () => {
    let totalCost = 0;

    cartProducts.forEach((cartItem) => {
      const productData = doctors.find((doctor) => doctor.id === cartItem.id);
      if (productData) {
        totalCost += productData.harga * cartItem.quantity;
      }
    });

    return totalCost;
  };

  const handleRemoveAllFromCart = (id) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== id)
    );
  };

  const contextValue = {
    cartProducts,
    getProductQuantity: (id) => {
      const productIndex = getProductIndex(id);
      return productIndex !== -1 ? cartProducts[productIndex].quantity : 0;
    },
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    handleRemoveAllFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
