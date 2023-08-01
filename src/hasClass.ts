import getClassList from './getClassList'

function hasClass(el: HTMLElement, className: string) {
  if (!el || !className || !el.className) return false
  return getClassList(el).includes(className)
}


export default hasClass
