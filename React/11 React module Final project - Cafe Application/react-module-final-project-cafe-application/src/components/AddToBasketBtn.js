
import { useContext } from 'react';
import { BasketContext } from '../App.js';

export const AddToBasketBtn = ({cocktail, className}) => {
  const {basket, setBasket }  = useContext(BasketContext)

  const handleOrder = () => {
    if(basket.find(item => {
      return item.idDrink === cocktail.idDrink
    })) {
      return alert('Ви вже замовили даний коктель')
    }
    setBasket([...basket, cocktail])
  }

  return (
      <button onClick={handleOrder} className={className}>Замовити</button>
  );
}

