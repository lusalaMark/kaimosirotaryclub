import React from "react";
import Contentwearerotarycenter from "./Contentwearerotarycenter";
import Sidebarcontentwearerotary from "./Sidebarcontentwearerotary";
import "./Weareroatry.css";
import Footer from "../../Footer";
import Mark from "../../Mark";

export default function Wearerotary() {
  return (
    <div className="rotary">
      <div className="heading">
        <h1>WELCOME TO ROTARY</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentwearerotary />
        <Contentwearerotarycenter />
      </div>
      <Footer />
      <Mark />
    </div>
  );
}
