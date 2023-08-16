import now from './now'
import { FakeFn } from './internal/types'

function debounce<T extends FakeFn>(
  fn: T,
  wait: number,
  immediate = false
) {
  let timerId: number | NodeJS.Timeout | null,
    previous: number | null,
    context: ThisParameterType<T> | null,
    result: ReturnType<T> | null,
    args: Parameters<T> | null

  const later = function() {
    const passed = now() - (previous as number)

    if (wait > passed) {
      timerId = setTimeout(later, wait - passed)
    } else {
      timerId = null  
      if (!immediate) result = fn.apply(context, args!)

      if (!timerId) args = context = null
    }
  }

  const debounced = function(this: ThisParameterType<T>, ..._args: Parameters<T>) {
    context = this
    args = _args
    previous = now()

    if (!timerId) {
      timerId = setTimeout(later, wait)
      if (immediate) result = fn.apply(context, args)
    }

    return result
  }

  debounced.cancel = function() {
    timerId && clearTimeout(timerId)
    timerId = args = context = null
  }

  return debounced
}

export default debounce
