import React, { Fragment } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init();
  return (
    <Fragment>
      <div className="Contact-section">
        <div className="Contact-container">
          {/* text container */}
          <div className="contact-text-container">
            <h1
              data-aos-offset="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos="fade-up"
            >
              We will be very happy to have you.
            </h1>
          </div>
          {/* from container */}
          <form
            action="https://formspree.io/f/xjvdgpqy"
            method="POST"
            className="Contact-form"
          >
            <input name="name" type="text" placeholder="We need your name" />
            <input name="help" type="text" placeholder="Help you want" />
            <button type="submit">Reach Out</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
