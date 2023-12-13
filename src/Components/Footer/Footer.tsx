import { useState } from "react";
import "./Footer.css";
const Footer = () => {
  const [inIcon, setInIcon] = useState(false);
  const [gitIcon, setGitIcon] = useState(false);
  return (
    <div className="footer__container">
      <p className="footer__text">
        &copy; Copyright Sanjay Khadgi 2023. All rights reserved.
      </p>
      <div className="footer__social__links">
        <a
          onMouseEnter={() => setInIcon(!inIcon)}
          onMouseLeave={() => setInIcon(!inIcon)}
          href="https://www.linkedin.com/in/sanjay-khadgi-243623242/"
        >
          <img
            src={inIcon ? "/in_light.svg" : "/in.svg"}
            className="footer__icon"
            alt="linkedin link"
          />
        </a>
        <a
          href="https://github.com/SanzayKdg"
          onMouseEnter={() => setGitIcon(!gitIcon)}
          onMouseLeave={() => setGitIcon(!gitIcon)}
        >
          <img
            className="footer__icon"
            src={gitIcon ? "/git_light.svg" : "/git.svg"}
            alt="github link"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
