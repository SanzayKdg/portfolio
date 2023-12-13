import "./Portfolio.css";
import project1 from "./images/project1.png";

const Portfolio = () => {
  return (
    <div className="portfolio__container">
      <div className="portfolio__top">
        <h4 className="portfolio__heading">Portfolio</h4>
      </div>

      <div id="portfolio" className="portfolio__bottom">
        <div className="portfolio__lists">
          <div className="portfolio__left">
            <a className="project__link" href="#link">
              <img className="project__image" src={project1} alt="project 1" />
            </a>
          </div>
          <div className="portfolio__right">
            <div className="project__description__container">
              <h5 className="project__title">BizHub</h5>
              <p className="project__description">
                A business directory website for businesses to showcase what
                they offer & for customers to easily find what they need.
                Businesses, big or small, can list their services. A simple
                solution to connect businesses with customers.
              </p>

              <div className="tools__used">
                <p className="tools">MongoDB</p>
                <p className="tools">ExpressJS</p>
                <p className="tools">ReactJS</p>
                <p className="tools">NodeJS</p>
              </div>
            </div>

            <div className="project__demo__btns">
              <button className="demo__btns btn__primary">
                Demo
                <img className="demo__icons" src="/demo.svg" alt="live demo" />
              </button>
              <button className="demo__btns btn__secondary">
                Code
                <img
                  className="demo__icons"
                  src="/code.svg"
                  alt="source code"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
