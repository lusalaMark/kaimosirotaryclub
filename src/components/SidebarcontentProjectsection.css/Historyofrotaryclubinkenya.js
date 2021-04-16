import React from "react";
import "./Weareroatry.css";
import Footer from "../../Footer";
import Mark from "../../Mark";
import Sidebarcontenthistoryofrotaryclubinkenya from "./Sidebarcontenthistoryofrotaryclubinkenya";
import Centercontenthistoryofrotaryclubinkenya from "./Centercontenthistoryofrotaryclubinkenya";

export default function Historyofrotaryclubinkenya() {
  return (
    <div className="rotary">
      <div className="heading">
        <h1>HISTORY OF ROTARY CLUB IN KENYA</h1>
      </div>
      <div className="content__body">
        <Sidebarcontenthistoryofrotaryclubinkenya />
        <Centercontenthistoryofrotaryclubinkenya />
      </div>
      <Footer />
      <Mark />
    </div>
  );
}
