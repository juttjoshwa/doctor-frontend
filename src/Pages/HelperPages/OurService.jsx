import React, { Fragment } from "react";
import "./OurService.css";
import Arrow from "../../Asset/Images/arrow.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
 
const OurService = () => {

  AOS.init();
  const nevigate = useNavigate();

  const workingOnit = () => {
    return  nevigate("/doctor")
  };
  return (
    <Fragment>
      <div className="our-servive-section">
        <div className="our-container">
          {/* text section */}
          <div className="our-text-section">
            <h1>Our medical service</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud.
            </p>
          </div>

          {/* card section */}
          <div className="Card-container">
            <div className="Card-section-our1">
              <div className="card1">
                <h3>Cancer care</h3>
                <p>
                  World-class care for everyone.Our health System offers
                  unmatched,expert health care
                </p>
                <button onClick={workingOnit} className="arrow-service">
                    <img src={Arrow} alt="arrow" />
                </button>
              </div>
              <div className="card1">
              <h3>Labour & Delivery</h3>
                <p>
                  World-class care for everyone.Our health System offers
                  unmatched,expert health care
                </p>
                <button onClick={workingOnit}  className="arrow-service">
                    <img src={Arrow} alt="arrow" />
                </button>
              </div>
              <div className="card1">
              <h3>Heart & Vascular</h3>
                <p>
                  World-class care for everyone.Our health System offers
                  unmatched,expert health care
                </p>
                <button onClick={workingOnit}  className="arrow-service">
                    <img src={Arrow} alt="arrow" />
                </button>
              </div>
            </div>
            <div className="Card-section-our2">
              <div className="card4">
              <h3>Mental Health</h3>
                <p>
                  World-class care for everyone.Our health System offers
                  unmatched,expert health care
                </p>
                <button onClick={workingOnit}  className="arrow-service">
                    <img src={Arrow} alt="arrow" />
                </button>
              </div>
              <div className="card4">
              <h3>Neurology</h3>
                <p>
                  World-class care for everyone.Our health System offers
                  unmatched,expert health care
                </p>
                <button onClick={workingOnit}  className="arrow-service">
                    <img src={Arrow} alt="arrow" />
                </button>
              </div>
              <div className="card4">
              <h3>Burn Treatment</h3>
                <p>
                  World-class care for everyone.Our health System offers
                  unmatched,expert health care
                </p>
                <button onClick={workingOnit}  className="arrow-service">
                    <img src={Arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OurService;
