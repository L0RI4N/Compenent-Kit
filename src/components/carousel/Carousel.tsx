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

function Carousel(props: CarouselProps): ReactElement {
  const [card, setCard] = useState([]);
  const [picture, setPicture] = useState(0);

  const ChangeNext = () => {
    return picture >= card.length - 1 ? setPicture(0) : setPicture(picture + 1);
  };
  const ChangePrev = () => {
    return picture <= 0 ? setPicture(card.length - 1) : setPicture(picture - 1);
  };
  
  return (
    <div className="carouselKit">
      <div className="btnCarousel">
        <button className="btnNext" onClick={ChangeNext}></button>
        <button className="btnPrev" onClick={ChangePrev}></button>
      </div>
    </div>
  );
}

export default Carousel;