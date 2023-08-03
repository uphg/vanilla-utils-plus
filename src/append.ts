import each from './each'
import flatten from './flatten'

function append(parent: Node, ...nodes: Node[] | Node[][]) {
  const children = flatten(nodes)
  each(children, (el) => {
    el && parent.appendChild(el)
  })
  return parent
}

export default append
