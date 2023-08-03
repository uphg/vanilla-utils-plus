import { hasOwnProperty } from './internal/common'

function _keys<T extends object>(object: T) {
  object = Object(object)
  const result = []
  for (const key in object) {
    if (hasOwnProperty.call(object, key)) {
      result.push(key)
    }
  }
  return result
}

function keys<T extends object>(object: T) {
  return Object.keys(Object(object))
}

export default Object.keys! ? keys : _keys
