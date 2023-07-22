import React, { Fragment, useState } from "react";
import "./SignUp.css";
import Gif from "../Asset/Images/signup.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { UserState } from "../Context/AuthContext";

const SignUp = () => {
  AOS.init();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [bloodtye, setbloodtye] = useState("");
  const [gender, setgender] = useState("");
  const { setAuhtenticated } = UserState();

  const nevigate = useNavigate();

  const HandleSginUp = (e) => {
    e.preventDefault();
    axios
      .post("/auth/register", {
        name: name,
        email: email,
        phone: phone,
        password: password,
        bloodtye: bloodtye,
        gender: gender,
      },{
        withCredentials:true
      })
      .then((res) => {
        console.log(res);
        setAuhtenticated(true);
        toast.success("Welcome", {
          duration: "4000",
          position: "top-right",
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#fff",
            fontFamily: "sans-serif",
          },
        });
        nevigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setAuhtenticated(false);
        toast.error("Somthing went wrong");
      });
  };

  return (
    <Fragment>
      <div className="SignUp-section">
        <div className="SignUp-Container">
          {/* Img Section */}
          <div className="img-section-Signup">
            <img src={Gif} alt="" />
          </div>
          {/* From section */}
          <div className="form-section-SignUp">
            <h2>Sign Up</h2>
            <p
              data-aos-offset="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos="fade-up"
            >
              We are here to keep you health and fit
            </p>

            <form
              onSubmit={HandleSginUp}
              method="post"
              className="Sign-up-from"
            >
              <div className="from-div1">
                <input
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Name"
                  type="text"
                />
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="from-div1">
                <input
                  onChange={(e) => setphone(e.target.value)}
                  value={phone}
                  placeholder="Phone"
                  type="text"
                />
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  type="text"
                />
              </div>
              <div className="from-div1">
                <input
                  onChange={(e) => setbloodtye(e.target.value)}
                  value={bloodtye}
                  placeholder="BloodType"
                  type="text"
                />
                <input
                  onChange={(e) => setgender(e.target.value)}
                  value={gender}
                  placeholder="Gender"
                  type="text"
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </Fragment>
  );
};

export default SignUp;
