import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import "./Socialmedia.css";

function Socialmedia() {
  return (
    <div className="socialmedia__links">
      <div className="facebook">
        <Facebook />
      </div>
      <div className="youtube">
        <YouTube />
      </div>
      <div className="instagram">
        <Instagram />
      </div>
      <div className="email">
        <Email />
      </div>
      <div className="twitter">
        <Twitter />
      </div>
      <div className="linkedin">
        <LinkedIn />
      </div>
    </div>
  );
}

export default Socialmedia;
