function Stack() {
  var items = []

  this.push = function(element) {
    items.push(element)
  }

  this.pop = function() {
    return items.pop()
  }

  this.peek = function() {
    return items[items.length - 1]
  }

  this.isEmpty = function() {
    return items.length === 0
  }

  this.clear = function() {
    items = []
  }

  this.size = function() {
    return items.length
  }

  this.print = function() {
    console.log(items.toString())
  }
}

const pilha = new Stack()

pilha.push(2)
pilha.push(4)
pilha.push(6)

pilha.print()
