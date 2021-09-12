import React, { useContext } from 'react';
import { BasketContext } from '../../App';
import { CocktailItem } from '../CocktailsList/CocktailItem';
import './Header.css'

export function ModalContent({submitModalWindow, closeModal}) {
  const { basket } = useContext(BasketContext)

  return (
    <div className={'modalContent'}>
      <h3>{'Ваше замовлення'}</h3>
      {basket.map(item => {
        return <CocktailItem 
        key={item.idDrink}
        cocktail={item} 
        imageClassName={'itemInBasketImg'} />
      })}
      <button onClick={() => submitModalWindow()}>Замовити</button>
    </div>
  );
}
