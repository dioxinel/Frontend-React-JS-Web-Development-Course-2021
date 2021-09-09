import React from "react";
import { Credentials } from "./Credentials";
import { WorkCategories } from "./WorkCategories";

export function BasicInformationPart2({changeFieldValue, checked, password, email}) {
  return (
    <div>
      <WorkCategories changeFieldValue={changeFieldValue} checked={checked} />
      <Credentials password={password} email={email} changeFieldValue={changeFieldValue} />
    </div>
  );
}
