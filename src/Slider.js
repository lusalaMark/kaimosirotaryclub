import "./Slider.css";

import React from "react";

function slider() {
  return (
    <div className="slider">
      <div className="sliderLeft">
        <p>
          Quote of the day...
          <br />
          Almost six million children under the age of five die every year
          because of malnutrition, inadequate health care, and poor sanitation.
          As people of action, Rotarians have been working with authorities in
          various countries to prevent those deaths.
        </p>
      </div>
      <div className="sliderCenter"></div>
      <div className="sliderRight">
        <p>
          Verse of the day
          <br />
          They have also been working on reducing maternal deaths by 30% through
          family planning and ultimately empowering women. Poverty and hunger
          can be alleviated if mothers are empowered and healthy, and in turn,
          their families. Thanks to the Rotary Foundation, communities receive
          the help and training they need to take control of their own maternal
          and infant health care.
        </p>
      </div>
    </div>
  );
}

export default slider;
