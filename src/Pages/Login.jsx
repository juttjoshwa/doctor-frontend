import React, { Fragment, useState } from "react";
import "./Login.css";
import axios from "axios";
import { UserState } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  AOS.init();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const { setAuhtenticated, setCurrentUserData, CurrentUserData } = UserState();
  const nevigate = useNavigate();

  const HandleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", { email: email, password: password },{
        withCredentials:true
      })
      .then((res) => {
        setloading(true);
        setCurrentUserData(res.data.newUser);
        setAuhtenticated(true);
        console.log(CurrentUserData);
        nevigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        setAuhtenticated(false);
        return toast("Something went Wrong", {
          duration: "4000",
          position: "top-right",
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#fff",
            fontFamily: "sans-serif",
          },
        });
      });
  };
  return (
    <Fragment>
      <div className="Login-Section">
        <div className="login-Container">
          {/* heading section */}

          <div className="heading-section-login">
            <h2>Login fast</h2>
            <p
              data-aos-offset="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos="fade-up"
            >
              Book a appoientment now!
            </p>
          </div>
          {/* from section */}
          <form onSubmit={HandleLogin} className="Login-from" method="post">
            <input
              autoFocus
              placeholder="Email"
              name="email"
              required
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              placeholder="Password"
              name="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type={loading ? "text" : "submit"}>submit</button>
            <p>or</p>
            <a href="/signup" className="SignUp">
              Sign Up
            </a>
          </form>
        </div>
      </div>
      <Toaster />
    </Fragment>
  );
};

export default Login;
