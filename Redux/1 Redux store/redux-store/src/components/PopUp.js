import React from "react";
import '../index.css'
import { themeSelector } from "../store";
import { useSelector } from "react-redux";

export const PopUp = ({data, handleClosePopUp}) => {
  const theme = useSelector(themeSelector)
    return (
      <div className={`popUp ${theme ? 'light' : 'dark'}`}>
        {data}
        <div onClick={handleClosePopUp}>x</div>    
      </div>
    );
}