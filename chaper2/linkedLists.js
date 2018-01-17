let errorMessage = 'Non-existent node';

//SINGLY LINKED LIST
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

SinglyLinkedList.prototype.searchByValue= function(val) {
  return searchByValFunc(val, this.head)
}

function searchByValFunc(val, currentNode) {
  if(currentNode.data === val) return currentNode;
  else if(!currentNode.next) throw new Error(`No node contains ${val}`);
  else return searchByValFunc(val, currentNode.next);
}



//DOUBLY LINKED LIST
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


DoublyLinkedList.prototype.addToHead = function(val) {
  let nodeToAdd = new DNode(val);
  let oldHead;

  if(!this.head) {
    this.head = nodeToAdd;
    this.tail = nodeToAdd;
  }
  else {
    this.head.prev = nodeToAdd;
    oldHead = this.head;
    this.head = nodeToAdd;
    this.head.next = oldHead;
  }

  this.length++;
  return nodeToAdd;
}


DoublyLinkedList.prototype.addToTail = function(val) {
  let nodeToAdd = new DNode(val);
  let oldTail;

  if(!this.tail) {
    this.tail = nodeToAdd;
    this.head = nodeToAdd;
  }
  else {
    oldTail = this.tail;
    oldTail.next = nodeToAdd;
    nodeToAdd.prev = oldTail;
    this.tail = nodeToAdd;
  }

  this.length++;
  return nodeToAdd;
}

DoublyLinkedList.prototype.searchAtPosition = function(position) {
  let currentNode = this.head;
  let length = this.length;
  let count = 1;

  if (position > length || position < 1) {
    throw new Error(errorMessage);
  }

  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
}

DoublyLinkedList.prototype.deleteAtPosition = function(position) {
  let count = 1;
  let length = this.length;
  let currentNode = this.head;
  let toDelete, prevToDeleted, afterDeleted;

  if (position > length || position < 1) {
    throw new Error(errorMessage);
  }

  while(count < position) {
    currentNode = currentNode.next;
    count++;
  }
  
  toDelete = currentNode;

  if(position === 1) {
    afterDeleted = currentNode.next;
    afterDeleted.prev = null;
    this.head = afterDeleted;
  } else if (position === length) {
    prevToDeleted = currentNode.prev;
    prevToDeleted.next = null;
    this.tail = prevToDeleted;
  } else {
    prevToDeleted = currentNode.prev;
    afterDeleted = currentNode.next;
    prevToDeleted.next = afterDeleted;
    afterDeleted.prev = prevToDeleted;
  }

  this.length--;
  return toDelete
}

DoublyLinkedList.prototype.searchByValue = function(val) {
  return searchByValFunc(val, this.head);
}