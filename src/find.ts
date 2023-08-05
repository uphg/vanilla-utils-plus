import findIndex from './findIndex'
import type { FindCallback } from './internal/types'

function find<T>(array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number) {
  const index = findIndex<T>(array, callback, fromIndex)
  return index === -1 ? void 0 : array[index]
}

export default find
