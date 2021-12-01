import React, { useContext, useState } from "react";
import Barsnav from "../../components/barsnav/Barsnav";
import "./Knowledge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../context/languageContext";
import ThemeContext from "../../context/themeContext";

const Knowledge = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={theme ? "knowledge dark" : "knowledge"}>
      <div className="aboutNavContainer">
        <nav className={open ? "contactNav active" : "contactNav "}>
          <FontAwesomeIcon
            icon={faBars}
            className="bars"
            onClick={handleOpen}
          />
          <div className={open ? "content active" : "content "}>
            <h4>{texts.learning}</h4>
            <ul className="knowlegdeUl">
              <li>Typescript</li>
              <li>React Native</li>
              <li>Unity</li>
            </ul>
          </div>
          <div className={open ? "divide active" : "divide"}></div>
          <Barsnav show={open} />
        </nav>
      </div>

      <main className="knowledgeMain">
        <h3>{texts.knowledge}</h3>
        <table>
          <tr>
            <th colSpan="3">{texts.programming}</th>
          </tr>
          <tr>
            <td>Html</td>
            <td>Css</td>
            <td>Javascript</td>
          </tr>
          <tr>
            <td>Express</td>
            <td>Mongo DB</td>
            <td>React Js</td>
          </tr>
        </table>

        <table>
          <tr>
            <th colSpan="3">{texts.design}</th>
          </tr>
          <tr>
            <td>Illustrator</td>
            <td>Photoshop</td>
            <td>Figma</td>
          </tr>
        </table>
      </main>
    </div>
  );
};

export default Knowledge;
