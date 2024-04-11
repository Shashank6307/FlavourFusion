import React from "react";
import "./Chef.scss";
const Chef = (props) => {
  return (
    <div className="container-chef">
      <div className="chef_detail">
        <div className="img_container">
          <img src={props.img} alt="" />
        </div>
        <h1>{props.name}</h1>
        <p>{props.post}</p>
      </div>
    </div>
  );
};

export default Chef;
