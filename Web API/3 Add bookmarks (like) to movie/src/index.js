import Api from "./Api.js"
import { asyncProvider } from "./helpers.js"
import { renderPopularMovies, renderSingleMovie } from "./webApi.js"
import LocalStorageApi from './LocalStorageApi.js'

export const films = [];
const filmList = document.querySelector('.filmList')
const popularMoviesList = document.querySelector(".filmList")
const popularMoviesBtn = document.querySelector('.popularMovies')
const bookmarksBtn = document.querySelector('.bookmarks')
const bookmarksList = document.querySelector('.bookmarksList')

function getFilms() {
asyncProvider(
  async () => {
    const response =  await Api.fetchPopularMovies() 
    saveFilms(response.results)
    renderPopularMovies(films, popularMoviesList)
    return response
  })
}

function saveFilms(data) {
  data.forEach((item) => {
    if(LocalStorageApi.savedList.includes(item.id + '')) {
      films.push({
        title: item.title, 
        poster: item.poster_path, 
        id: item.id, 
        isSaved: true})
    } else {
      films.push({
        title: item.title, 
        poster: item.poster_path, 
        id: item.id, 
        isSaved: false})
    } 
  })
}

getFilms()

filmList.addEventListener('click', handleSave)
bookmarksList.addEventListener('click', handleSave)

function handleSave(evt) {
  const node = evt.target.closest('i');

  if(!node) {
    return
  }

  const savedFilm = evt.target.parentNode.parentNode;
  const targetFilm = films.find((item) => {
    return String(item.id) === savedFilm.id
  })

  targetFilm.isSaved = !targetFilm.isSaved;
  savedFilm.dataset.isSaved = targetFilm.isSaved

  if (targetFilm.isSaved) {
    bookmarksList.append(renderSingleMovie(targetFilm))
    LocalStorageApi.addItem(savedFilm.id)
    evt.target.classList.remove('far')
    evt.target.classList.add('fas')
  } else {
    const target = document.querySelectorAll(`[id='${savedFilm.id}']`)
    target[0].remove() 
    target[1].lastChild.childNodes[1].classList.remove('fas')
    target[1].lastChild.childNodes[1].classList.add('far')
    LocalStorageApi.removeItem(savedFilm.id)
  }
}


popularMoviesBtn.addEventListener('click', () => {
  bookmarksBtn.removeAttribute('disabled')
  popularMoviesBtn.setAttribute('disabled', true)
  popularMoviesList.removeAttribute('hidden')
  bookmarksList.setAttribute('hidden', true)
})

bookmarksBtn.addEventListener('click', () => {
  bookmarksBtn.setAttribute('disabled', true)
  popularMoviesBtn.removeAttribute('disabled')
  popularMoviesList.setAttribute('hidden', true)
  bookmarksList.removeAttribute('hidden')
})