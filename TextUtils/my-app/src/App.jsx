import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { createContext, useState } from "react";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

    // title flash.
    // setInterval(() => {
    //   document.title = "Install TextUtil Now!"
    // }, 2000);
    // setInterval(() => {
    //   document.title = "TextUtil is Amazing!"
    // }, 1300);
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <NavBar title="TextUtils" aboutText="About" text={theme === "dark" ? "Enable Light Mode" : "Enable Dark Mode"} toggleTheme={toggleTheme} theme={theme} />
          <Alert alertText={alert} />
          <Routes>
            <Route path="/" element={<TextForm textTitle="Enter your text below" showAlert={showAlert} />} />
            <Route path="About" element={<About />} />
          </Routes>
          <Footer/>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;