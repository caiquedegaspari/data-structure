function baseConverter(decimal, base) {
  var restStack = []
  var rest
  var baseString = ''
  var digits = '0123456789ABCDEF'

  while(decimal > 0) {
    rest = Math.floor(decimal % base) 
    restStack.push(rest)
    decimal = Math.floor(decimal / base)
  } 

  while(restStack.length > 0) { 
    baseString += digits[restStack.pop()]
  }

  return baseString
}

console.log(baseConverter(123, 2))