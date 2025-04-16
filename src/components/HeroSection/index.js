import React from "react";
import "./heroSection.css";
import image from "../../assets/prism.png";

const HeroSection = ({
  type,
  title = "Sample Title",
  subtitle = "Hero section description",
  bullets,
}) => {
  return (
    <div className="hero-section-container">
      <div className="hero-section-content">
        <div className="hero-section-header">
          <div className="hero-section-header-content">
            <h2 className="hero-section-banner-title">{title}</h2>
            <p className="hero-section-banner-subtitle">{subtitle}</p>
          </div>
          <div className="hero-section-header-actions">
            <button className="btn btn-secondary btn-size-xl-2xl">
              Learn More
            </button>
            <button className="btn btn-primary btn-size-xl-2xl">
              See Pricing
            </button>
          </div>
        </div>
        <div className="hero-section-banner-illustration">
          <img
            className="hero-section-banner-image"
            src={image}
            alt="hero section banner"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
