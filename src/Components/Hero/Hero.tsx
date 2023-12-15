import React, { useState } from "react";
import "./Hero.css";
import TypeWriter from "typewriter-effect";
const Hero = () => {
   return (
    <div className="hero__section">
      <h3 className="hero__title1">Hey there, I'm Sanjay Khadgi.</h3>
      <h1 className="hero__mainTitle">
        {/* <TypeWriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: [
              "Full Stack Developer",
              "MERN Stack Developer",
              "Web Designer",
            ],
          }}
        /> */}
        MERN STACK DEVELOPER
      </h1>
      <p className="hero__description">
        I make websites awesome using the MERN stack. If you want a developer
        who gets things done, let's chat and make your online presence stand
        out.
      </p>
      <a href="#portfolio">
        <button className="hero__button">
          <p className="hero__link">See My Works</p>
          <img
            src="/down.svg"
            
            alt="down"
            className="hero__down__icon"
          />
        </button>
      </a>
    </div>
  );
};

export default Hero;
