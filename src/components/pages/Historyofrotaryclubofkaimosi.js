import React from "react";
import "./Weareroatry.css";
import Footer from "../../Footer";
import Mark from "../../Mark";
import Sidebarcontenthistoryofrotaryclubofkaimosi from "./Sidebarcontenthistoryofrotaryclubofkaimosi";
import Centercontenthistoryofrotaryclubofkaimosi from "./Centercontenthistoryofrotaryclubofkaimosi";

export default function Historyofrotaryclubofkaimosi() {
  return (
    <div className="rotary">
      <div className="heading">
        <h1>HISTORY OF ROTARY CLUB OF KAIMOSI</h1>
      </div>
      <div className="content__body">
        <Sidebarcontenthistoryofrotaryclubofkaimosi />
        <Centercontenthistoryofrotaryclubofkaimosi />
      </div>
      <Footer />
      <Mark />
    </div>
  );
}
