import { MAX_SAFE_INTEGER } from './common'

// unsigned integer
const reIsUint = /^(?:0|[1-9]\d*)$/

function isIndex(value: any, length: any) {
  const type = typeof value
  length = (length === null || length === void 0) ? MAX_SAFE_INTEGER : length
  return !!length
    && (type === 'number' || (type !== 'symbol' && reIsUint.test(value)))
    && (value > -1 && value % 1 == 0 && value < length)
}

export default isIndex
