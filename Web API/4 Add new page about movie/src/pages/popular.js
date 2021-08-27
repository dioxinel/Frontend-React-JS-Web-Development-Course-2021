import Api from "../Api.js"
import { asyncProvider } from "../helpers.js"
import { renderPopularMovies } from "../webApi.js"

const root = document.getElementById('app')

export function Popular() {
  const layout = `<ul class="filmList"></ul>`
  root.innerHTML = layout;

  asyncProvider(
    async () => {
      const response =  await Api.fetchPopularMovies()  
      renderPopularMovies(response.results)
      return response
    })

document.querySelector('.filmList').addEventListener('click', (evt) => {
    const node = evt.target.closest('li');

    if(!node) {
      return
    }

    history.pushState(null, null, `movie/${node.dataset.movieId}`)
  })
}