import React from "react";
import Centercontentcontactus from "./Centercontentcontactus";
import "./Contactus.css";
import Footer from "../../Footer";
import Mark from "../../Mark";
import Sidebarcontentcontactus from "./Sidebarcontentcontactus";

export default function Contactus() {
  return (
    <div className="rotary">
      <div className="heading">
        <h1>Get in touch with us</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentcontactus />
        <Centercontentcontactus />
      </div>
      <Footer />
      <Mark />
    </div>
  );
}
