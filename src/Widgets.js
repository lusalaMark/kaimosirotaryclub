import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Club News </h2>
        <div className="widgets__articleRightTop">
          <InfoIcon />
        </div>
      </div>
      {newsArticle("Mark is bak", "Trending with - 9999 readers ")}
      {newsArticle("Mark is bak", "Trending with - 9999 readers ")}
      {newsArticle("Mark is bak", "Trending with - 9999 readers ")}
      {newsArticle("Mark is bak", "Trending with - 9999 readers ")}
      {newsArticle("Mark is bak", "Trending with - 9999 readers ")}
    </div>
  );
}

export default Widgets;
