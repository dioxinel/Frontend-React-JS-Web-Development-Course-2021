function filterArray(initialArray) {
  const resList = initialArray.filter((item) => {
    if (typeof item === 'string') return true
  })
  console.log(resList)
 }

 filterArray([2, 'string', 3, 'test'])