import Api from "./Api.js"
import { asyncProvider } from "./helpers.js"
import { renderMovies } from "./webApi.js"

const filmList = document.querySelector('.filmList');
const input = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');

function getFilms(input) {
  while (filmList.firstChild) {
    filmList.removeChild(filmList.firstChild);
  }
  asyncProvider(
  async () => {
    const response =  await Api.fetchMoviesBySearchText(input)  
    renderMovies(response, filmList)
  })
}

searchButton.addEventListener('click', 
async () => {
  input.dataset.lastQuery = input.value;
  await getFilms(input.value);
  searchButton.setAttribute('disabled', true)
})

input.addEventListener('input', (evt) => {
  if(evt.target.value.length) {
    searchButton.removeAttribute('disabled')
  } else {
    searchButton.setAttribute('disabled', true)
  }
})


document.querySelector('.loadMoreBtn').addEventListener('click', (evt) => {
  asyncProvider(
    async () => {
      const response =  await Api.fetchMoviesBySearchText(input.dataset.lastQuery,
         Number(evt.target.dataset.currentPage) + 1)
      console.log(response)  
      renderMovies(response, filmList)
    })
})
