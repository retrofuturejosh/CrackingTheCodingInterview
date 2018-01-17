//with buffer
export function removeDups(linkedList) {
  if (linkedList.length < 2) return linkedList;

  let prevNode = linkedList.head;
  let currentNode = linkedList.head.next;
  let valsTable = {};
  valsTable[linkedList.head.data] = true;

  while(currentNode) {
    if (valsTable[currentNode.data]){
      prevNode.next = currentNode.next;
      linkedList.length--;
    } else {
      valsTable[currentNode.data] = true;
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  return linkedList;
}

//without buffer, using removeAtPosition prototypical method
export function removeDupsNoBuffer(linkedList) {
  if (linkedList.length < 2) return linkedList;
  let currentNode = linkedList.head;
  let position = 1;

  while (currentNode.next) {
    checkForDups(currentNode, position, linkedList);
    position++;
    currentNode = currentNode.next ? currentNode.next : currentNode;
  }

  return linkedList;
}

function checkForDups(node, position, linkedList) {
  let checkAgainst
  let checkPosition = position + 1;
  let currentNode = node;
  while(currentNode.next) {
    checkAgainst = currentNode.next;
    if(node.data === checkAgainst.data){
      linkedList.removeAtPosition(checkPosition);
    } else {
      currentNode = currentNode.next;
      checkPosition++;
    }
  }
}

//without buffer optimized
export function removeDupsOptimized(linkedList) {
  if(linkedList.length < 2) return linkedList;
  let current = linkedList.head;
  let runner;

  while(current) {
    runner = current;
    while(runner.next){
      if (runner.next.data === current.data){
        runner.next = runner.next.next;
        linkedList.length--;
      }
      else runner = runner.next;
    }
    current = current.next;
  }
  return linkedList;
}