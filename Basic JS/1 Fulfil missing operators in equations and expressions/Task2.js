function calculateSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];

  let res = 0;
  initialArray.map((item) => {
    if (typeof item === 'number') {
      res += item;
    }
  })
  console.log(res);
 }
  
 calculateSumOfArray();