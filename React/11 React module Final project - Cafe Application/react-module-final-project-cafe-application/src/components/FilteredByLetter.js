import { useLocation } from 'react-router';
import { useCocktails } from '../CustomHooks';
import { CocktailsList } from './CocktailsList/CocktailsList';
import './components.css';

export function FilteredByLetter() {
  const path = useLocation()
  const letter = path.pathname.split('filtered/')[1]
  const {cocktails} = useCocktails(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
  return (
    <div className={'cocktailsListContainer'}>
      {cocktails ? <CocktailsList list={cocktails} /> : 'Not fount'}
    </div>
  );
}

