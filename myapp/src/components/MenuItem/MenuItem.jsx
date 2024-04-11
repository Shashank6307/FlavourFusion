import React, { useContext } from "react";
import "./MenuItem.scss";
import { ShopContext } from "../../Context/ShopContext";
const MenuItem = (props) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="menu_item">
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
      <div className="rating_menu">{props.rating}</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        mollitia!
      </p>
      <h2 className="mprice">₹{props.price}</h2>
      <div className="order-now">
        <button
          onClick={() => {
            addToCart(props.id);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
