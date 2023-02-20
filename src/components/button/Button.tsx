/*
* FileName: Button.tsx
* Author: Lorian
* Date: Mon Feb 20 2023 11:25:36
* 
* Description: 
*/

import React, { ReactElement, useState } from "react";
import "./Button.scss";

interface IconProps {
    name:string,
    pos:string
}

interface BtnProps {
    id: string,
    base: string,
    type: string,
    size: string,
    label: string,
    disabled: boolean,
    icon: IconProps,
    onClick: (e: any) => void,
}


function Button(props: BtnProps): ReactElement {
  return (
    <div className="btnKit">
      <button className={`${props.base} ${props.type} ${props.size}`}
              id={props.id}
              onClick={props.onClick}
              disabled={props.disabled}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;