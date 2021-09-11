import React, { useState } from 'react';
import { ModalContent } from './ModalContent';
import { UniversalModal } from './UniversalModal';

function App() {
  const [isOpen, setOpen] = useState(false)
  const [todos, setTodos] = useState([])

  const submitModalWindow = (evt) => {
    evt.preventDefault()
    setTodos([...todos, evt.target[0].value])
    setOpen(false)
  }

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Show Modal</button>
      {todos.map((item, idx) => {
        return <div key={item}>{idx + 1 + item}</div>
      })}
      <UniversalModal
       isOpen={isOpen} 
       title={'Universal Modal Window'} 
       submitModalWindow={submitModalWindow} 
       closeModalWindow={() => setOpen(false)} 
       Content={ModalContent}/>
    </div>
  );
}

export default App;
