import { SinglyLinkedList } from '../../chaper2/linkedLists';
import { returnKthToLast, returnKthToLastRecursive } from '../../chaper2/2.2_returnKthToLast';
const expect = require('chai').expect;

describe('2.2 Return kth to Last', () => {

//ADD SOLUTIONS FOR TESTING BELOW
  test('Solution 1: Iterative solution', returnKthToLast);
  test('Solution 2: Recursive solution', returnKthToLastRecursive)
})

function test(description, cb) {
  return describe(description, () => {
    let linkedList = new SinglyLinkedList();
    addNodes(linkedList, 4);
  
    it('returns the correct node', () => {
      expect(cb(linkedList, 3).data).to.equal(1);
      expect(cb(linkedList, 2).data).to.equal(2);
      expect(cb(linkedList, 1).data).to.equal(3);
      expect(cb(linkedList, 0).data).to.equal(4);
    })
  
    it('throws an error if k is out of range', () => {
      expect(() => cb(linkedList, 4)).to.throw('Linked list is not sufficiently long');
    })
  })
}

function addNodes(linkedList, num) {
  for(let i = 1; i <= num; i++) {
    linkedList.add(i);
  }
}
