import toInteger from './toInteger'
import isNaN from './isNaN'
import baseIndexOf from './internal/baseIndexOf'
import baseFindIndex from './internal/baseFindIndex'

function indexOf<T>(
  array: ArrayLike<T> = [],
  value: T,
  fromIndex?: number
) {
  const length = array.length

  if (!length) {
    return -1
  }
  let index = (!fromIndex ? 0 : toInteger(fromIndex)) as number
  if (index < 0) {
    index = Math.max(length + index, 0)
  }

  return value === value ? baseIndexOf(array, value, index) : baseFindIndex<T>(array, isNaN, index)
}

export default indexOf
