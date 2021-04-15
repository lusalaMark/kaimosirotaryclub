import React from "react";
import Centercontentcontactus from "./Centercontentcontactus";
import "./Weareroatry.css";
import Footer from "../../Footer";
import Mark from "../../Mark";
import Sidebarcontentcontactus from "./Sidebarcontentcontactus";

export default function Wearerotary() {
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
