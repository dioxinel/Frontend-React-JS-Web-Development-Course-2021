
import React, { useState } from 'react';
import './App.css';
import { rotesConfig } from './router/rotesConfig.js';
import { RotesGenerator } from './router/RotesGenerator.js';

export const BasketContext = React.createContext([]);
const BasketContextProvider = BasketContext.Provider;

function App() {
  const [basket, setBasket] = useState([])

  return (
    <BasketContextProvider value={{basket, setBasket}}>
      <div className="App">
        <RotesGenerator config={rotesConfig} />
      </div>
    </BasketContextProvider>  
  );
}

export default App;
