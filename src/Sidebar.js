import React from "react";
import "./Sidebar.css";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import image1 from "./images/mother-and-child.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>Kaimosi Rotary Club</h2>
        <h5>Rotary Opens opportunities</h5>
        <h4>
          The Rotary Club of Kaimosi continues to meet on Zoom at noon on
          Tuesdays through in response to health advisories. Please contact
          Chris Offer if you wish to join the meeting featuring any of the guest
          speakers listed in the right hand column.
        </h4>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitleMain">
          <p>
            <h1>ROTARY STORIES</h1>
          </p>
        </div>

        <div className="sidebar__bottomTitle">
          <h2>
            Millions under age 5, mothers giving birth, die -- Rotary acts
            Posted
          </h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on on Apr 012021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              babies birth mother mother and child
            </h4>
          </div>
        </div>

        <div className="article__body">
          <div className="article__image">
            <img src={image1} alt="" />
          </div>
          <p>
            Almost six million children under the age of five die every year
            because of malnutrition, inadequate health care, and poor
            sanitation. As people of action, Rotarians have been working with
            authorities in various countries to prevent those deaths. They have
            also been working on reducing maternal deaths by 30% through family
            planning and ultimately empowering women. Poverty and hunger can be
            alleviated if mothers are empowered and healthy, and in turn, their
            families. Thanks to the Rotary Foundation, communities receive the
            help and training they need to take control of their own maternal
            and infant health care.
          </p>
        </div>

        <div className="readme__button">
          <button type="submit">Read more...</button>
        </div>
      </div>

      {/* first article ends here */}
      <div className="sidebar__bottom">
        <div className="sidebar__bottomTitle">
          <h2>
            Millions under age 5, mothers giving birth, die -- Rotary acts
            Posted
          </h2>
        </div>

        <div className="sidebar__bottomLeftRight">
          <div className="sidebar__bottomLeft">
            <h3>
              <DateRangeIcon />
              Posted on on Apr 012021
            </h3>
          </div>

          <div className="sidebar__bottomRight">
            <h4>
              <LocalOfferIcon />
              babies birth mother mother and child
            </h4>
          </div>
        </div>

        <div className="article__body">
          <div className="article__image">
            <img src={image1} alt="" />
          </div>
          <p>
            Almost six million children under the age of five die every year
            because of malnutrition, inadequate health care, and poor
            sanitation. As people of action, Rotarians have been working with
            authorities in various countries to prevent those deaths. They have
            also been working on reducing maternal deaths by 30% through family
            planning and ultimately empowering women. Poverty and hunger can be
            alleviated if mothers are empowered and healthy, and in turn, their
            families. Thanks to the Rotary Foundation, communities receive the
            help and training they need to take control of their own maternal
            and infant health care.
          </p>
        </div>

        <div className="readme__button">
          <button type="submit">Read more...</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
