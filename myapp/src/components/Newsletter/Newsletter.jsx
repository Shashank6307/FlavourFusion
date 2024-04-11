import React from "react";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="news_letter_container">
        <h1>Hungry? We are open now..</h1>
        <div className="buttons">
          <button
            style={{
              background: "rgb(255, 71, 71)    ",
              fontWeight: "700",
              color: "white",
            }}
          >
            Order Now
          </button>
          <button
            style={{
              color: "rgb(255, 71, 71) ",
              fontWeight: "700",
              background: "rgb(255, 215, 215) ",
            }}
          >
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
