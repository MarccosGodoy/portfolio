import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = false;

//False = Light
// True = Dark

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = () => {
    setTheme(!theme);
  };
  const data = { theme, changeTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
