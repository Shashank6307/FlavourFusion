import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import circle from "../components/assets/circle.png";
import img1 from "../components/assets/about_1.png";
import img2 from "../components/assets/about_2.png";
import owner from "../components/assets/owner.png";
import "../styles/AboutUs.scss";
// import Cart2 from "../components/Cart2/Cart2";
const AboutUs = () => {
  return (
    <div className="ABOUTUS">
      <Navbar />

      <div className="about_first_container">
        <div className="about_left">
          <img src={circle} alt="" />
          <div className="img-cont">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="about_right">
          <h1>
            About Our <br /> <span>Restraunt</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            placeat quibusdam modi repudiandae. Facere, aliquam velit nihil
            praesentium ea neque.
          </p>
          <Link to="/menu">
            {" "}
            <button>Order Now</button>
          </Link>
        </div>
      </div>
      <div className="about_second_container">
        <div className="sec-left">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            ab. Mollitia labore, in autem error doloribus libero exercitationem
            saepe fuga aut sunt dignissimos voluptate atque? Sequi et earum
            consequatur harum? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consectetur doloremque nihil velit!
          </p>
        </div>
        <div className="about_sec-right">
          <img src={circle} alt="" />
          <div className="img-cont-right">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>

      <div className="owner">
        <img src={owner} alt="" />
        <div className="about_owner">
          <h1>
            <span>Owner</span> & Executive <br />
            Chef
          </h1>
          <p>Prabhat Kumar</p>
          <div className="text">
            "
            <div className="likh">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut
              porro quidem vel, placeat obcaecati!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
