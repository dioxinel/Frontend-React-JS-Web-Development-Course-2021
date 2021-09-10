import React from "react";
import '../../index.css'

export const ShowReleaseDate = ({data, handleShow}) => {
  return (
    <div>
      <button onClick={() => handleShow(data)}>{'Show Release Date'}</button>
    </div>  
    );
}