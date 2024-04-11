import React from "react";
import { Link } from "react-router-dom";

import popular_img from "../assets/popular_img.png";
import "./PopularDish.scss";

const PopularDish = () => {
  return (
    <div className="populardish">
      <button className="hiddenbtn">Order Now</button>

      <div className="image-container">
        <img src={popular_img} alt="" />
      </div>
      <div className="popular-text-container">
        <div className="popular-text">
          <h1>
            Our Most <br />
            Popular <span>Dish.</span>
          </h1>
          <p>
            Lorem ipsum doloramet, consectetur adipisicing elit. Quisquam,
            impedit! Lorem ipsum Lorem ipsum dolor sit amet.
          </p>
        </div>
        <Link to="/menu">
          {" "}
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularDish;
