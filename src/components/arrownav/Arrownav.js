import React, { useContext, useState } from "react";
import "./Arrownav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faHome,
  faUser,
  faUserGraduate,
  faUserTie,
  faCaretDown,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../context/languageContext";
import ThemeContext from "../../context/themeContext";

const Arrownav = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const [openNav, setOpenNav] = useState(false);

  const handleArrownav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="arrownav col-all grid">
      <ul className={openNav ? "arrownavUl active grid" : "arrownavUl grid"}>
        <li className="grid-center ">
          <FontAwesomeIcon
            icon={theme ? faSun : faMoon}
            className="themeChanger"
            onClick={changeTheme}
          />
        </li>
        <li className="col-all grid">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <Link to="/" className="arrownavLink">
            {texts.home}
          </Link>
        </li>
        <li className="col-all grid">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <Link to="/about" className="arrownavLink">
            {texts.about}
          </Link>
        </li>
        <li className="col-all grid">
          <FontAwesomeIcon icon={faUserGraduate} className="icon" />
          <Link to="/knowledge" className="arrownavLink">
            {texts.knowledge}
          </Link>
        </li>
        <li className="col-all grid">
          <FontAwesomeIcon icon={faUserTie} className="icon" />
          <Link to="/contact" className="arrownavLink">
            {texts.contact}
          </Link>
        </li>
        <li className="col-all grid-center">
          <FontAwesomeIcon
            icon={faCaretDown}
            className={openNav ? "arrow active" : "arrow"}
            onClick={handleArrownav}
          />
        </li>
      </ul>
    </div>
  );
};

export default Arrownav;
