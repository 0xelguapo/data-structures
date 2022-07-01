class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) return;

    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }

    const existingChildNode = this.children.find(
      (child) => child.value === segments[0]
    );
    if (existingChildNode) existingChildNode.addNode(segments.slice(1).join('/'));
    else {
      //if there is
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.children.push(node)
      return { node: node, index: this.childrenlength - 1}
    }
  }

  removeNode(index) {
    this.children.splice(index, 1);
  }
}

class Tree {
  constructor(rootValue) {
    //first node we create when create a tree, then we can add children to it
    this.root = new Node(rootValue);
  }
  add(path) {
    this.root.addNode(path);
  }

  remove(path) {}
}

const fileSystem = new Tree("/");
fileSystem.add('documents')
fileSystem.add('documents/personal/tax.docx');
fileSystem.add('games/code.exe')
fileSystem.add('games/code2.exe');

console.log(fileSystem)
