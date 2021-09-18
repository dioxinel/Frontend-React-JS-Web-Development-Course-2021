import React, { useState } from "react";
import { ThemedButton } from "../ThemedButton";


export const RateSwitch = ({data}) => {
  const [shown, setShown] = useState(false)

  function handleSwitch() {
    setShown(!shown)
  }
  
  return (
    <div>
      {shown ? data : null }
        <ThemedButton onClick={handleSwitch} text={shown ? "Hide Rate" : "Show Rate"}/> 
      </div>     
    );
}