import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { createContext, useState } from "react";
import Alert from "./Components/Alert";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000); //2 secs.
  }

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    showAlert("Theme has been Switched", "Success");
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <NavBar title="TextUtils" aboutText="About TextUtils" text={theme === "dark" ? "Enable Light Mode" : "Enable Dark Mode"} toggleTheme = {toggleTheme} theme = {theme}/>
          <Alert alertText = {alert}/>
          <TextForm textTitle="Enter your text below" showAlert = {showAlert}/>
          <About></About>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;