import React, { useContext } from "react";
import { ThemeContext } from "./List";
import '../index.css'

export const PopUp = ({data, handleClosePopUp}) => {
  const theme = useContext(ThemeContext)
    return (
      <div className={`popUp ${theme ? 'light' : 'dark'}`}>
        {data}
        <div onClick={handleClosePopUp}>x</div>    
      </div>
    );
}