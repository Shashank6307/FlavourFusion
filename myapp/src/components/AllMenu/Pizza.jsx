import React from "react";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
import Item from "../Item/Item";
// import pizza_menu from "../assets/pizza_menu";
import "./Styles/AllCategory.scss";
import allproduct_menu from "../assets/allproduct_menu";
const Pizza = (props) => {
  return (
    <div className="dish">
      {/* <Navbar /> */}

      {allproduct_menu.map((item, i) => {
        if (props.category === item.category) {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              rating={item.star}
              price={item.price}
            />
          );
        } else {
          return null;
        }
      })}
      {/* <Footer /> */}
    </div>
  );
};

export default Pizza;
