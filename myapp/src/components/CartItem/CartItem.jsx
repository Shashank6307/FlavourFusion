import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Delete from "../assets/delete.svg";
import "./Cartitem.scss";
import allproduct_menu from "../assets/allproduct_menu";
const CartItem = () => {
  const { cartItem, removeFromCart, addToCart, allproduct_menu } =
    useContext(ShopContext);

  return (
    <div>
      {allproduct_menu.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div className="caritem">
              <div className="heading">
                <h2>{e.name}</h2>
                <button
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                >
                  <img src={Delete} alt="" />
                </button>
              </div>
              <div className="prices">
                <div className="less_more_btns">
                  <div
                    className="less"
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  >
                    -
                  </div>
                  {cartItem[e.id]}
                  <div
                    className="more"
                    onClick={() => {
                      addToCart(e.id);
                    }}
                  >
                    +
                  </div>
                </div>
                <p>₹{Number(e.price) * cartItem[e.id]}</p>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItem;
