import LocalStorageApi from "./LocalStorageApi.js";

const baseImageURL = "https://image.tmdb.org/t/p";

export const renderMovies = (data) => {
  let result = '';
  data.forEach((item) => {  
    result += renderSingleMovie(item);
    })
  return result;
}

export function renderSingleMovie(data) {
  return `<li data-movie-id=${data.id} data-is-saved=${!!LocalStorageApi.isSaved(data.id)} class="filmItem">
      <img src=${baseImageURL}/w185${data.poster_path} />
      <div>
        <i class="${LocalStorageApi.isSaved(data.id+'') ? "fas fa-heart" : "far fa-heart"}"></i>
        <p>${data.title}</p>
      </div>
      
    </li> `
}

export function renderMovieDetails(data, recommendations) {
  const genres = data.genres.map((item) => {
    return '<li>' + item.name + '</li>'
  })
  return `<div class='movieDetails'>
      <div class="mainInfoContainer">
        <img src=${baseImageURL}/w185${data.poster_path} />
        <p>${data.title}</p>
        <div>Rating ${data.popularity}</div>
      </div>
      <div>${data.overview}</div>
      <h3>Genres</h3>
      <ul class="genres">${genres.join(' ')}</ul>
      <h3>Recommendations</h3>
      <ul class="filmList">
        ${recommendations}
      </ul>
    </div> 
   `
}

export function Header() {
  return `
  <header>TheMovieDB PoC</header>
  <div class="header">
  <div>
    <input class="searchInput" placeholder="Search"/>
    <button class="searchButton" disabled>Search</button>
  </div>
  <span style="font-size: 2em;">
    <i class="fab fa-react"></i>
  </span>
  <button class="bookmarksBtn">Bookmarks</button>
  </div>
  <div id="loader" class="loaderContainer hidden">
    <div class="loaderIcon"></div>
    <div>Loading popular movies</div>
  </div>
  `
}


export const fetchStart = new Event("fetchStart", {
  view: document,
  bubbles: true,
  cancelable: false
});
export const fetchEnd = new Event("fetchEnd", {
  view: document,
  bubbles: true,
  cancelable: false
});


document.addEventListener("fetchStart", function () {
  document.getElementById("loader").classList.add("shown");
});
document.addEventListener("fetchEnd", function () {
  document.getElementById("loader").classList.remove("shown");
});
