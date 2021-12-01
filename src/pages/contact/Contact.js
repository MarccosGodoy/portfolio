import React, { useContext, useState } from "react";
import Barsnav from "../../components/barsnav/Barsnav";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faDiscord,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import LanguageContext from "../../context/languageContext";
import ThemeContext from "../../context/themeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={theme ? "contact dark" : "contact"}>
      <div className="navContainer">
        <nav className={open ? "contactNav active" : "contactNav "}>
          <FontAwesomeIcon
            icon={faBars}
            className="bars"
            onClick={handleOpen}
          />

          <div className={open ? "content active" : "content "}>
            <h4>{texts.alternatives}</h4>
            <ul className="contactContentUl">
              <li>
                <FontAwesomeIcon icon={faWhatsapp} className="contactIcon" />
                <a
                  href="https://api.whatsapp.com/send/?phone=541131118953&text&app_absent=0"
                  target="blank"
                  className="contactAction"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  className="contactIcon"
                />
                <a
                  href="mailto:maarcos29@gmail.com"
                  target="blank"
                  className="contactAction"
                >
                  Gmail
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} className="contactIcon" />
                <a
                  href="https://www.linkedin.com/in/marccosgodoy/"
                  target="_blank"
                  className="contactAction"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faDiscord} className="contactIcon" />
                <p className="contactAction">Discord</p>
              </li>
            </ul>
          </div>
          <div className={open ? "divide active" : "divide"}></div>
          <Barsnav show={open} />
        </nav>
      </div>

      <main>
        <h3>{texts.contact}</h3>
        <form action="">
          <input type="text" placeholder={texts.name} className={theme? "dark" : ""} />
          <input type="email" placeholder="Email" className={theme? "dark" : ""} />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder={texts.message}
            className={theme? "dark" : ""}
          ></textarea>
          <button>{texts.send}</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
