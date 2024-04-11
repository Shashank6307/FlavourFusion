import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Item.scss";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <div className="item-container">
        <div className="texts">
          <h2>{props.name}</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
            neque, incidunt tenetur est illo?
          </p>
        </div>
        <div className="rating">{props.rating}</div>
        <div className="price">
          <h2>₹{props.price}</h2>
          <Link to="/menu">
            {" "}
            <button
              onClick={() => {
                addToCart(props.id);
              }}
            >
              Order now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
