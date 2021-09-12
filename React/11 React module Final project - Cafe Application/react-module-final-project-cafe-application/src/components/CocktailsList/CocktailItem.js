import { CocktailImage } from "../CocktailImage";
import { Link } from "react-router-dom";

export const CocktailItem = ({cocktail, imageClassName=''}) => {
  return (
    <Link to={`/cocktail-details/${cocktail.idDrink}`}>
      <CocktailImage
      link={cocktail.strDrinkThumb}
      className={imageClassName}
      />
      <div>{cocktail.strDrink}</div>
    </Link>
  );
}

