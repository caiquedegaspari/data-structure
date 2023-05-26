function decimalToBinary(decimal) {
  var restStack = []
  var rest
  var binaryString = ''

  while (decimal > 0) {
    rest = Math.floor(decimal % 2)
    restStack.push(rest)
    decimal = Math.floor(decimal / 2)
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString()
  }

  return binaryString
}

console.log(decimalToBinary(23))