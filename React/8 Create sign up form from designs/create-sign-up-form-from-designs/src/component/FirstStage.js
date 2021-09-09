import React from "react";
import { SelectRole } from "./Role/SelectRole";
import { Title } from "./Title";
import './main.css'
import { NextButton } from "./NextButton";
import Icon from "./Icon";


export function FirstStage({changeFieldValue, fields, handleNextPart}) {

  return (
    <>
    <Title text={"Which describes you best?"} className={'firstTitle'}/>
    <SelectRole changeFieldValue={changeFieldValue} checked={fields.role}/>
    <div className={'nextButtonContainer'}>
      <div></div>
      <NextButton onClick={handleNextPart} className={'nextButton'}><>Next <Icon name={'arrowInNextBtn'} /></></NextButton>
    </div>
  </>
  );
}

