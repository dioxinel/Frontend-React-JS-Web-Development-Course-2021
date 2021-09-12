import React from 'react';
import ReactDOM from 'react-dom';
import './components/Header/Header.css'

export const UniversalModal = ({isOpen, closeModalWindow, submitModalWindow, Content}) => {
return (isOpen && ReactDOM.createPortal(
  <div className={'modal'}>
    <Content 
      closeModal={closeModalWindow} 
      submitModalWindow={submitModalWindow}
    />
  </div>
  , document.getElementById('modal')
))
}