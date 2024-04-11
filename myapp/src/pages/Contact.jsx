import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/ContactUs.scss";

const Contact = () => {
  return (
    <div className="contactpage">
      <Navbar />
      <div className="contact">
        <div className="top">
          <h1>Contact Us</h1>
          <p>
            We love hearing from our customers. Feel free to share your
            experience or ask any questions you may have.
          </p>
        </div>
        <div className="bottom">
          <div className="btm_left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3635788.814623532!2d80.85930415!3d27.138192749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711041305404!5m2!1sen!2sin"
              // width="600"
              // height="450"
              // style="border:0;"
              title="contactpage map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="btm_right">
            <div className="inputs">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email Address" />
              <input className="msg" type="text" placeholder="Message" />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
