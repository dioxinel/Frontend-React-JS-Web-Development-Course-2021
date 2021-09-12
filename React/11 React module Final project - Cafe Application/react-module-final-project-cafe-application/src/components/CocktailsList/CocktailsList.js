import { CocktailItem } from "./CocktailItem";
import './CocktailsList.css'

export const CocktailsList = ({list}) => {

  return (
    <div className={'cocktailsList'}>
      {list.map((item) => {
        return <CocktailItem 
          cocktail={item} 
          key={item.idDrink} 
          imageClassName={'cocktailItemImg'}/>
      })}
    </div>
  );
}

