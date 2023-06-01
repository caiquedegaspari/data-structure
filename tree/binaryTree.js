function BinarySearchTree() {
  var Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  } 
  var root = null

  this.insert = function (key) {
    var newNode = new Node(key)

    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.search = function (key) {
    return searchNode(root, key)
  }

  var searchNode = function (node, key) {
    if (node == null) {
      return false
    }
    if (key < node.key) {
      return searchNode(node.left, key)
    } else if (key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }

  this.remove = function (key) {
    root = removeNode(root, key)
  }

  var removeNode = function(node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      var aux = findMinNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }

  var findMinNode = function (node) {
    while(node && node.left !== null) {
      node = node.left
    }
    return node
  }

  this.min = function () {
    return minNode(root)
  }

  var minNode = function (node) {
    if (node) {
      while(node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  this.max = function () {
    return maxNode(root)
  }

  var maxNode = function(node) {
    if (node) {
      while(node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root,callback)
  }

  var inOrderTraverseNode = function (node,callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root,callback)
  }

  var preOrderTraverseNode = function (node,callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  this.postOrderTraverse = function () {
    postOrderTraverseNode(root,callback)
  }

  var postOrderTraverseNode = function (node,callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      callback(node.key)
      postOrderTraverseNode(node.right, callback)
    }
  }

}

function printNode(value) {
  console.log(value)
  return `<h3>In Order: ${value} </h3>`
}

var tree = new BinarySearchTree()

tree.insert(15)
tree.insert(10)
tree.insert(9)
tree.insert(6)
tree.insert(7)
tree.insert(2)
tree.insert(23)
tree.insert(27)
tree.insert(29)
tree.insert(42)
tree.insert(11)
tree.insert(13)
tree.insert(16)
tree.insert(18)
tree.insert(22)


tree.preOrderTraverse(printNode)


document.body.innerHTML = `
<h3>Search 13: ${tree.search(13)} </h3>
<h3>Search 99: ${tree.search(99)} </h3>
<h3>Min: ${tree.min()} </h3>
<h3>Max: ${tree.max()} </h3>

`