export const renderPopularMovies = (data) => {
  const baseImageURL = "https://image.tmdb.org/t/p";

  const list = document.createElement('ul');
  list.className = 'filmList'
    data.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.className = 'filmItem';
      const image = document.createElement('img');
      image.src = `${baseImageURL}/w185${item.poster_path}`;
      const title = document.createElement('p');
      title.textContent = item.title;
  
      listItem.append(image);
      listItem.append(title);
      list.append(listItem);
    })
    document.querySelector('.mainContainer').append(list);
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
