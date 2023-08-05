import { Key } from './internal/types'

function hasIn(obj: unknown, key: Key) {
  return obj !== 0 && obj !== void 0 && key in Object(obj) 
}

export default hasIn
