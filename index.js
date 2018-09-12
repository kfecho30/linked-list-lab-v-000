function getName(node) {
  return node['name']
}

function headNode(list, coll) {
  return coll[list]
}

function next(head, coll){
  let nextNode = head['next']
  return coll[nextNode]
}

function nodeAt(index, list, coll) {
  let node = coll[list]
  for (let i = 0; i < index; i++) {
    node = next(node, coll)
  }
  return node
}

function addressAt(index, list, coll) {
  return nodeAt(index, list, coll)
}
