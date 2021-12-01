import React, { useEffect, useState } from "react";
import Barsnav from "../../components/barsnav/Barsnav";
import "./About.css";
import profilePicture from "../../images/Pick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import LanguageContext from "../../context/languageContext";
import ThemeContext from "../../context/themeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { language, texts } = useContext(LanguageContext);
  const [spanish, setSpanish] = useState(
    <p>
      Mi nombre es Marcos Godoy, soy un desarrollador autodidacta. <br />
      Desde que tengo memoria estoy ligado con la creatividad y la tecnologia.{" "}
      <br />
      Mis primeros roces con lo digital fueron por el lado del diseño, la
      fotografia y el dibujo. <br />
      Por varios años me dedique a crear videos y dibujos digitales
      personalizados Con el correr del tiempo encontré la programacion y apenas
      vi todo lo que se podia lograr quede fascinado. <br />
      Estoy interesado en trabajar en nuevos proyectos que me presenten retos y
      me ayuden a seguir ampliando mis conocimientos
    </p>
  );
  const [english, setEnglish] = useState(
    <p>
      My name is Marcos Godoy, I am a self-taught developer. <br />
      Since I can remember I have been linked to creativity and technology.
      <br />
      My first brush with digital was on the side of design, photography and
      drawing. <br />
      For several years I dedicated myself to creating videos and personalized
      digital drawings <br /> As time went by I found the programming and in the
      moment i see everything thats possible, i was fascinated. <br /> I am
      interested in working on new projects that present me with challenges and
      help me to continue expanding my knowledge
    </p>
  );
  const [open, setOpen] = useState(false);
  const [aboutMe, setAboutMe] = useState(spanish);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (language === "es") {
      setAboutMe(spanish);
    } else if (language === "en") {
      setAboutMe(english);
    }
  }, [language]);

  return (
    <div className={theme ? "about dark" : "about"}>
      <div className="aboutNavContainer">
        <nav className={open ? "contactNav active" : "contactNav "}>
          <FontAwesomeIcon
            icon={faBars}
            className="bars"
            onClick={handleOpen}
          />
          <div className={open ? "aboutContent active" : "aboutContent "}>
            <img
              src={profilePicture}
              alt="profile"
              className={open ? "profile active" : "profile"}
            />
          </div>
          <div className={open ? "divide active" : "divide"}></div>
          <Barsnav show={open} />
        </nav>
      </div>

      <main className="aboutMain">
        <h3>{texts.about}</h3>
        <p className={theme ? "aboutText dark" : "aboutText "}>{aboutMe}</p>
      </main>
    </div>
  );
};

export default About;
