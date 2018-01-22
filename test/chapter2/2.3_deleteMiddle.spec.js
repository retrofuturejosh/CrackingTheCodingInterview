import { SinglyLinkedList } from '../../chaper2/linkedLists';
import { deleteMiddle } from '../../chaper2/2.3_deleteMiddle';

const expect = require('chai').expect;

describe('2.3 Delete Middle Node', () => {

//ADD SOLUTIONS FOR TESTING BELOW
  test('Solution 1', deleteMiddle);
})

function test(description, cb) {
  describe(description, () => {
    let linkedList = new SinglyLinkedList();
    addNodes(linkedList, 5);
    let nodeToRemove = linkedList.searchAtPosition(2);
    let nextNode = linkedList.searchAtPosition(3);
  
    it('removes correct node', () => {
      cb(nodeToRemove);
      expect(linkedList.searchAtPosition(2).data).to.equal(3);
      expect(linkedList.searchAtPosition(2).next.data).to.equal(4);
    })
  })
}

function addNodes(linkedList, num) {
  for(let i = 1; i <= num; i++) {
    linkedList.add(i);
  }
}