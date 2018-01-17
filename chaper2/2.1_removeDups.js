export function removeDups(linkedList) {
  let currentNode = linkedList.head.next;
  let valsArr = [linkedList.head.data];
  let length = linkedList.length;
  let count = 2;

  if (linkedList.length < 2) return linkedList;

  while(count <= length) {
    if (valsArr.includes(currentNode.data)){
      linkedList.deleteAtPosition(count);
      length--;
      console.log('VALS ARR IS ', valsArr, 'DELETED and new list is ', linkedList.length)
    } else {
      valsArr.push(currentNode.data);
      count++;
    }
    if(currentNode.next) currentNode = currentNode.next;
    else break;
  }

  return linkedList;
}