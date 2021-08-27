const baseImageURL = "https://image.tmdb.org/t/p";

export const renderPopularMovies = (data) => {
  const list = document.querySelector('#app > ul')
  data.forEach((item) => {  
    list.append(renderSingleMovie(item));
    })
}

export function renderSingleMovie(data) {
  const listItem = document.createElement('li');
    listItem.dataset.movieId = data.id;
    listItem.className = 'filmItem';
    listItem.innerHTML = `
    <img src=${baseImageURL}/w185${data.poster_path} />
    <p>${data.title}</p>
   `
  return listItem;
}

export function renderMovieDetails(data) {
  const genres = data.genres.map((item) => {
    return '<li>' + item.name + '</li>'
  })
  return `<div class='movieDetails'>
      <img src=${baseImageURL}/w185${data.poster_path} />
      <p>${data.title}</p>
      <div>Rating ${data.popularity}</div>
      <div>${data.overview}</div>
      <ul>${genres.join(' ')}</ul>
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
