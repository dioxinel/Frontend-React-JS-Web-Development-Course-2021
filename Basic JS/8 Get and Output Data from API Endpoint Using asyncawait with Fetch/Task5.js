async function getPersonFilms(name) {
  const res = await fetchSWAPI(`https://swapi.py4e.com/api/people/?search=${name}`)
  const filmLinkList = res.results[0].films;
  const data = await Promise.all(filmLinkList.map((item) => {
    return fetchSWAPI(item)
  }))
  return data;
 }

 
 getPersonFilms("Luke")
 async function testGetPersonFilms() {
  const lukeFilms = await getPersonFilms("Luke");
  console.log("lukeFilms ", lukeFilms);
  
  const kenobiFilms = await getPersonFilms("Kenobi");
  console.log("kenobiFilms ", kenobiFilms);
 }
  
 testGetPersonFilms();