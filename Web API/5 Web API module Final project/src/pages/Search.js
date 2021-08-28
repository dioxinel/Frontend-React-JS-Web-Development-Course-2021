import Api from "../Api.js"
import { subscribeHeaderEvents,
   subscribeMovieListClick } from "../eventsSubscription.js"
import { asyncProvider } from "../helpers.js"
import { renderMovies, Header } from "../webApi.js"


const root = document.getElementById('app')
export function Search() {
  root.innerHTML = Header();
  const param = window.location.pathname
  const [, keyword] = param.split('query=')

  asyncProvider(
    async () => {
      const response =  await Api.fetchMoviesByKeyword(keyword);
      root.innerHTML = `${Header()}
      <ul class="filmList">${renderMovies(response.results)}</ul>`
      subscribeHeaderEvents()
      subscribeMovieListClick()
    })
}