class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const segments = value.split("/");
    // ['documents', 'personal', 'chickenshit.exe']
    if (segments.length === 0) return;
    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }

    const existingChildNode = this.children.find(child => child === segments[0])
    if(existingChildNode) existingChildNode.addNode(segments.slice(1).join('/'))
    else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join('/'));
      this.children.push(node);
      return { node: node, index: this.children.length - 1}
    }
    
  }

  removeNode(index) {
    this.children.splice(index, 1);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }
}

//create a tree
//the tree nakes a node
//each node has children
const fileSystem = new Tree("/");
fileSystem.add("documents");
fileSystem.add("documents/personal/chickenshit.docx");
fileSystem.add("games/cod.exe");
fileSystem.add("games/cod2.exe");
console.log(fileSystem);
