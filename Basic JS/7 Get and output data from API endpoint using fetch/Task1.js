const baseUrl = "https://jsonplaceholder.typicode.com";

function getUsers() {
  fetch(baseUrl + '/users')
  .then((response) => {
    return response.json()
  })
  .then(data => {
    const res = { Results: data}
    console.log(res)
  })
}

getUsers()