import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <NavBar title="TextUtils" aboutText="About TextUtils" />
          <TextForm textTitle="Enter your text below" />
          <About></About>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;