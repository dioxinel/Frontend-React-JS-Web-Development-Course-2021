const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

const compose = ([...funcs]) => x => funcs.reduceRight(
  (a, b) =>  b(a), x 
);
   
const modifyArray = modifyCondition => data => {
  const resultString = data.reduce((res, item, idx) => {
    if (idx === 0) {
      return res + modifyCondition(item).res
    };
    return res + modifyCondition(item).separator + modifyCondition(item).res
  }, 'Result: ')
  return resultString + ' length: ' + (resultString.length - data.length - 3) 
}

const capitalize = (str) => {return {separator: '-', res: str[0].toUpperCase() + str.slice(1).toLowerCase()}};
const lowerCase = (str) => {return  {separator: ' - ', res: str.toLowerCase()}};

const capitalizeAllFirst = compose([modifyArray(capitalize)]);
const allToLower = compose([modifyArray(lowerCase)]); 
   
console.log(capitalizeAllFirst(arr));
console.log(allToLower(arr));
