import React from "react";
import "./Weareroatry.css";
import Footer from "../../Footer";
import Mark from "../../Mark";
import Sidebarcontenthistoryofrotaryclubinternational from "./Sidebarcontenthistoryofrotaryclubinternational";
import Centercontenthistoryofrotaryclubinternational from "./Centercontenthistoryofrotaryclubinternational";

export default function Historyofrotaryclubinternational() {
  return (
    <div className="rotary">
      <div className="heading">
        <h1>HISTORY OF ROTARY CLUB INTERNATIONAL</h1>
      </div>
      <div className="content__body">
        <Sidebarcontenthistoryofrotaryclubinternational />
        <Centercontenthistoryofrotaryclubinternational />
      </div>
      <Footer />
      <Mark />
    </div>
  );
}
