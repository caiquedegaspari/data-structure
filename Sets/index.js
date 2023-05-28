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
}