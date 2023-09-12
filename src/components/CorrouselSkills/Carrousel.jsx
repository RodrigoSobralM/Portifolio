import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import iconReact from "../../assets/react.svg";
import iconJs from "../../assets/js.png";
import iconHtml from "../../assets/html-5.png";
import iconCss from "../../assets/css-3.png";
import iconGit from "../../assets/github.png";
import iconVite from "../../assets/vite.png";
import iconExpress from "../../assets/express.png";

const Carrousel = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);
  return (
    <div className="geralSkills">
        <h1>SKILLS:</h1>
        <div className="marquee">
          <ul className="marquee-content">
            <li>
              <i className="fab fa-github">
                <img src={iconReact} alt="" />
              </i>
            </li>
            <li>
              <i className="fab fa-codepen">
                <img src={iconJs} alt="" />
              </i>
            </li>
            <li>
              <i className="fab fa-free-code-camp">
                <img src={iconHtml} alt="" />
              </i>
            </li>
            <li>
              <i className="fab fa-dev">
                <img src={iconCss} alt="" />
              </i>
            </li>
            <li>
              <i className="fab fa-react">
                <img src={iconGit} alt="" />
              </i>
            </li>
            <li>
              <i className="fab fa-react">
                <img src={iconVite} alt="" />
              </i>
            </li>
            <li>
              <i className="fab fa-react">
                <FontAwesomeIcon icon="fa-brands fa-node" />
              </i>
            </li>
            <li>
              <i className="fab fa-react">
                <img src={iconExpress} alt="" />
              </i>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Carrousel;
