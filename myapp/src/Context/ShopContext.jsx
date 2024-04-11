import React, { useState, createContext } from "react";

import allproduct_menu from "../components/assets/allproduct_menu";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allproduct_menu.length + 1; index++) {
    cart[index] = 0;
  }
  console.log(cart);
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart);
  const addToCart = (Id) => {
    setCartItem((prev) => ({ ...prev, [Id]: prev[Id] + 1 }));
    console.log(cartItem);
  };
  const removeFromCart = (Id) => {
    setCartItem((prev) => ({ ...prev, [Id]: prev[Id] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId of Object.keys(cartItem)) {
      if (cartItem[itemId] > 0) {
        let info = allproduct_menu.find((item) => item.id === Number(itemId));
        totalAmount += info.price * cartItem[itemId];
        console.log(info);
      }
      console.log(cartItem[itemId]);
    }
    console.log(totalAmount);
    return totalAmount;
  };
  const totalItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    getTotalCartAmount,
    totalItems,
    allproduct_menu,
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
