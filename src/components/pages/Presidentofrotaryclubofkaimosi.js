import React from "react";
import Centercontentpresidentofrotaryclubofkaimosi from "./Centercontentpresidentofrotaryclubofkaimosi";
import Sidebarcontentpresidentofrotaryclubofkaimosi from "./Sidebarcontentpresidentofrotaryclubofkaimosi";
import "./Weareroatry.css";
import Footer from "../../Footer";
import Mark from "../../Mark";

export default function Presidentofrotaryclubofkaimosi() {
  return (
    <div className="rotary">
      <div className="heading">
        <h1>PRESIDENT OF ROTARY CLUB OF KAIMOSI</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentpresidentofrotaryclubofkaimosi />
        <Centercontentpresidentofrotaryclubofkaimosi />
      </div>
      <Footer />
      <Mark />
    </div>
  );
}
