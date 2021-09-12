import './components.css'

export const CocktailImage = ({link, className='personalSuggestImg'}) => {
  return (
      <img src={link} alt={'cocktail'} className={className}></img>
  );
}

