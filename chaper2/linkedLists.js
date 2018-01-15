class sNode {
  constuctor(data) {
    this.data = data;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}

singlyLinkedList.prototype.add = (data) => {
  let nodeToAdd = new sNode(data);
  let currentNode = this.head;

  if (!this.head) {
    this.head = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = nodeToAdd;
  this.length++;
  return nodeToAdd;
}

singlyLinkedList.prototype.searchAtPosition = (position) => {
  let currentNode = this.head;
  let count = 1;
  let errorMessage = 'Non-existent node';

  if (this.length === 0 || position > length || position < 1) {
    throw new Error(errorMessage);
  }

  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode
}

singlyLinkedList.prototype.removeAtPosition = (position) => {
  let currentNode = this.head;
  let count = 1;
  let errorMessage = "Non-existent node"
  let prevToDeleted = null;
  let toDelete = null;

  if (position > this.length || position < 1) {
    throw new Error(errorMessage);
  }

  if (position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    this.length--;
    return deletedNode;
  }

  while(count < position) {
    prevToDeleted = currentNode;
    currentNode = currentNode.next;
    count ++;
  }

  toDelete = currentNode;
  prevToDeleted.next = toDelete.next;
  this.length--;
  return toDelete;
}


class dNode {
  constuctor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}