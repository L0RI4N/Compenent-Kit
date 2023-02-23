import React, { ReactElement } from "react";
import "./App.scss";
import Carousel from "./components/carousel/Carousel";

function App(): ReactElement {
  const pictures = [
    {id: 1, img:"https://plus.unsplash.com/premium_photo-1669083824032-ce43d1b2df55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", alt: "image"},
    {id: 2, img:"https://images.unsplash.com/photo-1676920410933-b8e5571e6f89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", alt: "image"},
    {id: 3, img:"https://plus.unsplash.com/premium_photo-1666544989783-13fc7091024f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", alt: "image"},
    {id: 4, img:"https://images.unsplash.com/photo-1676836957114-2156d8deaf3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "image"},
    {id: 5, img:"https://images.unsplash.com/photo-1676804957763-0512ecd30795?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "image"}
  ];
  const control = {
    show: true,
    disabled: false
  };

  return (
    <div className="App">
      <Carousel
        content= {pictures}
        auto= {true}
        time= {2000}
        color= "white"
        control= {control}
        dot= {true}
        transition= "linear"
      />
    </div>
  );
}

export default App;
