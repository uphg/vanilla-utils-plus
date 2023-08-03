import includes from './includes'
import getClassList from './getClassList'
import { HandleClassParams } from './internal/types'
import handleClassParams from './internal/handleClassParams'

function removeClass(el: Element, ...args: HandleClassParams[]) {
  const removeClassNames = handleClassParams(el, ...args)
  const classList = getClassList(el)
  const classNames = classList.filter(item => !includes(removeClassNames, item))
  el.className = classNames.join(' ')
}

export default removeClass
