import React from "react";
import { BasicInformation } from "./BasicInformation/BasicInformation";
import { Title } from "./Title";
import './main.css'
import { NextButton } from "./NextButton";
import Icon from "./Icon";
import { StageSign } from "./StageSign";


export function SecondStage({fields, handleNextPart, handlePrevPart, changeFieldValue}) {
 

  return (
      <>
        <Title text={'Basic information about you'} className={'secondTitle'} />
        <div className={'stagesContainer'}>
          <StageSign text={'1'} className={'activeStage'} />
          <div className={'line'}></div>
          <StageSign text={'2'} className={'unActiveStage'} />
        </div>
        <BasicInformation 
        firstName={fields.firstName} 
        lastName={fields.lastName}
        changeFieldValue={changeFieldValue} 
        checked={fields.gender}
        phone={fields.phone} 
        selected={fields.phonePrefix}
        />
        <div className={'nextButtonContainer'}>
          <NextButton onClick={handlePrevPart} className={'prevButton'}><><Icon name={'arrowInPrevBtn'} /> Previous</></NextButton>
          <NextButton onClick={handleNextPart} className={'nextButton'}>Continue</NextButton>
        </div>
      </>
  );
}

