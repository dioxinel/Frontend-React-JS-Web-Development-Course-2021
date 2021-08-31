import React from "react";
import s from '../index.module.scss'

export function AppWrapper({title, children}) {
  return (
    <>
      <div className={s.AppWrapper}>
        <h2>{title}</h2>
      </div>
      <div className={s.itemsList}>{children}</div>
    </>
  );
}




