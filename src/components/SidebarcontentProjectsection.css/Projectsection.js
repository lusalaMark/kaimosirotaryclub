import React from "react";
import CentercontentProjectsection from "./CentercontentProjectsection";
import SidebarcontentProjectsection from "./SidebarcontentProjectsection";
import "./Projectsection.css";
import Footer from "../../Footer";
import Mark from "../../Mark";

export default function Projectsection() {
  return (
    <div className="Projectsection">
      <div className="heading">
        <h1>Welcome</h1>
      </div>
      <div className="content__body">
        <SidebarcontentProjectsection />
        <CentercontentProjectsection />
      </div>
      <Footer />
      <Mark />
    </div>
  );
}
