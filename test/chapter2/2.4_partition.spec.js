import { SinglyLinkedList, DoublyLinkedList } from '../../chaper2/linkedLists';
import { partition, partitionDoublyLL } from '../../chaper2/2.4_partition';
const expect = require('chai').expect;

let description = 

describe('2.3 Partition', () => {

//ADD SOLUTIONS FOR TESTING BELOW
  test('Solution 1', partition, partitionDoublyLL);
})

function test(description, singlyLLCallback, doublyLLCallBack) {
  describe(description, () => {
    describe('Singly Linked List', () => {
      let linkedList = new SinglyLinkedList();
      addNodes(linkedList, 6);
      addNodes(linkedList, 6);
      testList(linkedList, singlyLLCallback);
    })

    describe('Doubly Linked List', () => {
      let linkedList = new DoublyLinkedList();
      addNodesDoublyLinked(linkedList, 6);
      addNodesDoublyLinked(linkedList, 6);
      testList(linkedList, doublyLLCallBack)
    })
  })
}

function testList(linkedList, cb) {
  it('returns a properly re-arranged linked list', () => {
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