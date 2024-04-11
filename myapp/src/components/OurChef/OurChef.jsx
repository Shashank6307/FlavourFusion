import React from "react";
import "./OurChef.scss";
import chef from "../assets/chef";
import Chef from "../Chefs/Chef";

const OurChef = () => {
  return (
    <div className="bg">
      <div className="our_chef">
        <h1 className="heading">Our Popular Chef</h1>
        <div className="chef_container">
          {chef.map((item, i) => {
            return (
              <Chef
                key={i}
                id={item.id}
                img={item.image}
                name={item.name}
                post={item.post}
              />
            );
          })}
        </div>

        <button>View all</button>
      </div>
    </div>
  );
};

export default OurChef;
