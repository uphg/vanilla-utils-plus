import { EachCallback, Key } from './internal/types'
import isArrayLike from './isArrayLike'
import keys from './keys'

function each<T>(
  obj: ArrayLike<T> | Record<Key, T>,
  callback: EachCallback<T>
) {
  if (isArrayLike(obj)) {
    let index = -1
    const length = obj.length
    while (++index < length) {
      callback((obj as T[])[index], index, obj)
    }
  } else {
    let index = -1
    const propNames = keys(obj)
    const length = propNames.length
    while (++index < length) {
      const key = propNames[index]
      callback((obj as Record<Key, T>)[key], key, obj)
    }
  }
}

export default each
