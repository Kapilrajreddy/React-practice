
import React, { useContext } from "react";
import { ThemeContext } from "./ThemsContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <button className="toggle-button" onClick={toggleTheme}> {theme}</button>;
};

export default ThemeToggle;
