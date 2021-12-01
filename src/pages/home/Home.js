import React, { useContext } from "react";
import Arrownav from "../../components/arrownav/Arrownav";
import LanguageContext from "../../context/languageContext";
import "./Home.css";
import ThemeContext from "../../context/themeContext";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);

  const spanish = () => {
    handleLanguage("es");
  };
  const english = () => {
    handleLanguage("en");
  };
  return (
    <div className={theme ? "home dark" : "home"}>
      <Arrownav />
      <h1>Marccos</h1>
      <h2 className={theme ? "subtitle dark" : "subtitle"}>Fullstack Developer</h2>

      <ul className="homeInteractive">
        <li className="homePortfolio">{texts.portfolio}</li>
        <li className="homeResume">{texts.resume}</li>
      </ul>

      <ul className="homeLanguage">
        <li onClick={spanish}>Español</li>
        <li onClick={english}>English</li>
      </ul>
    </div>
  );
};

export default Home;
