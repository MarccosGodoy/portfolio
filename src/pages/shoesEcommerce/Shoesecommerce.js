import React, { useContext, useState } from "react";
import Barsnav from "../../components/barsnav/Barsnav";
import "./Shoesecommerce.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../context/languageContext";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";
import shoesDesktop from "../../images/shoesDesktop.png";
import shoesMobile from "../../images/shoesMobile.png";

const Shoesecommerce = () => {
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
    window.open("https://github.com/MarccosGodoy/shoesCommerce");
  };

  return (
    <div className={theme ? "porfolio dark" : "porfolio"}>
      <div className="aboutNavContainer">
        <nav
          className={open ? "contactNav active" : "contactNav "}
          style={{ backgroundColor: "#C88E01" }}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="bars"
            onClick={handleOpen}
          />
          <div className={open ? "content active" : "content "}>
            <h4>Shoes Ecommerce</h4>
            <ul className="knowlegdeUl">
              <li>Sneakers Ecommerce</li>
            </ul>
            <ul className="interactionPorfolio">
              <li>
                <Link to="/recipe">←</Link>
              </li>
              <li>01</li>
              <li>
                <Link to="/fbot">→</Link>
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
            style={imgswitch ? { color: "" } : { color: "#C88E01" }}
          >
            {texts.desktop}
          </li>
          <li
            onClick={switchImage}
            style={imgswitch ? { color: "#C88E01" } : { color: "" }}
          >
            {texts.mobile}
          </li>
        </ul>
        <div className="porfolioImages">
          <img
            src={shoesDesktop}
            alt=""
            className="desktop"
            className={imgswitch ? "desktop hide" : "desktop"}
            onClick={web}
          />
          <img
            src={shoesMobile}
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

export default Shoesecommerce;
