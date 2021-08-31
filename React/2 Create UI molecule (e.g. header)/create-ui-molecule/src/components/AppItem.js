import React from "react";
import s from '../index.module.scss'

export function AppItem({name, description, Image}) {
  return (
    <div className={s.AppItem}>
      <h3>{name}</h3>
      {Image}
      <p>{description}</p>
    </div>
  );
}


