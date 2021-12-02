import React, { useContext, useState } from 'react'
import './Recipe.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../context/languageContext";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";
import Barsnav from "../../components/barsnav/Barsnav";
import recipeDesktop from "../../images/recipeDesktop.png";
import recipeMobile from "../../images/recipeMobile.png";
const Recipe = () => {

    const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const [imgswitch, setImgswitch] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const switchImage = () => {
    setImgswitch(!imgswitch);
  };


    return (
        <div className={theme ? "porfolio dark" : "porfolio"}>
          <div className="aboutNavContainer">
            <nav
              className={open ? "contactNav active" : "contactNav "}
              style={{ backgroundColor: "#D225F3" }}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="bars"
                onClick={handleOpen}
              />
              <div className={open ? "content active" : "content "}>
                <h4>FBOT</h4>
                <ul className="knowlegdeUl">
                  <li>Web App</li>
                </ul>
                <ul className="interactionPorfolio">
                  <li>
                    <Link to="/gitgud">←</Link>
                  </li>
                  <li>04</li>
                  <li>
                    <Link to="/shoesEcommerce">→</Link>
                  </li>
                </ul>
              </div>
              <div className={open ? "divide active" : "divide"}></div>
              <Barsnav show={open} />
            </nav>
          </div>
    
          <main className="portfolioMain">
            <ul className={theme ? "imageSwitcher dark" : "imageSwitcher"}>
              <li
                onClick={switchImage}
                style={imgswitch ? { color: "" } : { color: "#D225F3" }}
              >
                {texts.desktop}
              </li>
              <li
                onClick={switchImage}
                style={imgswitch ? { color: "#D225F3" } : { color: "" }}
              >
                {texts.mobile}
              </li>
            </ul>
            <div className="porfolioImages">
              <img
                src={recipeDesktop}
                alt=""
                className="desktop"
                className={imgswitch ? "desktop hide" : "desktop"}
              />
              <img
                src={recipeMobile}
                alt=""
                className="mobile"
                className={imgswitch ? "mobile " : "mobile hide"}
              />
            </div>
          </main>
        </div>
      );
}


export default Recipe