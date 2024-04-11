import React from "react";
import allproduct_menu from "../assets/allproduct_menu";
import MenuItem from "../MenuItem/MenuItem";
import "./style/OnlineMenu.scss";

const Pizza1 = (props) => {
  return (
    <div className="online-dish">
      {allproduct_menu.map((item, i) => {
        if (props.category === item.category) {
          return (
            <MenuItem
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

export default Pizza1;
