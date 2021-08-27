import Api from "../Api.js"
import { asyncProvider } from "../helpers.js"
import { renderMovieDetails } from "../webApi.js"


const root = document.getElementById('app')
export function Movie() {
  
  const pathname = window.location.pathname
  const [, id] = pathname.split('movie/')

  asyncProvider(
    async () => {
      const response =  await Api.fetchMovieDetail(id)  
      root.innerHTML = renderMovieDetails(response)
    })
}