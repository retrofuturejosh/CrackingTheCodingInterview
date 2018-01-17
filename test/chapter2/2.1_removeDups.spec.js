import { DoublyLinkedList, SinglyLinkedList } from '../../chaper2/linkedLists';
import { removeDups } from '../../chaper2/2.1_removeDups';

const expect = require('chai').expect;

describe('2.1 removeDups', () => {
  let duplicates = 'doublesies'
  let moreDuplicates = 'doublemint gum'

  describe('DoublyLinkedList', () => {
    let doublyLL = new DoublyLinkedList();
    doublyLL.addToHead(duplicates);
    let head = doublyLL.addToHead(moreDuplicates);
    doublyLL.addToTail(moreDuplicates);
    doublyLL.addToTail(duplicates);
  
    it('should properly return doubly linked list with duplicates removed', () => {
      expect(doublyLL.length).to.equal(4);
      removeDups(doublyLL);
      expect(doublyLL.length).to.equal(2);
      expect(doublyLL.head).to.equal(head);
      expect(doublyLL.tail.data).to.equal(duplicates);
    })
  
    it('should not remove any nodes in doubly linked list if none are duplicates', () => {
      doublyLL.addToTail('heya');
      expect(removeDups(doublyLL).length).to.equal(3);
    })
  })

  describe('SingleLinkedLIst', () => {
    let singlyLL = new SinglyLinkedList();
    let head = singlyLL.add('head here');
    singlyLL.add(duplicates);
    singlyLL.add(duplicates);
    singlyLL.add('not a duplicate');

    it('should properly return singly linked list with duplicates removed', () => {
      expect(singlyLL.length).to.equal(4);
      expect(removeDups(singlyLL).length).to.equal(3);
      expect(singlyLL.head).to.equal(head);
    })
    it('should not remove any nodes in doubly linked list if none are duplicates', () => {
      singlyLL.add('wuuuut?!');
      expect(removeDups(singlyLL).length).to.equal(4);
    })
  })
 
})