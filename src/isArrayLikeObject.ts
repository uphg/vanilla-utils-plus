import isObjectLike from './isObjectLike'
import isArrayLike from './isArrayLike'

function isArrayLikeObject<T>(value: unknown): value is Record<string | number, T> {
  return isObjectLike(value) && isArrayLike(value)
}

export default isArrayLikeObject
