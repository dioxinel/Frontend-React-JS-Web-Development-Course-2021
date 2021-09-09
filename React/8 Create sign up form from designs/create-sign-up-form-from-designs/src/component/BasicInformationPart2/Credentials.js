import React, { useState } from "react";
import '../BasicInformation/BasicInformation.css'
import './BasicInformationPart2.css'
import { HelperText } from "./HelperText";

export function Credentials({email, password, changeFieldValue}) {
  const [err, setErr] = useState("")

  const handlePassChange = (evt) => {
    const password = evt.target.value;
    changeFieldValue(evt)
    if (password.length < 8 || password.toLowerCase() === password) {
      return setErr('Incorrect password')
    }
    return setErr(null)
  }

  return (
    <div>
      <input 
        type="email" 
        name="email" 
        value={email} 
        onChange={changeFieldValue}
        placeholder={'Email'}
        className={'textInput'}
        />
      <div>
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={handlePassChange}
          placeholder={'Password'}
          className={'textInput passwordInput'}
        />
        {err ? <div>{err}</div> 
        : <HelperText 
        text={'The password has to be at least 8 characters long and contain at least one upper case letter.'}
        className={'passwordHelperText'}
        />}
      </div>
      
    </div>
  );
}