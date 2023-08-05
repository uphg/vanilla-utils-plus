import toInteger from './toInteger'
import eq from './eq'

function includes<T>(array: ArrayLike<T>, value: unknown, fromIndex: number = 0) {
  const length = array?.length
  if (!length) return false
  let index = toInteger(fromIndex) - 1
  while (++index < length) {
    if (eq(array[index], value)) {
      return true
    }
  }

  return false
}

export default includes
