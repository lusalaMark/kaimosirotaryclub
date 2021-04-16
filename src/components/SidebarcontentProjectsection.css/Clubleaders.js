import React from "react";
import "./Weareroatry.css";
import Footer from "../../Footer";
import Mark from "../../Mark";
import Centercontentclubleaders from "./Centercontentclubleaders";
import Sidebarcontentclubleaders from "./Sidebarcontentclubleaders";

export default function Clubleaders() {
  return (
    <div className="rotary">
      <div className="heading">
        <h1>CLUB LEADERS</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentclubleaders />
        <Centercontentclubleaders />
      </div>
      <Footer />
      <Mark />
    </div>
  );
}
