function LinkedList() {

  var Node = function(element) {
    this.element = element
    this.next = null
  }

  var length = 0
  var head = null

  this.append = function(element)  {
    var node = new Node(element)
    var current
  
    if (head === null) {
      head = node
    } else {
      current = head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    length++
  }
  
  this.insert = function(position, element)  {
    if (position >= 0 && position <= length) {
      var node = new Node(element)
      var current = head
      var previous
      var index = 0

      if (position === 0) {
        node.next = current
        head = node
      } else {
          while(index++ < position) {
            previous = current
            current = current.next
          }
          node.next = current
          previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function(position)  {
    if (position > -1 && position < length) {
      var current = head
      var previous
      var index = 0
      
      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  this.remove = function(element)  {
    var index = this.indexOf(element)
    return this.removeAt(index)
  }

  this.indexOf = function(element)  {
    var current = head
    index = 0

    while(current) {
      if(element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  this.isEmpty = function()  {
    return length === 0
  }

  this.size = function()  {
    return length
  }

  this.getHead = function() {
    return head
  }

  this.toString = function () {
    var current = head
    var string = ''

    while (current) {
      string += current.element + ' - '
      current = current.next
    }
    return string
  }

  this.print = function()  {
    console.log(this.toString())
    return this.toString()
  }
}

const linkedList = new LinkedList()

linkedList.append('João')
linkedList.append('José')
linkedList.append('Maria')

console.log('isEmpty', linkedList.isEmpty())
console.log('get Head', linkedList.getHead())
console.log('size', linkedList.size())


linkedList.insert(0,'Paulo')
console.log('get Head', linkedList.getHead())

linkedList.remove('Maria')
const printed = linkedList.print()

document.body.innerHTML = `
<h3>${printed}</h3>
<h3>index of Paulo ${linkedList.indexOf('Paulo')}</h3>
`