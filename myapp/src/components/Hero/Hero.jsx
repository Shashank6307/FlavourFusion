import React from "react";
import hero_img from "../assets/hero_img.png";
import "./Hero.css";
// import PopularProduct from "../PopularProduct/PopularProduct";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="title">
          Best Restraunt <br /> In <span>Town.</span>
        </h1>
        <p>
          We Provide best food in town,we provide home delivery and dine in
          services
        </p>
        <div className="btns">
          <button
            style={{
              background: "rgb(255, 71, 71)    ",
              fontWeight: "700",
              color: "white",
            }}
          >
            <Link className="link" to="/menu">
              {" "}
              Order now
            </Link>
          </button>
          <button style={{ color: "rgb(255, 71, 71) ", fontWeight: "700" }}>
            Reservation{" "}
          </button>
        </div>
      </div>
      <img src={hero_img} alt="" />
    </div>
  );
};

export default Hero;
