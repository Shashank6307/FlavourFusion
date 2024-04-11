import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import popular_menu from "../components/assets/popular_menu";
import MenuItem from "../components/MenuItem/MenuItem";
import "../styles/Order.scss";
import CartItem from "../components/CartItem/CartItem";
import { ShopContext } from "../Context/ShopContext";
import Pizza1 from "../components/OnlineMenu/Pizzza1";
import Pasta1 from "../components/OnlineMenu/Pasta1";
import Drinks1 from "../components/OnlineMenu/Drinks1";
import Desert1 from "../components/OnlineMenu/Drinks1";

const Order = () => {
  const { getTotalCartAmount, allproduct_menu } = useContext(ShopContext);
  let taxFee = Math.floor(getTotalCartAmount() * 0.02);

  const [activeButton, setActiveButton] = useState(1);
  const handleColor = (id) => {
    setActiveButton(id);
  };

  const headings = () => {
    switch (activeButton) {
      case 1:
        return <h1>All Category</h1>;
      case 2:
        return <h1>Pizzaa</h1>;
      case 3:
        return <h1>Pasta</h1>;
      case 4:
        return <h1>Desert</h1>;
      case 5:
        return <h1>Drink</h1>;
      default:
        return <h1>All Category</h1>;
    }
  };

  const renderMenu = () => {
    switch (activeButton) {
      case 1:
        return popular_menu.map((item, i) => (
          <MenuItem
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            rating={item.star}
            price={item.price}
          />
        ));
      case 2:
        return <Pizza1 category="Pizza" />;
      case 3:
        return <Pasta1 category="Pasta" />;
      case 4:
        return <Desert1 category="Desert" />;
      case 5:
        return <Drinks1 category="Drinks" />;
      default:
        return null;
    }
  };

  return (
    <div className="ORder-page">
      <Navbar />
      <div className="order">
        <div className="order-head">
          <h1>Menu</h1>

          <div className="cat_btns">
            <button
              onClick={() => handleColor(1)}
              style={{
                background: activeButton === 1 ? "rgb(255, 71, 71)" : "none",
              }}
            >
              All Category
            </button>

            <button
              onClick={() => handleColor(2)}
              style={{
                background: activeButton === 2 ? "rgb(255, 71, 71)" : "none",
              }}
            >
              Pizza
            </button>

            <button
              onClick={() => handleColor(3)}
              style={{
                background: activeButton === 3 ? "rgb(255, 71, 71)" : "none",
              }}
            >
              Pasta
            </button>

            <button
              onClick={() => handleColor(4)}
              style={{
                background: activeButton === 4 ? "rgb(255, 71, 71)" : "none",
              }}
            >
              Desert
            </button>

            <button
              onClick={() => handleColor(5)}
              style={{
                background: activeButton === 5 ? "rgb(255, 71, 71)" : "none",
              }}
            >
              Drink
            </button>
          </div>
        </div>
        <div className="order_content">
          <div className="order_menu">
            <div className="heading">
              <h2>{headings()}</h2>
              <hr />
            </div>
            <div className="pro">{renderMenu()}</div>
          </div>
          <div className="order_list">
            <div className="order_list_heading">
              <h1>Order List</h1>
            </div>
            <CartItem />
            <div className="total">
              <div>
                <h1>Subtotal</h1>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <div>
                <h1>Tax fee</h1>
                <p>₹{taxFee}</p>
              </div>

              <div>
                <h1>Total</h1>
                <p>₹{getTotalCartAmount() + taxFee}</p>
              </div>
            </div>
            <button className="checkout">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
