class Api {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
    this._APIKEY = '21f53b102f9fcc68f706abfc92770539';
  }

  async fetchMoviesBySearchText(queryWord, page = 1) {
    const res = await fetch(`${this.url}search/movie?api_key=${
      this._APIKEY}&language=us-EN&query=${queryWord}&page=${page}`);
    const data = await res.json();
    return data;
  }
  
}

export default new Api();
