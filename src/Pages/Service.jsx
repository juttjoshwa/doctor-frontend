import React, { Fragment } from "react";
import "./Service.css";
import About from "../Asset/Images/about.png";
import AboutCard from "../Asset/Images/about-card.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Service = () => {
  AOS.init();
  const nevigate = useNavigate();

  const workingOnit = () => {
    return  nevigate("/doctor")
  };
  return (
    <Fragment>
      <div id="service" className="Service-section-1">
        <div className="About-container">
          {/* img section  */}
          <div className="about-img-section">
            <img src={About} alt="about" />
            <img
              data-aos-offset="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos="fade-up"
              src={AboutCard}
              alt="About card"
            />
          </div>
          {/* text content section */}
          <div className="text-content-section">
            <h1>Proud to be one of the nations best.</h1>
            <p className="text1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              interdum tristique felis.
            </p>
            <p className="text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              interdum tristique felis. Fusce in diam auctor, consectetur quam
              nec, rhoncus mi. Cras quis mi vel odio luctus facilisis vitae et
              ligula.
            </p>
            <button onClick={workingOnit} >Learn more</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Service;
