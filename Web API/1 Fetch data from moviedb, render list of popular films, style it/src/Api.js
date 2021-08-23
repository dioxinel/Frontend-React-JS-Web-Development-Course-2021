class Api {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
    this._APIKEY = '21f53b102f9fcc68f706abfc92770539';
  }

  async fetchPopularMovies() {
    const res = await fetch(`${this.url}movie/popular?api_key=${this._APIKEY}&language=us-EN`);
    const data = await res.json();
    return data;
  }
  
}

export default new Api();
