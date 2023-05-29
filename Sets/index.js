function Set() {
  var items = {}


  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }

  this.delete = function(value) {
    if (this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  this.has = function(value) {
    return items.hasOwnProperty(value)
  }

  this.clear = function() {
    items = {}
  }
  
  this.size = function() {
    return Object.keys(items).length
  }

  this.values = function() {
    var values = []
    var keys = Object.keys(items) 
    for (var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }

  this.union = function (otherSet) {
    var unionSet = new Set()
    var values = this.values()

    for (var i = 0;i < values.length; i++) {
      unionSet.add(values[i])
    }

    values = otherSet.values()

    for (var i = 0;i < values.length; i++) {
      unionSet.add(values[i])
    }

    return unionSet
  }

  this.intersection = function(otherSet) {
    var intersectionSet = new Set()
    var values = this.values()

    for (var i = 0; i < values.length; i++) {
      if(otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }

  this.difference = function(otherSet) {
    var differenceSet = new Set()
    var values = this.values()

    for (var i = 0;i < values.length;i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }

  this.subset = function(otherSet) {
    if(this.size() > otherSet.size()) return false
    else {
      var values = this.values()

      for (var i = 0; i < values.length;i++) {
        if (!otherSet.has(values[i])) return false
      }
      return true
    }
  }
}

const setA = new Set()

setA.add(1)
setA.add(2)


const setB = new Set()

setB.add(1)
setB.add(2)
setB.add(3)

const setC = new Set()

setB.add(2)
setB.add(3)
setB.add(4)

const subsetAB = setA.subset(setB)
const subsetAC = setA.subset(setC)


const valuesA = setA.values()
const valuesB = setB.values()
const valuesC = setC.values()



document.body.innerHTML = `
Values set A: ${valuesA} </br>
Values set B: ${valuesB} </br>
Values set B: ${valuesC} </br>
SUBSET AB: ${subsetAB}</br>
SUBSET AC: ${subsetAC}
`
