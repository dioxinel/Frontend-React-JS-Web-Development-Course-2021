function isEvenArray(initialArray) {
  initialArray.find((num) => {
    return num % 2 !== 0;
  }) ? console.log('NO') : console.log('YES')
 }


 isEvenArray([1, 2, 3, 9]);
 isEvenArray([2, 4, 6]);