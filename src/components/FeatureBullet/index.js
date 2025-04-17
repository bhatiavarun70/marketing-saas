import React from "react";
import "./featureBullet.css";
import TickIcon from "../TickIcon";

const FeatureBullet = ({ content }) => {
  return (
    <div className="info-section">
      <TickIcon />
      <p className="info-section-text">{content}</p>
    </div>
  );
};

export default FeatureBullet;
