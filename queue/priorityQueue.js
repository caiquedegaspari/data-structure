function PriorityQueue() {
  var items = []

  function QueueElement (element, priority) {
    this.element = element
    this.priority = priority
  }

  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority)
    var added = false

    for (var i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i,0,queueElement)
        added = true
        break
      }
    }
    if (!added) {
      items.push(queueElement)
    }
  }

  this.dequeue = function () {
    return items.shift()
  }

  this.print = function () {
    for (var i = 0; i < items.length; i++) {
      console.log(items[i].element + ' '+ items[i].priority)
    }
    return items
  }
}

var pQueue = new PriorityQueue()

pQueue.enqueue('Carlos', 2)
pQueue.enqueue('Ana', 1)
pQueue.enqueue('Lucas', 1)

const printedItems = pQueue.print()

document.body.innerHTML = printedItems.map((item) => `${item.element} ${item.priority}`)