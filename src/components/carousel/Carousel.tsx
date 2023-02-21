/*
* FileName: Carousel.tsx
* Author: Lorian
* Date: Tue Feb 21 2023 11:45:18
* 
* Description: 
*/

import React, { ReactElement, useState } from "react";
import "./Carousel.scss";

interface ContentProps {
    title: string,
    description: string,
    img: string,
    alt: string,
    url: string
}

interface ControlProps{
    show: boolean,
    disabled: boolean
}

interface CarouselProps {
    content: ContentProps,
    auto: boolean,
    time: number,
    color: string,
    control: ControlProps,
    dot: boolean,
    transition: string
    onChange: (e: any) => void,
    onClick: (e: any) => void
}

const Pictures = [
  {id: 1, url:"https://plus.unsplash.com/premium_photo-1669083824032-ce43d1b2df55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
  {id: 2, url:"https://images.unsplash.com/photo-1676920410933-b8e5571e6f89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
  {id: 3, url:"https://plus.unsplash.com/premium_photo-1666544989783-13fc7091024f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
  {id: 4, url:"https://images.unsplash.com/photo-1676836957114-2156d8deaf3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
  {id: 5, url:"https://images.unsplash.com/photo-1676804957763-0512ecd30795?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
];

function Carousel(props: CarouselProps): ReactElement {
  const [card, setCard] = useState([]);
  const [picture, setPicture] = useState(0);
  

  const changeNext = (e: any): void => {
    picture >= card.length - 1 ? setPicture(0) : setPicture(picture + 1);
    props.onChange(e);
  };
  const changePrev = (e: any): void => {
    picture <= 0 ? setPicture(card.length - 1) : setPicture(picture - 1);
    props.onChange(e);
  };
  
  return (
    <div className="carouselKit">
      <div className="picture-container">
        {Pictures.map((image, index): ReactElement => {
          return (
            <img  key={image.id}
                  src={image.url}
                  alt={`Image ${image.id}`}
                  className={index === picture ? "active" : ""} />
          );
        })}
      </div>
      <div className="btnCarousel">
        <button className="btnNext" onClick={changeNext}>Next</button>
        <button className="btnPrev" onClick={changePrev}>Prev</button>
      </div>
    </div>
  );
}

export default Carousel;