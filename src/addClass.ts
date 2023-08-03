import trim from './trim'
import { HandleClassParams } from './internal/types'
import handleClassParams from './internal/handleClassParams'

function addClass(el: Element, ...args: HandleClassParams[]) {
  const className = el.className
  const newClassName = handleClassParams(el, ...args)
  el.className = `${trim(className)} ${newClassName.join(' ')}`
}

export default addClass
