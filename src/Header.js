import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="../images/logo.png" alt="" />
        <div className="title"></div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" />
        <HeaderOption title="About Us" />
        <HeaderOption title="Stories" />
        <HeaderOption title="Projects" />
        <HeaderOption title="Members" />
        <HeaderOption I title="Project section" />
        <HeaderOption I title="Events" />
        <HeaderOption title="Contact Us" />
      </div>
    </div>
  );
}

export default Header;
