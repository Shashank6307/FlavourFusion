import React from "react";

import Item from "../Item/Item";
import "./Styles/AllCategory.scss";
import allproduct_menu from "../assets/allproduct_menu";
const Drinks = (props) => {
  return (
    <div className="dish">
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
    </div>
  );
};

export default Drinks;
