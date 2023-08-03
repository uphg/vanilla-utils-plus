function removeChildren(el: Node) {
  if (!el) return
  while (el.hasChildNodes()) {
    el.removeChild(el.lastChild!)
  }
}

export default removeChildren
