import React, { useContext } from "react";
import remove_icon from "../assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import Navbar from "../Navbar/Navbar";
import "./Cart2.scss";

const Cart2 = () => {
  const { getTotalCartAmount, allproduct_menu, cartItem, removeFromCart } =
    useContext(ShopContext);
  return (
    <>
      <Navbar />;
      <div className="cartitems">
        <div className="main">
          <p>Products</p>
          <p>Name</p>
          <p>Price </p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {allproduct_menu.map((e) => {
          if (cartItem[e.id] > 0) {
            return (
              <div>
                <div className="item_format main">
                  <img src={e.image} className="carticon" alt="" />
                  <p className="naam">{e.name}</p>
                  <p>₹{e.price}</p>
                  <button className="quantity">{cartItem[e.id]}</button>
                  <p>₹{e.price * cartItem[e.id]}</p>
                  <img
                    className="remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

        <div className="cartitem_down">
          <div className="total">
            <h1>Cart Totals</h1>
            <div>
              <div className="total_item">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="total_item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="total_item">
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="promobox">
              <input type="text" placeholder="Promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart2;
