import each from './each'
import flatten from './flatten'

function prepend(parent: Node, ...nodes: Node[] | Node[][]) {
  const children = flatten(nodes)
  each(children, (el) => {
    if (!el) return
    const { firstChild } = parent
    if (firstChild) {
      parent.insertBefore(el, firstChild)
    } else {
      parent.appendChild(el)
    }
  })
  return parent
}

export default prepend
