import now from './now'

function debounce<T extends Function>(
  fn: T,
  wait: number,
  immediate = false
) {
  let timerId: number | NodeJS.Timeout | null,
    previous: number | null,
    context: unknown,
    result: unknown,
    args: unknown

  const later = function() {
    const passed = now() - (previous as number)

    if (wait > passed) {
      timerId = setTimeout(later, wait - passed)
    } else {
      timerId = null  
      if (!immediate) result = fn.apply(context, args)

      if (!timerId) args = context = null
    }
  }

  const debounced = function(this: unknown, ..._args: unknown[]) {
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
