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
  let head = coll[list]
  for (let i = 0; i < index; i++) {
    next(head, coll)
  }
}
