import React, { useContext } from "react";
import { ThemeContext } from "./List";


export const ThemedButton = ({className, text, ...props}) => {
    const theme = useContext(ThemeContext)
    return (
      <button 
      {...props} 
      className={`${className} 
      ${theme ? 'light' : 'dark'}`}>
        {text}
      </button>
    );

}