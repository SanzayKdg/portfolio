import "./Portfolio.css";
import { projects } from "./project";

const Portfolio = () => {
  return (
    <div className="portfolio__container">
      <div className="portfolio__top">
        <h4 className="portfolio__heading">Portfolio</h4>
      </div>

      <div id="portfolio" className="portfolio__bottom">
        {projects &&
          projects.map((item) => (
            <div className="portfolio__lists" key={item.name}>
              <div className="portfolio__left">
                <a className="project__link" href="#link">
                  <img
                    className="project__image"
                    src={item.image}
                    alt="project 1"
                  />
                </a>
              </div>
              <div className="portfolio__right">
                <div className="project__description__container">
                  <h5 className="project__title">{item.name}</h5>
                  <p className="project__description">{item.description}</p>

                  <div className="tools__used">
                    {item.tools.map((item) => (
                      <p className="tools" key={item}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="project__demo__btns">
                  <a href={item.demo__link}>
                    <button className="demo__btns btn__primary">
                      Demo
                      <img
                        className="demo__icons"
                        src="/demo.svg"
                        alt="live demo"
                      />
                    </button>
                  </a>
                  <a href={item.code__link}>
                    <button className="demo__btns btn__secondary">
                      Code
                      <img
                        className="demo__icons"
                        src="/code.svg"
                        alt="source code"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
