

export const renderMovies = (data, parentNode) => {
  const baseImageURL = "https://image.tmdb.org/t/p";
    data.results.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.className = 'filmItem';
      listItem.innerHTML = `
      <img src=${baseImageURL}/w185${item.poster_path} />
      <p>${item.title}</p>`
 
      parentNode.append(listItem);
    })
    addTotalResults(data)
    addNextPageBtn(data)
}

function addTotalResults(data) {
  const input = document.querySelector('.searchInput')

  const totalResults = data.total_results ? 
  `Results: ${data.total_results}` : 
  `No results for ${input.value}`
  input.value = ''; 
  const totalCountResults = document.querySelector('.totalResults')
  totalCountResults.textContent = totalResults;   
}

function addNextPageBtn(data) {
  const loadMoreBtn = document.querySelector('.loadMoreBtn')

  if(data.page < data.total_pages) {
    loadMoreBtn.classList.add('loadMoreVisible')
    loadMoreBtn.dataset.currentPage = data.page;
  } else {
    loadMoreBtn.classList.remove('loadMoreVisible')
  }
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
