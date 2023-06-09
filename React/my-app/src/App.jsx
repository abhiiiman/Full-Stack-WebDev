import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About TextUtils" />
      <TextForm textTitle = "Enter your text below"/>
    </>
  );
}

export default App;