import React from 'react';
import './index.css';

export const App = () => {
  const h1Text = 'This test text for homework page';
  const h2Text = 'Hello, New Stranger!';
  const pText = 'Here we have the list:';
  const liText = 'Just text here';
  const spanText = 'Here we have text and link!';
  const aText = 'It is link to our docs';
  const secSpanText = 'And the picture!!!';
  
  return (
    <div className={'mainContainer'}>
    <h1 style={{
      border: 'solid 3px black',
       borderRadius: '15px', 
       display: 'inline-block'
       }}>{h1Text}</h1>
      <br></br>
    <h2>{formatUserName('Sara', 'Connor')}</h2>
    <h3>{formatUserName('John', 'Doe')}</h3>
    <br></br>
    <p>{pText}</p>
    <ul>
    <li tab-index={"_1"}>
     {liText}
    </li>
    <li>
     <span>{spanText}</span>
     <a href={"https://uk.reactjs.org/docs"} target={"_blank"}>{aText}</a>
    </li>
    <li>
     <span>{secSpanText}</span>
     <img src={"https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/non-bird-species-illustrations/fox_1200x675.jpg"} alt={"Fox"} width={"300"}></img>
   </li>
      </ul>
    </div>
  )
}


function formatUserName(firstName, lastName) {
  return `Welcome to website, ${firstName} ${lastName}`
}