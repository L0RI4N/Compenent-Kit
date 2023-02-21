import React, { ReactElement } from "react";
import "./App.scss";
import Carousel from "./components/carousel/Carousel";

function App(): ReactElement {
  return (
    <div className="App">
      <Carousel/>
    </div>
  );
}

export default App;
