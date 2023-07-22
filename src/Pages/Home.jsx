import React, { Fragment } from "react";
import "./Home.css";
import Big_img from "../Asset/Images/hero-img01.png";
import small_img1 from "../Asset/Images/hero-img02.png";
import small_img2 from "../Asset/Images/hero-img03.png";
import FindADoc from "../Asset/Images/icon01.png";
import FindALoc from "../Asset/Images/icon02.png";
import BookApoi from "../Asset/Images/icon03.png";
import Arrow from "../Asset/Images/arrow.png";
import Service from "./Service";
import OurService from "./HelperPages/OurService";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Initialize AOS (Animate On Scroll) library
  AOS.init();

  // Get the navigation function using useNavigate from react-router-dom
  const navigate = useNavigate();

  // Function to navigate to the "/doctor" route
  const workingOnit = () => {
    return navigate("/doctor");
  };

  return (
    <Fragment>
      {/* Hero Section */}
      <div className="section-hero">
        <div className="hero-container">
          {/* Hero Content */}
          <div className="hero-content">
            <div>
              <h2>we help patients live a healthy, and longer life.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
              {/* Button to request an appointment */}
              <button onClick={workingOnit} className="req-doctor">
                Request an Appointment
              </button>
            </div>
            {/* Experience Section */}
            <div className="exprience-section">
              <div className="Year-of-exprience">
                <h3>30+</h3>
                <div className="exprience-line1"></div>
                <p className="text">Years of Experience</p>
              </div>
              <div className="clinicLoction">
                <h3>15+</h3>
                <div className="exprience-line2"></div>
                <p className="text">Clinic Locations</p>
              </div>
              <div className="satisfaction">
                <h3>100%</h3>
                <div className="exprience-line3"></div>
                <p className="text">Patient Satisfaction</p>
              </div>
            </div>
          </div>
          {/* Hero Images */}
          <div className="hero-img-section">
            <div className="big-img">
              <img className="Big-img" src={Big_img} alt="Doctor" />
            </div>
            <div className="small-img">
              <img className="small-img1" src={small_img1} alt="Doctor" />
              <img className="small-img2" src={small_img2} alt="Doctor" />
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="Service-section">
        <div className="service-container">
          {/* Service Section Content */}
          <div className="service-section">
            <h1>Providing the,</h1>
            <h1>Best medical service</h1>
            <p>
              World-class care for everyone. Our health system offers unmatched,
              expert healthcare.
            </p>
          </div>

          {/* Button Section */}
          <div
            data-aos-offset="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos="fade-up"
            className="button-section-service"
          >
            {/* Button for finding a doctor */}
            <div className="find-a-doctor">
              <img src={FindADoc} alt="find a doctor" />
              <h3>Find a Doctor</h3>
              <p>
                World-class care for everyone. Our health system offers
                unmatched, expert healthcare.
              </p>
              <button onClick={workingOnit} className="arrow-service">
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>
            {/* Button for finding a location */}
            <div className="find-loction">
              <img src={FindALoc} alt="find-Location" />
              <h3>Find Location</h3>
              <p>
                World-class care for everyone. Our health system offers
                unmatched, expert healthcare.
              </p>
              <button onClick={workingOnit} className="arrow-service">
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>
            {/* Button for booking an appointment */}
            <div className="book-apoi">
              <img src={BookApoi} alt="Booking" />
              <h3>Book Appointment</h3>
              <p>
                World-class care for everyone. Our health system offers
                unmatched, expert healthcare.
              </p>
              <button onClick={workingOnit} className="arrow-service">
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Service />
      <OurService />
      <Contact />
    </Fragment>
  );
};

export default Home;
