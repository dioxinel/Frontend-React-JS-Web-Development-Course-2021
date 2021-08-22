async function fetchSWAPI(resource, throwError=false) {
  let rootUrl;
  if (resource.startsWith('https://swapi.py4e.com/api')) {
    rootUrl = resource;
  } else {
    rootUrl = `https://swapi.py4e.com/api/${resource}`;
  }
  try {
    const response = await fetch(rootUrl)
  
    if (!response.ok && throwError) {
      throw new Error(`Resource: ${rootUrl}. 
      Failed with status code: ${response.status}`);
    }
    return response.json()
  } catch (error) {
      console.log("Request Error: ", error);
  }
 }
  
 async function testFetchSWAPI() {
  try {
    const person = await fetchSWAPI("people/1/");
    console.log("person ", person);
  
    const film = await fetchSWAPI("https://swapi.py4e.com/api/films/1/");
    console.log("film ", film);
  
    const film1001Id = await fetchSWAPI("films/1001/");
    console.log("film1001Id ", film1001Id);
  
    // should throw error
    await fetchSWAPI("films/1101/", true);
  } catch (error) {
    console.log("testFetchSWAPI error ", error);
  }
 }
  
 testFetchSWAPI();
