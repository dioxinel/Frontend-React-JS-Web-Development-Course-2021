function getAlbum(id) {
  return new Promise((resolve, rejected) => {
    fetch(`${baseUrl}/albums/${id}`)
    .then((res) => {
      return resolve(res.json())})
  })
 }

 function getSpecifiedAlbums(ids = []) {
  return Promise.all(ids.map(id => getAlbum(id)))
  .then((results) => results.map((item) => {
    return item
  }))
 }
  
 getSpecifiedAlbums([1, 15])
  .then((results) => {
    console.log("Results: ", results);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

