import React from "react";
import Header from "../componets/Header/Header";
import Footer from "../componets/Footer/Footer";
import Routes from "../routes/Routes";

const Layout = () => {
  return<>
  <Header />
  <main>
    <Routes />
  </main>
  </>
};

export default Layout;
