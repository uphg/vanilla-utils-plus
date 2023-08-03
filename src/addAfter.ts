function addAfter(el: Node, newNode: Node) {
  return el!.parentNode!.insertBefore(newNode, el.nextSibling)
}

export default addAfter
