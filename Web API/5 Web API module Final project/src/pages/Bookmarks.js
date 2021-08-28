import { subscribeHeaderEvents,
 subscribeMovieListClick } from "../eventsSubscription.js"
import LocalStorageApi from "../LocalStorageApi.js"
import { renderMovies, Header } from "../webApi.js"


const root = document.getElementById('app')
export function Bookmarks() {
  const layout = `${Header()}<ul class="filmList">
  ${renderMovies(LocalStorageApi.savedList)}</ul>`
  root.innerHTML = layout;
  subscribeHeaderEvents()
  subscribeMovieListClick()
}