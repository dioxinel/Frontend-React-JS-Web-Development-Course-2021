import React from "react";
import s from '../index.module.scss'

export function Image({imgUrl}) {
  return (
    <img src={imgUrl} alt={"Not"} className={s.img}></img>
  );
}

