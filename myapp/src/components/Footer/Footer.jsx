import React from "react";
import "./Footer.scss";
import twitter from "../assets/twitter.png";
import insta from "../assets/instagram.png";
import fb from "../assets/facebook-app-symbol.png";
import Logo from "../assets/bag.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="footer_content">
          <div className="footer_div1">
            <div className="logo">
              <img src={Logo} alt="" />
              <h2>FlavourFusion</h2>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              laudantium.
            </h2>
            <div className="icons">
              <div className="icon-container">
                <img src={twitter} alt="" />
              </div>
              <div className="icon-container">
                <img src={insta} alt="" />
              </div>
              <div className="icon-container">
                <img src={fb} alt="" />
              </div>
            </div>
          </div>
          <div className="ft">
            <div className="footer_div2">
              <h1>Page</h1>
              <div className="div2_content">
                <li>Home</li>
                <li>MEnu</li>
                <li>Order Online</li>
                <li>Reservation</li>
              </div>
            </div>
            <div className="footer_div2">
              <h1>Information</h1>
              <div className="div2_content">
                <li>About us</li>
                <li>Testimonial</li>
                <li>Event</li>
              </div>
            </div>
            <div className="footer_div2">
              <h1>Get in Touch</h1>
              <div className="div2_content">
                <li>
                  246 LakhanPur ,Vikas <br /> Nagar Kanpur 208024
                </li>
                <li>abc@gmail.com</li>
                <li>+91 987456321</li>
              </div>
            </div>
          </div>
        </div>
        <h3 className="copyright">Copyright @2024</h3>
      </div>
    </div>
  );
};

export default Footer;
