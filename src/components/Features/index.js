import React from "react";
import "./features.css";
import { TbBadgeHd } from "react-icons/tb";
import { RiWaterPercentLine } from "react-icons/ri";
import { FaRainbow } from "react-icons/fa";

const Features = ({ type, image, title, subTitle, helpText, content }) => {
  return (
    <div className="features-container">
      <div className="features-content-wrapper">
        <div className="features-content">
          <div className="header-container">
            <div className="header-help-text">
              <p className="help-text">{helpText}</p>
            </div>
            <div className="header-title">
              <h2 className="title">{title}</h2>
            </div>
            <div className="header-subtitle">
              <p className="subtitle">{subTitle}</p>
            </div>
          </div>
          <div className="features-content-container">
            <div className="feature-content-wrapper">
              <div className="feature-content">
                <div className="content-image">
                  <TbBadgeHd className="logo-component" />
                </div>
                <div className="content-text">
                  <h6 className="content-title">5K resolution support</h6>
                  <p className="content-description">
                    All images boast a minimum resolution of 5K, ensuring crisp
                    and crystal-clear quality
                  </p>
                </div>
              </div>
              <div className="feature-content">
                <div className="content-image">
                  <RiWaterPercentLine className="logo-component" />
                </div>
                <div className="content-text">
                  <h6 className="content-title">From water to glass</h6>
                  <p className="content-description">
                    We offer a wide variety array of abstractions, ranging from
                    water to glass, and encompassing various styles including 3D
                    and vector.
                  </p>
                </div>
              </div>
              <div className="feature-content">
                <div className="content-image">
                  <FaRainbow className="logo-component" />
                </div>
                <div className="content-text">
                  <h6 className="content-title">Portrait or landscape</h6>
                  <p className="content-description">
                    Effortlessly adapt your images for any platform - whether
                    its a stunning wallpaper or captivating Instagram reels.
                  </p>
                </div>
              </div>
            </div>
            <div className="features-image">
              <img className="feature-image" src={image} alt="feature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
