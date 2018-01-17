const expect = require('chai').expect;

import { SinglyLinkedList, DoublyLinkedList } from '../../chaper2/linkedLists';

//testing for linked lists
describe('Linked Lists', () => {
  describe('Singly Linked List', () => {
    let linkedListCheck = new SinglyLinkedList();
    let micCheck = 'Mic Check One Two';
    let checkCheck = 'Check Check';
    let findMe = 'findMe';
    let newTail = 'new tail';
    let errorMessage = 'Non-existent node';

    it('should add a new node to head with add method', () => {
      linkedListCheck.add(micCheck);
      expect(linkedListCheck.head.data).to.equal(micCheck);
    })

    it('should properly add another node', () => {
      linkedListCheck.add(checkCheck);
      expect(linkedListCheck.head.next.data).to.equal(checkCheck);
    })

    it('should return correct node when searching', () => {
      linkedListCheck.add(findMe);
      let returnNode = linkedListCheck.searchAtPosition(3);
      expect(returnNode.data).to.equal(findMe);
      returnNode = linkedListCheck.searchAtPosition(1);
      expect(returnNode.data).to.equal(micCheck);
    })

    it('should delete and return correct node with delete method', () => {
      linkedListCheck.add(newTail);
      let returnNode = linkedListCheck.removeAtPosition(3);
      expect(returnNode.data).to.equal(findMe);
    })

    it('should no longer have removed node', () => {
      let returnNode = linkedListCheck.searchAtPosition(3);
      expect(returnNode.data).to.equal(newTail);
    })

    it('should properly remove head with remove method', () => {
      linkedListCheck.removeAtPosition(1);
      expect(linkedListCheck.head.data).to.equal(checkCheck);
    })

    it('should throw an error if searching for non-existent node', () => {
      expect(() => linkedListCheck.searchAtPosition(4)).to.throw(errorMessage);
      expect(() => linkedListCheck.searchAtPosition(0)).to.throw(errorMessage);
    })

    it('should throw an error if attempting to delete a non-existent node', () => {
      expect(() => linkedListCheck.removeAtPosition(4)).to.throw(errorMessage);
      expect(() => linkedListCheck.removeAtPosition(0)).to.throw(errorMessage);
    })

    it('should return correct node with searchByValue method', () => {
      expect(linkedListCheck.searchByValue(checkCheck)).to.equal(linkedListCheck.head);
      expect(linkedListCheck.searchByValue(newTail).data).to.equal(newTail);
      expect(() => linkedListCheck.searchByValue('cant find me!')).to.throw(`No node contains cant find me`);
    })
  })

  describe('Doubly Linked List', () => {
    let doublyLinkedCheck = new DoublyLinkedList();
    let linkedListCheck = new DoublyLinkedList();

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
      let firstAdded = 'Added a tail';
      let secondAdded = 'Second tail here';
      let lastAdded = 'Last tail yall'
      let doublyLinkedCheck = new DoublyLinkedList();

      it('should add a node as head and tail if there is none', () => {
        expect(doublyLinkedCheck.head).to.equal(null);
        expect(doublyLinkedCheck.tail).to.equal(null)
        doublyLinkedCheck.addToTail(firstAdded)
        expect(doublyLinkedCheck.head.data).to.equal(firstAdded);
        expect(doublyLinkedCheck.tail.data).to.equal(firstAdded);
      })
      it('should replace existing tail with new node', () => {
        doublyLinkedCheck.addToTail(secondAdded);
        expect(doublyLinkedCheck.tail.data).to.equal(secondAdded)
      })
      it('should set old tail as this.tail.prev', () => {
        expect(doublyLinkedCheck.tail.prev.data).to.equal(firstAdded)
      })
      it('should set old tail .next as new tail', () => {
        expect(doublyLinkedCheck.tail.prev.next.data).to.equal(secondAdded)
      })
      it('should properly increment length property', () => {
        expect(doublyLinkedCheck.length).to.equal(2);
      })
      it('can add a tail a third time', () => {
        doublyLinkedCheck.addToTail(lastAdded);
        expect(doublyLinkedCheck.tail.data).to.equal(lastAdded);
        expect(doublyLinkedCheck.tail.prev.data).to.equal(secondAdded);
        expect(doublyLinkedCheck.length).to.equal(3);
        expect(doublyLinkedCheck.head.data).to.equal(firstAdded);
        expect(doublyLinkedCheck.head.next.data).to.equal(secondAdded);
        expect(doublyLinkedCheck.head.next.prev.data).to.equal(firstAdded)
        expect(doublyLinkedCheck.head.next.next.data).to.equal(lastAdded)
      })
    })
    
    describe('multiple methods work together properly', () => {
      let firstHead = 'friend! ';
      let firstTail = 'How';

      it('can add to head then add to tail', () => {
        linkedListCheck.addToHead(firstHead);
        linkedListCheck.addToTail(firstTail);
        let head = linkedListCheck.head;
        let tail = linkedListCheck.tail;
        expect(head.next).to.equal(tail);
        expect(tail.prev).to.equal(head);
      })
      it('can add to head and tail several times properly', () => {
        let newNodeOne = linkedListCheck.addToHead('there, ');
        let newNodeTwo = linkedListCheck.addToTail('are');
        let newNodeThree = linkedListCheck.addToHead('Hi ');
        let newNodeFour = linkedListCheck.addToTail('ya?!');
        expect(linkedListCheck.tail).to.equal(newNodeFour);
        expect(linkedListCheck.tail.prev).to.equal(newNodeTwo);
        expect(linkedListCheck.head).to.equal(newNodeThree);
        expect(linkedListCheck.head.next).to.equal(newNodeOne)
        expect(linkedListCheck.length).to.equal(6)
      })
    })


    describe('searchAtPosition method', () => {
      it('returns the correct node', () => {
        expect(linkedListCheck.searchAtPosition(1)).to.equal(linkedListCheck.head)
        expect(linkedListCheck.searchAtPosition(6)).to.equal(linkedListCheck.tail)
        expect(linkedListCheck.searchAtPosition(2).data).to.equal('there, ')
        expect(linkedListCheck.searchAtPosition(4).data).to.equal('How')
      })
    })

    describe('deleteAtPosition method', () => {
      it('properly deletes the correct node', () => {
        let prevNode = linkedListCheck.searchAtPosition(2);
        let nodeToDelete = linkedListCheck.searchAtPosition(3);
        let nextNode = linkedListCheck.searchAtPosition(4);
        expect(linkedListCheck.length).to.equal(6);
        expect(linkedListCheck.deleteAtPosition(3)).to.equal(nodeToDelete);
        expect(linkedListCheck.searchAtPosition(2).next).to.equal(nextNode);
        expect(nextNode.prev).to.equal(prevNode);
        expect(linkedListCheck.length).to.equal(5);
      })
      it('properly deletes the head', () => {
        let oldHead = linkedListCheck.head;
        let newHead = linkedListCheck.head.next;
        expect(linkedListCheck.deleteAtPosition(1)).to.equal(oldHead);
        expect(linkedListCheck.head).to.equal(newHead);
        expect(linkedListCheck.head.prev).to.equal(null);
        expect(linkedListCheck.length).to.equal(4);
      })
      it('properly deletes the tail', () => {
        let oldTail = linkedListCheck.tail;
        let newTail = linkedListCheck.tail.prev;
        expect(linkedListCheck.deleteAtPosition(4)).to.equal(oldTail);
        expect(linkedListCheck.tail).to.equal(newTail);
        expect(linkedListCheck.tail.next).to.equal(null);
        expect(linkedListCheck.length).to.equal(3);
      })
    })

    describe('searchByValue method', () => {
      it('should properly return currect node', () => {
        let magic = 'didnt say the magic word'
        expect(linkedListCheck.searchByValue('there, ')).to.equal(linkedListCheck.head)
        expect(linkedListCheck.searchByValue('are')).to.equal(linkedListCheck.tail)
        expect(() => linkedListCheck.searchByValue(magic)).to.throw(`No node contains ${magic}`);
      })
    })
    
  })
})