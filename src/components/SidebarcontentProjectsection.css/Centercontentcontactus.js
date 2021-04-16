import React from "react";
import "./Centercontentcontactus.css";
import Socialmedia from "./Socialmedia";
import image1 from "../../images/mother-and-child.jpg";

function Centercontentcontactus() {
  return (
    <div className="content__center">
      <p>
        <h4>
          If you have any questions or comments, please let us know. We look
          forward to hearing from you.
        </h4>
      </p>
      <div className="content__cen">
        <div className="contactpeople">
          <div className="picdescription">
            <div className="pic">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="imgtext">
            <h4>President</h4>
            Peter Roaf
            <br />
            proaf@shaw.ca
            <br />
            604-839-1465
          </div>
        </div>
        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">
            <h4> Membership Chair</h4>
            Lynn Cameron
            <br />
            lynncameron@dccnet.com
            <br />
            604-839-1465
          </div>
        </div>
        <div className="contactpeople">
          <div className="bottomtext">
            <p>Club Mailing address</p>
            Rotary Club of Ladner
            <br />
            PO Box 77
            <br />
            Delta BC V4K 3N5
          </div>
        </div>
        <div className="contactpeople">
          <div className="bottomtext">
            <p>Meeting Location</p>
            <h5>
              Tuesday 12:05 PM
              <br />
              Coast Tsawwassen Inn
              <br />
              1665 – 56th Street
              <br />
              Delta, BC V4L 2B2
              <br />
              Canada
              <br />
              tsawwasseninn.com
            </h5>
          </div>
        </div>
        <div className="contentlinks__bottom">
          <h3>Our International Network</h3>
          Rotary International
          <br />
          RI President Home
          <br />
          About Rotary
          <br />
          Rotary History
          <br />
          Rotary Foundation
          <br />
          Joining Rotary
          <br />
          For New Members
        </div>
        <div className="socialmedia__icons">
          <Socialmedia />
        </div>
      </div>
    </div>
  );
}

export default Centercontentcontactus;
