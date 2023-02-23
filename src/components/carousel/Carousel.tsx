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
    title?: string,
    description?: string,
    img: string,
    alt: string,
    url?: string,
    id: number
}

interface ControlProps{
    show: boolean,
    disabled: boolean
}

interface CarouselProps {
    content: ContentProps[],
    auto: boolean,
    time: number,
    color: string,
    control: ControlProps,
    dot: boolean,
    transition: string,
    onChange?: (e: any) => void,
    onClick?: (e: any) => void
}

function Carousel(props: CarouselProps): ReactElement {
  const [card, setCard] = useState(props.content);
  const [picture, setPicture] = useState(0);
  
  const changeNext = (e: any): void => {
    picture >= card.length - 1 ? setPicture(0) : setPicture(picture + 1);
    if (props.onChange) props.onChange(e);
  };
  const changePrev = (e: any): void => {
    picture <= 0 ? setPicture(card.length - 1) : setPicture(picture - 1);
    if (props.onChange) props.onChange(e);
  };
  
  const currentContent = props.content[picture];
  

  return (
    <div className="carouselKit">
      <h2>Carousel</h2>
      <div className="picture-container">
        {currentContent && (
          <img  key={currentContent.id}
                src={currentContent.img}
                alt={`Image ${currentContent.id}`}/>
        )}
      </div>
      <div className="btnCarousel">
        <button className="btnPrev" onClick={changePrev}>&#8592;</button>
        <button className="btnNext" onClick={changeNext}>&#8594;</button>
      </div>
      <div className="btnSelect">
        {card.map((item, index) => (
          <button 
            key={item.id}
            style={index === picture ? {opacity: 1, width: "12px", height: "12px"} : {}}
            onClick={(): void => setPicture(index)}>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;