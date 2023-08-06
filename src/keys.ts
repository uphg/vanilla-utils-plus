import { hasOwnProperty } from './internal/common'

function _keys<T extends object>(object: T): (keyof T)[] {
  object = Object(object)
  const result = []
  for (const key in object) {
    if (hasOwnProperty.call(object, key)) {
      result.push(key)
    }
  }
  return result
}

function keys<T extends object>(object: T): (keyof T)[] {
  return Object.keys(Object(object)) as (keyof T)[]
}

export default Object.keys! ? keys : _keys
