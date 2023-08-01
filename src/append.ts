import each from './each'
import flatten from './flatten'
import { MaybeArrayLike } from './types'

function append(parent: Element, ...nodes: Array<MaybeArrayLike<Node | Element | null>>) {
  const children = flatten(nodes)
  each(children, (el) => {
    el && parent.appendChild(el as Node)
  })
  return parent
}

export default append
