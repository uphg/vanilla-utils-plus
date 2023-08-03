function addBefore(el: Node, newNode: Node) {
  return el!.parentNode!.insertBefore(newNode, el)
}

export default addBefore
