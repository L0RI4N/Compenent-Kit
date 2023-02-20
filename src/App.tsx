import React, { ReactElement } from "react";
import "./App.scss";
import Button from "./components/button/Button";

function App(): ReactElement {
  return (
    <div className="App">
      <Button 
        id="myButton"
        base="btn"
        type="filled"
        size="lg"
        label="Submit"
        disabled={false}
        icon={{
          name:"Jacky",
          pos:"only"
        }}
        onClick={(e: any):void => {
          console.log("It's OK");
        }}
      />
    </div>
  );
}

export default App;
