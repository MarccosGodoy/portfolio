import React, { useContext, useState } from "react";
import "./Gitgud.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../context/languageContext";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";
import Barsnav from "../../components/barsnav/Barsnav";
import gitgudDesktop from "../../images/gitgudDesktop.png";
import gitgudMobile from "../../images/gitgudMobile.png";
const Gitgud = () => {
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

  const web = () => {
    window.open('https://gitgud.games/');
  };

  return (
    <div className={theme ? "porfolio dark" : "porfolio"}>
      <div className="aboutNavContainer">
        <nav
          className={open ? "contactNav active" : "contactNav "}
          style={{ backgroundColor: "#F11036" }}
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
                <Link to="/fbot">←</Link>
              </li>
              <li>03</li>
              <li>
                <Link to="/recipe">→</Link>
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
            style={imgswitch ? { color: "" } : { color: "#F11036" }}
          >
            {texts.desktop}
          </li>
          <li
            onClick={switchImage}
            style={imgswitch ? { color: "#F11036" } : { color: "" }}
          >
            {texts.mobile}
          </li>
        </ul>
        <div className="porfolioImages">
          <img
            src={gitgudDesktop}
            alt=""
            className="desktop"
            className={imgswitch ? "desktop hide" : "desktop"}
            onClick={web}
          />
          <img
            src={gitgudMobile}
            alt=""
            className="mobile"
            className={imgswitch ? "mobile " : "mobile hide"}
            onClick={web}
          />
        </div>
      </main>
    </div>
  );
};

export default Gitgud;
