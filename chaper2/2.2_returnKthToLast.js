let errorMessage = 'Linked list is not sufficiently long';

export function returnKthToLast(linkedList, k) {
  let lastNode = linkedList.head;
  let returnNode = linkedList.head;

  for(let i = 0; i < k; i++) {
    if(!lastNode.next) throw new Error(errorMessage);
    lastNode = lastNode.next;
  }

  while(lastNode.next){
    lastNode = lastNode.next;
    returnNode = returnNode.next;
  }
  
  return returnNode;
}

export function returnKthToLastRecursive(linkedList, k) {
  let idx = {val: -1};
  let returnNode = findNode(linkedList.head, k, idx);
  if(!returnNode) throw new Error(errorMessage);
  return returnNode;
}

function findNode(head, k, idx) {
  if(!head) return null;
  let node = findNode(head.next, k, idx);
  idx.val++;
  if(idx.val === k) return head;
  return node;
}