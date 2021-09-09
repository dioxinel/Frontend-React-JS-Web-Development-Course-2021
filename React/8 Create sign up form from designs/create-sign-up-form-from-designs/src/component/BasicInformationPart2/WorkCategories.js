import React from "react";
import { Title } from "../Title";
import './BasicInformationPart2.css'

export function WorkCategories({changeFieldValue, checked}) {
  const handleChangeCheckBox = (evt) => {
    const checkboxList = checked.split(' ')

    if (checkboxList.includes(evt.target.value)) {
      const newCheckboxList = checkboxList.filter(item=>{
        return item !== evt.target.value
      })
      changeFieldValue({target: {name: "workCategories", value: newCheckboxList.join(' ')}})
    } else {
      changeFieldValue({target: {name: "workCategories", value: checked + evt.target.value + ' '}})
    } 
  }

  return (
    <div className={'categoryListContainer'}>
      <Title text={'Categories you work with'} className={'categoryTitle'}/>
      <div className={'categoryItem'}>
        <input 
        type="checkbox" 
        name="workCategories" 
        value="economy" 
        onChange={handleChangeCheckBox}
        checked={checked.includes("economy") ? true : false}/> Economy
      </div>
      <div className={'categoryItem'}>
        <input 
        type="checkbox" 
        name="workCategories" 
        value="business" 
        onChange={handleChangeCheckBox}
        checked={checked.includes("business") ? true : false}/> Business
      </div>
      <div className={'categoryItem'}>
        <input 
        type="checkbox" 
        name="workCategories" 
        value="trading" 
        onChange={handleChangeCheckBox}
        checked={checked.includes("trading") ? true : false}/> Trading
      </div>
      <div className={'categoryItem'}>
        <input 
        type="checkbox" 
        name="workCategories" 
        value="communications" 
        onChange={handleChangeCheckBox}
        checked={checked.includes("communications") ? true : false}/> Communications
      </div> 
    </div>
  );
}
