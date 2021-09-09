import React from "react";
import './BasicInformation.css'

export function Phone({phone, changeFieldValue, selected}) {
  return (
    <div className={'phoneContainer'}>
      <select name={'phonePrefix'} onChange={changeFieldValue} value={selected}>
        <option value={'+1'} >+1</option>
        <option value={'+2'}>+2</option>
        <option value={'+3'}>+3</option>
        <option value={'+4'}>+4</option>
        <option value={'+5'}>+5</option>
      </select>
      <input 
        type="text" 
        name="phone" 
        value={phone} 
        onChange={changeFieldValue}
        className={'phoneInput'}
        placeholder={'Business phone number'}
      />
    </div>
  );
}