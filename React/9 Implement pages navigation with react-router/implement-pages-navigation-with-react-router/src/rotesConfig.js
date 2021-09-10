import { FavoriteMovies } from "./components/FavoriteMovies";
import { MainLayout } from "./MainLayout";
import { TopRatedMovies } from "./components/TopRatedMovies";
import { TVShows } from "./components/TVShows";

export const rotesConfig = [
  {
    layout: MainLayout,
    routes: [
      ['/', FavoriteMovies, true],
     ['/top-rated', TopRatedMovies],
     ['/TV-Shows', TVShows],
    ]
  }
]