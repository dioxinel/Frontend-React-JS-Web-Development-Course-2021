import Api from "../Api.js"
import { subscribeHeaderEvents,
   subscribeMovieListClick } from "../eventsSubscription.js"
import { asyncProvider } from "../helpers.js"
import { renderMovies, Header } from "../webApi.js"

const root = document.getElementById('app')

export function Popular() {
  root.innerHTML = Header()
  asyncProvider(
    async () => {
      const response =  await Api.fetchPopularMovies()
      const layout = `${Header()}<ul class="filmList">${renderMovies(response.results)}</ul>`
      root.innerHTML = layout;
      subscribeHeaderEvents()
      subscribeMovieListClick()
    })
}
