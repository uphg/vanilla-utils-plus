import baseFlatten from './internal/baseFlatten'
import { FlattenCallback } from './internal/types'
import { RecursiveArrayLike } from './internal/types'

function flatMapDeep<T, U>(array: RecursiveArrayLike<T>, callback: FlattenCallback<T, U>) {
  return baseFlatten<T, U>(array, callback, true)
}

export default flatMapDeep
