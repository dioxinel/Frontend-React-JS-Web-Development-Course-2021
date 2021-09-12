import { useCocktails } from '../../CustomHooks.js';
import { AddToBasketBtn } from '../AddToBasketBtn.js';
import { CocktailItem } from '../CocktailsList/CocktailItem.js';
import './HomePage.css'

export const PersonalSuggest = () => {
  const {cocktails} = useCocktails('https://www.thecocktaildb.com/api/json/v1/1/random.php')

  return (
    <div className={'personalSuggest'}>
      <h5>{"Персональна рекомендація"}</h5>
      {cocktails[0] && 
      <CocktailItem cocktail={cocktails[0]} imageClassName={'personalSuggestImg'}/>}
      <AddToBasketBtn cocktail={cocktails[0]} className={'personalSuggestAddToBasket'}/>
    </div>
  );
}

