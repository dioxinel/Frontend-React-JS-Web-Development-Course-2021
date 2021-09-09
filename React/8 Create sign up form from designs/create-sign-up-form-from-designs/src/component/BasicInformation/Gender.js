import React, { useState } from "react";
import { Title } from "../Title";

export function Gender({changeFieldValue, checked}) {
  const [otherGender, setOtherGender] = useState('');

  if(!(checked === "male") && !(checked === "female") && !(checked === "null") && !(checked === '')) {
    setOtherGender(checked)
    console.log(checked)
  }

  const handleChangeGender = (evt) => {
    evt.preventDefault()
    setOtherGender(evt.target.value)
    document.getElementById('otherGenderRadio').setAttribute('value', evt.target.value)
  }

  const handleClickOtherGender = () => {
    document.querySelector('.otherGender').setAttribute('checked', 'true')
  }
  return (
    <div className={'genderList'}>
      <Title text={"Gender"} className={'genderTitle'} />
      <div className={'genderItem'}>
        <input 
        type="radio" 
        name="gender" 
        value="male" 
        onChange={changeFieldValue} 
        checked={checked === "male"}/> Male
      </div>
      <div className={'genderItem'}>
      <input 
        type="radio" 
        name="gender" 
        value="female" 
        onChange={changeFieldValue}
        checked={checked === "female"}/> Female
      </div>
      <div className={'genderItem'}>
        <input 
        type="radio" 
        name="gender" 
        value="null" 
        onChange={changeFieldValue}
        checked={checked === "null" ? true: false}/> I prefer not to say
      </div>
      <div className={'genderItem'}>
        <input 
        type="radio" 
        name="gender"
        value={otherGender}
        id={'otherGenderRadio'}
        onChange={handleClickOtherGender}
        /> Other
        <div>
          <input 
          type='text' 
          name={'gender'} 
          value={otherGender}
          id={'otherGender'}
          className={'otherGender'} 
          onChange={handleChangeGender}
          />
        </div>
      </div> 
    </div>
  );
}
