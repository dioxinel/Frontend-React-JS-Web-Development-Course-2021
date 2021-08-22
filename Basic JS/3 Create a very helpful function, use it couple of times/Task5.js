let convert = (bites) => {
  return (bites / 1000000).toFixed(2)
}

console.log('Task5: ' + convert.call(null, 2143124123))