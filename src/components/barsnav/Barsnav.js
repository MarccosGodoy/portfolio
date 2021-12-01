import React, { useContext, useState } from "react";
import "./Barsnav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faHome,
  faUser,
  faUserGraduate,
  faUserTie,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../context/languageContext";
import ThemeContext from "../../context/themeContext";

const Barsnav = ({ show }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <div
      className={
        show ? "barsnav active grid grid-center " : "barsnav grid grid-center"
      }
    >
      <ul className="barsnavUl grid-center col-all">
        <li>
          <FontAwesomeIcon
            icon={theme ? faSun : faMoon}
            className="themeChanger "
            onClick={changeTheme}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faHome} className="barsnavIcon" />
          <Link to="/" className="barsnavLink">
            {texts.home}
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className="barsnavIcon" />
          <Link to="/about" className="barsnavLink">
            {texts.about}
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserGraduate} className="barsnavIcon" />
          <Link to="/knowledge" className="barsnavLink">
            {texts.knowledge}
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserTie} className="barsnavIcon" />
          <Link to="/contact" className="barsnavLink">
            {texts.contact}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Barsnav;
