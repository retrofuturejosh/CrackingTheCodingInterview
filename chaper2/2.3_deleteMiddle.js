export function deleteMiddle(node) {
  let next = node.next;
  node.data = next.data;
  node.next = next.next;
}