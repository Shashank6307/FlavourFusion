import React from "react";
import popular_menu from "../assets/popular_menu";
import Item from "../Item/Item";
import "./Styles/AllCategory.scss";

const AllCategory = () => {
  return (
    <div className="dish">
      {popular_menu.map((item, i) => {
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
      })}
    </div>
  );
};

export default AllCategory;
