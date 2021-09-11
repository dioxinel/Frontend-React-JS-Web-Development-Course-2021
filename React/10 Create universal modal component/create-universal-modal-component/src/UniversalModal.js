import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

export const UniversalModal = ({isOpen, closeModalWindow, submitModalWindow, title, Content}) => {
return (isOpen && ReactDOM.createPortal(
  <div className={'modal'}>
    <Content 
      closeModal={closeModalWindow} 
      submitModalWindow={submitModalWindow}
      title={title}
    />
  </div>
  , document.getElementById('modal')
))
}