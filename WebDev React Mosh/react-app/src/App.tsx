// import Message from "./Message";
// import ListGroup from "./Components/ListGroup";
import {useState} from "react";
import Button from "./Components/Button";
import Alert from "./Components/Alert";

function App() {
  // logic for the on button click alert here.
  const [alertVisibility, setAlertVisibility] = useState(false);
  // return <div><Message></Message></div>

  // const Items = ["Egypt", "Greece", "Norway", "India", "Nepal", "China", "Japan", "USA"];

  //event handler.
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  return (
    // running the listgroup file here.
    // <div>
    //   <ListGroup listItem= {Items} heading= "Countries" onSelectItem={handleSelectItem}/>
    // </div>

    // running the alert file here. for string text prop.
    // <div>
    //   <Alert children = {"This is called Primary Alert !"}/>
    // </div>

    // running the alert file here. for html code prop.
    // <div>
    //   <Alert>
    //     This is <strong>Primary</strong> Alert!
    //   </Alert>
    // </div>

    // running the button component here.
    <div>
      {/* <Alert children="My Alert !"></Alert> */}
      {alertVisibility && <Alert onClose = {() => setAlertVisibility(false)} children="My Alert !"></Alert>}
      {/* <h1>Bootstrap Button Component File</h1> */}
      <br />
      <Button
        color="warning"
        children="Show Alert"
        // onClick={() => console.log("Button Clicked")}
        onClick={() => setAlertVisibility(true)}
      ></Button>
      {/* <Button>My Large Button</Button> */}
    </div>
  );
}

export default App;
