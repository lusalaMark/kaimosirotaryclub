import React from "react";
import "../../App.css";
import Sidebar from "../../Sidebar";
import SidebarRight from "../../SidebarRight";
import Slider from "../../Slider";
import Footer from "../../Footer";
import Mark from "../../Mark";

export default function Home() {
  return (
    <div className="app">
      <Slider />
      <div className="app__body">
        <Sidebar />
        <SidebarRight />
      </div>
      <Footer />
      <Mark />
    </div>
  );
}
