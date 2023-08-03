import toInteger from './toInteger'
import baseFindIndex from './internal/baseFindIndex'
import type { FindCallback } from './internal/types'

function findLastIndex<T>(array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number) {
  const length = array?.length

  if (!length) {
    return -1
  }

  let index = length - 1
  if (fromIndex) {
    index = toInteger(fromIndex)
    index = fromIndex < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
  }

  return baseFindIndex(array, callback, index, true)
}

export default findLastIndex
