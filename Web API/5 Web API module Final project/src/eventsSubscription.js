import LocalStorageApi from "./LocalStorageApi.js";


export function subscribeHeaderEvents() {
  const searchButton = document.querySelector('.searchButton');
  const input = document.querySelector('.searchInput');

  input.addEventListener('input', (evt) => {
    if(evt.target.value.length) {
      searchButton.removeAttribute('disabled')
    } else {
      searchButton.setAttribute('disabled', true)
    }
  })

  document.querySelector('.header').addEventListener('click',
  (evt) => {
    const logoNodeClick = evt.target.closest('i');
    const buttonClick = evt.target.closest('button');
    if (logoNodeClick) {
      window.location.pathname = '/';
    } else if (buttonClick && buttonClick.classList.contains('searchButton') ) {
      window.location.pathname = `/search?query=${input.value}`;
      input.value = '';
      searchButton.setAttribute('disabled', true)
    } else if (buttonClick && buttonClick.classList.contains('bookmarksBtn')) {
      window.location.pathname = '/bookmarks';
    } else {
      return
    }
  });
}

export function subscribeMovieListClick() {
document.querySelector('.filmList').addEventListener('click', (evt) => {
    const saveNode = evt.target.closest('i');
    if(saveNode) {
      handleSave(evt)
      return
    }
    const node = evt.target.closest('li');
    if(node) {
      return window.location.pathname = `movie/${node.dataset.movieId}`;
    }
    
  })
}

function handleSave(evt) {
  const savedFilmNode = evt.target.parentNode.parentNode;
  const saveIcon = savedFilmNode.childNodes[3].childNodes[1];
  if(savedFilmNode.dataset.isSaved === 'true') {
    savedFilmNode.dataset.isSaved = 'false'
    saveIcon.classList.remove('fas')
    saveIcon.classList.add('far')

    LocalStorageApi.removeItem(savedFilmNode.dataset.movieId)
    if(window.location.pathname === '/bookmarks')savedFilmNode.remove();
  } else {
    const savedFilm = {
      id: savedFilmNode.dataset.movieId,
      isSaved: 'true',
      title: savedFilmNode.childNodes[3].childNodes[3].textContent,
      poster_path: savedFilmNode.childNodes[1].src.split('/w185')[1]
      }

    savedFilmNode.dataset.isSaved = 'true'
    saveIcon.classList.remove('far')
    saveIcon.classList.add('fas')

    LocalStorageApi.addItem(savedFilm)
  }
}

