function Queue() {
  var items = []

  this.enqueue = function(element) {
    items.push(element)
  }

  this.dequeue = function() {
    return items.shift()
  }

  this.front = function() {
    return items[0]
  }

  this.isEmpty = function() {
   return items.length === 0 
  }

  this.size = function() {
    return items.length
  }

  this.print = function() {
   console.log(items.toString()) 
   return items.toString()
  }
}

function hotPotatoe(nameList, num) {
  var queue = new Queue()

  for (var i = 0; i< nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  var eliminated = ''

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + 'was eliminated from the Hot potato game')
  }
  return queue.dequeue()
}

var names = ["Cris", "Elias", "Ana", 'Pedro', 'Paulo']

var winner = hotPotatoe(names, 0)

document.body.innerHTML = `<h3> The Winner is ${winner}!</h3>`