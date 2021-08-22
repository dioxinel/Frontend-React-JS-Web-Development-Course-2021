async function getSkywalkers() {
  try {
    const response = await fetch('https://swapi.py4e.com/api/people/?search=skywalker')
  
    if (!response.ok) {
      throw new Error(`Failed with status code: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
      console.log("Request Error: ", error);
  }
 }
 
 getSkywalkers();
 