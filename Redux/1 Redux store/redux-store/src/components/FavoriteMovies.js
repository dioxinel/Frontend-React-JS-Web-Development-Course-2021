import List from './List';

export function FavoriteMovies() {
  const baseUrl = 'https://api.themoviedb.org/3/';
  const _APIKEY = '21f53b102f9fcc68f706abfc92770539';
  const url = `${baseUrl}movie/popular?api_key=${_APIKEY}&language=us-EN&page=`
  return (
    <List link={url}/>
  );
}

