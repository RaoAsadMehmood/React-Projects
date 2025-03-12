import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div
      className="hero_container"
      style={{ flexDirection: props.isDirectionLeft ? "row-reverse" : "row" }}
    >
      <div className="content_container">
        <h1 className="hero_heading">{props.heading}</h1>
        <p className="hero_description">{props.description}</p>
        <button className="hero_button">Shop Now!</button>
      </div>

      <div className="image_container">
        <img src={props.image} alt={props.heading} className="hero_image" />
      </div>
    </div>
  );
};

export default Hero;