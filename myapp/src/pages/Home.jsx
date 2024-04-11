import React from "react";
import "../styles/Home.scss";
import Hero from "../components/Hero/Hero";
import PopularDish from "../components/PopularDish/PopularDish";
import PopularProduct from "../components/PopularProduct/PopularProduct";
import OurChef from "../components/OurChef/OurChef";
import Newsletter from "../components/Newsletter/Newsletter";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="work-area">
        <div className="bg">
          <Navbar />
          <hr />
          <Hero />
        </div>
        <PopularDish />

        <PopularProduct />
        <OurChef />
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
