import { hasOwnProperty } from './internal/common'
import { Key } from './internal/types'

function has(obj: object, key: Key) {
  return obj !== null && obj !== void 0 && hasOwnProperty.call(obj, key)
}

export default has
