import Api from "./Api.js"
import { asyncProvider } from "./helpers.js"
import { renderPopularMovies } from "./webApi.js"

function getFilms() {
asyncProvider(
  async () => {
    const response =  await Api.fetchPopularMovies()  
    renderPopularMovies(response.results)
    return response
  })
}

getFilms()