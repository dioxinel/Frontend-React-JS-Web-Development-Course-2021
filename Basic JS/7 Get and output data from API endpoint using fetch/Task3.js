const newUser = {
  name: "Name LastName",
  username: "UserName",
  email: "usermail@gmail.com"
 };

function createNewUser(userData) {
  fetch(`${baseUrl}/users`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => {
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

createNewUser(newUser)
  
