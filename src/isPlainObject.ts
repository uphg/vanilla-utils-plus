import isObjectLike from './isObjectLike'
import isTag from './internal/isTag'

const getProto = Object.getPrototypeOf

function isPlainObject(value: unknown): value is Object {
  if (!isObjectLike(value) || !isTag(value, 'Object')) {
    return false
  }
  if (getProto(value) === null) {
    return true
  }

  return getProto(value) === Object.prototype
}

export default isPlainObject
