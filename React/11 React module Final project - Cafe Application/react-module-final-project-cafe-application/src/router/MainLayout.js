import { BrowserRouter, Switch, Route} from "react-router-dom";
import { HomePage } from "../components/HomePage/HomePage";
import { Header } from "../components/Header/Header";
import { CocktailSearchList } from "../components/CocktailSearchList";
import { Footer } from "../components/Footer/Footer";
import { FilteredByLetter } from "../components/FilteredByLetter";
import { CocktailDetails } from "../components/CocktailDetails/CocktailDetails";

export const MainLayout = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path={'/'}>
        <HomePage />
      </Route>
      <Route path={'/search'}>
        <CocktailSearchList />
      </Route>
      <Route path={'/filtered'}>
        <FilteredByLetter />
      </Route>
      <Route path={'/cocktail-details'}>
        <CocktailDetails />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
)