import { DoublyLinkedList, SinglyLinkedList } from '../../chaper2/linkedLists';
import { removeDups } from '../../chaper2/2.1_removeDups';

const expect = require('chai').expect;

describe('2.1 removeDups', () => {
  let doublyLL = new DoublyLinkedList();
  let duplicates = 'doublesies'
  let moreDuplicates = 'doublemint gum'
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

  it('should not remove any nodes if none are duplicates', () => {
    doublyLL.addToTail('heya');
    expect(removeDups(doublyLL).length).to.equal(3);
  })
})