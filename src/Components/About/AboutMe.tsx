import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div id="about" className="about__container">
      <div className="about__top">
        <h4 className="about__heading">About Me</h4>
        <p className="about__description about__description1">
          I'm a Full Stack Developer with experience in tech stack like MongoDB,
          Express.js, React.js, and Node.js, Next.js and Nest.js. I specialize
          in making websites visually appealing with React and handling data
          effectively with MongoDB.
        </p>
        <p className="about__description about__description2">
          I love working with teams, and I'm all about turning creative ideas
          into user-friendly web applications. Let's team up to bring your
          vision to life and create web solutions that people will love using.
        </p>
      </div>

      <div className="about__mid">
        <img src="/about1.jpg" alt="sanjay khadgi" className="about__image" />
        <img src="/about2.jpg" alt="sanjay Khadgi" className="about__image" />
        <img src="/about3.jpg" alt="sanjay khadgi" className="about__image" />
      </div>

      <div className="about__bottom">
        <p className="tech__stack__btn">Tech Stack</p>

        <div className="tech__stack__list">
          <div className="tech">
            <img src="/mongo.svg" alt="mongodb" className="tech__image" />
            <p className="tech__name">MongoDB</p>
          </div>
          <div className="tech">
            <img src="/express.svg" alt="express js" className="tech__image" />
            <p className="tech__name">ExpressJS</p>
          </div>
          <div className="tech">
            <img src="/react.svg" alt="react js" className="tech__image" />
            <p className="tech__name">ReactJS</p>
          </div>
          <div className="tech">
            <img src="/node.svg" alt="node js" className="tech__image" />
            <p className="tech__name">NodeJS</p>
          </div>
          <div className="tech">
            <img src="/nest.svg" alt="nest js" className="tech__image" />
            <p className="tech__name">NestJS</p>
          </div>
          <div className="tech">
            <img src="/next.svg" alt="next js" className="tech__image" />
            <p className="tech__name">NextJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
