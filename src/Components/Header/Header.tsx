import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [close, setClose] = useState(false);
  const [inIcon, setInIcon] = useState(false);
  const [gitIcon, setGitIcon] = useState(false);
  return (
    <div
      className={`header__container ${close ? "open__header__container" : ""}`}
    >
      <div className={`left ${close ? "open__left" : ""}`}>
        <ul
          className={`header__ul left__contents ${
            close ? "open__left__contents open__header__ul" : ""
          }`}
        >
          <li
            className={`nav__image list__items border__radius cursor__pointer ${
              close ? "open__nav__image" : ""
            }`}
          >
            <img
              src={close ? "./logo528.png" : "/logo.jpg"}
              className={`header__image ${close ? "open__header__image" : ""}`}
              alt="profile-img"
            />
          </li>
          <li
            className={`list__items cursor__pointer header__links ${
              close ? "open__header__links" : ""
            }`}
          >
            <p onClick={() => {
              setClose(!close);
            }}
              className={`header__p header__link ${
                close ? "open__header__p" : ""
              }`}
            >
              <a href="#about">About Me</a>
            </p>
          </li>
          <li
            className={`list__items cursor__pointer header__links ${
              close ? "open__header__links" : ""
            }`}
          >
            <p onClick={() => {
              setClose(!close);
            }}
              className={`header__p header__link ${
                close ? "open__header__p" : ""
              }`}
            >
              <a href="#portfolio">Projects</a>
            </p>
          </li>
          <li
            className={`list__items cursor__pointer header__links ${
              close ? "open__header__links" : ""
            }`}
          >
            <p onClick={() => {
              setClose(!close);
            }}
              className={`header__p header__link ${
                close ? "open__header__p" : ""
              }`}
            >
              <a href="#contact">Contact</a>
            </p>
          </li>
        </ul>
      </div>

      <div
        className={`right__container ${close ? "open__right__container" : ""}`}
      >
        <div className="right__contact">
          <ul className="header__ul mid__contents">
            <li className="list__items ">
              <p className="header__p item__email">
                sanjaykhadgi9861@gmail.com
              </p>
            </li>
            <li className="list__items">
              <p className="header__p">+977 9861365442</p>
            </li>
          </ul>
        </div>

        <div className="header__divider" />

        <div className={`right__social ${close ? "open__right__social" : ""}`}>
          <ul className="header__ul right__contents">
            <li className="list__items border__radius cursor__pointer">
              <a
                onMouseEnter={() => setInIcon(!inIcon)}
                onMouseLeave={() => setInIcon(!inIcon)}
                className="social__link"
                href="https://www.linkedin.com/in/sanjay-khadgi-243623242/"
              >
                <img
                  src={inIcon ? "/in_light.svg" : "/in.svg"}
                  className="social__links header__social__icons"
                  alt="linkedin"
                />
              </a>
            </li>
            <li className="list__items border__radius cursor__pointer">
              <a
                onMouseEnter={() => setGitIcon(!gitIcon)}
                onMouseLeave={() => setGitIcon(!gitIcon)}
                className="social__link"
                href="https://github.com/SanzayKdg"
              >
                <img
                  className="social__links header__social__icons"
                  src={gitIcon ? "/git_light.svg" : "/git.svg"}
                  alt="github"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="responsive__menu">
          <div className="header__divider responsive__divider" />
          <img
            src={close ? "/close.svg" : "/menu.svg"}
            alt=""
            className={`cursor__pointer border__radius hamburger__menu ${
              close ? "rotate__element close__btn" : "unrotate__element"
            }`}
            onClick={() => {
              setClose(!close);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
