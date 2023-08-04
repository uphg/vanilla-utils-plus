import { Key } from './internal/types'
import isArrayLike from './isArrayLike'
import keys from './keys'

type MapObject<T> = ArrayLike<T> | Record<Key, T>
type MapCallback<T, U> = (item: T, index: Key, object: MapObject<T>) => U

function map<T, U>(obj: MapObject<T>, callback: MapCallback<T, U>): U[]{
  if (isArrayLike(obj)) {
    const length = obj?.length || 0
    const result: U[] = new Array(length as number)
    let index = -1

    while (++index < length) {
      result[index] = callback(obj[index], index, obj)
    }
    return result
  } else {
    const propNames = keys(obj)
    const result: U[] = new Array(propNames.length)
    let index = -1

    while (++index < propNames.length) {
      const key = propNames[index]
      result[index] = callback(obj[key], key, obj)
    }
    return result
  }
  
}

export default map
