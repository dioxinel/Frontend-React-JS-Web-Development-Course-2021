const bookmarksList = document.querySelector('.bookmarksList')
const baseImageURL = "https://image.tmdb.org/t/p";

export const renderPopularMovies = (data, parentNode) => {
    data.forEach((item) => {
      if(item.isSaved) {
        bookmarksList.append(renderSingleMovie(item))
      }
      parentNode.append(renderSingleMovie(item));
    })

}

export function renderSingleMovie(data) {
  const listItem = document.createElement('li');
    listItem.id = data.id;
    listItem.dataset.isSaved = data.isSaved;
    listItem.className = 'filmItem';
    listItem.innerHTML = `
    <img src=${baseImageURL}/w185${data.poster} />
    <div>
      <i class="${data.isSaved === true ? "fas fa-heart" : "far fa-heart"}"></i>
      <p>${data.title}</p>
    </div>`
  return listItem;
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
  document.getElementById("loader").remove();
});
