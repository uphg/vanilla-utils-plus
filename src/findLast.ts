import findLastIndex from './findLastIndex'
import type { FindCallback } from './internal/types'

function findLast<T>(array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number) {
  const index = findLastIndex<T>(array, callback, fromIndex)
  return index === -1 ? void 0 : array[index]
}

export default findLast
