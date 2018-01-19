import { SinglyLinkedList, DoublyLinkedList } from '../../chaper2/linkedLists';
import { partition, partitionDoublyLL } from '../../chaper2/2.4_partition';

const expect = require('chai').expect;

let description = 'returns a properly re-arranged linked list'

describe('2.3 Partition', () => {
  describe('Singly Linked List', () => {
    let linkedList = new SinglyLinkedList();
    addNodes(linkedList, 6);
    addNodes(linkedList, 6);

    test(description, linkedList, partition);
  })
  describe('Doubly Linked List', () => {
    let linkedList = new DoublyLinkedList();
    addNodesDoublyLinked(linkedList, 6);
    addNodesDoublyLinked(linkedList, 6);

    test(description, linkedList, partitionDoublyLL)
  })
})

function test(description, linkedList, cb) {
  return it(description, () => {
    expect(linkedList.searchAtPosition(4).data).to.equal(4)
    let partitionList = cb(linkedList, 3);
    expect(partitionList.searchAtPosition(4).data).to.be.lessThan(3);
    expect(partitionList.searchAtPosition(5).data).to.be.greaterThan(2);
    expect(partitionList.searchAtPosition(12).data).to.be.greaterThan(3);
    expect(partitionList.length).to.equal(12);
  })
}

function addNodes(linkedList, num) {
  for(let i = 1; i <= num; i++) {
    linkedList.add(i);
  }
}

function addNodesDoublyLinked(linkedList, num) {
  for(let i = 1; i <= num; i++) {
    linkedList.addToTail(i);
  }
}