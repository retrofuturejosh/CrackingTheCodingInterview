//with buffer
export function removeDups(linkedList) {
  let currentNode = linkedList.head.next;
  let valsArr = [linkedList.head.data];
  let count = 2;

  if (linkedList.length < 2) return linkedList;

  while(count <= linkedList.length) {
    if (valsArr.includes(currentNode.data)){
      linkedList.removeAtPosition(count);
    } else {
      valsArr.push(currentNode.data);
      count++;
    }
    if(currentNode.next) currentNode = currentNode.next;
    else break;
  }

  return linkedList;
}

//without buffer
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