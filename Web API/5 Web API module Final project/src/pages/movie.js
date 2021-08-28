import Api from "../Api.js"
import { subscribeHeaderEvents,
   subscribeMovieListClick } from "../eventsSubscription.js"
import { asyncProvider } from "../helpers.js"
import { Header, renderMovieDetails, renderMovies } from "../webApi.js"


const root = document.getElementById('app')
export function Movie() {
  root.innerHTML = Header()
  const pathname = window.location.pathname
  const [, id] = pathname.split('movie/')

  asyncProvider(
    async () => {
      const response =  await Api.fetchMovieDetail(id);
      const recommendationsData = await Api.fetchMovieRecommendations(id);
      const recommendations = renderMovies(recommendationsData.results.slice(0, 5))  
      root.innerHTML = `${Header()}${renderMovieDetails(response, recommendations)}`
      subscribeMovieListClick()
      subscribeHeaderEvents()
    })
}