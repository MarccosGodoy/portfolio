import React, { useContext, useState } from "react";
import "./Fbot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../context/languageContext";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";
import Barsnav from "../../components/barsnav/Barsnav";
import fbot from "../../images/fbot.png";
import fbotMobile from "../../images/fbotMobile.png";
const Fbot = () => {
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
          style={{ backgroundColor: "#0E8CF1" }}
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
                <Link to="/shoesEcommerce">←</Link>
              </li>
              <li>02</li>
              <li>
                <Link to="/gitgud">→</Link>
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
            style={imgswitch ? { color: "" } : { color: "#0E8CF1" }}
          >
            {texts.desktop}
          </li>
          <li
            onClick={switchImage}
            style={imgswitch ? { color: "#0E8CF1" } : { color: "" }}
          >
            {texts.mobile}
          </li>
        </ul>
        <div className="porfolioImages">
          <img
            src={fbot}
            alt=""
            className="desktop"
            className={imgswitch ? "desktop hide" : "desktop"}
          />
          <img
            src={fbotMobile}
            alt=""
            className="mobile"
            className={imgswitch ? "mobile " : "mobile hide"}
          />
        </div>
      </main>
    </div>
  );
};

export default Fbot;
