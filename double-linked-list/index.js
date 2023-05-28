function doubleLinkedList() {

  var Node = function(element) {
    this.element = element
    this.next = null
    this.prev = null
  }

  var length = 0
  var head = null
  var tail = null

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
        if(!head) {
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node
          head = node
        }
      } else if (position === length) {
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.nex = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      length++
      return true
    } else {
        return false
    }
  }

  this.removeAt = function(position)  {
    
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

const doublelinkedList = new doubleLinkedList()

doublelinkedList.append('João')
doublelinkedList.append('José')
doublelinkedList.append('Maria')

console.log('isEmpty', doublelinkedList.isEmpty())
console.log('get Head', doublelinkedList.getHead())
console.log('size', doublelinkedList.size())


doublelinkedList.insert(0,'Paulo')
console.log('get Head', doublelinkedList.getHead())

doublelinkedList.remove('Maria')
const printed = doublelinkedList.print()

document.body.innerHTML = `
<h3>${printed}</h3>
<h3>index of Paulo ${doublelinkedList.indexOf('Paulo')}</h3>
`