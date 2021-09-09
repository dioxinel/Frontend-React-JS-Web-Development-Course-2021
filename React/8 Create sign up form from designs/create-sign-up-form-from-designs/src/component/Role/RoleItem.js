import React from "react";
import Icon from '../Icon'
import './Role.css'

export function RoleItem({input, title, iconName, describe, changeFieldValue, checked}) {
  const handleChoseRole = (evt) => {
    const evtObj = {target: {name: 'role', value: title}}
    changeFieldValue(evtObj)
  }
  return (
    <div 
    className={checked === title ? 'roleItem active' : 'roleItem'} 
    onClick={handleChoseRole}
    >
      <Icon name={iconName} active={checked === title} />
      <div className={'roleInputContainer'}>
        {input}
        <h4>{title}</h4>
        <p>{describe}</p>
      </div>
    </div>
  );
}
