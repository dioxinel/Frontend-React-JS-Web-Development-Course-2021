function removeObj(arrayOfObj, keyName, value) {
  const resList = arrayOfObj.filter((item) => {
    if (!item[keyName] || !(item[keyName] === value)) return true;
  })
  console.log(resList)
  }
   
  const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
  removeObj(arr, "age", 2);
  removeObj(arr, "year", 2);