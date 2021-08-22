
function fetchAlbumsByUserId(id) {
  fetch(`${baseUrl}/users/${id}/albums`)
  .then(response => {
    if(!response.ok) {
     throw new Error('Something goes wrong') 
    }
    return response.json()
  })
  .then(data => {
    const res = { Results: data}
    console.log(res)
  })
  .catch(err => console.log(err))
}

fetchAlbumsByUserId(10)
