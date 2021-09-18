import React from "react";
import { useSelector } from "react-redux";
import { themeSelector } from "../store";


export const ThemedButton = ({className, text, ...props}) => {
  const theme = useSelector (themeSelector)
    return (
      <button 
      {...props} 
      className={`${className} 
      ${theme ? 'light' : 'dark'}`}>
        {text}
      </button>
    );
}