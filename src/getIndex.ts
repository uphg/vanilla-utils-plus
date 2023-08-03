import findIndex from './findIndex'

function getIndex(el: Node | null) {
  const children = el?.parentNode?.children
  if (!children) return -1
  return findIndex(children, (item) => item === el)
}

export default getIndex
