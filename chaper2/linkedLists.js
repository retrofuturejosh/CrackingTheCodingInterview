class SNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}

SinglyLinkedList.prototype.add = function(data) {
  let nodeToAdd = new SNode(data);
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

SinglyLinkedList.prototype.searchAtPosition = function(position) {
  let currentNode = this.head;
  let count = 1;
  let errorMessage = 'Non-existent node';
  let length = this.length;

  if (length === 0 || position > length || position < 1) {
    throw new Error(errorMessage);
  }

  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode
}

SinglyLinkedList.prototype.removeAtPosition = function(position) {
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
    toDelete = currentNode;
    this.length--;
    return toDelete;
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


class DNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}