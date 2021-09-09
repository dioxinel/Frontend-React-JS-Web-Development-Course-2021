import React from "react";
import { RoleItem } from "./RoleItem";

export function SelectRole({changeFieldValue, checked}) {

  return (
    <div>
      <RoleItem 
      changeFieldValue={changeFieldValue}
      checked={checked}
      title={'Homeowner'} 
      iconName={'homeowner'}
      describe={'I am a homeowner or interested in home design.'} />
      <RoleItem 
      changeFieldValue={changeFieldValue}
      checked={checked}
      title={'Professional'} 
      iconName={'professional'} 
      describe={'I offer home improvement services or sell home products.'} />
    </div>
  );
}
