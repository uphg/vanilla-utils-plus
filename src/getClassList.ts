import trim from './trim'

function getClassList(el: Element) {
  return el.className.split(' ').filter(item => !!trim(item))
}

export default getClassList
