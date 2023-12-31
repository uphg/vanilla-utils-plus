import now from './now'
import { FakeFn } from './internal/types'

type throttleOptions = {
  leading?: boolean;
  trailing?: boolean;
}

function throttle<T extends FakeFn>(
  fn: T,
  wait: number,
  options?: throttleOptions
) {
  const { leading = true, trailing = true } = options ?? {}

  let timerId: null | number | NodeJS.Timeout = null,
    context: ThisParameterType<T> | null,
    args: Parameters<T> | null,
    result: ReturnType<T>

  let previous = 0

  const later = function() {
    previous = !leading ? 0 : now()
    timerId = null
    result = fn.apply(context, args!)

    if (!timerId) context = args = null
  }

  const throttled = function(this: ThisParameterType<T>, ..._args: Parameters<T>) {
    const _now = now()
    if (!previous && !leading) previous = _now
    const remaining = wait - (_now - previous)
    context = this
    args = _args

    if (remaining <= 0 || remaining > wait) {
      if (timerId) {
        clearTimeout(timerId)
        timerId = null
      }

      previous = _now
      result = fn.apply(context, args as unknown[])

      if (!timerId) context = args = null
    } else if (!timerId && trailing) {
      timerId = setTimeout(later, remaining)
    }

    return result
  }

  throttled.cancel = function() {
    timerId && clearTimeout(timerId)
    previous = 0
    timerId = context = args = null
  }

  return throttled
}

export default throttle
