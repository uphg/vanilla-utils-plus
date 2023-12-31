import isNil from './isNil'
import trim from './trim'
import append from './append'
import isArray from './isArray'

// See: https://stackoverflow.com/a/35385518
function toElement(innerHTML: string, children?: NodeList | ArrayLike<Node>) {
  if (isNil(innerHTML)) return document.createElement(innerHTML)
  const template = document.createElement('template')
  template.innerHTML = trim(innerHTML)
  const node = template.content.firstChild! as Element

  if (children?.length) {
    append(node, isArray(children) ? children : Array.from(children))
  }

  return node
}

export default toElement

