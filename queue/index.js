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

var queue = new Queue()

queue.enqueue('Aluisio')
queue.enqueue('Caique')
queue.enqueue('Gabriela')
queue.enqueue('Cris')
queue.enqueue('Juliette')
queue.enqueue('Ragnar')

queue.dequeue()
queue.dequeue()
queue.dequeue()

queue.print()

document.body.innerHTML = `
<h3> Queue: ${queue.print()}</h3>
<h3> Queue size: ${queue.size()}</h3>
<h3> Queue front: ${queue.front() ?? 'Nobody'}</h3>
<h3> Queue is empty: ${queue.isEmpty()}</h3>
` 