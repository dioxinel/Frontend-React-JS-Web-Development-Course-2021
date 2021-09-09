import React from "react";
import { Gender } from "./Gender";
import { Name } from "./Name";
import { Phone } from "./Phone";

export function BasicInformation({firstName, lastName, changeFieldValue, checked, phone, selected}) {
  return (
    <div>
      <Name 
      firstName={firstName} 
      lastName={lastName} 
      changeFieldValue={changeFieldValue} />
      <Gender 
      changeFieldValue={changeFieldValue} 
      checked={checked} />
      <Phone 
      phone={phone}
      selected={selected}
      changeFieldValue={changeFieldValue}
      />
    </div>
  );
}
