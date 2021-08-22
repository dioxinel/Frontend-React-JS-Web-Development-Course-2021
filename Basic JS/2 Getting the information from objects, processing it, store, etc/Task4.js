function findUser(initialObject) {
  const resList = Object.keys(initialObject).filter((item) => {
    if (initialObject[item].age > 18 && 
      initialObject[item].city === 'London') return true;
  })
  console.log(resList)
 }

 findUser({Max: {age: 23, city: 'London'}, Mike: {age: 20, city: 'NY'}})