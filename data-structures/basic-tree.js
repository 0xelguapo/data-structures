class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value
    this.parent = parentNode;
  }

  addNode(value) {
    //we want to make it possible to interact with new nodes added
    const node = new Node(value, this)
    this.children.push(node);
    //we then return the new node and its index
    return { node: node, index:this.children.length - 1}
  }

  removeNode(index) {
    this.children.splice(index, 1)
  }
}

class Tree {
  constructor(rootValue) {
    //first node we create when create a tree, then we can add children to it
    this.root = new Node(rootValue);
  }
}

const fileSystem = new Tree('/');
//root points at a new node, and nodes have an addNode method
const documentsNodeData = fileSystem.root.addNode('/documents')
const gamesNodeData = fileSystem.root.addNode('/games')
documentsNodeData.node.addNode('results.txt')
gamesNodeData.node.addNode('cod.exe')

console.log(fileSystem)