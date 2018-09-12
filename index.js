function getName(node) {
  return node['name']
}

function headNode(list, coll) {
  return coll[list]
}

function next(head, coll){
  let nextNode = head[1]
  return coll[nextNode]
}
