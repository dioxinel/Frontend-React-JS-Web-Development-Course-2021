import React from "react";
import './BasicInformation.css'

export function Name({firstName, lastName, changeFieldValue}) {
  return (
    <div>
      <input 
        type="text" 
        name="firstName" 
        value={firstName} 
        onChange={changeFieldValue}
        placeholder={'First name'}
        className={'textInput'}
        /> 
      <input 
        type="text" 
        name="lastName" 
        value={lastName} 
        onChange={changeFieldValue}
        placeholder={'Last name'}
        className={'textInput'}
      />
    </div>
  );
}