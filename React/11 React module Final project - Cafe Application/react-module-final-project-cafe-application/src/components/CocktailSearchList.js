import { useLocation } from 'react-router';
import { useCocktails } from '../CustomHooks';
import { CocktailsList } from './CocktailsList/CocktailsList';
import './components.css';

export function CocktailSearchList() {
  const path = useLocation()
  const keyword = path.pathname.split('search/')[1]
  const {cocktails} = useCocktails(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
  return (
    <div className={'cocktailsListContainer'}>
      {cocktails ? <CocktailsList list={cocktails}/> : 'Not fount'}
    </div>
  );
}

