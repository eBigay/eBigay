import React from "react";
import HeroImg from "../assets/images/HeroImg.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2>Join Positive Karma Movement Today</h2>
        <h3>
          Give away long forgotten item another chance to serve the humanity
        </h3>
        <button className="primary-btn clean-btn">Explore more</button>
      </div>
      <img src={HeroImg} alt="" className="hero-img" />
    </div>
  );
};

export default Hero;
