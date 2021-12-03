import React, { useContext, useRef, useState } from "react";
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
import emailjs from "emailjs-com";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const client = useRef();
  const email = useRef();
  const message = useRef();

  const handleOpen = () => {
    setOpen(!open);
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const response = await emailjs.send(
      'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID',
      {
        subject: "Mail de trabajo",
        name: client.current.value,
        email: email.current.value,
        message: message.current.value,
      },
      'YOUR_USER_ID'
    );

    console.log(response);
    client.current.value = "";
    email.current.value = "";
    message.current.value = "";
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
              <li
                onClick={() => navigator.clipboard.writeText("Marccos#7442")}
                style={{ cursor: "pointer" }}
              >
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
        <form onSubmit={contactForm}>
          <input
            type="text"
            placeholder={texts.name}
            className={theme ? "dark" : ""}
            ref={client}
          />
          <input
            type="email"
            placeholder="Email"
            className={theme ? "dark" : ""}
            ref={email}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder={texts.message}
            className={theme ? "dark" : ""}
            ref={message}
          ></textarea>
          <button type="submit">{texts.send}</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
