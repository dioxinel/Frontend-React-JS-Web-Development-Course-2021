
import { CocktailDetails } from "../components/CocktailDetails/CocktailDetails";
import { CocktailSearchList } from "../components/CocktailSearchList";
import { FilteredByLetter } from "../components/FilteredByLetter";
import { HomePage } from "../components/HomePage/HomePage";
import { MainLayout } from './MainLayout.js'

export const rotesConfig = [
  {
    layout: MainLayout,
    routes: [
      ['/', HomePage, true],
      ['/search', CocktailSearchList],
      ['/filtered', FilteredByLetter],
      ['/cocktail-details', CocktailDetails],

    ]
  }
]