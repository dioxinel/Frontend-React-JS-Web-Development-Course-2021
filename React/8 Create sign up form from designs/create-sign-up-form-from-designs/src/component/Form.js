import React, { useState } from "react";
import { useFormFields } from "../useFormFields";
import './main.css'
import { FirstStage } from "./FirstStage";
import { SecondStage } from "./SecondStage";
import { LastStage } from "./LastStage";


export function Form() {
  const { fields, changeFieldValue, reset } = useFormFields({
    role: '', 
    firstName: '', 
    lastName: '', 
    gender: '',
    phone: '',
    phonePrefix: '+1',
    workCategories: '',
    email: '',
    password: '',
  
  })

  const [formPart, setFormPart] = useState(1);

  const handleSubmit = (evt) => {
    console.log(fields)
    evt.preventDefault()
    
    reset()
    setFormPart(1)
    
  }

  const handleNextPart = (evt) => {
    evt.preventDefault()
    setFormPart(formPart + 1)
  }

  const handlePrevPart = (evt) => {
    evt.preventDefault()
    setFormPart(formPart - 1)
  }

  return (
    <form onSubmit={handleSubmit} className={'form'}>
      {formPart === 1 ? 
      <FirstStage 
      changeFieldValue={changeFieldValue} 
      fields={fields} 
      handleNextPart={handleNextPart}/>
      : formPart === 2 ?
      <SecondStage 
      fields={fields}
      handlePrevPart={handlePrevPart}
      handleNextPart={handleNextPart}
      changeFieldValue={changeFieldValue}
      />
       : 
      <LastStage
        fields={fields}
        handlePrevPart={handlePrevPart}
        changeFieldValue={changeFieldValue}
        />
    }  
    </form>
  );
}

