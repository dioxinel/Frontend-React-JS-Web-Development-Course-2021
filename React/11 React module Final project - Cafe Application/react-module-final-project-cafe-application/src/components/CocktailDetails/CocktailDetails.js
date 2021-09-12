import { useLocation } from 'react-router';
import { useCocktails } from '../../CustomHooks';
import { CocktailItem } from '../CocktailsList/CocktailItem';
import { AddToBasketBtn } from '../AddToBasketBtn'
import './CocktailDetails.css'
import { Ingredients } from './Ingredients';

export function CocktailDetails() {
  const path = useLocation()
  const id = path.pathname.split('cocktail-details/')[1]
  const {cocktails} = useCocktails(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)

  if(!cocktails || !cocktails.length) {
    return <h1 className={'cocktailsDetails'}>Not fount</h1>
  }

  return (
    <div className={'cocktailsDetails'}>
      <div>
        <CocktailItem cocktail={cocktails[0]} imageClassName={'cocktailDetailImg'}/>
        <AddToBasketBtn cocktail={cocktails[0]} className={'AddToBasketBtn'} />
      </div>
      <div className={'textDetails'}>
        <div>
          <h4>{'Instructions'}</h4>
          <p>{cocktails[0].strInstructions}</p>
        </div>
        <Ingredients cocktail={cocktails[0]} />
      </div>
    </div>
  );
}

