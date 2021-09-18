import React from "react";

export const Button = ({ text, handler, className, disabled = false } ) => {
  return (
    <button 
    onClick={handler} 
    className={className} 
    disabled={disabled}>{text}</button>
  );

}