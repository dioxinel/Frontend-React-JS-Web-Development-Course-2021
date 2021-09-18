import { Link } from "react-router-dom";
import './main.css'

export function NavBar() {

  return (
    <div className={'NavBar'}>
      <Link to={'/'} className={'NavBarItem'}>Favorite Movies</Link>
      <Link to={'/top-rated'} className={'NavBarItem'}>Top Rated Movies</Link>
      <Link to={'TV-Shows'} className={'NavBarItem'}>TV Shows</Link>
    </div>
  );
}

