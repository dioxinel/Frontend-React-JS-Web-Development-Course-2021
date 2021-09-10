import { BrowserRouter, Switch, Route} from "react-router-dom";
import { FavoriteMovies } from "./components/FavoriteMovies";
import { NavBar } from "./components/NavBar";
import { TopRatedMovies } from "./components/TopRatedMovies";
import { TVShows } from "./components/TVShows";

export const MainLayout = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path={'/'}>
        <FavoriteMovies />
      </Route>
      <Route exact path={'/top-rated'}>
        <TopRatedMovies />
      </Route>
      <Route exact path={'/TV-Shows'}>
        <TVShows />
      </Route>
    </Switch>
  </BrowserRouter>
)