import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("#27374D");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    }
    else {
      setMode("light");
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm textTitle="Enter your text below" />
      <About></About>
    </>
  );
}

export default App;