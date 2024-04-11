import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import cart from "../assets/shopping-cart.png";
import Logo from "../assets/bag.png";
import "./Navbar.scss";
import { ShopContext } from "../../Context/ShopContext";
import dropdown from "../assets/down-arrow.png";
const Navbar = () => {
  const { totalItems } = useContext(ShopContext);
  const menuRef = useRef();
  const hamburger_toggle = (e) => {
    menuRef.current.classList.toggle("centre-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="nav">
      <div className="left">
        <img src={Logo} alt="" />
        <h2>
          FLAVOUR
          <br />
          FUSION
        </h2>
      </div>
      <div className="dropdown">
        <img onClick={hamburger_toggle} src={dropdown} alt="" />
      </div>
      <div ref={menuRef} className="centre">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/menu" className="link">
          Menu
        </Link>
        <Link to="/about" className="link">
          About Us
        </Link>
        <Link to="/order" className="link">
          Order Online
        </Link>
        <Link to="/contact" className="link">
          Contact US
        </Link>
      </div>
      <div className="right">
        <div className="icon">
          <Link to="/cart" className="link">
            <img src={cart} alt="" />
          </Link>
          <div className="count">{totalItems()}</div>
        </div>
        <button className="btn">
          <Link to="/login" className="link">
            Log in
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
