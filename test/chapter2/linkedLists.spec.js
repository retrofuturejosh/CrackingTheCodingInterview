const expect = require('chai').expect;

import { SinglyLinkedList } from '../../chaper2/linkedLists';

//testing for linked lists
describe('Linked Lists', () => {
  describe('Singly Linked List', () => {
    let linkedListCheck;

    it('should add a new node to head with add method', () => {
      linkedListCheck = new SinglyLinkedList();
      linkedListCheck.add('Mic Check One Two');
      expect(linkedListCheck.head.data).to.equal('Mic Check One Two');
    })

    it('should properly add another node', () => {
      linkedListCheck.add('Check Check');
      expect(linkedListCheck.head.next.data).to.equal('Check Check');
    })

    it('should return correct node when searching', () => {
      linkedListCheck.add('Find Me');
      let returnNode = linkedListCheck.searchAtPosition(3);
      expect(returnNode.data).to.equal('Find Me');
      returnNode = linkedListCheck.searchAtPosition(1);
      expect(returnNode.data).to.equal('Mic Check One Two');
    })

    it('should delete and return correct node with delete method', () => {
      linkedListCheck.add('New Tail');
      let returnNode = linkedListCheck.removeAtPosition(3);
      expect(returnNode.data).to.equal('Find Me');
    })

    it('should no longer have removed node', () => {
      let returnNode = linkedListCheck.searchAtPosition(3);
      expect(returnNode.data).to.equal('New Tail');
    })

    it('should properly remove head with remove method', () => {
      linkedListCheck.removeAtPosition(1);
      expect(linkedListCheck.head.data).to.equal('Check Check');
    })

    it('should throw an error if searching for non-existent node', () => {
      expect(() => linkedListCheck.searchAtPosition(4)).to.throw('Non-existent node');
      expect(() => linkedListCheck.searchAtPosition(0)).to.throw('Non-existent node');
    })

    it('should throw an error if attempting to delete a non-existent node', () => {
      expect(() => linkedListCheck.removeAtPosition(4)).to.throw('Non-existent node');
      expect(() => linkedListCheck.removeAtPosition(0)).to.throw('Non-existent node');
    })
  })
})