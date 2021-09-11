import React, { useState } from 'react';
import './modal.css'

export function ModalContent({title, submitModalWindow, closeModal}) {
  const [text, setText] = useState('')

  function handleChange(evt) {
    setText(evt.target.value)
  } 

  return (
    <div className={'modalContent'}>
      <button onClick={() => closeModal()}>Close</button>
      <h3>{title}</h3>
      <form onSubmit={(evt) => {
        submitModalWindow(evt)
        setText('')
      }}>
        <textarea value={text} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    
    </div>
  );
}
