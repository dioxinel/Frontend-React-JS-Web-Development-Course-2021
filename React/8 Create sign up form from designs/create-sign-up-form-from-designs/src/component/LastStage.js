import React from "react";
import { BasicInformationPart2 } from "./BasicInformationPart2/BasicInformationPart2";
import { Title } from "./Title";
import './main.css'
import { NextButton } from "./NextButton";
import Icon from "./Icon";
import { StageSign } from "./StageSign";

export function LastStage({fields, handlePrevPart, changeFieldValue}) {
  return(
      <>
      <Title text={'Basic information about you'}  className={'lastTitle'}/>
      <div className={'stagesContainer'}>
        <StageSign text={<Icon name={'stageTick'} />} className={'unActiveStage'} />
        <div className={'line'}></div>
        <StageSign text={'2'} className={'activeStage'} />
      </div>
      <BasicInformationPart2 
      changeFieldValue={changeFieldValue} 
      checked={fields.workCategories}
      password={fields.password}
      email={fields.email}
      />
      <div className={'nextButtonContainer'}>
        <NextButton onClick={handlePrevPart} className={'prevButton'}><><Icon name={'arrowInPrevBtn'} /> Previous</></NextButton>
        <NextButton type={'submit'} className={'nextButton'}>Submit</NextButton>
      </div>
      </>

  );
}

