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

  async fetchMovieRecommendations(id) {
    const res = await fetch(`${this.url}movie/${id}/recommendations?api_key=${this._APIKEY}&language=us-EN`);
    const data = await res.json();
    return data;
  }

  async fetchMovieDetail(id) {
    const res = await fetch(`${this.url}movie/${id}?api_key=${this._APIKEY}&language=us-EN`);
    const data = await res.json();
    return data;
  }

  async fetchMoviesByKeyword(keyword, page = 1) {
    const res = await fetch(`${this.url}search/movie?api_key=${
      this._APIKEY}&language=us-EN&query=${keyword}&page=${page}`);
    const data = await res.json();
    return data;
  }
}

export default new Api();
