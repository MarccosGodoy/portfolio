import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";

const translations = {
  es: {
    portfolio: "Portafolio",
    resume: "Curriculum",
    home: "Inicio",
    about: "Sobre Mi",
    knowledge: "Conocimientos",
    contact: "Contacto",
    aboutMe: `Mi nombre es Marcos Godoy, soy un desarrollador autodidacta.
    Desde que tengo memoria estoy ligado con la creatividad y la tecnologia.
    Mis primeros roces con lo digital fueron por el lado del diseño, la fotografia
    y el dibujo.
    Por varios años me dedique a crear videos y dibujos digitales personalizados
    Con el correr del tiempo encontré la programacion y apenas vi todo lo que 
    se podia lograr quede fascinado
    Estoy interesado en trabajar en nuevos proyectos que me presenten retos 
    y me ayuden a seguir ampliando mis conocimientos`,
    programming: "Programacion",
    design: "Diseño",
    learning: "Aprendiendo",
    name: "Nombre",
    message: "Mensaje",
    send: "Enviar",
    alternatives: "Alternativas",
  },
  en: {
    portfolio: "Portfolio",
    resume: "Resume",
    home: "Home",
    about: "About",
    knowledge: "Knowledge",
    contact: "Contact",
    aboutMe: `My name is Marcos Godoy, I am a self-taught developer.
    Since I can remember I have been linked to creativity and technology.
    My first brush with digital was on the side of design, photography
    and drawing.
    For several years I dedicated myself to creating videos and personalized digital drawings
    As time went by I found the programming and in the moment i see everything thats possible, i was fascinated
    I am interested in working on new projects that present me with challenges
    and help me to continue expanding my knowledge`,
    programming: "Programming",
    design: "Design",
    learning: "Learning",
    name: "Name",
    message: "Message",
    send: "Send",
    alternatives: "Alternatives",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  const handleLanguage = (lang) => {
    setLanguage(lang);
  };

  const data = { texts, handleLanguage, language };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
