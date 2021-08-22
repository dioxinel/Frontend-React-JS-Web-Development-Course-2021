function isString(cb, value) {
  if (typeof cb === 'function' && typeof value === 'string') {
    return cb(value)
  }
  console.log('Incorrect input')
}

function toConsole(value) {
  console.log(value)
}
isString(toConsole, 'Hello World')
isString('Hello World', 'Hello World')
isString(toConsole, toConsole)