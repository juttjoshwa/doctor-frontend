import React, { Fragment, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Asset/Images/logo.png";
import userImg from "../../Asset/Images/avatar-icon.png";
import { FaPowerOff } from "react-icons/fa";
import { UserState } from "../../Context/AuthContext";
import axios from "axios";

const navLinks = [
  {
    Path: "/",
    display: "Home",
  },
  {
    Path: "/doctor",
    display: "Find Doctor",
  },
  {
    Path: "/service",
    display: "Service",
  },
  {
    Path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [togglernav, settogglernav] = useState("toggle-menu-container");
  const [profileLogOut, setprofileLogOut] = useState("Profile-and-logout-part");
  const [navActive, setnavActive] = useState("nav-menu");
  const { Auhtenticated, CurrentUserData } = UserState();
  const nevigate = useNavigate();

  const Nav_menu = () => {
    navActive === "nav-menu"
      ? setnavActive("nav-active nav-menu")
      : setnavActive("nav-menu");

    togglernav === "toggler-menu"
      ? settogglernav("toggle-menu-container toggler")
      : settogglernav("toggle-menu-container");

    profileLogOut === "Profile-and-logout-part"
      ? setprofileLogOut("Profile-and-logout-part nav-active")
      : setprofileLogOut("Profile-and-logout-part");
  };

  const NevigatetoLogin = () => {
    return nevigate("/login");
  };
  const workingOnit = () => {
    return nevigate("/doctor");
  };

  const HandleLogout = (e) => {
    e.preventDefault();
    axios
      .get("/auth/logout")
      .then((res) => {
        console.log(res);
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <nav>
        <div className="nav-section">
          <div className="nav-container">
            {/* ========== logopart ========= */}
            <div className="logo-nav">
              <img src={Logo} alt="logo" />
            </div>
            {/* links part */}
            <ul className={navActive}>
              {navLinks.map((links, index) => (
                <li key={index}>
                  <Link className="link" to={links.Path}>
                    {links.display}
                  </Link>
                </li>
              ))}
            </ul>
            {/* profile part or logout part */}
            <div className={profileLogOut}>
              {/* profile part */}
              <div>
                {/* <img src={userImg} alt="User Img" /> */}
                {!Auhtenticated ? (
                  <button onClick={NevigatetoLogin} className="login-btn">
                    Login
                  </button>
                ) : (
                  <img onClick={workingOnit} src={userImg} alt="User Img" />
                )}
              </div>

              {/* Logout part */}
              {!Auhtenticated ? (
                ""
              ) : (
                <FaPowerOff onClick={HandleLogout} className="nav-btn-Logout" />
              )}
            </div>
            <div className={togglernav} onClick={Nav_menu}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
