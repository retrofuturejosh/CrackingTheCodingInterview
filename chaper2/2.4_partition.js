import { SinglyLinkedList, DoublyLinkedList } from "./linkedLists";

export function partition(linkedList, p) {
  let beforeList = new SinglyLinkedList();
  let afterList = new SinglyLinkedList();
  let currentNode = linkedList.head;
  let endOfFirst;

  //sort into two lists
  for(let i = 0; i < linkedList.length; i++) {
    if(currentNode.data < p) {
      endOfFirst = beforeList.add(currentNode.data);
    }
    else afterList.add(currentNode.data);
    currentNode = currentNode.next;
  }

  //merge lists
  endOfFirst.next = afterList.head;
  beforeList.length = linkedList.length;
  return beforeList;
}

export function partitionDoublyLL(linkedList, p) {
  let partitionedList = new DoublyLinkedList();
  let currentNode = linkedList.head;

  //sort by adding to head or tail
  for(let i = 0; i < linkedList.length; i++) {
    if(currentNode.data < p) partitionedList.addToHead(currentNode.data);
    else partitionedList.addToTail(currentNode.data);
    currentNode = currentNode.next;
  }

  return partitionedList;
}