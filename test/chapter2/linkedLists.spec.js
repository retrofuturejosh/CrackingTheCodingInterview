const expect = require('chai').expect;

import { SinglyLinkedList, DoublyLinkedList } from '../../chaper2/linkedLists';

//testing for linked lists
describe('Linked Lists', () => {
  describe('Singly Linked List', () => {
    let linkedListCheck = new SinglyLinkedList();;

    it('should add a new node to head with add method', () => {
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

  describe('Doubly Linked List', () => {
    let doublyLinkedCheck = new DoublyLinkedList()

    describe('addToHead method', () => {
      let firstAdded = 'Added muh head';
      let secondAdded = 'New head, yall';
      let lastAdded = 'hiya'

      it('should add a new node as head and tail if there is none', () => {
        expect(doublyLinkedCheck.head).to.equal(null)
        doublyLinkedCheck.addToHead(firstAdded);
        expect(doublyLinkedCheck.head.data).to.equal(firstAdded);
        expect(doublyLinkedCheck.tail.data).to.equal(firstAdded);
      })
      it('should replace existing head with new node', () => {
        doublyLinkedCheck.addToHead(secondAdded);
        expect(doublyLinkedCheck.head.data).to.equal(secondAdded);
      })
      it('should set as old head this.head.next', () => {
        expect(doublyLinkedCheck.head.next.data).to.equal(firstAdded)
      })
      it('should set old head .prev to new head ', () => {
        expect(doublyLinkedCheck.head.next.prev.data).to.equal(secondAdded)
      })
      it('should properly increment length property', () => {
        expect(doublyLinkedCheck.length).to.equal(2)
      })
      it('can properly add a third head', () => {
        doublyLinkedCheck.addToHead(lastAdded)
        expect(doublyLinkedCheck.head.data).to.equal(lastAdded)
        expect(doublyLinkedCheck.head.next.data).to.equal(secondAdded)
      })
      it('first head added is .tail', () => {
        expect(doublyLinkedCheck.tail.data).to.equal(firstAdded)
      })
      it('second head added has prev and next properly set', () => {
        let secondHead = doublyLinkedCheck.head.next;
        expect(secondHead.next.data).to.equal(firstAdded);
        expect(secondHead.prev.data).to.equal(lastAdded)
      })
    })

    describe('addToTail method', () => {
      let linkedListTailCheck = new DoublyLinkedList;
      let firstAdded = 'Added a tail';
      let secondAdded = 'Second tail here';
      let lastAdded = 'Last tail yall'

      it('should add a node as head and tail if there is none', () => {
        expect(linkedListTailCheck.head).to.equal(null);
        expect(linkedListTailCheck.tail).to.equal(null)
        linkedListTailCheck.addToTail(firstAdded)
        expect(linkedListTailCheck.head.data).to.equal(firstAdded);
        expect(linkedListTailCheck.tail.data).to.equal(firstAdded);
      })
      it('should replace existing tail with new node', () => {
        linkedListTailCheck.addToTail(secondAdded);
        expect(linkedListTailCheck.tail.data).to.equal(secondAdded)
      })
      it('should set old tail as this.tail.prev', () => {
        expect(linkedListTailCheck.tail.prev.data).to.equal(firstAdded)
      })
      it('should set old tail .next as new tail', () => {
        expect(linkedListTailCheck.tail.prev.next.data).to.equal(secondAdded)
      })
      it('should properly increment length property', () => {
        expect(linkedListTailCheck.length).to.equal(2);
      })
      it('can add a tail a third time', () => {
        linkedListTailCheck.addToTail(lastAdded);
        expect(linkedListTailCheck.tail.data).to.equal(lastAdded);
        expect(linkedListTailCheck.tail.prev.data).to.equal(secondAdded);
        expect(linkedListTailCheck.length).to.equal(3);
        expect(linkedListTailCheck.head.data).to.equal(firstAdded);
        expect(linkedListTailCheck.head.next.data).to.equal(secondAdded);
        expect(linkedListTailCheck.head.next.prev.data).to.equal(firstAdded)
        expect(linkedListTailCheck.head.next.next.data).to.equal(lastAdded)
      })
    })

    describe('searchAtPosition method', () => {

    })

    describe('deleteAtPosition method', () => {

    })
    
    describe('multiple methods work together properly', () => {
      let firstHead = 'Imma the start';
      let firstTail = 'Imma the end';
      let linkedListCheck = new DoublyLinkedList();

      it('can add to head then add to tail', () => {
        linkedListCheck.addToHead(firstHead);
        linkedListCheck.addToTail(firstTail);
        let head = linkedListCheck.head;
        let tail = linkedListCheck.tail;
        expect(head.next).to.equal(tail);
        expect(tail.prev).to.equal(head);
      })
      it('can add to head and tail several times properly', () => {
        let newNodeOne = linkedListCheck.addToHead('hi');
        let newNodeTwo = linkedListCheck.addToTail('how');
        let newNodeThree = linkedListCheck.addToHead('are');
        let newNodeFour = linkedListCheck.addToTail('ya?!');
        expect(linkedListCheck.tail).to.equal(newNodeFour);
        expect(linkedListCheck.tail.prev).to.equal(newNodeTwo);
        expect(linkedListCheck.head).to.equal(newNodeThree);
        expect(linkedListCheck.head.next).to.equal(newNodeOne)
        expect(linkedListCheck.length).to.equal(6)
      })
    })
  })
})