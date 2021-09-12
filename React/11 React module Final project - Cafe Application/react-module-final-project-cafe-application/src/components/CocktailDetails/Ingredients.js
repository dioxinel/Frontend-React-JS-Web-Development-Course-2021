

export function Ingredients({cocktail}) {
  const ingredientsList = [];
  for(let i = 1; i <= 15; i++) {
    if(cocktail[`strIngredient${i}`]) {
      ingredientsList.push(cocktail[`strIngredient${i}`])
    } else {
      break
    }
  }
  return (
    <div className={'ingredientsList'}>
      <h4>Ingredients</h4>
      {ingredientsList.map((item, idx)=>(<div key={item}>{idx + 1 + '. ' + item}</div>))}
    </div>
  );
}

