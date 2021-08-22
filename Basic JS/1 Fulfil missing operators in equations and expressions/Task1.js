function printPowsOf2(number) {
  if ( typeof number !== 'number') {
    return console.log(`"${number}" - "incorrect type"`);
  }

  let res = number + ' - '; 
  for(let i = 1; i <= number; i *= 2) {
    res += i + ', '; 
  }
  
  console.log(res.slice(0, -2));
 }
  
 printPowsOf2("302");
 printPowsOf2(null);
 printPowsOf2(128);
 printPowsOf2(60);