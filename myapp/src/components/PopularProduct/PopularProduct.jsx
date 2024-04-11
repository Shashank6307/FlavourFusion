import React, { useState } from "react";
import "./PopularProduct.scss";
import Pizza from "../AllMenu/Pizza";
import AllCategory from "../AllMenu/AllCategory";
import Pasta from "../AllMenu/Pasta";
import Drinks from "../AllMenu/Drinks";
import Desert from "../AllMenu/Desert";

const PopularProduct = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleColor = (id) => {
    setActiveButton(id);
  };

  const renderedComponents = () => {
    switch (activeButton) {
      case 1:
        return (
          <div>
            <AllCategory />
          </div>
        );
      case 2:
        return (
          <div>
            <Pizza category="Pizza" />
          </div>
        );
      case 3:
        return (
          <div>
            <Pasta category="Pasta" />
          </div>
        );
      case 4:
        return (
          <div>
            <Desert category="Desert" />;
          </div>
        );
      case 5:
        return (
          <div>
            {" "}
            <Drinks category="Drinks" />
          </div>
        );
      default:
        return <AllCategory />;
    }
  };

  return (
    <div className="popular_product">
      <h1>Our Popular Menu</h1>
      <div className="menu">
        <div className="cat_btns">
          <button
            type="button"
            onClick={() => handleColor(1)}
            style={{
              background: activeButton === 1 ? "rgb(255, 71, 71)" : "none",
            }}
          >
            All Category
          </button>

          <button
            type="button"
            onClick={() => handleColor(2)}
            style={{
              background: activeButton === 2 ? "rgb(255, 71, 71)" : "none",
            }}
          >
            Pizza
          </button>

          <button
            type="button"
            onClick={() => handleColor(3)}
            style={{
              background: activeButton === 3 ? "rgb(255, 71, 71)" : "none",
            }}
          >
            Pasta
          </button>

          <button
            type="button"
            onClick={() => handleColor(4)}
            style={{
              background: activeButton === 4 ? "rgb(255, 71, 71)" : "none",
            }}
          >
            Desert
          </button>

          <button
            type="button"
            onClick={() => handleColor(5)}
            style={{
              background: activeButton === 5 ? "rgb(255, 71, 71)" : "none",
            }}
          >
            Drink
          </button>
        </div>
        <div className="dishes">{renderedComponents()}</div>
      </div>
    </div>
  );
};

export default PopularProduct;
